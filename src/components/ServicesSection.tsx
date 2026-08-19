import { Banknote, ShieldCheck, Repeat, Calendar, Wrench, Package, FileCheck } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const services = [
  {
    icon: Banknote,
    title: 'Vehicle Financing',
    desc: 'Instant loan approval with 20+ partner banks. Flexible tenures and competitive interest rates.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Assistance',
    desc: 'Compare and buy comprehensive coverage. We handle claims, renewals, and zero-depreciation add-ons.',
  },
  {
    icon: Repeat,
    title: 'Vehicle Exchange',
    desc: 'Get the best value for your current vehicle. Transparent evaluation and instant exchange.',
  },
  {
    icon: Calendar,
    title: 'Test Drive',
    desc: 'Book a free test drive at your convenience — at the showroom or your doorstep.',
  },
  {
    icon: Wrench,
    title: 'Car & Bike Servicing',
    desc: 'Manufacturer-trained technicians, genuine parts, and a 1-year service warranty on every job.',
  },
  {
    icon: Package,
    title: 'Genuine Accessories',
    desc: 'Authentic OEM accessories and styling kits, fitted by certified technicians.',
  },
  {
    icon: FileCheck,
    title: 'RC & Documentation',
    desc: 'End-to-end RC transfer, hypothecation removal, and paperwork handled for you.',
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need, under one roof"
          subtitle="From financing to after-sales, AUTOHUB takes care of the entire ownership journey so you can focus on the drive."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group glass card-hover relative overflow-hidden rounded-3xl p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-ember-500/5 blur-2xl transition-all duration-500 group-hover:bg-ember-500/15" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500/20 to-crimson-500/10 text-ember-400 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-200">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
