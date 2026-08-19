import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  photo: string;
  review: string;
  vehicle: string;
}

export function TestimonialCard({ t, index = 0 }: { t: Testimonial; index?: number }) {
  return (
    <article
      className="glass card-hover relative flex h-full flex-col rounded-3xl p-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Quote className="absolute right-5 top-5 h-8 w-8 text-ember-400/20" />
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < t.rating ? 'fill-ember-400 text-ember-400' : 'text-ink-500'}`}
          />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-ink-100">“{t.review}”</p>
      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
        <img
          src={t.photo}
          alt={t.name}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-ember-400/30"
        />
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-ink-300">
            {t.location} · {t.vehicle}
          </p>
        </div>
      </div>
    </article>
  );
}
