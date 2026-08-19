import { SectionHeading } from '@/components/SectionHeading';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/data/vehicles';
import { Target, Eye, Heart, Award } from 'lucide-react';

const values = [
  { icon: Target, title: 'Integrity', desc: 'We say what we mean and mean what we say. No hidden charges, no fine print.' },
  { icon: Heart, title: 'Customer First', desc: 'Every decision starts with what is best for the customer — not the commission.' },
  { icon: Eye, title: 'Transparency', desc: 'Open pricing, honest evaluations, and full disclosure on every vehicle we sell.' },
  { icon: Award, title: 'Excellence', desc: 'From inspection to delivery, we hold ourselves to the highest standard of quality.' },
];

const milestones = [
  { year: '2014', title: 'AUTOHUB founded', desc: 'Started as a single-brand used car showroom in Mumbai.' },
  { year: '2017', title: 'Multi-brand expansion', desc: 'Added bikes and premium brands to our inventory.' },
  { year: '2020', title: '5,000 vehicles sold', desc: 'Crossed a major milestone thanks to our loyal customers.' },
  { year: '2024', title: 'Service center launched', desc: 'Opened a full-service workshop with OEM-trained technicians.' },
];

export function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-crimson-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About AUTOHUB"
            title="A decade of trusted driving"
            subtitle="AUTOHUB began in 2014 as a single used-car showroom. Today, we are a full-service multi-brand dealership for cars and bikes — but our promise remains the same: honest advice, fair prices, and vehicles you can trust."
          />
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="AUTOHUB showroom"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Our story</h2>
            <p className="mt-4 text-ink-100 leading-relaxed">
              What started as a two-person team selling pre-owned sedans has grown into one of the
              region&apos;s most trusted dealerships — but the philosophy has never changed. We
              believe buying a vehicle should feel exciting, not stressful.
            </p>
            <p className="mt-3 text-ink-100 leading-relaxed">
              Every car and bike on our floor passes a 150-point inspection. Every price is
              transparent. And every customer gets a dedicated relationship manager for life — not
              just until the sale closes.
            </p>
            <div className="mt-6 flex gap-6">
              <div>
                <p className="font-display text-3xl font-extrabold gradient-text">10+</p>
                <p className="text-sm text-ink-300">Years in business</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold gradient-text">5K+</p>
                <p className="text-sm text-ink-300">Vehicles sold</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold gradient-text">4.8</p>
                <p className="text-sm text-ink-300">Avg. rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading eyebrow="Our Values" title="What we stand for" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="glass card-hover rounded-3xl p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500/20 to-crimson-500/10 text-ember-400">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading eyebrow="Our Journey" title="Milestones along the way" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className="glass card-hover relative rounded-3xl p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-display text-2xl font-extrabold gradient-text">{m.year}</span>
              <h3 className="mt-2 font-display text-base font-bold text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading eyebrow="Customer Reviews" title="What our customers say" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
