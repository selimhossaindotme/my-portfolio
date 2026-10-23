"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["home", "about", "toolbox", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Stylized Monogram Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="MD Selim Hossain - Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-background to-violet-500/20 border border-emerald-500/30 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300">
              {/* Geometric 'SH' / Sigma-style glyph */}
              <svg
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors"
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
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-foreground group-hover:text-emerald-400 transition-colors">
                Selim<span className="text-emerald-400">.</span>dev
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur-xl shadow-inner">
            {portfolioData.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Items: Theme Toggle & Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              variant="glowViolet"
              size="sm"
              className="text-xs font-semibold px-4"
            >
              <Link href="#contact" className="flex items-center gap-1.5">
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-border/60 bg-card/60 backdrop-blur-md text-foreground hover:text-emerald-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/60 bg-background/95 backdrop-blur-2xl animate-in slide-in-from-top duration-200">
          <div className="px-5 py-6 space-y-4">
            <nav className="flex flex-col space-y-2">
              {portfolioData.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-border/50">
              <Button
                asChild
                variant="glowViolet"
                className="w-full text-sm font-semibold justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Let&apos;s Build Together</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

