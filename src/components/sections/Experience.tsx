import GlassCard from "@/src/components/ui/GlassCard";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { portfolioData } from "@/src/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <div className="w-7 h-px bg-violet-400" />
          <span className="text-violet-400 text-xs font-semibold tracking-[0.15em] uppercase">
            Experience
          </span>
        </AnimatedSection>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {portfolioData.experience.map((exp, i) => (
            <AnimatedSection key={`${exp.company}-${exp.role}`} delay={i * 0.1}>
              <GlassCard className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="bg-violet-400/10 text-violet-400 border border-violet-400/20 text-xs font-bold px-2.5 py-1 rounded capitalize">
                    {exp.type}
                  </span>
                  <span className="text-white/40 text-xs shrink-0">{exp.duration}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{exp.role}</h3>
                <p className="text-violet-400/80 text-sm mb-3">{exp.company}</p>
                <p className="text-white/60 text-sm leading-relaxed">{exp.description}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
