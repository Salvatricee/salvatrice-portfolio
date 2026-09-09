"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-surface rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-ink animate-fade-up">
              I look beyond the <span className="text-primary-blue">problem</span> to build
              what could{" "}
              <span className="text-primary-blue">solve</span> it.
            </h1>

            <p className="text-muted text-lg leading-relaxed max-w-xl animate-fade-up-delay-1">
              I&apos;m drawn to real-world problems, the messy ones that don&apos;t 
              have obvious answers. I like understanding what&apos;s really
              happening, looking beyond the surface, and using product thinking,
              design, and technology to turn insights into meaningful solutions.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-2">
              <button onClick={() => scrollTo("work")} className="group flex items-center gap-2 px-6 py-3 bg-primary-blue hover:bg-bright-blue text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                Explore My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-primary-blue text-primary-blue font-medium rounded-lg transition-all duration-300 hover:bg-primary-blue/5">
                View Resume
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex flex-col items-center animate-fade-scale">
            <div className="relative">
              <div className="absolute w-80 h-80 bg-primary-blue/10 rounded-full blur-2xl" />
              <div className="relative w-80 h-96 rounded-[2.5rem] overflow-hidden border border-line shadow-lg bg-surface">
                <Image src="/profile.jpg" alt="Salvatrice Igabineza" fill className="object-cover" priority />
              </div>
            </div>
            <div className="relative text-center mt-6">
              <h2 className="font-heading text-2xl font-bold text-ink">
                Salvatrice Igabineza
              </h2>
              <p className="text-muted text-sm mt-1">
                Product Builder · Data Enthusiast
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}