import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { buildPath } from '@/lib/router';

const quickLinks = [
  { label: 'Home', href: buildPath.home },
  { label: 'Cars', href: buildPath.cars },
  { label: 'Bikes', href: buildPath.bikes },
  { label: 'New Arrivals', href: buildPath.newArrivals },
  { label: 'Services', href: buildPath.services },
  { label: 'About Us', href: buildPath.about },
  { label: 'Contact', href: buildPath.contact },
];

const services = [
  'Vehicle Financing',
  'Insurance Assistance',
  'Vehicle Exchange',
  'Test Drive',
  'Car & Bike Servicing',
  'Genuine Accessories',
  'RC & Documentation',
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-900">
      <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href={buildPath.home} className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-crimson-600 font-display text-lg font-extrabold text-white">
                A
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                AUTO<span className="gradient-text">HUB</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-200">
              AUTOHUB is a premium multi-brand car and bike dealership with 10+ years of trusted
              service. We help you find, finance, and maintain your perfect ride — transparently.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#/"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-200 transition-all duration-300 hover:border-ember-400/40 hover:text-ember-400 hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-200">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-100 transition-colors hover:text-ember-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-200">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm text-ink-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-200">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-100">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                <span>14 Marine Drive, Nariman Point, Mumbai 400021, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-ember-400" />
                <a href="tel:+918000000000" className="hover:text-ember-400">
                  +91 80000 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-ember-400" />
                <a href="mailto:hello@autohub.example" className="hover:text-ember-400">
                  hello@autohub.example
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                <span>
                  Mon–Sat: 9:00 AM – 8:00 PM
                  <br />
                  Sun: 10:00 AM – 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-300">
            © {new Date().getFullYear()} AUTOHUB Motors Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-ink-300">
            <a href="#/" className="hover:text-ember-400">
              Privacy Policy
            </a>
            <a href="#/" className="hover:text-ember-400">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
