// src/components/molecules/ProcessStep/index.tsx
export interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ step, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex gap-6">
      {/* Step number + connector line */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary text-paper flex items-center justify-center font-latin text-sm font-bold shrink-0 z-10">
          {step}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-border-subtle mt-2" aria-hidden />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="font-heading font-bold text-primary text-lg mb-2">{title}</h3>
        <p className="text-text-primary/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
