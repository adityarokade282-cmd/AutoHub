interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: Props) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-ink-200 text-balance">{subtitle}</p>}
    </div>
  );
}
