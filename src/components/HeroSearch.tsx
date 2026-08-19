import { useState } from 'react';
import { Search, Car, Bike, ChevronRight } from 'lucide-react';
import { buildPath } from '@/lib/router';
import { vehicles, carBrands, bikeBrands } from '@/data/vehicles';

export function HeroSearch() {
  const [type, setType] = useState('all');
  const [brand, setBrand] = useState('all');
  const [model, setModel] = useState('all');
  const [price, setPrice] = useState('all');

  const brands = type === 'car' ? carBrands : type === 'bike' ? bikeBrands : [...new Set(vehicles.map((v) => v.brand))];
  const models = vehicles.filter((v) => brand === 'all' || v.brand === brand).map((v) => v.model);
  const uniqueModels = Array.from(new Set(models));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = type === 'bike' ? buildPath.bikes : buildPath.cars;
    window.location.hash = target;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-strong rounded-3xl p-5 sm:p-6 shadow-card"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Field label="Vehicle Type">
          <select value={type} onChange={(e) => setType(e.target.value)} className="input-field">
            <option value="all">All</option>
            <option value="car">Cars</option>
            <option value="bike">Bikes</option>
          </select>
        </Field>
        <Field label="Brand">
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="input-field">
            <option value="all">All brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Model">
          <select value={model} onChange={(e) => setModel(e.target.value)} className="input-field">
            <option value="all">All models</option>
            {uniqueModels.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Price Range">
          <select value={price} onChange={(e) => setPrice(e.target.value)} className="input-field">
            <option value="all">Any price</option>
            <option value="0-200000">Under ₹2 Lakh</option>
            <option value="200000-500000">₹2–5 Lakh</option>
            <option value="500000-2000000">₹5–20 Lakh</option>
            <option value="2000000-5000000">₹20–50 Lakh</option>
            <option value="5000000-99999999">Above ₹50 Lakh</option>
          </select>
        </Field>
        <div className="flex items-end">
          <button type="submit" className="btn-primary w-full">
            <Search className="h-4 w-4" />
            Search Vehicles
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="label-field">{label}</label>
      {children}
    </div>
  );
}

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <a href={buildPath.cars} className="btn-primary group">
        <Car className="h-4 w-4" />
        Explore Cars
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
      <a href={buildPath.bikes} className="btn-ghost group">
        <Bike className="h-4 w-4" />
        Explore Bikes
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
