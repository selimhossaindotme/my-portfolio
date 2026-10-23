"use client";

import * as React from "react";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
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
        aria-label={`Toggle theme (currently ${currentTheme})`}
        className="relative flex items-center justify-center w-9 h-9 rounded-full border border-border/80 bg-card/80 hover:bg-muted/80 backdrop-blur-md transition-all duration-200 text-foreground shadow-sm hover:border-emerald-500/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
      >
        {currentTheme === "dark" && (
          <Moon className="w-4 h-4 text-emerald-400 transition-transform duration-200 hover:rotate-12" />
        )}
        {currentTheme === "light" && (
          <Sun className="w-4 h-4 text-amber-500 transition-transform duration-200 hover:rotate-45" />
        )}
        {currentTheme === "system" && (
          <div className="relative flex items-center justify-center">
            <Monitor className="w-4 h-4 text-violet-400 transition-transform duration-200" />
            <span
              className={`absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${
                resolvedTheme === "dark" ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-border/80 bg-popover/95 p-1.5 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
            Theme Mode
          </div>

          <button
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-xs font-medium transition-colors cursor-pointer ${
              theme === "light"
                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold"
                : "text-foreground/80 hover:bg-muted"
            }`}
          >
            <span className="flex items-center gap-2">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Light Mode</span>
            </span>
            {theme === "light" && <Check className="w-3.5 h-3.5 text-emerald-500" />}
          </button>

          <button
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-xs font-medium transition-colors cursor-pointer ${
              theme === "dark"
                ? "bg-emerald-500/15 text-emerald-400 font-semibold"
                : "text-foreground/80 hover:bg-muted"
            }`}
          >
            <span className="flex items-center gap-2">
              <Moon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Dark Mode</span>
            </span>
            {theme === "dark" && <Check className="w-3.5 h-3.5 text-emerald-400" />}
          </button>

          <button
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-xs font-medium transition-colors cursor-pointer ${
              theme === "system"
                ? "bg-violet-500/15 text-violet-600 dark:text-violet-400 font-semibold"
                : "text-foreground/80 hover:bg-muted"
            }`}
          >
            <div className="flex flex-col text-left">
              <span className="flex items-center gap-2">
                <Monitor className="w-3.5 h-3.5 text-violet-400" />
                <span>System Mode</span>
              </span>
              <span className="text-[10px] text-muted-foreground ml-5 font-mono">
                Auto: {resolvedTheme === "dark" ? "Dark" : "Light"}
              </span>
            </div>
            {theme === "system" && <Check className="w-3.5 h-3.5 text-violet-500" />}
          </button>
        </div>
      )}
    </div>
  );
}
