import GlassCard from "@/src/components/ui/GlassCard";
import GradientText from "@/src/components/ui/GradientText";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { portfolioData } from "@/src/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <div className="w-7 h-px bg-violet-400" />
          <span className="text-violet-400 text-xs font-semibold tracking-[0.15em] uppercase">
            Education
          </span>
        </AnimatedSection>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {portfolioData.education.map((edu, i) => (
            <AnimatedSection key={edu.institution} delay={i * 0.1}>
              <GlassCard className="p-6">
                <div className="mb-3">
                  <span className="bg-violet-400/10 text-violet-400 border border-violet-400/20 text-xs font-bold px-2.5 py-1 rounded">
                    {edu.duration}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{edu.degree}</h3>
                <p className="text-sm mb-2">
                  <GradientText>{edu.specialization}</GradientText>
                </p>
                <p className="text-white/60">{edu.institution}</p>
                <p className="text-white/40 text-sm mt-1">{edu.location}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
