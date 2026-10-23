"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { profile, navLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/60 bg-card/40 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      
      {/* Ambient glow in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row (Exact layout from reference screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-border/50">
          
          {/* Left Column: Monogram & Nav Links */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-background to-violet-500/20 border border-emerald-500/30">
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-emerald-400"
                >
                  <path
                    d="M6 7H22L13 14H22"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 21H6L15 14H6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg text-foreground tracking-tight">
                {profile.name}
              </span>
            </div>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column: Catchphrase & Email (From screenshot: "Is there a fascinating project brewing in your mind?") */}
          <div className="md:col-span-6 md:text-right space-y-3">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Is there a fascinating{" "}
              <span className="italic-display font-normal text-emerald-400">
                project
              </span>{" "}
              brewing in your mind?
            </h4>
            <div>
              <a
                href={`mailto:${profile.socialLinks.email}`}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{profile.socialLinks.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>© {new Date().getFullYear()} MD Selim Hossain. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-border/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

