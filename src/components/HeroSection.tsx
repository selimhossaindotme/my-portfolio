"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  FileCode2,
  Database,
  Server,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Overhead Ambient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] pointer-events-none spotlight-radial -z-10" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio, Actions, Stats */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="pillEmerald" withDot dotColor="emerald" className="py-1 px-3.5 text-xs font-semibold tracking-wide">
                AVAILABLE FOR OPPORTUNITIES
              </Badge>
              <span className="text-xs text-muted-foreground font-mono hidden sm:inline-block">
                📍 {profile.location}
              </span>
            </div>

            {/* Display Headline with Serif Italic flair */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
              From <span className="italic-display text-emerald-400 font-normal">Sketch</span> to Scale — I Build the Systems You{" "}
              <span className="italic-display bg-gradient-to-r from-violet-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent font-normal">
                Imagine
              </span>{" "}
              🚀
            </h1>

            {/* Role Title & Concise Professional Intro */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-emerald-500 dark:text-emerald-400">
                <span>{profile.name}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-foreground">{profile.tagline}</span>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed font-normal">
                {profile.bio}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button asChild variant="glowViolet" size="lg" className="shadow-lg">
                <Link href="#projects" className="flex items-center gap-2">
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="#contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Get in Touch</span>
                </Link>
              </Button>

              <div className="flex items-center gap-2 pl-2 border-l border-border/60">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full border border-border/60 bg-card/60 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-emerald-500/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-border/60 bg-card/60 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-violet-500/50 hover:shadow-[0_0_12px_rgba(139,92,246,0.2)] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/50">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-mono">
                    <span className="text-emerald-400">{stat.value}</span>
                  </div>
                  <div className="text-xs font-medium text-foreground">{stat.label}</div>
                  <div className="text-[11px] text-muted-foreground">{stat.subtext}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Portrait with Atmospheric Ring & Floating Glass Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border border-emerald-500/25 bg-gradient-to-b from-card/90 via-card/70 to-background/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
              
              {/* Backlight halos */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-500/25 rounded-full blur-[90px] pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-violet-600/25 rounded-full blur-[90px] pointer-events-none" />

              {/* Concentric radar rings inside visual frame */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-[300px] h-[300px] rounded-full border border-emerald-500/20" />
                <div className="absolute w-[220px] h-[220px] rounded-full border border-violet-500/20" />
                <div className="absolute w-[140px] h-[140px] rounded-full border border-emerald-500/25" />
              </div>

              {/* Real Portrait Image of MD Selim Hossain */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={profile.avatar || "/selim-hossain.jpg"}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient vignette to blend image into the dark card styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-85 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Tech Badges on Portrait */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/30 bg-background/80 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono font-semibold text-foreground">Node.js • Prisma</span>
              </div>

              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-violet-500/30 bg-background/80 backdrop-blur-md shadow-lg">
                <span className="text-[11px] font-mono font-semibold text-violet-400">PostgreSQL</span>
              </div>

              {/* Floating Highlight Card at the Bottom (Signature element from reference design) */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl border border-emerald-500/30 bg-background/90 backdrop-blur-xl shadow-2xl space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                    I craft resilient backend architectures, normalized schemas, and high-performance web applications.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                    <span>Graduating May 2027</span>
                  </div>

                  <Button asChild variant="glowViolet" size="sm" className="h-7 text-[11px] px-3 font-semibold">
                    <Link href="#projects" className="flex items-center gap-1">
                      <span>View Projects</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

