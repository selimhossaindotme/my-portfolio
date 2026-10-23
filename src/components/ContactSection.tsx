"use client";

import * as React from "react";
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Clock,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ContactSection() {
  const { profile } = portfolioData;

  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Auto clear success after 6s
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-emerald-500/10 via-violet-600/15 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Headline (Signature visual from reference screenshot: "Let's Build Something Amazing") */}
        <div className="text-center space-y-4 mb-20">
          <div className="flex justify-center">
            <Badge variant="pillViolet" withDot dotColor="violet">
              GET IN TOUCH
            </Badge>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            Let&apos;s Build <br />
            Something <span className="italic-display font-normal text-emerald-400">Amazing</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have an internship opportunity, a software project, or want to discuss backend architecture — my inbox is always open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-border/70 bg-card/60 backdrop-blur-xl p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-foreground">
                Contact Information
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Feel free to email me directly or connect across developer platforms. I usually respond within 24 hours.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Card */}
                <a
                  href={`mailto:${profile.socialLinks.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-background/50 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-muted-foreground font-mono">Email Directly</div>
                    <div className="text-sm font-semibold text-foreground truncate group-hover:text-emerald-400 transition-colors">
                      {profile.socialLinks.email}
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-background/50">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/15 text-violet-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Location</div>
                    <div className="text-sm font-semibold text-foreground">
                      {profile.location} (Remote Ready)
                    </div>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/70 bg-background/50">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Availability</div>
                    <div className="text-sm font-semibold text-foreground">
                      Actively open for Summer & Fall roles
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-border/50">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                  Connect on Socials
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/70 bg-background/60 text-xs font-medium text-foreground hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/70 bg-background/60 text-xs font-medium text-foreground hover:border-violet-500/50 hover:text-violet-400 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border/70 bg-card/60 backdrop-blur-xl p-8 sm:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                Drop your message below and let&apos;s start a conversation.
              </p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <p className="text-xs sm:text-sm font-medium">
                    Thank you! Your message has been sent successfully. I will get back to you shortly.
                  </p>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-destructive/15 border border-destructive/40 text-destructive text-xs sm:text-sm font-medium animate-in fade-in">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-foreground">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background/70 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-foreground">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background/70 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-foreground">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Full-Stack Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background/70 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-foreground">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-border/70 bg-background/70 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="glowViolet"
                  size="lg"
                  className="w-full font-semibold shadow-lg justify-center text-sm"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

