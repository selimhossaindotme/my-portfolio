import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "MD Selim Hossain | Junior Full-Stack Developer & Backend-Focused Engineer",
  description: "Portfolio of MD Selim Hossain - Junior Full-Stack Developer specializing in Node.js, Express, PostgreSQL, Prisma, MongoDB, Next.js, and scalable REST API architectures.",
  keywords: [
    "MD Selim Hossain",
    "Full-Stack Developer",
    "Backend Developer",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Next.js",
    "Bangladesh Developer"
  ],
  authors: [{ name: "MD Selim Hossain" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-emerald-500/20 selection:text-emerald-300 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
