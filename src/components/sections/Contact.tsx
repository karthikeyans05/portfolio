"use client";

import { useState, FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import GradientText from "@/src/components/ui/GradientText";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { portfolioData } from "@/src/data/portfolio";

const socialLinks = [
  { label: "GitHub", href: portfolioData.github, Icon: FaGithub },
  { label: "LinkedIn", href: portfolioData.linkedin, Icon: FaLinkedin },
  { label: "Email", href: `mailto:${portfolioData.email}`, Icon: Mail },
];

const inputClass =
  "bg-white/5 border border-white/10 focus:border-violet-400/50 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors w-full";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="flex items-center gap-4 mb-16">
          <div className="w-7 h-px bg-violet-400" />
          <span className="text-violet-400 text-xs font-semibold tracking-[0.15em] uppercase">
            Contact
          </span>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl font-bold mb-4">
              Let&apos;s <GradientText>work together</GradientText>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? I&apos;m always open
              to discussing new opportunities.
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-3 text-white/50 hover:text-violet-400 transition-colors"
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className={inputClass}
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className={inputClass}
              />
              <textarea
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 bg-violet-400 hover:bg-violet-300 disabled:opacity-60 text-[#0f0a1a] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-green-400 text-sm text-center">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
