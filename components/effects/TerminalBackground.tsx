"use client";

import { useEffect, useState } from "react";

export function TerminalBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMouse({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        ["--mouse-x" as string]: `${mouse.x}%`,
        ["--mouse-y" as string]: `${mouse.y}%`,
      }}
    >
      <div className="terminal-bg" />
      <div className="terminal-grid" />
      <div className="terminal-scanline" />
      <div className="terminal-cursor-glow" />
    </div>
  );
}
