// src/components/molecules/ProofCard/index.tsx
import { Scissors, Leaf, Clock, Heart, Star } from 'lucide-react';

export interface ProofCardProps {
  title: string;
  body: string;
  icon: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  needle: Scissors,
  leaf: Leaf,
  clock: Clock,
  heart: Heart,
  star: Star,
};

export default function ProofCard({ title, body, icon }: ProofCardProps) {
  const Icon = iconMap[icon] ?? Star;

  return (
    <div className="flex flex-col items-center text-center p-8 bg-paper border border-border-subtle rounded-md group hover:border-leather transition-colors duration-base">
      <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center mb-5 group-hover:bg-leather/10 transition-colors duration-base">
        <Icon className="w-5 h-5 text-leather" aria-hidden />
      </div>
      <h3 className="font-heading font-bold text-primary text-xl mb-3">{title}</h3>
      <p className="text-text-primary/70 text-sm leading-relaxed whitespace-pre-line">{body}</p>
    </div>
  );
}
