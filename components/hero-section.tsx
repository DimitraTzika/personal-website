"use client";

import { useEffect, useState } from "react";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="md:mt-0 mt-24 relative min-h-screen flex flex-col justify-center px-6 lg:px-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-2 text-primary mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">
                Thessaloniki, Greece
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
              Dimitra Tzika
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Business Analyst & Computer Science Graduate
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Business-oriented Computer Science graduate with experience in
              business process analysis, information systems design, and project
              coordination. Bridging the gap between technology and business.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">Get in Touch</span>
              </button>
              <a
                href="https://www.linkedin.com/in/dimitratzika"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="tel:+306980349824"
                className="group flex items-center gap-2 px-5 py-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+30 698 034 9824</span>
              </a>
            </div>
          </div>

          {/* Right image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/dimitra.jpg"
                alt="Dimitra Tzika"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
