"use client";

import * as React from "react";
import {
  GraduationCap,
  Calendar,
  BookOpen,
  Terminal,
  CheckCircle2,
  Code2,
  Quote,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "./ui/badge";

export function EducationSection() {
  const { profile, testimonials } = portfolioData;
  const [activeTab, setActiveTab] = React.useState<"controller" | "schema" | "route">("controller");

  const codeSnippets = {
    controller: `// HealthCare Consultation Appointment Booking
export const bookAppointmentController = async (req: Request, res: Response) => {
  const validatedPayload = appointmentSchema.parse(req.body);
  const patientId = req.user.id; // Extracted via verifyJWT middleware

  const appointment = await prisma.$transaction(async (tx) => {
    // Check doctor schedule availability with conflict lock
    const slot = await tx.doctorSchedule.findUniqueOrThrow({
      where: { id: validatedPayload.scheduleId, isBooked: false }
    });

    // Create verified appointment record
    const record = await tx.appointment.create({
      data: {
        patientId,
        doctorId: slot.doctorId,
        scheduleId: slot.id,
        status: "SCHEDULED"
      }
    });

    await tx.doctorSchedule.update({
      where: { id: slot.id },
      data: { isBooked: true }
    });

    return record;
  });

  return sendSuccessResponse(res, {
    statusCode: 201,
    message: "Appointment confirmed successfully",
    data: appointment
  });
};`,
    schema: `// Zod Schema Validation for Appointment Booking
import { z } from "zod";

export const appointmentSchema = z.object({
  scheduleId: z.string().uuid("Invalid schedule identifier"),
  consultationType: z.enum(["IN_PERSON", "TELEHEALTH"]),
  symptomsNote: z.string().min(5).max(500).optional(),
  patientPhone: z.string().regex(/^\\+?[0-9]{10,14}$/, "Valid phone number required")
});`,
    route: `// Express Router with RBAC Middleware
import { Router } from "express";
import { authGuard, requireRoles } from "../middleware/authGuard";
import { UserRole } from "@prisma/client";

const router = Router();

router.post(
  "/book",
  authGuard,
  requireRoles(UserRole.PATIENT),
  bookAppointmentController
);

export default router;`
  };

  return (
    <section id="education" className="relative py-28 overflow-hidden border-t border-border/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex justify-center">
            <Badge variant="pillEmerald" withDot dotColor="emerald">
              ACADEMIC & CODE FOUNDATION
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase">
            Computer Science & <br />
            <span className="italic-display lowercase font-normal text-emerald-400 capitalize">
              Engineering Foundation
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Combining rigorous academic fundamentals with production-grade backend engineering practices.
          </p>
        </div>

        {/* Education & Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Degree & Coursework Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl border border-border/70 bg-card/60 backdrop-blur-xl p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                <GraduationCap className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Expected Graduation: May 2027</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {profile.education.degree}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Undergraduate CSE Program • {profile.location}
                </p>
              </div>

              {/* Core Coursework List */}
              <div className="space-y-3 pt-4 border-t border-border/50">
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Core Academic Curriculum</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  {profile.education.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering philosophy badge */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 leading-relaxed font-medium">
                💡 Strong focus on ACID database guarantees, asymptotic time/space algorithmic complexity, and scalable modular architecture.
              </div>
            </div>

            {/* Testimonial / Mentor Endorsement (Inspired by "WHAT CLIENTS SAY" in reference) */}
            <div className="rounded-3xl border border-border/70 bg-card/60 backdrop-blur-xl p-6 relative overflow-hidden space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 text-lg">
                  🎓
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Academic & Project Mentors</div>
                  <div className="text-xs text-muted-foreground">Faculty & Senior Peer Reviews</div>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed border-l-2 border-emerald-400/60 pl-3">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>

              <div className="text-[11px] font-mono text-emerald-400">
                — {testimonials[0].role}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Sandbox / Architecture Showcase */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border/70 bg-[#080d14] shadow-2xl overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c121c]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline-block">
                    backend-architecture.ts — Live Code Anatomy
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-[#131b28] p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setActiveTab("controller")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                      activeTab === "controller"
                        ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    controller.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("schema")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                      activeTab === "schema"
                        ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    zod-schema.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("route")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                      activeTab === "route"
                        ? "bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    rbac-route.ts
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-6 overflow-x-auto text-xs font-mono leading-relaxed text-slate-300 min-h-[380px]">
                <pre>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-6 py-3 border-t border-white/10 bg-[#0c121c] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>TypeScript 5 • Node 24 • Prisma ACID</span>
                </div>
                <span>Strict Mode: Active</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

