"use client";

import { Briefcase, Wrench, Palette, GitBranch, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Briefcase,
    title: "Business Analysis",
    skills: [
      "Requirements Gathering",
      "BPMN",
      "UML Diagrams",
      "Process Optimization",
      "Stakeholder Communication",
    ],
  },
  {
    icon: Wrench,
    title: "Business Tools",
    skills: ["SAP ERP", "Jira", "MS Project", "Trello", "Miro", "Salesforce"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "Canva", "Visual Paradigm", "UI Mock-ups", "Wireframing"],
  },
  {
    icon: GitBranch,
    title: "Methodologies",
    skills: [
      "Agile (Scrum)",
      "Sprint Planning",
      "Project Coordination",
      "Waterfall",
    ],
  },
  {
    icon: Globe,
    title: "Languages",
    skills: ["Greek (Native)", "English (B2)"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-20 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-sm tracking-widest uppercase text-primary">
            Skills
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Technical & Soft Skills
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground"
                  >
                    {skill}
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
