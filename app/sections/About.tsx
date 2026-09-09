import AnimatedSection from "../components/AnimatedSection";

const ecosystem = [
  {
    title: "Understand",
    skills: "Product Management · UX Research",
    description: "Starting with the problem; understanding people, context, and the needs behind what's to be solved",
  },
  {
    title: "Imagine",
    skills: "Product Strategy · UI/UX Design",
    description: "Turning insights into product direction, user flows, and experiences that make complex things feel simple",
  },
  {
    title: "Build",
    skills: "Frontend · Mobile · Backend",
    description: "Turning ideas into working products through web, mobile, and backend development ",
  },
  {
    title: "Improve",
    skills: "QA · Data & ML · Cybersecurity · IoT",
    description: "Testing, analyzing ,and experimenting to make products more reliable, intelligent, secure, and useful",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <span className="text-primary-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
              I Like Seeing the Whole Picture.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              I&apos;m curious about how things work, why problems exist, and 
              what could make them better. My approach goes beyond building what 
              is asked of me, I want to understand the people, context, and 
              systems behind a problem before deciding what to build.

              I&apos;ve explored product management, UX, design, software development, data, 
              IoT, and quality assurance, giving me the ability to look at a problem from 
              different perspectives and connect those perspectives into one solution.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-line hidden md:block" />
          <div className="space-y-12">
            {ecosystem.map((stage, index) => (
              <AnimatedSection key={stage.title} delay={index * 0.1}>
                <div className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                    <div className="group p-6 lg:p-8 rounded-2xl bg-white border border-line hover:border-primary-blue/30 transition-all duration-500 shadow-sm hover:shadow-md">
                      <div className="flex items-center gap-4 mb-4 justify-start md:justify-inherit">
                        <span className={`font-heading text-5xl font-bold text-primary-blue/15 group-hover:text-primary-blue/30 transition-colors ${index % 2 === 0 ? "md:order-2" : ""}`}>
                          0{index + 1}
                        </span>
                        <h3 className="font-heading text-2xl font-bold text-ink">{stage.title}</h3>
                      </div>
                      <p className="text-primary-blue text-sm font-medium mb-3">{stage.skills}</p>
                      <p className="text-muted leading-relaxed">{stage.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-blue border-4 border-surface z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}