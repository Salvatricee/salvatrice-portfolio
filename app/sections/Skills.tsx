import { coreSkills, capabilitySkills } from "../data/skills";
import AnimatedSection from "../components/AnimatedSection";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <span className="text-primary-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              My Expertise
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
              Where I Focus, and What I Bring to It.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              My core direction is product, data, and intelligent systems, backed by
              hands-on experience across the full spectrum of building a product.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h3 className="font-heading text-sm font-semibold tracking-widest uppercase text-ink mb-6">
            Core Areas
          </h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {coreSkills.map((skill, index) => (
            <AnimatedSection key={skill.id} delay={0.15 + index * 0.05}>
              <div className="h-full flex flex-col p-8 rounded-2xl bg-card border-2 border-primary-blue/20 shadow-sm hover:shadow-md hover:border-primary-blue/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-5">
                  <span className="w-3 h-3 rounded-full bg-primary-blue" />
                </div>
                <h4 className="font-heading text-xl font-bold text-ink mb-3">
                  {skill.title}
                </h4>
                <p className="text-muted leading-relaxed mb-5 flex-1">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-blue/5 text-muted border border-primary-blue/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <h3 className="font-heading text-sm font-semibold tracking-widest uppercase text-ink mb-6">
            Complementary Capabilities
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilitySkills.map((skill, index) => (
            <AnimatedSection key={skill.id} delay={0.25 + index * 0.03}>
              <div className="h-full flex flex-col p-5 rounded-xl bg-surface border border-line hover:border-primary-blue/20 transition-colors duration-300">
                <h4 className="font-heading text-base font-semibold text-ink mb-2">
                  {skill.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-card text-muted border border-line">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}