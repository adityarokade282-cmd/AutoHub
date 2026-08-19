import { Fuel, Gauge, Settings, Calendar, Star, ArrowRight } from 'lucide-react';
import type { Vehicle } from '@/data/types';
import { formatPriceShort } from '@/data/types';
import { buildPath } from '@/lib/router';

const badgeStyles: Record<string, string> = {
  NEW: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30',
  FEATURED: 'bg-ember-400/15 text-ember-300 border-ember-400/30',
  'HOT DEAL': 'bg-crimson-500/15 text-crimson-500 border-crimson-500/30',
};

export function VehicleCard({ vehicle, index = 0 }: { vehicle: Vehicle; index?: number }) {
  return (
    <article
      className="group glass card-hover relative flex flex-col overflow-hidden rounded-3xl"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <a href={buildPath.vehicle(vehicle.id)} className="relative block aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
        {vehicle.badge && (
          <span
            className={`absolute left-4 top-4 chip border backdrop-blur-md ${badgeStyles[vehicle.badge]}`}
          >
            {vehicle.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 chip border border-white/10 bg-ink-950/60 text-ink-100 backdrop-blur-md">
          <Star className="h-3 w-3 fill-ember-400 text-ember-400" />
          {vehicle.rating.toFixed(1)}
        </span>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ember-400">
              {vehicle.brand}
            </p>
            <h3 className="font-display text-lg font-bold leading-tight text-white">
              {vehicle.model}
            </h3>
          </div>
          <p className="font-display text-lg font-bold text-white">{formatPriceShort(vehicle.price)}</p>
        </div>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <Spec icon={Calendar} label={`${vehicle.year}`} />
          <Spec icon={Fuel} label={vehicle.fuel} />
          <Spec icon={Settings} label={vehicle.transmission} />
          <Spec icon={Gauge} label={vehicle.mileage} />
        </div>

        <div className="mt-5 flex gap-2">
          <a
            href={buildPath.vehicle(vehicle.id)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-ember-400/40 hover:bg-ember-400/10"
          >
            View Details
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={buildPath.contact}
            className="flex-1 rounded-xl bg-gradient-to-r from-ember-500 to-crimson-500 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-glow-sm transition-all hover:shadow-glow hover:-translate-y-0.5"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}

function Spec({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2 text-ink-100">
      <Icon className="h-3.5 w-3.5 shrink-0 text-ember-400" />
      <span className="truncate font-medium">{label}</span>
    </div>
  );
}
