"use client";

import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "Jan 2026 — Present",
    role: "Sales Promoter",
    company: "Teleraise IKE",
    url: "https://www.teleraise.gr/",
    location: "Thessaloniki, Greece",
    description: [
      "Promoted telecommunications services through direct customer interaction, consistently achieving sales targets",
      "Analyzed customer needs and presented tailored solutions, strengthening communication and negotiation skills",
      "Collaborated with team members to improve sales performance and customer engagement strategies",
    ],
    skills: ["Customer Relations", "Sales", "Communication", "Negotiation"],
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Intern — Sales and Logistics",
    company: "Cristal Hellenic IKE",
    url: "",
    location: "Thessaloniki, Greece",
    description: [
      "Worked with the SAP ERP system supporting sales order management and logistics processes",
      "Coordinated deliveries and invoice issuance, gaining hands-on experience with enterprise business operations",
    ],
    skills: ["SAP ERP", "Sales Operations", "Logistics", "Invoice Management"],
  },
  {
    period: "Summers 2019 — 2023",
    role: "Group Leader",
    company: "Skouras Camp",
    url: "https://skourascamp.com",
    location: "Halkidiki, Greece",
    description: [
      "Managed communication and coordination with 500+ parents, ensuring smooth daily operations",
      "Supervised and organized activities for groups of 15+ children, maintaining safety and engagement throughout the program",
    ],
    skills: ["Leadership", "Communication", "Organization", "Team Management"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-20 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-sm tracking-widest uppercase text-primary">
            Experience
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Professional Journey
        </h3>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-6 md:gap-12"
            >
              <div className="text-sm text-muted-foreground">{exp.period}</div>

              <div>
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {exp.role}
                  </h4>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-primary flex items-center gap-1">
                    {exp.company}
                    <ExternalLink
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => window.open(exp.url, "_blank")}
                    />
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {exp.location}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
