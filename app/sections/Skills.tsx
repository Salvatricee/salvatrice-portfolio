"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { skillCategories } from "../data/skills";
import { ChevronDown } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <span className="text-primary-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              My Expertise
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
              A Little Bit of Everything. Connected by One Goal.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              I don&apos;t see these as separate skills. I see them as different
              tools for understanding and building better products.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.id} delay={index * 0.05}>
              <motion.div
                className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-surface border-primary-blue/30 shadow-sm"
                    : "bg-white border-line hover:border-primary-blue/20"
                }`}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-xl font-bold text-ink">{category.title}</h3>
                  <motion.div animate={{ rotate: activeCategory === category.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-muted" />
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="px-3 py-1 text-xs font-medium rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
                      {skill.name}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {activeCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-line space-y-3">
                        {category.skills.map((skill) => (
                          <div key={skill.name}>
                            <p className="text-ink font-medium text-sm mb-1">{skill.name}</p>
                            <p className="text-muted text-sm leading-relaxed">{skill.description}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}