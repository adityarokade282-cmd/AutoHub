import { useEffect, useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { buildPath, type Route } from '@/lib/router';

const links = [
  { label: 'Home', href: buildPath.home, route: 'home' },
  { label: 'Cars', href: buildPath.cars, route: 'cars' },
  { label: 'Bikes', href: buildPath.bikes, route: 'bikes' },
  { label: 'New Arrivals', href: buildPath.newArrivals, route: 'new-arrivals' },
  { label: 'Services', href: buildPath.services, route: 'services' },
  { label: 'About Us', href: buildPath.about, route: 'about' },
  { label: 'Contact', href: buildPath.contact, route: 'contact' },
];

export function Navbar({ onBookTestDrive, route }: { onBookTestDrive: () => void; route: Route }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/10 shadow-card'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={buildPath.home} className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-crimson-600 font-display text-lg font-extrabold text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
            A
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            AUTO<span className="gradient-text">HUB</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = route.name === l.route;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-ink-100 hover:text-white'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-ember-400 to-crimson-500" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+918000000000"
            className="flex items-center gap-2 text-sm font-medium text-ink-100 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-ember-400" />
            <span>+91 80000 00000</span>
          </a>
          <button onClick={onBookTestDrive} className="btn-primary">
            <Calendar className="h-4 w-4" />
            Book a Test Drive
          </button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong mx-4 mb-4 rounded-2xl p-4">
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const isActive = route.name === l.route;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-ember-400/10 text-ember-400'
                        : 'text-ink-100 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
            <a
              href="tel:+918000000000"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white"
            >
              <Phone className="h-4 w-4 text-ember-400" />
              +91 80000 00000
            </a>
            <button
              onClick={() => {
                setOpen(false);
                onBookTestDrive();
              }}
              className="btn-primary w-full"
            >
              <Calendar className="h-4 w-4" />
              Book a Test Drive
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
