import { useEffect, useState, useCallback } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'cars' }
  | { name: 'bikes' }
  | { name: 'new-arrivals' }
  | { name: 'services' }
  | { name: 'about' }
  | { name: 'contact' }
  | { name: 'vehicle'; id: string };

const parseHash = (hash: string): Route => {
  const clean = hash.replace(/^#\/?/, '').split('?')[0];
  const parts = clean.split('/').filter(Boolean);
  if (parts.length === 0) return { name: 'home' };
  const [first, second] = parts;
  switch (first) {
    case 'cars':
      return { name: 'cars' };
    case 'bikes':
      return { name: 'bikes' };
    case 'new-arrivals':
      return { name: 'new-arrivals' };
    case 'services':
      return { name: 'services' };
    case 'about':
      return { name: 'about' };
    case 'contact':
      return { name: 'contact' };
    case 'vehicle':
      return { name: 'vehicle', id: second ?? '' };
    default:
      return { name: 'home' };
  }
};

export const useRouter = () => {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((to: string) => {
    if (window.location.hash === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = to;
    }
  }, []);

  return { route, navigate };
};

export const buildPath = {
  home: '#/',
  cars: '#/cars',
  bikes: '#/bikes',
  newArrivals: '#/new-arrivals',
  services: '#/services',
  about: '#/about',
  contact: '#/contact',
  vehicle: (id: string) => `#/vehicle/${id}`,
};
