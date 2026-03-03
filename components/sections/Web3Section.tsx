"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Section } from "@/components/layout/Section";

type EthereumRequestArgs = {
  method: string;
  params?: unknown[] | Record<string, unknown>;
};

type EthereumProvider = {
  request: (args: EthereumRequestArgs) => Promise<unknown>;
  on?: (event: "accountsChanged" | "chainChanged", handler: (data: unknown) => void) => void;
  removeListener?: (
    event: "accountsChanged" | "chainChanged",
    handler: (data: unknown) => void,
  ) => void;
};

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

function formatEthFromWei(weiHex: string) {
  const wei = BigInt(weiHex);
  const eth = Number(wei) / 1e18;
  return `${eth.toFixed(4)} ETH`;
}

export function Web3Section() {
  const [account, setAccount] = useState<string>("");
  const [chainId, setChainId] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [signature, setSignature] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [verificationResult, setVerificationResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const provider = typeof window !== "undefined" ? window.ethereum : undefined;

  const shortAddress = useMemo(() => {
    if (!account) return "";
    return `${account.slice(0, 6)}...${account.slice(-4)}`;
  }, [account]);

  const loadWalletData = useCallback(
    async (walletAddress: string) => {
      if (!provider) return;

      const [currentChainId, weiBalance] = await Promise.all([
        provider.request({ method: "eth_chainId" }),
        provider.request({ method: "eth_getBalance", params: [walletAddress, "latest"] }),
      ]);

      setChainId(String(currentChainId));
      setBalance(formatEthFromWei(String(weiBalance)));
    },
    [provider],
  );

  const connectWallet = useCallback(async () => {
    try {
      setError("");
      if (!provider) {
        setError("No wallet detected. Install MetaMask or another EVM wallet.");
        return;
      }

      const accounts = (await provider.request({ method: "eth_requestAccounts" })) as string[];
      const walletAddress = accounts?.[0];
      if (!walletAddress) return;

      setAccount(walletAddress);
      await loadWalletData(walletAddress);
    } catch {
      setError("Could not connect wallet.");
    }
  }, [loadWalletData, provider]);

  const signProof = useCallback(async () => {
    try {
      setError("");
      setVerificationResult("");
      if (!provider || !account) return;

      const nextMessage = `Portfolio proof by ${account} at ${new Date().toISOString()}`;
      const signed = (await provider.request({
        method: "personal_sign",
        params: [nextMessage, account],
      })) as string;

      setMessage(nextMessage);
      setSignature(signed);

      const recovered = (await provider.request({
        method: "personal_ecRecover",
        params: [nextMessage, signed],
      })) as string;

      const verified = recovered?.toLowerCase() === account.toLowerCase();
      setVerificationResult(verified ? "Signature verified ✅" : "Signature mismatch ❌");
    } catch {
      setError("Signing failed. Check wallet permissions.");
    }
  }, [account, provider]);

  useEffect(() => {
    if (!provider?.on || !provider?.removeListener) return;

    const onAccountsChanged = (accounts: unknown) => {
      const list = Array.isArray(accounts) ? (accounts as string[]) : [];
      const next = list[0] ?? "";
      setAccount(next);
      setSignature("");
      setMessage("");
      setVerificationResult("");
      if (next) {
        void loadWalletData(next);
      } else {
        setChainId("");
        setBalance("");
      }
    };

    const onChainChanged = () => {
      if (account) {
        void loadWalletData(account);
      }
    };

    provider.on("accountsChanged", onAccountsChanged);
    provider.on("chainChanged", onChainChanged);

    return () => {
      provider.removeListener?.("accountsChanged", onAccountsChanged);
      provider.removeListener?.("chainChanged", onChainChanged);
    };
  }, [account, loadWalletData, provider]);

  return (
    <Section
      id="web3"
      title="Web3 Proof Lab"
      subtitle="Connect wallet, sign a message, and verify ownership live"
    >
      <div className="rounded-2xl border border-zinc-800 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={connectWallet}
            className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            {account ? "Wallet Connected" : "Connect Wallet"}
          </button>

          <button
            type="button"
            onClick={signProof}
            disabled={!account}
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Sign Proof
          </button>
        </div>

        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500">Address</dt>
            <dd className="mt-1 text-sm text-zinc-200">{shortAddress || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500">Chain</dt>
            <dd className="mt-1 text-sm text-zinc-200">{chainId || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500">Balance</dt>
            <dd className="mt-1 text-sm text-zinc-200">{balance || "—"}</dd>
          </div>
        </dl>

        {message ? (
          <p className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-xs text-zinc-300">
            {message}
          </p>
        ) : null}

        {verificationResult ? (
          <p className="mt-3 text-sm font-medium text-zinc-100">{verificationResult}</p>
        ) : null}

        {signature ? (
          <p className="mt-3 break-all text-xs text-zinc-500">{signature}</p>
        ) : null}

        {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}
      </div>
    </Section>
  );
}
