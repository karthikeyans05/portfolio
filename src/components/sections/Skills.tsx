import GlassCard from "@/src/components/ui/GlassCard";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { portfolioData } from "@/src/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <div className="w-7 h-px bg-violet-400" />
          <span className="text-violet-400 text-xs font-semibold tracking-[0.15em] uppercase">
            Skills
          </span>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skillGroup, i) => (
            <AnimatedSection key={skillGroup.category} delay={i * 0.1}>
              <GlassCard className="p-6 h-full">
                <div className="text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  {skillGroup.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/5 border border-white/10 rounded px-2.5 py-1 text-xs text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
