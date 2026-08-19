import { useMemo } from 'react';
import type { Vehicle } from '@/data/types';
import type { FilterState } from '@/components/FilterBar';

export function useVehicleFilter(list: Vehicle[], filters: FilterState): Vehicle[] {
  return useMemo(() => {
    let out = list.filter((v) => {
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (!`${v.brand} ${v.model}`.toLowerCase().includes(q)) return false;
      }
      if (filters.brand !== 'all' && v.brand !== filters.brand) return false;
      if (filters.fuel !== 'all' && v.fuel !== filters.fuel) return false;
      if (filters.transmission !== 'all' && v.transmission !== filters.transmission) return false;
      if (filters.year !== 'all' && String(v.year) !== filters.year) return false;
      if (v.price > filters.priceMax) return false;
      if (filters.engineCapacity && filters.engineCapacity !== 0) {
        if (!v.engineCapacity || v.engineCapacity > filters.engineCapacity) return false;
      }
      if (filters.bodyType && filters.bodyType !== 'all' && v.bodyType !== filters.bodyType)
        return false;
      return true;
    });

    switch (filters.sort) {
      case 'price-asc':
        out = [...out].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        out = [...out].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        out = [...out].sort(
          (a, b) => new Date(b.arrivedAt).getTime() - new Date(a.arrivedAt).getTime(),
        );
        break;
      case 'rating':
        out = [...out].sort((a, b) => b.rating - a.rating);
        break;
      default:
        out = [...out].sort(
          (a, b) => Number(!!b.badge) - Number(!!a.badge) || b.rating - a.rating,
        );
    }
    return out;
  }, [list, filters]);
}
