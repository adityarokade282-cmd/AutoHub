import { useState } from 'react';
import { Car, Bike, Search } from 'lucide-react';
import { VehicleCard } from '@/components/VehicleCard';
import { FilterBar, defaultFilters, type FilterState } from '@/components/FilterBar';
import { useVehicleFilter } from '@/lib/useVehicleFilter';
import { SectionHeading } from '@/components/SectionHeading';
import type { Vehicle, VehicleType } from '@/data/types';

interface Props {
  type: VehicleType;
  title: string;
  eyebrow: string;
  subtitle: string;
  list: Vehicle[];
  showEngineCapacity?: boolean;
  bodyTypes?: string[];
}

export function InventoryPage({ type, title, eyebrow, subtitle, list, showEngineCapacity, bodyTypes }: Props) {
  const maxPrice = Math.max(...list.map((v) => v.price));
  const [filters, setFilters] = useState<FilterState>(defaultFilters(maxPrice));
  const [visible, setVisible] = useState(6);

  const filtered = useVehicleFilter(list, filters);
  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;

  const brands = Array.from(new Set(list.map((v) => v.brand))).sort();
  const fuels = Array.from(new Set(list.map((v) => v.fuel))).sort();
  const transmissions = Array.from(new Set(list.map((v) => v.transmission))).sort();
  const years = Array.from(new Set(list.map((v) => v.year))).sort((a, b) => b - a);

  const Icon = type === 'car' ? Car : Bike;

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-ember-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-crimson-600 text-white shadow-glow-sm">
              <Icon className="h-6 w-6" />
            </span>
            <SectionHeading align="left" eyebrow={eyebrow} title={title} subtitle={subtitle} />
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FilterBar
            filters={filters}
            onChange={(f) => {
              setFilters(f);
              setVisible(6);
            }}
            brands={brands}
            fuels={fuels}
            transmissions={transmissions}
            years={years}
            maxPrice={maxPrice}
            showEngineCapacity={showEngineCapacity}
            bodyTypes={bodyTypes}
          />

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-ink-200">
              Showing <span className="font-semibold text-white">{shown.length}</span> of{' '}
              <span className="font-semibold text-white">{filtered.length}</span> vehicles
            </p>
          </div>

          {shown.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((v, i) => (
                <VehicleCard key={v.id} vehicle={v} index={i} />
              ))}
            </div>
          ) : (
            <div className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] py-20 text-center">
              <Search className="h-10 w-10 text-ink-400" />
              <p className="mt-4 font-display text-lg font-bold text-white">No vehicles found</p>
              <p className="mt-1 text-sm text-ink-300">Try adjusting your filters to see more results.</p>
            </div>
          )}

          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button onClick={() => setVisible((v) => v + 6)} className="btn-ghost">
                Load more vehicles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
