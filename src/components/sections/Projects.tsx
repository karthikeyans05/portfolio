import { FaGithub } from "react-icons/fa";
import GlassCard from "@/src/components/ui/GlassCard";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { portfolioData } from "@/src/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <div className="w-7 h-px bg-violet-400" />
          <span className="text-violet-400 text-xs font-semibold tracking-[0.15em] uppercase">
            Projects
          </span>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <GlassCard className="flex flex-col gap-4 p-6 h-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  <span className="shrink-0 bg-violet-400/10 text-violet-400 border border-violet-400/20 text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded">
                    {project.badge}
                  </span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/5 border border-white/10 text-white/40 text-xs px-2 py-0.5 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/40 hover:text-violet-400 text-sm transition-colors w-fit"
                >
                  <FaGithub size={16} />
                  View on GitHub
                </a>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
