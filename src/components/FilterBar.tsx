import { Search, SlidersHorizontal, X } from 'lucide-react';

export interface FilterState {
  search: string;
  brand: string;
  fuel: string;
  transmission: string;
  year: string;
  priceMax: number;
  sort: string;
  engineCapacity?: number;
  bodyType?: string;
}

export const defaultFilters = (maxPrice: number): FilterState => ({
  search: '',
  brand: 'all',
  fuel: 'all',
  transmission: 'all',
  year: 'all',
  priceMax: maxPrice,
  sort: 'featured',
  engineCapacity: 0,
  bodyType: 'all',
});

interface Option {
  value: string;
  label: string;
}

interface Props {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  brands: string[];
  fuels: string[];
  transmissions: string[];
  years: number[];
  maxPrice: number;
  showEngineCapacity?: boolean;
  bodyTypes?: string[];
}

export function FilterBar({
  filters,
  onChange,
  brands,
  fuels,
  transmissions,
  years,
  maxPrice,
  showEngineCapacity,
  bodyTypes,
}: Props) {
  const set = (patch: Partial<FilterState>) => onChange({ ...filters, ...patch });
  const isFiltered =
    filters.search !== '' ||
    filters.brand !== 'all' ||
    filters.fuel !== 'all' ||
    filters.transmission !== 'all' ||
    filters.year !== 'all' ||
    filters.priceMax < maxPrice ||
    (showEngineCapacity && filters.engineCapacity !== 0) ||
    (bodyTypes && filters.bodyType !== 'all');

  return (
    <div className="glass rounded-3xl p-5 sm:p-6">
      <div className="relative mb-4">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
        <input
          value={filters.search}
          onChange={(e) => set({ search: e.target.value })}
          placeholder="Search by brand or model..."
          className="input-field pl-11"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Select
          label="Brand"
          value={filters.brand}
          onChange={(v) => set({ brand: v })}
          options={[{ value: 'all', label: 'All brands' }, ...brands.map((b) => ({ value: b, label: b }))]}
        />
        <Select
          label="Fuel"
          value={filters.fuel}
          onChange={(v) => set({ fuel: v })}
          options={[{ value: 'all', label: 'All fuels' }, ...fuels.map((f) => ({ value: f, label: f }))]}
        />
        <Select
          label="Transmission"
          value={filters.transmission}
          onChange={(v) => set({ transmission: v })}
          options={[
            { value: 'all', label: 'All transmissions' },
            ...transmissions.map((t) => ({ value: t, label: t })),
          ]}
        />
        <Select
          label="Year"
          value={filters.year}
          onChange={(v) => set({ year: v })}
          options={[{ value: 'all', label: 'All years' }, ...years.map((y) => ({ value: String(y), label: String(y) }))]}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-2 flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-200">
              <SlidersHorizontal className="h-3.5 w-3.5 text-ember-400" />
              Max Price
            </span>
            <span className="font-mono text-sm font-semibold text-white">
              ₹{(filters.priceMax / 100000).toFixed(1)} L
            </span>
          </div>
          <input
            type="range"
            min={100000}
            max={maxPrice}
            step={100000}
            value={filters.priceMax}
            onChange={(e) => set({ priceMax: Number(e.target.value) })}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ink-700 accent-ember-500"
          />
        </div>
        <Select
          label="Sort by"
          value={filters.sort}
          onChange={(v) => set({ sort: v })}
          options={[
            { value: 'featured', label: 'Featured' },
            { value: 'price-asc', label: 'Price: Low to High' },
            { value: 'price-desc', label: 'Price: High to Low' },
            { value: 'newest', label: 'Newest' },
            { value: 'rating', label: 'Top rated' },
          ]}
        />
      </div>

      {showEngineCapacity && (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-200">
              <SlidersHorizontal className="h-3.5 w-3.5 text-ember-400" />
              Max Engine Capacity
            </span>
            <span className="font-mono text-sm font-semibold text-white">
              {filters.engineCapacity === 0 ? 'Any' : `≤ ${filters.engineCapacity} cc`}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={600}
            step={50}
            value={filters.engineCapacity}
            onChange={(e) => set({ engineCapacity: Number(e.target.value) })}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ink-700 accent-ember-500"
          />
        </div>
      )}

      {bodyTypes && (
        <div className="mt-4">
          <Select
            label="Body Type"
            value={filters.bodyType ?? 'all'}
            onChange={(v) => set({ bodyType: v })}
            options={[{ value: 'all', label: 'All types' }, ...bodyTypes.map((b) => ({ value: b, label: b }))]}
          />
        </div>
      )}

      {isFiltered && (
        <button
          onClick={() => onChange(defaultFilters(maxPrice))}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-ember-400 hover:text-ember-300"
        >
          <X className="h-3.5 w-3.5" />
          Clear all filters
        </button>
      )}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
}) {
  return (
    <div>
      <label className="label-field">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="input-field">
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
