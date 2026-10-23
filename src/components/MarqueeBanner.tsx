"use client";

import * as React from "react";
import {
  Layers,
  Code2,
  Cpu,
  Server,
  Database,
  GitBranch,
  Terminal,
  Workflow,
  HardDrive,
  Box,
  Palette,
  Network,
  CheckCircle2,
  Send,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function MarqueeBanner() {
  const { marqueeTechs } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-white" />,
    Code2: <Code2 className="w-5 h-5 text-white" />,
    FileCode: <Terminal className="w-5 h-5 text-white" />,
    Cpu: <Cpu className="w-5 h-5 text-white" />,
    Server: <Server className="w-5 h-5 text-white" />,
    Database: <Database className="w-5 h-5 text-white" />,
    Workflow: <Workflow className="w-5 h-5 text-white" />,
    HardDrive: <HardDrive className="w-5 h-5 text-white" />,
    Box: <Box className="w-5 h-5 text-white" />,
    Palette: <Palette className="w-5 h-5 text-white" />,
    Network: <Network className="w-5 h-5 text-white" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-white" />,
    Send: <Send className="w-5 h-5 text-white" />,
    GitBranch: <GitBranch className="w-5 h-5 text-white" />,
  };

  // Duplicate for smooth seamless looping
  const duplicatedTechs = [...marqueeTechs, ...marqueeTechs, ...marqueeTechs];

  return (
    <div className="relative my-12 py-6 overflow-hidden">
      {/* Violet/Purple Gradient Background Bar (Exact design aesthetic from reference image) */}
      <div className="relative py-4 bg-gradient-to-r from-violet-900/90 via-purple-700 to-indigo-900 shadow-[0_0_35px_rgba(139,92,246,0.35)] border-y border-violet-400/30 -rotate-1 sm:-rotate-1 scale-105">
        
        {/* Soft edge masking */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center gap-10 sm:gap-14">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 text-white font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                {iconMap[tech.icon] || <Code2 className="w-5 h-5 text-white" />}
              </div>
              <span className="font-mono">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

