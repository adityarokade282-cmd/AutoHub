import type { Vehicle } from './types';

export const vehicles: Vehicle[] = [
  {
    id: 'bmw-3-series',
    type: 'car',
    brand: 'BMW',
    model: '3 Series 320d',
    year: 2024,
    price: 4850000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: '16.5 km/l',
    bodyType: 'Sedan',
    engine: '2.0L TwinPower Turbo Diesel',
    power: '190 bhp @ 4000 rpm',
    topSpeed: '235 km/h',
    seating: 5,
    safety: ['6 Airbags', 'ABS with EBD', 'Dynamic Stability Control', 'Run-flat tyres'],
    features: ['Live Cockpit Professional', 'Harman Kardon sound', 'Panoramic sunroof', 'Wireless Apple CarPlay', 'Reverse camera with 3D view'],
    description:
      'The BMW 3 Series 320d blends dynamic performance with refined luxury. Its rear-wheel-drive chassis, turbo-diesel efficiency, and executive cabin make it the benchmark sports sedan of its class.',
    images: [
      'https://images.pexels.com/photos/32726168/pexels-photo-32726168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18029637/pexels-photo-18029637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/11822720/pexels-photo-11822720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    badge: 'FEATURED',
    arrivedAt: '2024-11-10',
    color: 'Alpine White',
    rating: 4.8,
  },
  {
    id: 'mercedes-c-class',
    type: 'car',
    brand: 'Mercedes-Benz',
    model: 'C-Class C220d',
    year: 2024,
    price: 5200000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: '18.2 km/l',
    bodyType: 'Sedan',
    engine: '2.0L OM654M Diesel',
    power: '200 bhp @ 3800 rpm',
    topSpeed: '246 km/h',
    seating: 5,
    safety: ['7 Airbags', 'Active Brake Assist', 'ATTENTION ASSIST', 'Adaptive cruise'],
    features: ['MBUX with 11.9" touchscreen', 'Burmester sound', '64-colour ambient lighting', 'Augmented reality navigation', 'Wireless charging'],
    description:
      'The Mercedes-Benz C-Class C220d is the benchmark for modern luxury sedans — a sculpted exterior, intuitive MBUX cockpit, and a frugal yet powerful diesel engine deliver a first-class driving experience.',
    images: [
      'https://images.pexels.com/photos/12851401/pexels-photo-12851401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/31040120/pexels-photo-31040120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13333481/pexels-photo-13333481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    badge: 'HOT DEAL',
    arrivedAt: '2024-12-01',
    color: 'Obsidian Black',
    rating: 4.9,
  },
  {
    id: 'toyota-fortuner',
    type: 'car',
    brand: 'Toyota',
    model: 'Fortuner Legender 4x2',
    year: 2024,
    price: 4320000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: '12.1 km/l',
    bodyType: 'SUV',
    engine: '2.8L GD-6 Diesel',
    power: '201 bhp @ 3400 rpm',
    topSpeed: '190 km/h',
    seating: 7,
    safety: ['7 Airbags', 'Vehicle Stability Control', 'Hill Start Assist', 'Downhill Assist Control'],
    features: ['LED quad projector headlamps', '11-speaker JBL sound', '360° camera', 'Wireless Apple CarPlay', 'Cooled front seats'],
    description:
      'The Toyota Fortuner Legender is an icon of Indian roads — commanding presence, legendary reliability, and go-anywhere capability wrapped in a premium, road-focused styling package.',
    images: [
      'https://images.pexels.com/photos/37029589/pexels-photo-37029589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/30153910/pexels-photo-30153910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13598897/pexels-photo-13598897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    badge: 'FEATURED',
    arrivedAt: '2024-10-20',
    color: 'Pearl White',
    rating: 4.7,
  },
  {
    id: 'mahindra-scorpio-n',
    type: 'car',
    brand: 'Mahindra',
    model: 'Scorpio-N Z8L',
    year: 2024,
    price: 2490000,
    fuel: 'Diesel',
    transmission: 'AMT',
    mileage: '15.0 km/l',
    bodyType: 'SUV',
    engine: '2.2L mHawk Diesel',
    power: '172 bhp @ 3500 rpm',
    topSpeed: '185 km/h',
    seating: 7,
    safety: ['6 Airbags', 'Electronic Stability Program', 'Roll-over mitigation', 'Disc brakes all-round'],
    features: ['AdrenoX connected car', '12-speaker 3D sound', 'Dual 10.25" displays', '4x4 drive mode', 'Electric sunroof'],
    description:
      'The Mahindra Scorpio-N redefines the SUV value benchmark — body-on-frame toughness, 4x4 capability, and a tech-packed cabin at a price that makes it the smartest adventure SUV in its segment.',
    images: [
      'https://images.pexels.com/photos/30153910/pexels-photo-30153910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/37029589/pexels-photo-37029589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13598897/pexels-photo-13598897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    badge: 'NEW',
    arrivedAt: '2025-01-05',
    color: 'Napoli Black',
    rating: 4.6,
  },
  {
    id: 'royal-enfield-classic-350',
    type: 'bike',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    year: 2024,
    price: 234000,
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: '41.3 km/l',
    bodyType: 'Cruiser',
    engine: '349cc J-Series',
    engineCapacity: 349,
    power: '20.2 bhp @ 6100 rpm',
    topSpeed: '130 km/h',
    safety: ['Dual-channel ABS', 'Disc brake front', 'Tubeless tyres'],
    features: ['Tripper navigation', 'Analogue-digital combo meter', 'LED headlamp', 'Single-seat accessory', 'Chrome accents'],
    description:
      'The Royal Enfield Classic 350 is the definitive modern-classic motorcycle — timeless post-war styling, a refined J-Series engine, and a ride so comfortable it turns every road into a journey.',
    images: [
      'https://images.pexels.com/photos/28513445/pexels-photo-28513445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12582263/pexels-photo-12582263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/11529770/pexels-photo-11529770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    badge: 'FEATURED',
    arrivedAt: '2024-11-22',
    color: 'Chrome Red',
    rating: 4.7,
  },
  {
    id: 'ktm-duke-390',
    type: 'bike',
    brand: 'KTM',
    model: 'Duke 390',
    year: 2024,
    price: 312000,
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: '28.9 km/l',
    bodyType: 'Street',
    engine: '373cc single-cylinder',
    engineCapacity: 373,
    power: '43.5 bhp @ 9000 rpm',
    topSpeed: '169 km/h',
    safety: ['Dual-channel ABS', 'ByBre radial caliper', 'SuperMoto ABS mode'],
    features: ['5" TFT dash with Bluetooth', 'Cornering ABS', 'Quickshifter+', 'Slipper clutch', 'Ride-by-wire'],
    description:
      'The KTM Duke 390 is the street hooligan of its class — aggressive styling, a punchy 43 bhp engine, and track-grade electronics packed into a lightweight naked that dominates the urban jungle.',
    images: [
      'https://images.pexels.com/photos/10944512/pexels-photo-10944512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/19062210/pexels-photo-19062210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12775162/pexels-photo-12775162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    badge: 'HOT DEAL',
    arrivedAt: '2024-12-12',
    color: 'KTM Orange',
    rating: 4.8,
  },
  {
    id: 'yamaha-mt-15',
    type: 'bike',
    brand: 'Yamaha',
    model: 'MT-15 V2',
    year: 2024,
    price: 168000,
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: '56.87 km/l',
    bodyType: 'Street',
    engine: '155cc VVA',
    engineCapacity: 155,
    power: '18.4 bhp @ 10000 rpm',
    topSpeed: '136 km/h',
    safety: ['Dual-channel ABS', 'Assist & Slipper clutch'],
    features: ['LCD instrument cluster', 'VVA engine', 'Aluminium swingarm', 'Traction Control System', 'Quick Shifter'],
    description:
      'The Yamaha MT-15 V2 brings the Dark Side of Japan to the street — a high-revving VVA engine, aggressive MT family styling, and class-leading technology in a lightweight, razor-sharp package.',
    images: [
      'https://images.pexels.com/photos/10198437/pexels-photo-10198437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/11529770/pexels-photo-11529770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12735069/pexels-photo-12735069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    badge: 'NEW',
    arrivedAt: '2025-01-10',
    color: 'Metallic Black',
    rating: 4.5,
  },
  {
    id: 'bmw-g-310-r',
    type: 'bike',
    brand: 'BMW',
    model: 'G 310 R',
    year: 2024,
    price: 290000,
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: '32.5 km/l',
    bodyType: 'Street',
    engine: '313cc single-cylinder',
    engineCapacity: 313,
    power: '33.5 bhp @ 9500 rpm',
    topSpeed: '160 km/h',
    safety: ['Dual-channel ABS', 'ByBre brakes'],
    features: ['Full-LED lighting', 'TFT display', 'Road-friendly ergonomics', 'Slipper clutch', 'BS-VI compliant'],
    description:
      'The BMW G 310 R is your entry into the Motorrad world — premium build, a punchy single-cylinder engine, and the unmistakable BMW roadster design DNA in a lightweight, agile, everyday-friendly package.',
    images: [
      'https://images.pexels.com/photos/19062210/pexels-photo-19062210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/10944512/pexels-photo-10944512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/10198437/pexels-photo-10198437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    badge: 'FEATURED',
    arrivedAt: '2024-11-28',
    color: 'Cosmic Black',
    rating: 4.6,
  },
];

export const getVehicleById = (id: string): Vehicle | undefined =>
  vehicles.find((v) => v.id === id);

export const getFeaturedVehicles = (limit = 8): Vehicle[] =>
  [...vehicles]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);

export const getNewArrivals = (limit = 6): Vehicle[] =>
  [...vehicles]
    .sort((a, b) => new Date(b.arrivedAt).getTime() - new Date(a.arrivedAt).getTime())
    .slice(0, limit);

export const getCars = (): Vehicle[] => vehicles.filter((v) => v.type === 'car');
export const getBikes = (): Vehicle[] => vehicles.filter((v) => v.type === 'bike');

export const carBrands = Array.from(new Set(getCars().map((v) => v.brand))).sort();
export const bikeBrands = Array.from(new Set(getBikes().map((v) => v.brand))).sort();
export const allBrands = Array.from(new Set(vehicles.map((v) => v.brand))).sort();

export const testimonials = [
  {
    name: 'Rahul Mehta',
    location: 'Mumbai',
    rating: 5,
    photo: 'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    review:
      'AUTOHUB made buying my BMW 3 Series effortless. The team was transparent about pricing, arranged a same-day test drive, and the finance process was seamless. Best dealership experience I have had.',
    vehicle: 'BMW 3 Series',
  },
  {
    name: 'Priya Nair',
    location: 'Bengaluru',
    rating: 5,
    photo: 'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    review:
      'I was nervous buying my first bike, but the AUTOHUB team walked me through every option. I rode away on my KTM Duke 390 the same week. The EMI calculator helped me plan my budget perfectly.',
    vehicle: 'KTM Duke 390',
  },
  {
    name: 'Arjun Singh',
    location: 'Delhi',
    rating: 5,
    photo: 'https://images.pexels.com/photos/29615996/pexels-photo-29615996.png?auto=compress&cs=tinysrgb&h=200&w=200',
    review:
      'Traded in my old SUV for a Toyota Fortuner Legender here. Fair exchange value, genuine accessories, and the RC transfer was handled end-to-end. Highly recommend AUTOHUB for used and new vehicles alike.',
    vehicle: 'Toyota Fortuner',
  },
  {
    name: 'Sneha Kapoor',
    location: 'Pune',
    rating: 4,
    photo: 'https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    review:
      'The Royal Enfield Classic 350 I bought from AUTOHUB is a dream. The staff knew the bike inside out and the servicing team has been excellent for my scheduled maintenance visits.',
    vehicle: 'Royal Enfield Classic 350',
  },
  {
    name: 'Vikram Reddy',
    location: 'Hyderabad',
    rating: 5,
    photo: 'https://images.pexels.com/photos/4986291/pexels-photo-4986291.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    review:
      'Bought the Mercedes C-Class for my wife. The showroom experience felt premium, the paperwork was quick, and the delivery was handled with real care. AUTOHUB sets the bar high.',
    vehicle: 'Mercedes C-Class',
  },
  {
    name: 'Imran Sheikh',
    location: 'Kolkata',
    rating: 5,
    photo: 'https://images.pexels.com/photos/35490806/pexels-photo-35490806.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    review:
      'The Scorpio-N I got from AUTOHUB is perfect for family trips. Honest advice, no hidden charges, and the insurance assistance saved me a lot of time. Will return for my next purchase.',
    vehicle: 'Mahindra Scorpio-N',
  },
];
