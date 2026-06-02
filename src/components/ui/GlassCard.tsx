import { cn } from "@/src/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
}

export default function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl",
        "hover:bg-white/[0.08] hover:border-violet-400/25 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
