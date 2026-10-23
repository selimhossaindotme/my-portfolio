"use client";

import * as React from "react";
import {
  Layout,
  Server,
  Database,
  ShieldCheck,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Network,
  GitFork,
  CheckCircle,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "./ui/badge";

export function TechToolbox() {
  const { skillCategories } = portfolioData;

  const frontendCategory = skillCategories.find((c) => c.id === "frontend");
  const backendCategory = skillCategories.find((c) => c.id === "backend");
  const databaseCategory = skillCategories.find((c) => c.id === "databases");
  const securityCategory = skillCategories.find((c) => c.id === "security");
  const toolsCategory = skillCategories.find((c) => c.id === "tools");

  return (
    <section id="toolbox" className="relative py-28 overflow-hidden">
      {/* Overhead Spotlight Beam (Signature element from reference design) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[380px] pointer-events-none spotlight-toolbox -z-10" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex justify-center">
            <Badge variant="pillEmerald" withDot dotColor="emerald">
              MY TECH TOOLBOX
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase">
            My Tech <span className="italic-display lowercase font-normal text-emerald-400 capitalize">Toolbox</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Architectural tools, runtimes, and frameworks I use to engineer robust full-stack applications.
          </p>
        </div>

        {/* Bento Grid Layout (Faithfully patterned after reference screenshot) */}
        <div className="space-y-6">
          
          {/* Top Row: 2 Large Bento Cards (Frontend & Backend) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Bento Card 1: Frontend */}
            {frontendCategory && (
              <div className="group relative rounded-3xl border border-border/70 bg-card/50 backdrop-blur-xl p-8 hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)] transition-all duration-300 flex flex-col justify-between">
                
                {/* Circuit Node Connector Graphic (from screenshot) */}
                <div className="mb-8 p-4 rounded-2xl border border-border/60 bg-background/60 flex items-center justify-center relative overflow-hidden">
                  <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                    <div className="w-10 h-10 rounded-xl border border-border/80 bg-card/80 flex items-center justify-center text-muted-foreground group-hover:text-emerald-400 transition-colors">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div className="w-6 sm:w-10 h-[1.5px] bg-gradient-to-r from-border via-emerald-500/50 to-border" />
                    <div className="w-12 h-12 rounded-xl border-2 border-emerald-500/60 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div className="w-6 sm:w-10 h-[1.5px] bg-gradient-to-r from-border via-emerald-500/50 to-border" />
                    <div className="w-10 h-10 rounded-xl border border-border/80 bg-card/80 flex items-center justify-center text-muted-foreground group-hover:text-violet-400 transition-colors">
                      <Layers className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                      <span>Frontend Development</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {frontendCategory.shortDesc}
                    </p>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {frontendCategory.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                          skill.highlight
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-muted/70 text-foreground/80 border border-border/50"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Bento Card 2: Backend */}
            {backendCategory && (
              <div className="group relative rounded-3xl border border-border/70 bg-card/50 backdrop-blur-xl p-8 hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.18)] transition-all duration-300 flex flex-col justify-between">
                
                {/* Circuit Node Connector Graphic for Backend */}
                <div className="mb-8 p-4 rounded-2xl border border-border/60 bg-background/60 flex items-center justify-center relative overflow-hidden">
                  <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                    <div className="w-10 h-10 rounded-xl border border-border/80 bg-card/80 flex items-center justify-center text-muted-foreground group-hover:text-violet-400 transition-colors">
                      <Server className="w-5 h-5" />
                    </div>
                    <div className="w-6 sm:w-10 h-[1.5px] bg-gradient-to-r from-border via-violet-500/50 to-border" />
                    <div className="w-12 h-12 rounded-xl border-2 border-violet-500/60 bg-violet-500/10 flex items-center justify-center text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.25)]">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div className="w-6 sm:w-10 h-[1.5px] bg-gradient-to-r from-border via-violet-500/50 to-border" />
                    <div className="w-10 h-10 rounded-xl border border-border/80 bg-card/80 flex items-center justify-center text-muted-foreground group-hover:text-emerald-400 transition-colors">
                      <Network className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-violet-400 transition-colors flex items-center gap-2">
                      <span>Backend & Architecture</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {backendCategory.shortDesc}
                    </p>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {backendCategory.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                          skill.highlight
                            ? "bg-violet-500/15 text-violet-400 border border-violet-500/30"
                            : "bg-muted/70 text-foreground/80 border border-border/50"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Bottom Row: 3 Bento Cards (Databases, Security, DevOps/Tools) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 3: Databases */}
            {databaseCategory && (
              <div className="group relative rounded-3xl border border-border/70 bg-card/50 backdrop-blur-xl p-7 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                    Databases & ORMs
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {databaseCategory.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-6">
                  {databaseCategory.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Card 4: Auth & Security */}
            {securityCategory && (
              <div className="group relative rounded-3xl border border-border/70 bg-card/50 backdrop-blur-xl p-7 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                    Auth & Security
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {securityCategory.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-6">
                  {securityCategory.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Card 5: DevOps & Tools */}
            {toolsCategory && (
              <div className="group relative rounded-3xl border border-border/70 bg-card/50 backdrop-blur-xl p-7 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.18)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl border border-violet-500/40 bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-violet-400 transition-colors">
                    DevOps & Tools
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {toolsCategory.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-6">
                  {toolsCategory.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

