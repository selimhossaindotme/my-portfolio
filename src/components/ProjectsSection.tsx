"use client";

import * as React from "react";
import {
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  X,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { portfolioData, type Project } from "@/data/portfolioData";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex justify-center">
            <Badge variant="pillEmerald" withDot dotColor="emerald">
              FEATURED PROJECTS
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase">
            Engineering Systems That <br />
            <span className="italic-display lowercase font-normal text-emerald-400 capitalize">
              Scale With Real Impact
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Decoupled full-stack systems, secure REST APIs, and transactional database architectures built with precision.
          </p>
        </div>

        {/* Projects Grid (2x2 Grid aesthetic from screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isCompleted = project.status === "Completed";
            const isInDev = project.status === "In Active Development";

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl border border-border/70 bg-card/60 backdrop-blur-xl overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header / Mockup Banner */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gradient-to-br from-emerald-950/40 via-card to-violet-950/40 p-6 flex flex-col justify-between border-b border-border/50">
                  
                  {/* Subtle Grid / Circuit Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/80 border border-border/70 text-foreground font-semibold backdrop-blur-md">
                      {project.category}
                    </span>

                    <span
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-md font-semibold ${
                        isCompleted
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                          : isInDev
                          ? "bg-violet-500/20 text-violet-400 border-violet-500/40"
                          : "bg-cyan-500/20 text-cyan-400 border-cyan-500/40"
                      }`}
                    >
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Stylized Visual Mockup Plate */}
                  <div className="relative z-10 flex items-center justify-center py-2">
                    <div className="w-full max-w-[240px] rounded-xl border border-white/10 bg-background/70 backdrop-blur-md p-3 shadow-lg group-hover:scale-105 group-hover:border-emerald-400/40 transition-transform duration-300">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-white/10 mb-2">
                        <span className="w-2 h-2 rounded-full bg-red-400/80 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/80 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-green-400/80 inline-block" />
                        <span className="text-[9px] font-mono text-muted-foreground ml-2 truncate">
                          {project.title.toLowerCase().replace(/\s+/g, "-")}.dev
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 w-3/4 bg-emerald-500/30 rounded" />
                        <div className="h-1.5 w-full bg-muted/40 rounded" />
                        <div className="h-1.5 w-1/2 bg-violet-500/30 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Image Subtext */}
                  <div className="relative z-10 text-[10px] font-mono text-muted-foreground flex justify-between items-center">
                    <span>{project.technologies.slice(0, 3).join(" • ")}</span>
                    <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label={`View details for ${project.title}`}
                        className="p-1.5 rounded-lg border border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Implemented Key Features list */}
                    <div className="space-y-2 pt-2 border-t border-border/40">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        Key Implemented Features:
                      </span>
                      <ul className="space-y-1.5 text-xs text-foreground/90">
                        {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-2 leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md text-emerald-400">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs font-semibold"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code Repository</span>
                        </a>
                      </Button>

                      {project.liveDemoUrl && (
                        <Button
                          asChild
                          variant="glowEmerald"
                          size="sm"
                          className="flex-1 text-xs font-semibold"
                        >
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-1.5"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl border border-emerald-500/40 bg-card p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-border/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                  {selectedProject.statusBadge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-emerald-400 font-medium">
                {selectedProject.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            {/* Implemented Features */}
            <div className="space-y-3 p-4 rounded-2xl bg-muted/30 border border-border/60">
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
                Verified & Implemented Architecture Features:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/90">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Full */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-muted-foreground">
                Tech Stack Components:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-card border border-border text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </Button>
              <Button asChild variant="glowViolet" size="sm">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </Button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
