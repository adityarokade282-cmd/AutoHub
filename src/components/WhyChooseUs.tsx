import { ShieldCheck, Award, BadgeCheck, HeadphonesIcon, Wallet, Eye } from 'lucide-react';
import { useInView } from '@/lib/useInView';
import { useCountUp } from '@/lib/useCountUp';

const stats = [
  { label: 'Years Experience', value: 10, suffix: '+', icon: Award },
  { label: 'Vehicles Sold', value: 5000, suffix: '+', icon: BadgeCheck },
  { label: 'Verified Vehicles', value: 100, suffix: '%', icon: ShieldCheck },
  { label: 'Happy Customers', value: 4800, suffix: '+', icon: HeadphonesIcon },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: '100% Verified Vehicles',
    desc: 'Every vehicle undergoes a 150-point inspection. What you see is what you get — no surprises.',
  },
  {
    icon: Wallet,
    title: 'Easy Financing',
    desc: 'Flexible EMI plans from 20+ partner banks with instant approval and transparent rates.',
  },
  {
    icon: Eye,
    title: 'Transparent Pricing',
    desc: 'No hidden charges, no last-minute add-ons. The price you see is the price you pay.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Trusted Customer Support',
    desc: 'A dedicated relationship manager from enquiry to delivery and beyond — for life.',
  },
];

function StatCard({ s, inView, index }: { s: (typeof stats)[number]; inView: boolean; index: number }) {
  const v = useCountUp(s.value, 2000, inView);
  return (
    <div
      className="glass card-hover rounded-3xl p-6 text-center"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500/20 to-crimson-500/10 text-ember-400">
        <s.icon className="h-6 w-6" />
      </span>
      <p className="mt-4 font-display text-3xl font-extrabold gradient-text">
        {Math.round(v)}
        {s.suffix}
      </p>
      <p className="mt-1 text-sm text-ink-200">{s.label}</p>
    </div>
  );
}

export function WhyChooseUs() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            A dealership that earns your trust
          </h2>
          <p className="mt-4 text-ink-200">
            For over a decade, AUTOHUB has helped thousands of customers find their perfect ride with
            honesty, expertise, and care.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} inView={inView} index={i} />
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="glass card-hover rounded-3xl p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] text-ember-400">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
