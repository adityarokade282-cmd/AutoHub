export type VehicleType = 'car' | 'bike';

export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';

export type Transmission = 'Manual' | 'Automatic' | 'DCT' | 'CVT' | 'AMT';

export type BodyType = 'Sedan' | 'SUV' | 'Cruiser' | 'Sport' | 'Street' | 'Adventure' | 'Hatchback';

export type Badge = 'NEW' | 'FEATURED' | 'HOT DEAL';

export interface Vehicle {
  id: string;
  type: VehicleType;
  brand: string;
  model: string;
  year: number;
  price: number;
  fuel: FuelType;
  transmission: Transmission;
  mileage: string;
  bodyType: BodyType;
  engine?: string;
  engineCapacity?: number;
  power: string;
  topSpeed?: string;
  seating?: number;
  safety: string[];
  features: string[];
  description: string;
  images: string[];
  badge?: Badge;
  arrivedAt: string;
  color: string;
  rating: number;
}

export const formatPrice = (n: number): string =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);

export const formatPriceShort = (n: number): string => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} Lakh`;
  return `₹${n.toLocaleString('en-IN')}`;
};
