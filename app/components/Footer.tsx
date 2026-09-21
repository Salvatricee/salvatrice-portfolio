"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import SIMonogram from "./SIMonogram";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2E2B26] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SIMonogram className="w-9 h-9 text-white" />
              <span className="text-white font-heading font-bold text-lg">Salvatrice Igabineza</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Multidisciplinary technology professional exploring product, design, development, and emerging technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollTo(link.href)} className="text-sm hover:text-primary-blue transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/Salvatricee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary-blue transition-colors">
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/salvatrice-igabineza-0535a2302/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary-blue transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=isalvatricee@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary-blue transition-colors">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2026 Salvatrice Igabineza. Designed with curiosity.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-sm hover:text-primary-blue transition-colors">
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}