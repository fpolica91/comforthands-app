import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function SectionWrapper({
  children,
  className,
  as: Component = "div",
}: SectionWrapperProps) {
  return (
    <Component className={cn("w-full max-w-[1375px] mx-auto px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </Component>
  );
}
