import { ChevronRight, ArrowRight, Sparkles, Flame, Star } from 'lucide-react';
import { HeroSearch, HeroButtons } from '@/components/HeroSearch';
import { VehicleCard } from '@/components/VehicleCard';
import { SectionHeading } from '@/components/SectionHeading';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { TestimonialCard } from '@/components/TestimonialCard';
import { EmiCalculator } from '@/components/EmiCalculator';
import { buildPath } from '@/lib/router';
import {
  getFeaturedVehicles,
  getNewArrivals,
  testimonials,
  vehicles,
} from '@/data/vehicles';
import { formatPriceShort } from '@/data/types';

const badgeIcon: Record<string, React.ElementType> = {
  NEW: Sparkles,
  FEATURED: Star,
  'HOT DEAL': Flame,
};

export function HomePage({ onBookTestDrive }: { onBookTestDrive: () => void }) {
  const featured = getFeaturedVehicles(8);
  const arrivals = getNewArrivals(6);
  const heroImg =
    'https://images.pexels.com/photos/33345481/pexels-photo-33345481.jpeg?auto=compress&cs=tinysrgb&w=1600';

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury sports car" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32">
          <div className="max-w-2xl animate-fade-up">
            <span className="section-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Premium Cars &amp; Bikes
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Find Your <span className="gradient-text">Perfect Ride</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-100 text-balance">
              Explore premium cars and bikes at the best prices, backed by trusted service and expert
              support.
            </p>
            <div className="mt-8">
              <HeroButtons />
            </div>
          </div>

          <div className="mt-10 max-w-4xl animate-fade-up" style={{ animationDelay: '150ms' }}>
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured Vehicles"
              title="Handpicked rides, ready for you"
              subtitle="A curated selection of our most popular cars and bikes — each inspected, certified, and ready to drive home."
            />
            <a
              href={buildPath.cars}
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-ember-400 hover:text-ember-300 sm:flex"
            >
              View all vehicles
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="New Arrivals"
            title="Fresh off the truck"
            subtitle="The latest additions to our showroom floor — be the first to claim them."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {arrivals.map((v, i) => {
              const BadgeIcon = v.badge ? badgeIcon[v.badge] : null;
              return (
                <a
                  key={v.id}
                  href={buildPath.vehicle(v.id)}
                  className="group glass card-hover relative flex items-center gap-5 overflow-hidden rounded-3xl p-5"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src={v.images[0]}
                      alt={`${v.brand} ${v.model}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    {v.badge && BadgeIcon && (
                      <span className="chip border border-ember-400/30 bg-ember-400/10 text-ember-300">
                        <BadgeIcon className="h-3 w-3" />
                        {v.badge}
                      </span>
                    )}
                    <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-ember-400">
                      {v.brand}
                    </p>
                    <h3 className="truncate font-display text-base font-bold text-white">
                      {v.model}
                    </h3>
                    <p className="mt-1 font-display text-lg font-bold text-white">
                      {formatPriceShort(v.price)}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-ember-400" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMI Calculator CTA */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <SectionHeading
                align="left"
                eyebrow="Plan Your Purchase"
                title="Estimate your monthly EMI"
                subtitle="Adjust the sliders to see how down payment, tenure, and interest rate affect your monthly installment. Indicative only — our finance team will tailor a plan to your budget."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={onBookTestDrive} className="btn-primary">
                  Book a Test Drive
                </button>
                <a href={buildPath.contact} className="btn-ghost">
                  Talk to our finance team
                </a>
              </div>
            </div>
            <EmiCalculator vehiclePrice={vehicles[0].price} vehicleName="Example vehicle" />
          </div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUs />

      {/* Testimonials */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Loved by riders & drivers"
            subtitle="Real stories from real customers who found their perfect ride at AUTOHUB."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ember-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-crimson-500/15 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  Ready to find your perfect ride?
                </h3>
                <p className="mt-2 text-ink-100">
                  Book a test drive today or send us an enquiry — our team responds within 24 hours.
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <button onClick={onBookTestDrive} className="btn-primary">
                  Book Test Drive
                </button>
                <a href={buildPath.contact} className="btn-ghost">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
