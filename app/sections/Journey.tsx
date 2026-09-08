"use client";

import AnimatedSection from "../components/AnimatedSection";

const journey = [
  { year: "2022", title: "Started the Multidisciplinary Path", description: "Began exploring technology broadly, product, design, and development, rather than picking one lane early." },
  { year: "2023", title: "Deepened Frontend & Mobile Skills", description: "Built real projects with React, Next.js, and Flutter, moving from tutorials to shipped products." },
  { year: "2024", title: "Explored Data, IoT & Collaboration", description: "Joined multidisciplinary team projects like Eloop, working across web, mobile, hardware, and AI." },
  { year: "2025-26", title: "Building a Product Mindset", description: "Focused on connecting research, design, and engineering into one coherent way of building things." },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <span className="text-primary-blue text-sm font-medium tracking-wider uppercase mb-4 block">My Journey</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">How I Got Here</h2>
          </div>
        </AnimatedSection>

        <div className="space-y-10">
          {journey.map((step, index) => (
            <AnimatedSection key={step.year} delay={index * 0.1}>
              <div className="flex gap-6 items-start">
                <span className="font-heading text-4xl lg:text-5xl font-bold text-primary-blue/20 shrink-0 w-20">
                  0{index + 1}
                </span>
                <div className="pt-2 border-t border-line flex-1 pb-8">
                  <p className="text-primary-blue text-sm font-medium mb-2">{step.year}</p>
                  <h3 className="font-heading text-xl font-bold text-ink mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}