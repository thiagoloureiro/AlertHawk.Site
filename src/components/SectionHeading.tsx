'use client';

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-14 max-w-3xl fade-up ${alignClass} ${className}`}>
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500">
        <span className="text-blue-400/90">{index}</span>
        <span className="mx-2 text-gray-600">/</span>
        <span>{eyebrow}</span>
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-gray-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
