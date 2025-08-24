"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Portfolio
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafting innovative web experiences with modern technologies and
              creative solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h3>
            <div className="space-y-2">
              {["Home", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/centerdata27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kdela3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              {/* <a
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Portfolio. Built with React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
