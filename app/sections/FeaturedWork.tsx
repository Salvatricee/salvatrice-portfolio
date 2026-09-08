"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";
import { projects } from "../data/projects";
import { ExternalLink, ChevronRight } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";

export default function FeaturedWork() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <span className="text-primary-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
              Selected Work
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              A collection of projects where I have explored ideas, built
              solutions, collaborated with others, and continued learning by
              doing.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div className="group relative rounded-2xl bg-white border border-line overflow-hidden hover:border-primary-blue/30 transition-all duration-500 shadow-sm hover:shadow-md" layout>
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto min-h-[300px] bg-surface flex items-center justify-center overflow-hidden">
                    <div className="relative text-center p-8">
                                            {project.logoImage ? (
                        <div className="w-24 h-24 mx-auto mb-4 relative">
                          <Image
                            src={project.logoImage}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : project.logoText ? (
                        <div className="mx-auto mb-4 flex flex-col items-center gap-1">
                          <span className="text-5xl" style={{ color: project.logoAccent }}>
                            {project.logoEmoji}
                          </span>
                          <span
                            className="font-heading font-bold text-xl tracking-widest"
                            style={{ color: project.logoAccent }}
                          >
                            {project.logoText}
                          </span>
                        </div>
                      ) : (
                        <div
                          className="w-24 h-24 mx-auto mb-4 flex items-center justify-center text-5xl"
                          style={{ color: project.logoAccent }}
                        >
                          {project.logoEmoji}
                        </div>
                      )}
                      {/* <p className="text-ink font-heading font-bold text-xl mt-2">{project.title}</p> */}
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary-blue text-sm font-medium">{project.type}</span>
                      <span className="w-1 h-1 rounded-full bg-line" />
                      <span className="text-muted text-sm">{project.role}</span>
                    </div>

                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-ink mb-4 group-hover:text-primary-blue transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted leading-relaxed mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-surface text-muted border border-line">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-blue hover:text-bright-blue font-medium transition-colors">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-ink font-medium transition-colors">
                          <GithubIcon className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      <button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className="inline-flex items-center gap-1 text-muted hover:text-ink font-medium transition-colors ml-auto"
                      >
                        {expandedProject === project.id ? "Close" : "Read Case Study"}
                        <ChevronRight className={`w-4 h-4 transition-transform ${expandedProject === project.id ? "rotate-90" : ""}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-line"
                    >
                      <div className="p-8 lg:p-10 bg-surface">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-heading text-lg font-bold text-ink mb-2 flex items-center gap-2">
                                <span className="w-6 h-px bg-primary-blue" />
                                The Problem
                              </h4>
                              <p className="text-muted leading-relaxed">{project.problem}</p>
                            </div>
                            <div>
                              <h4 className="font-heading text-lg font-bold text-ink mb-2 flex items-center gap-2">
                                <span className="w-6 h-px bg-primary-blue" />
                                The Solution
                              </h4>
                              <p className="text-muted leading-relaxed">{project.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-heading text-lg font-bold text-ink mb-2 flex items-center gap-2">
                                <span className="w-6 h-px bg-primary-blue" />
                                My Contribution
                              </h4>
                              <p className="text-muted leading-relaxed">{project.contribution}</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="font-heading text-lg font-bold text-ink mb-2 flex items-center gap-2">
                                <span className="w-6 h-px bg-bright-blue" />
                                Challenges
                              </h4>
                              <p className="text-muted leading-relaxed">{project.challenges}</p>
                            </div>
                            <div>
                              <h4 className="font-heading text-lg font-bold text-ink mb-2 flex items-center gap-2">
                                <span className="w-6 h-px bg-bright-blue" />
                                What I Learned
                              </h4>
                              <p className="text-muted leading-relaxed">{project.learned}</p>
                            </div>
                          </div>
                        </div>
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
