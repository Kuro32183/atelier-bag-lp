// src/components/molecules/ProofCard/index.tsx
// Figma: Molecules/ProofCard/Default

import { Scissors, Leaf, Clock } from 'lucide-react';

interface ProofCardProps {
  title: string;
  body: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  needle: <Scissors className="w-6 h-6" />,
  leaf: <Leaf className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
};

export function ProofCard({ title, body, icon }: ProofCardProps) {
  return (
    <div className="group flex flex-col gap-4 p-6 bg-paper border border-borderSubtle rounded-lg hover:shadow-md transition-shadow duration-base">
      <div className="w-12 h-12 rounded-md bg-linen flex items-center justify-center text-leather">
        {iconMap[icon] ?? <Scissors className="w-6 h-6" />}
      </div>
      <div className="space-y-2">
        <h3 className="font-heading text-lg font-bold text-textPrimary">{title}</h3>
        <p className="font-body text-sm text-textPrimary/60 leading-relaxed whitespace-pre-line">
          {body}
        </p>
      </div>
    </div>
  );
}
