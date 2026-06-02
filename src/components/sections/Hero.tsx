"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import GradientText from "@/src/components/ui/GradientText";
import { portfolioData } from "@/src/data/portfolio";

export default function Hero() {
  const [displayText, setDisplayText] = useState<string>(portfolioData.roles[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % portfolioData.roles.length;
      setDisplayText(portfolioData.roles[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(167,139,250,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full py-24">
        <div className="inline-flex items-center gap-2 bg-violet-400/10 border border-violet-400/20 rounded-full px-4 py-1.5 text-sm text-violet-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Open to internships &amp; collaborations
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6">
          <span className="block text-white">Karthikeyan</span>
          <GradientText className="block">Sivakumar.</GradientText>
        </h1>

        <p className="text-white/60 text-xl md:text-2xl font-light mb-6 flex items-center gap-1">
          {displayText}
          <span className="animate-cursor-blink inline-block w-0.5 h-6 bg-violet-400 align-middle" />
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {portfolioData.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/60"
            >
              {role}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-400 hover:bg-violet-300 text-[#0f0a1a] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View GitHub
          </a>
          <a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-violet-400/50 text-white/70 hover:text-white px-6 py-3 rounded-lg transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
