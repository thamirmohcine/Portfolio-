"use client";

import { useState } from "react";

interface TerminalCardProps {
  project: {
    title: string;
    description: string;
    stack: string[];
    repoUrl?: string;
    liveUrl?: string;
  };
  index: number;
}

export function TerminalCard({ project, index }: TerminalCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group relative overflow-hidden rounded-lg border border-green-900/50 bg-black/60 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-green-900/50 bg-zinc-950/80 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80 transition-all group-hover:bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500/80 transition-all group-hover:bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-500/80 transition-all group-hover:bg-green-400"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="font-mono text-xs text-green-500/70">
            {project.title.toLowerCase().replace(/\s+/g, "-")}@portfolio
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="relative p-6 font-mono text-sm">
        {/* Typing animation effect */}
        <div className="mb-4">
          <span className="text-green-400">$ cat project.txt</span>
          <div
            className={`mt-2 transition-all duration-700 ${isHovered ? "opacity-100" : "opacity-90"}`}
          >
            <div className="animate-terminal-line">
              <span className="text-green-500">{">"}</span>{" "}
              <span className="font-semibold text-green-100">{project.title}</span>
            </div>
            <p className="mt-3 leading-relaxed text-zinc-300">{project.description}</p>
          </div>
        </div>

        {/* Stack Tags */}
        <div className="mb-4">
          <span className="text-green-400">$ ls tech-stack/</span>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <li
                key={tech}
                className="animate-fade-in rounded border border-green-800/50 bg-green-950/30 px-2.5 py-1 text-xs text-green-300 transition-all hover:border-green-500/50 hover:bg-green-900/30"
                style={{
                  animationDelay: `${(index * 150 + idx * 100)}ms`,
                }}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1 text-green-400 transition-all hover:text-green-300"
            >
              <span className="text-green-500">$</span> cd repository
              <span className="ml-1 inline-block transition-transform group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1 text-green-400 transition-all hover:text-green-300"
            >
              <span className="text-green-500">$</span> open live-demo
              <span className="ml-1 inline-block transition-transform group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>

        {/* Blinking cursor */}
        <div className="mt-4 flex items-center gap-1">
          <span className="text-green-400">$</span>
          <span className="inline-block h-4 w-2 animate-cursor-blink bg-green-400"></span>
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-green-400/5"></div>
      </div>
    </article>
  );
}
