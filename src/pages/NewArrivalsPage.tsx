import { Sparkles, Flame, Star, ArrowRight } from 'lucide-react';
import { VehicleCard } from '@/components/VehicleCard';
import { SectionHeading } from '@/components/SectionHeading';
import { getNewArrivals } from '@/data/vehicles';
import { buildPath } from '@/lib/router';

const badgeIcon: Record<string, React.ElementType> = {
  NEW: Sparkles,
  FEATURED: Star,
  'HOT DEAL': Flame,
};

export function NewArrivalsPage() {
  const arrivals = getNewArrivals(8);

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-ember-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="New Arrivals"
            title="Fresh in the showroom"
            subtitle="The latest cars and bikes to join our inventory — be the first to claim them before they're gone."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        {/* Badge legend */}
        <div className="mb-8 flex flex-wrap gap-3">
          {Object.entries(badgeIcon).map(([badge, Icon]) => (
            <span
              key={badge}
              className="chip border border-white/10 bg-white/[0.03] text-ink-100"
            >
              <Icon className="h-3.5 w-3.5 text-ember-400" />
              {badge}
            </span>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {arrivals.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={buildPath.cars} className="btn-ghost group">
            Browse all vehicles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
