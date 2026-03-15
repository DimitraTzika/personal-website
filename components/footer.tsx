"use client";

import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold tracking-tight">
              Dimitra Tzika
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              Business Analyst
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/dimitratzika"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:demetratzeka@gmail.com"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dimitra Tzika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
