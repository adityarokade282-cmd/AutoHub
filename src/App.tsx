import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TestDriveModal } from '@/components/TestDriveModal';
import { EnquiryModal } from '@/components/EnquiryModal';
import { useRouter } from '@/lib/router';
import { getVehicleById } from '@/data/vehicles';
import { HomePage } from '@/pages/HomePage';
import { InventoryPage } from '@/pages/InventoryPage';
import { VehicleDetailsPage } from '@/pages/VehicleDetailsPage';
import { NewArrivalsPage } from '@/pages/NewArrivalsPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { getCars, getBikes } from '@/data/vehicles';

const pageTitles: Record<string, string> = {
  home: 'AUTOHUB — Premium Cars & Bikes Dealership',
  cars: 'Cars — AUTOHUB',
  bikes: 'Bikes — AUTOHUB',
  'new-arrivals': 'New Arrivals — AUTOHUB',
  services: 'Services — AUTOHUB',
  about: 'About Us — AUTOHUB',
  contact: 'Contact — AUTOHUB',
};

export default function App() {
  const { route } = useRouter();
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [presetVehicle, setPresetVehicle] = useState<string | undefined>(undefined);

  const openTestDrive = (vehicleId?: string) => {
    setPresetVehicle(vehicleId);
    setTestDriveOpen(true);
  };
  const openEnquiry = (vehicleId?: string) => {
    setPresetVehicle(vehicleId);
    setEnquiryOpen(true);
  };

  const renderRoute = () => {
    switch (route.name) {
      case 'home':
        return <HomePage onBookTestDrive={() => openTestDrive()} />;
      case 'cars':
        return (
          <InventoryPage
            type="car"
            eyebrow="Cars"
            title="Explore our car inventory"
            subtitle="From compact sedans to commanding SUVs — every car is inspected, certified, and ready to drive."
            list={getCars()}
            bodyTypes={['Sedan', 'SUV', 'Hatchback']}
          />
        );
      case 'bikes':
        return (
          <InventoryPage
            type="bike"
            eyebrow="Bikes"
            title="Explore our bike inventory"
            subtitle="Cruisers, street machines, and adventure bikes — find the two-wheeler that matches your riding style."
            list={getBikes()}
            showEngineCapacity
            bodyTypes={['Cruiser', 'Sport', 'Street', 'Adventure']}
          />
        );
      case 'vehicle':
        return (
          <VehicleDetailsPage
            id={route.id}
            onBookTestDrive={openTestDrive}
            onEnquire={openEnquiry}
          />
        );
      case 'new-arrivals':
        return <NewArrivalsPage />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onBookTestDrive={() => openTestDrive()} />;
    }
  };

  useEffect(() => {
    let title = pageTitles[route.name] ?? 'AUTOHUB';
    if (route.name === 'vehicle') {
      const v = getVehicleById(route.id);
      if (v) title = `${v.brand} ${v.model} — AUTOHUB`;
    }
    document.title = title;
  }, [route]);

  return (
    <div className="relative min-h-screen bg-ink-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-ember-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar onBookTestDrive={() => openTestDrive()} route={route} />
      <main id="main-content">{renderRoute()}</main>
      <Footer />

      <TestDriveModal
        open={testDriveOpen}
        onClose={() => setTestDriveOpen(false)}
        presetVehicleId={presetVehicle}
      />
      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        presetVehicleId={presetVehicle}
      />
    </div>
  );
}
