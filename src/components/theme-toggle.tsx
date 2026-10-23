"use client";

import * as React from "react";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-border/40 bg-card/40 animate-pulse" />
    );
  }

  const currentTheme = theme || "system";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme mode"
        className="flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-background/80 hover:bg-muted/70 backdrop-blur-md transition-all duration-200 text-foreground shadow-sm hover:border-emerald-500/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        {currentTheme === "dark" && <Moon className="w-4 h-4 text-emerald-400 transition-transform duration-200 hover:rotate-12" />}
        {currentTheme === "light" && <Sun className="w-4 h-4 text-amber-500 transition-transform duration-200 hover:rotate-45" />}
        {currentTheme === "system" && <Monitor className="w-4 h-4 text-violet-400 transition-transform duration-200" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-border/70 bg-popover/95 p-1.5 shadow-xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <button
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
              theme === "light"
                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                : "text-foreground/80 hover:bg-muted"
            }`}
          >
            <span className="flex items-center gap-2">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              Light
            </span>
            {theme === "light" && <Check className="w-3.5 h-3.5 text-emerald-500" />}
          </button>

          <button
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
              theme === "dark"
                ? "bg-emerald-500/15 text-emerald-400"
                : "text-foreground/80 hover:bg-muted"
            }`}
          >
            <span className="flex items-center gap-2">
              <Moon className="w-3.5 h-3.5 text-emerald-400" />
              Dark
            </span>
            {theme === "dark" && <Check className="w-3.5 h-3.5 text-emerald-400" />}
          </button>

          <button
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
              theme === "system"
                ? "bg-violet-500/15 text-violet-600 dark:text-violet-400"
                : "text-foreground/80 hover:bg-muted"
            }`}
          >
            <span className="flex items-center gap-2">
              <Monitor className="w-3.5 h-3.5 text-violet-400" />
              System
            </span>
            {theme === "system" && <Check className="w-3.5 h-3.5 text-violet-500" />}
          </button>
        </div>
      )}
    </div>
  );
}

