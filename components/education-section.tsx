"use client";

import { GraduationCap, Award, BookOpen } from "lucide-react";

export function EducationSection() {
  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-sm tracking-widest uppercase text-primary">
            Education
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Academic Background
        </h3>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">
                  University of Macedonia
                </h4>
                <p className="text-muted-foreground">
                  Bachelor Degree in Computer Science
                </p>
                <p className="text-sm text-muted-foreground">
                  Focus on Business and Economics
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Period:</span>
                <span className="font-medium">Oct 2021 — Oct 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium">Thessaloniki, Greece</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-primary mt-1 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Coursework in Financial Analysis, Business Strategy,
                  Information Systems and Marketing
                </p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-primary mt-1 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Academic projects focused on business process analysis,
                  systems modeling (UML, BPMN) and project planning
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-primary/50 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <span className="font-semibold">Academic Achievement</span>
            </div>
            <div className="text-center py-6">
              <div className="text-5xl font-bold text-primary mb-2">8.00</div>
              <p className="text-muted-foreground text-sm">
                Grade Point Average
              </p>
              <p className="text-muted-foreground text-xs mt-1">(out of 10)</p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Graduated with strong academic performance in Business,
                Management, Marketing, and Related Support Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
