"use client";

import { Calendar, ArrowUpRight } from "lucide-react";

const projects = [
  {
    period: "Jul 2024",
    title: "Information System Project Management",
    url: "https://github.com/CarOps-28/CarOps",
    description:
      "Worked in a team to plan and manage an information system for scheduling and task coordination, using MS Project to keep the project structured and trackable.",
    highlights: [
      "Planned tasks, timelines, and dependencies in MS Project",
      "Managed progress with Gantt charts, regular team meetings, and stakeholder presentations to support timely delivery",
    ],
    tools: [
      "MS Project",
      "Gantt Charts",
      "Project Planning",
      "Stakeholder Presentations",
      "Team Collaboration",
    ],
  },
  {
    period: "Jan 2024",
    title: "Process Optimization Project",
    url: "",
    description:
      "Collaborated in a two-person team to analyze and optimize business processes by identifying inefficiencies and improvement opportunities.",
    highlights: [
      "Used BPMN to model workflows and clarify process steps and bottlenecks",
      "Proposed improvements that reduced redundancy and increased operational efficiency",
    ],
    tools: [
      "BPMN",
      "Process Modeling",
      "Business Analysis",
      "Process Optimization",
    ],
  },
  {
    period: "Jan 2023",
    title: "SAP Inventory Management Project",
    url: "",
    description:
      "Simulated warehouse operations using SAP, focusing on inventory management, product stock levels, and stock movement processes.",
    highlights: [
      "Managed product inventory and stock movement scenarios within an SAP environment",
      "Connected warehouse tasks with broader logistics and business process flows",
    ],
    tools: [
      "SAP",
      "Inventory Management",
      "Warehouse Operations",
      "Stock Movements",
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
                    {project.url && (
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => window.open(project.url, "_blank")}
                      />
                    )}
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
