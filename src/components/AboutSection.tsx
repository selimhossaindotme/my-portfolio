"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function AboutSection() {
  const { profile } = portfolioData;

  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-border/40">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story, Specialization, Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="pillEmerald" withDot dotColor="emerald">
              ABOUT ME
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase">
              Everything About <br />
              <span className="italic-display lowercase font-normal text-emerald-400 capitalize">
                MD Selim Hossain
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a passionate <span className="text-foreground font-semibold">Computer Science & Engineering</span> undergraduate student based in <span className="text-emerald-400 font-medium">Bangladesh</span>, anticipating my graduation in <span className="text-foreground font-semibold">May 2027</span>.
              </p>
              <p>
                While comfortable across the entire stack, my core passion and deepest focus is in <span className="text-emerald-400 font-medium">Backend Engineering & Distributed Systems</span>. I enjoy architecting clean REST APIs, writing bulletproof data validation pipelines with <span className="text-foreground font-semibold">Zod</span>, modeling relational databases with <span className="text-foreground font-semibold">PostgreSQL & Prisma</span>, and enforcing granular <span className="text-violet-400 font-semibold">Role-Based Access Control (RBAC)</span>.
              </p>
              <p>
                On the user interface side, I bring backend precision to the frontend — utilizing <span className="text-foreground font-semibold">Next.js (App Router)</span>, <span className="text-foreground font-semibold">TypeScript</span>, and <span className="text-foreground font-semibold">Tailwind CSS</span> to build snappy, accessible web applications that load quickly and handle state predictably.
              </p>
            </div>

            {/* Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Backend & REST APIs</div>
                  <div className="text-[11px] text-muted-foreground">Node.js, Express, Zod, HTTP/REST</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Relational & NoSQL DBs</div>
                  <div className="text-[11px] text-muted-foreground">PostgreSQL, Prisma, MongoDB</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Auth & RBAC Security</div>
                  <div className="text-[11px] text-muted-foreground">JWT tokens, permissions, Bcrypt</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Academic Foundation</div>
                  <div className="text-[11px] text-muted-foreground">BSc in CSE • Graduating May 2027</div>
                </div>
              </div>
            </div>

            {/* Link CTA */}
            <div className="pt-2">
              <Button asChild variant="outline" className="border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10">
                <Link href="#toolbox" className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                  <span>Explore My Tech Toolbox</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Concentric Radar & Connected Tech Nodes (Design Reference Aesthetic) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl border border-border/60 bg-gradient-to-b from-card/60 to-background/80 backdrop-blur-xl p-8 flex items-center justify-center overflow-hidden shadow-2xl">
              
              {/* Concentric Radar Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[340px] h-[340px] rounded-full border border-emerald-500/15 animate-subtle-pulse" />
                <div className="absolute w-[260px] h-[260px] rounded-full border border-border/60" />
                <div className="absolute w-[180px] h-[180px] rounded-full border border-violet-500/20" />
                <div className="absolute w-[100px] h-[100px] rounded-full border border-emerald-500/30" />
              </div>

              {/* Radial beam lines / circuit grid */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
                <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent" />
              </div>

              {/* Center Core Node */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-violet-600/30 border-2 border-emerald-400 p-1 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                <div className="w-full h-full rounded-xl bg-card flex flex-col items-center justify-center">
                  <Code2 className="w-7 h-7 text-emerald-400" />
                  <span className="text-[9px] font-mono font-bold text-foreground mt-0.5">&lt;CORE&gt;</span>
                </div>
              </div>

              {/* Orbiting Satellite Tech Nodes */}
              {/* Top: Node.js */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center group">
                <div className="w-12 h-12 rounded-xl border border-emerald-500/40 bg-card/90 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-lg group-hover:scale-110 group-hover:border-emerald-300 transition-all">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-medium text-foreground mt-1 bg-background/80 px-1.5 py-0.5 rounded border border-border/50">
                  Node.js
                </span>
                <div className="w-[1px] h-6 bg-gradient-to-b from-emerald-500/60 to-transparent" />
              </div>

              {/* Right: PostgreSQL */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex items-center group">
                <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-cyan-500/60" />
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl border border-cyan-500/40 bg-card/90 backdrop-blur-md flex items-center justify-center text-cyan-400 shadow-lg group-hover:scale-110 group-hover:border-cyan-300 transition-all">
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-medium text-foreground mt-1 bg-background/80 px-1.5 py-0.5 rounded border border-border/50">
                    PostgreSQL
                  </span>
                </div>
              </div>

              {/* Bottom: Next.js & React */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center group">
                <div className="w-[1px] h-6 bg-gradient-to-t from-violet-500/60 to-transparent" />
                <div className="w-12 h-12 rounded-xl border border-violet-500/40 bg-card/90 backdrop-blur-md flex items-center justify-center text-violet-400 shadow-lg group-hover:scale-110 group-hover:border-violet-300 transition-all">
                  <Server className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-medium text-foreground mt-1 bg-background/80 px-1.5 py-0.5 rounded border border-border/50">
                  Next.js
                </span>
              </div>

              {/* Left: Prisma ORM */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex items-center group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl border border-emerald-500/40 bg-card/90 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-lg group-hover:scale-110 group-hover:border-emerald-300 transition-all">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-medium text-foreground mt-1 bg-background/80 px-1.5 py-0.5 rounded border border-border/50">
                    Prisma ORM
                  </span>
                </div>
                <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-emerald-500/60" />
              </div>

              {/* Top-Right: TypeScript */}
              <div className="absolute top-14 right-14 z-10 flex flex-col items-center group">
                <div className="w-10 h-10 rounded-lg border border-blue-500/40 bg-card/90 backdrop-blur-md flex items-center justify-center text-blue-400 shadow-lg group-hover:scale-110 transition-all">
                  <span className="text-xs font-mono font-bold">TS</span>
                </div>
              </div>

              {/* Bottom-Left: MongoDB */}
              <div className="absolute bottom-14 left-14 z-10 flex flex-col items-center group">
                <div className="w-10 h-10 rounded-lg border border-emerald-500/40 bg-card/90 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-lg group-hover:scale-110 transition-all">
                  <span className="text-xs font-mono font-bold">MDB</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

