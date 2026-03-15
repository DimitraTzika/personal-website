"use client";

import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "demetratzeka@gmail.com",
    href: "mailto:demetratzeka@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+30 698 034 9824",
    href: "tel:+306980349824",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dimitratzika",
    href: "https://www.linkedin.com/in/dimitratzika",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Thessaloniki, Greece",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-20 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-primary" />
          <h2 className="text-sm tracking-widest uppercase text-primary">
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              {"Let's Work Together"}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {
                "I'm currently looking for new opportunities in business analysis, project coordination, "
              }
              {
                "or roles that bridge technology and business. If you'd like to discuss how I can contribute "
              }
              {"to your team, feel free to reach out."}
            </p>

            <a
              href="mailto:demetratzeka@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
            >
              <Send className="w-4 h-4" />
              Send a Message
            </a>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {method.label}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="font-medium">{method.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
