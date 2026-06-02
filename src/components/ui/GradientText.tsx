import { cn } from "@/src/lib/utils";

interface GradientTextProps {
  className?: string;
  children: React.ReactNode;
}

export default function GradientText({ className, children }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
