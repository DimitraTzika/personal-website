"use client";

import { Calendar, ArrowUpRight } from "lucide-react";

const projects = [
  {
    period: "Feb 2024 — Jul 2024",
    title: "Information System Project Management",
    url: "https://github.com/CarOps-28/CarOps",
    description:
      "Managed the design and planning of an information system in a five-person team, utilizing industry-standard project management methodologies.",
    highlights: [
      "Used MS Project to set milestones, define dependencies, and assign tasks effectively",
      "Created Gantt charts to track project progress and ensure tasks stayed on schedule",
      "Held regular meetings to review milestones, update timelines, and address challenges proactively",
      "Presented progress to stakeholders, showcasing achieved milestones and necessary adjustments",
    ],
    tools: [
      "MS Project",
      "Gantt Charts",
      "Stakeholder Management",
      "Team Collaboration",
    ],
  },
  {
    period: "Oct 2023 — Jan 2024",
    title: "Process Optimization Project",
    description:
      "Collaborated in a two-person team to optimize business processes, focusing on enhancing efficiency and reducing redundancy.",
    highlights: [
      "Developed optimized process models that streamlined tasks and reduced redundancy",
      "Utilized BPMN (Business Process Model and Notation) to document processes and identify improvement opportunities",
    ],
    tools: [
      "BPMN",
      "Process Modeling",
      "Business Analysis",
      "Process Optimization",
    ],
  },
  {
    period: "Feb 2023 — Jul 2023",
    title: "Information System Development",
    description:
      "Developed an information system from scratch, focusing on efficient process management and data handling.",
    highlights: [
      "Used UML diagrams in Visual Paradigm to map system structure and processes",
      "Analyzed 'as-is' and 'to-be' process states to highlight key operational improvements",
      "Created UI mock-ups and streamlined workflows, collaborating with Miro for iterative design",
    ],
    tools: [
      "UML",
      "Visual Paradigm",
      "Miro",
      "UI/UX Design",
      "Systems Analysis",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-sm tracking-widest uppercase text-primary">
            Projects
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Academic Projects
        </h3>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                  <h4 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => window.open(project.url, "_blank")}
                    />
                  </h4>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
