import { useState } from 'react';
import {
  ArrowLeft,
  Fuel,
  Gauge,
  Settings,
  Calendar,
  Zap,
  Cog,
  Users,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  CalendarCheck,
  Send,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { getVehicleById, vehicles } from '@/data/vehicles';
import { formatPrice, formatPriceShort } from '@/data/types';
import { EmiCalculator } from '@/components/EmiCalculator';
import { VehicleCard } from '@/components/VehicleCard';
import { buildPath } from '@/lib/router';

interface Props {
  id: string;
  onBookTestDrive: (vehicleId: string) => void;
  onEnquire: (vehicleId: string) => void;
}

export function VehicleDetailsPage({ id, onBookTestDrive, onEnquire }: Props) {
  const vehicle = getVehicleById(id);
  const [activeImg, setActiveImg] = useState(0);

  if (!vehicle) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center pt-20 text-center">
        <p className="font-display text-2xl font-bold text-white">Vehicle not found</p>
        <p className="mt-2 text-ink-300">This vehicle may have been sold or moved.</p>
        <a href={buildPath.cars} className="btn-primary mt-6">
          <ArrowLeft className="h-4 w-4" />
          Back to inventory
        </a>
      </div>
    );
  }

  const related = vehicles
    .filter((v) => v.type === vehicle.type && v.id !== vehicle.id)
    .slice(0, 3);

  const specs = [
    { icon: Calendar, label: 'Year', value: String(vehicle.year) },
    { icon: Fuel, label: 'Fuel Type', value: vehicle.fuel },
    { icon: Settings, label: 'Transmission', value: vehicle.transmission },
    { icon: Gauge, label: 'Mileage', value: vehicle.mileage },
    { icon: Zap, label: 'Power', value: vehicle.power },
    { icon: Cog, label: 'Engine', value: vehicle.engine ?? '—' },
    { icon: Gauge, label: 'Top Speed', value: vehicle.topSpeed ?? '—' },
    { icon: Users, label: 'Seating', value: vehicle.seating ? `${vehicle.seating} persons` : '—' },
  ];

  const waNumber = '918000000000';
  const waText = encodeURIComponent(
    `Hi AUTOHUB, I'm interested in the ${vehicle.brand} ${vehicle.model} (${vehicle.year}) listed at ${formatPriceShort(vehicle.price)}. Could you share more details?`,
  );

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <a
          href={vehicle.type === 'car' ? buildPath.cars : buildPath.bikes}
          className="inline-flex items-center gap-1.5 text-sm text-ink-200 transition-colors hover:text-ember-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {vehicle.type === 'car' ? 'Cars' : 'Bikes'}
        </a>
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <img
                src={vehicle.images[activeImg]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="h-full w-full object-cover"
              />
              {vehicle.badge && (
                <span className="absolute left-4 top-4 chip border border-ember-400/30 bg-ink-950/70 text-ember-300 backdrop-blur-md">
                  {vehicle.badge}
                </span>
              )}
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImg((i) => (i - 1 + vehicle.images.length) % vehicle.images.length)
                    }
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-white backdrop-blur-md transition-colors hover:bg-ember-500"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setActiveImg((i) => (i + 1) % vehicle.images.length)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-white backdrop-blur-md transition-colors hover:bg-ember-500"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            {vehicle.images.length > 1 && (
              <div className="mt-3 flex gap-3">
                {vehicle.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative h-20 w-28 overflow-hidden rounded-xl border-2 transition-all ${
                      i === activeImg ? 'border-ember-400' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${vehicle.brand} ${vehicle.model} view ${i + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-ember-400">
                {vehicle.brand}
              </p>
              <span className="chip border border-white/10 bg-white/[0.03] text-ink-100">
                <Star className="h-3 w-3 fill-ember-400 text-ember-400" />
                {vehicle.rating.toFixed(1)}
              </span>
            </div>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {vehicle.model}
            </h1>
            <p className="mt-2 text-ink-200">
              {vehicle.year} · {vehicle.color} · {vehicle.bodyType}
            </p>

            <div className="mt-6 flex items-end gap-3">
              <p className="font-display text-4xl font-extrabold gradient-text">
                {formatPrice(vehicle.price)}
              </p>
              <p className="mb-1 text-sm text-ink-300">
                EMI from{' '}
                <span className="font-semibold text-white">
                  {formatPriceShort(
                    Math.round(
                      (vehicle.price * 0.8 * 0.095 / 12 * Math.pow(1.095 / 12, 60)) /
                        (Math.pow(1.095 / 12, 60) - 1),
                    ),
                  )}
                  /mo
                </span>
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {specs.slice(0, 4).map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/[0.03] border border-white/10 p-3">
                  <s.icon className="h-4 w-4 text-ember-400" />
                  <p className="mt-2 text-xs text-ink-300">{s.label}</p>
                  <p className="text-sm font-semibold text-white">{s.value}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink-100">{vehicle.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => onBookTestDrive(vehicle.id)} className="btn-primary">
                <CalendarCheck className="h-4 w-4" />
                Book Test Drive
              </button>
              <button onClick={() => onEnquire(vehicle.id)} className="btn-ghost">
                <Send className="h-4 w-4" />
                Send Enquiry
              </button>
              <a href="tel:+918000000000" className="btn-outline">
                <Phone className="h-4 w-4" />
                Call Dealer
              </a>
              <a
                href={`https://wa.me/${waNumber}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specs + Features */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-3xl p-6 lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-white">Specifications</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/10 p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember-500/10 text-ember-400">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-ink-300">{s.label}</p>
                    <p className="text-sm font-semibold text-white">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 font-display text-lg font-bold text-white">Safety Features</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {vehicle.safety.map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-ink-100">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h2 className="font-display text-xl font-bold text-white">Features</h2>
            <div className="mt-5 space-y-2.5">
              {vehicle.features.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-sm text-ink-100">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMI */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <EmiCalculator vehiclePrice={vehicle.price} vehicleName={`${vehicle.brand} ${vehicle.model}`} />
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
          <h2 className="font-display text-2xl font-extrabold text-white">You might also like</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
