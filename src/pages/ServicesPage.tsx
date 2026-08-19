import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { SectionHeading } from '@/components/SectionHeading';
import { Banknote, ShieldCheck, Repeat, Calendar, Wrench, Package, FileCheck, CheckCircle2 } from 'lucide-react';

const services = [
  { icon: Banknote, title: 'Vehicle Financing', desc: 'Instant loan approval with 20+ partner banks. Flexible tenures and competitive interest rates tailored to your budget.' },
  { icon: ShieldCheck, title: 'Insurance Assistance', desc: 'Compare and buy comprehensive coverage. We handle claims, renewals, and zero-depreciation add-ons.' },
  { icon: Repeat, title: 'Vehicle Exchange', desc: 'Get the best value for your current vehicle. Transparent evaluation and instant exchange.' },
  { icon: Calendar, title: 'Test Drive', desc: 'Book a free test drive at your convenience — at the showroom or your doorstep.' },
  { icon: Wrench, title: 'Car & Bike Servicing', desc: 'Manufacturer-trained technicians, genuine parts, and a 1-year service warranty on every job.' },
  { icon: Package, title: 'Genuine Accessories', desc: 'Authentic OEM accessories and styling kits, fitted by certified technicians.' },
  { icon: FileCheck, title: 'RC & Documentation', desc: 'End-to-end RC transfer, hypothecation removal, and paperwork handled for you.' },
];

const steps = [
  { step: '01', title: 'Enquire', desc: 'Browse our inventory online or visit the showroom. Send an enquiry or book a test drive.' },
  { step: '02', title: 'Test Drive', desc: 'Experience the vehicle yourself. Our team brings it to your doorstep or you visit us.' },
  { step: '03', title: 'Finance & Insure', desc: 'Get instant loan approval and insurance — all paperwork handled in one place.' },
  { step: '04', title: 'Drive Home', desc: 'Complete the RC transfer, sign off, and drive away with your perfect ride.' },
];

export function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-ember-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete automotive care"
            subtitle="From the first test drive to lifetime servicing, AUTOHUB supports every step of your ownership journey."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      <ServicesSection />

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="How It Works"
          title="Your journey in four steps"
          subtitle="A simple, transparent process from enquiry to delivery."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="glass card-hover relative rounded-3xl p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-display text-4xl font-extrabold text-ember-400/20">{s.step}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{s.desc}</p>
              {i < steps.length - 1 && (
                <CheckCircle2 className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-ember-400/40 lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
}
