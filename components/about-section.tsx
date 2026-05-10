"use client";

import { GraduationCap, Briefcase, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Bachelor's in Computer Science with focus on Business & Economics from University of Macedonia",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description:
      "Hands-on experience with ERP systems (SAP), sales operations, and logistics management",
  },
  {
    icon: Target,
    title: "Focus",
    description:
      "Business process analysis, information systems design, and SAP technologies",
  },
  {
    icon: Lightbulb,
    title: "Approach",
    description:
      "Strong analytical and communication skills with a focus on stakeholder collaboration",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-sm tracking-widest uppercase text-primary">
            About
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-balance">
              Bridging Business & Technology
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Computer Science graduate with hands-on experience in
                SAP ERP systems through internship involvement in sales and
                logistics operations.
              </p>
              <p>
                Through business process analysis, information systems design,
                BPMN process modeling, UML diagrams, and MS Project planning,
                I&apos;ve developed a structured approach to understanding and
                improving business workflows.
              </p>
              <p>
                My hands-on work with SAP ERP systems in sales and logistics
                operations has given me practical insights into enterprise
                business operations, from order management to delivery
                coordination and invoicing, while my personal learning in ABAP
                programming supports my growing interest in SAP technologies.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
