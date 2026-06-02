import GlassCard from "@/src/components/ui/GlassCard";
import GradientText from "@/src/components/ui/GradientText";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { portfolioData } from "@/src/data/portfolio";

const detailRows = [
  { label: "Location", getValue: () => portfolioData.location },
  { label: "Available For", getValue: () => "Internships · Freelance · Open Source" },
  { label: "Email", getValue: () => portfolioData.email },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <div className="w-7 h-px bg-violet-400" />
          <span className="text-violet-400 text-xs font-semibold tracking-[0.15em] uppercase">
            About
          </span>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {portfolioData.about.stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <GlassCard className="p-6 text-center">
                <div className="text-violet-400 text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">
              <GradientText>Who I Am</GradientText>
            </h2>
            <p className="text-white/70 leading-relaxed">{portfolioData.about.bio}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col gap-4">
              {detailRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-b border-white/10 pb-4"
                >
                  <span className="text-white/40 text-sm">{row.label}</span>
                  <span
                    className={
                      row.label === "Available For" ? "text-violet-400" : "text-white"
                    }
                  >
                    {row.getValue()}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
