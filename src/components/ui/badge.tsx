import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground border-border",
        pillEmerald:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.15)]",
        pillViolet:
          "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 backdrop-blur-md shadow-[0_0_12px_rgba(139,92,246,0.15)]",
        pillCyan:
          "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.15)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  withDot?: boolean;
  dotColor?: "emerald" | "violet" | "cyan" | "amber";
}

function Badge({
  className,
  variant,
  withDot = false,
  dotColor = "emerald",
  children,
  ...props
}: BadgeProps) {
  const dotColorClasses = {
    emerald: "bg-emerald-500 shadow-[0_0_8px_#10b981]",
    violet: "bg-violet-500 shadow-[0_0_8px_#8b5cf6]",
    cyan: "bg-cyan-500 shadow-[0_0_8px_#06b6d4]",
    amber: "bg-amber-500 shadow-[0_0_8px_#f59e0b]",
  };

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", dotColorClasses[dotColor])} />
          <span className={cn("relative inline-flex rounded-full h-2 w-2", dotColorClasses[dotColor])} />
        </span>
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };

