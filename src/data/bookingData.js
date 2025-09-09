// Shared booking data for booking components and products page

// Simple service names for booking forms
export const services = [
  "Premium Interior Package",
  "Elite Interior Package",
  "Premium Exterior Package",
  "Elite Exterior Package",
  "Premium Full Package(Interior + Exterior)",
  "Elite Full Package(Interior + Exterior)",
];

// Detailed service structure for products page
export const detailedServices = [
  {
    category: "Interior",
    tiers: [
      {
        name: "Premium",
        description: "Thorough interior cleaning for a refreshed ride.",
        features: [
          "Light Interior Wipe Down",
          "Full Seat & Floor Vacuum",
          "Interior Glass Clean",
          "Detailed Clean of Vents and Center Console",
        ],
        prices: { sedan: "$120", suv: "$160", truck: "$200" },
      },
      {
        name: "Elite",
        description: "Deep interior detail with premium treatments.",
        features: [
          "UV Protection of Hard Surfaces",
          "Detailed Clean and Shine Treatment of Hard Surfaces",
          "Full Shampoo & Spot Treatment of All Upholstery",
          "Full Interior Steam Clean",
        ],
        prices: { sedan: "$150", suv: "$190", truck: "$230" },
      },
    ],
  },
  {
    category: "Exterior",
    tiers: [
      {
        name: "Premium",
        description: "Protective wash and shine for your car's exterior.",
        features: [
          "Tires & Wheels",
          "Pre-Wash and Hand Wash (two bucket method)",
          "Exterior Glass Clean",
          "Wheel Well",
          "Tire Shine",
          "Bug & Tar Removal",
          "Door Jamb Wipe Down",
          "Trim Restoration",
        ],
        prices: { sedan: "$80", suv: "$120", truck: "$160" },
      },
      {
        name: "Elite",
        description: "Full exterior restoration with lasting shine.",
        features: [
          "Iron Decontamination",
          "Clay Bar Treatment",
          "Wax Polish",
          "UV Protection (up to 6 months)",
        ],
        prices: { sedan: "$110", suv: "$150", truck: "$190" },
      },
    ],
  },
  {
    category: "Full Package (Interior + Exterior)",
    tiers: [
      {
        name: "Premium",
        description: "Complete inside & out refresh for your vehicle.",
        features: [
          "Light Interior Wipe Down",
          "Full Seat & Floor Vacuum",
          "Interior Glass Clean",
          "Detailed Clean of Vents and Center Console",
          "Tires & Wheels",
          "Pre-Wash and Hand Wash (two bucket method)",
          "Exterior Glass Clean",
          "Wheel Well",
          "Tire Shine",
          "Bug & Tar Removal",
          "Door Jamb Wipe Down",
          "Trim Restoration",
        ],
        prices: { sedan: "$180", suv: "$250", truck: "$320" },
      },
      {
        name: "Elite",
        description: "Our most comprehensive detailing package.",
        features: [
          "UV Protection of Hard Surfaces",
          "Detailed Clean and Shine Treatment of Hard Surfaces",
          "Full Shampoo & Spot Treatment of All Upholstery",
          "Full Interior Steam Clean",
          "Iron Decontamination",
          "Clay Bar Treatment",
          "Wax Polish",
          "UV Protection (up to 6 months)",
        ],
        prices: { sedan: "$225", suv: "$305", truck: "$385" },
      },
    ],
  },
];

export const addons = [
  { name: "Headlight Restoration", price: "$55" },
  { name: "Engine Bay Detail", price: "$70" },
  { name: "Clay Bar Treatment", price: "$55" },
  { name: "Ceramic Coating", price: "$550+" },
  { name: "UV Protection", price: "$35" },
  { name: "Seat Shampoo", price: "$70" },
  { name: "Carpet & Mat Shampoo", price: "$55" },
  { name: "Smoke/Odor Removal", price: "$95" },
  { name: "Pet Hair Removal", price: "$55" },
];

// Service pricing - varies by vehicle type
export const servicePrices = {
  sedan: {
    "Premium Interior Package": 120,
    "Elite Interior Package": 150,
    "Premium Exterior Package": 80,
    "Elite Exterior Package": 110,
    "Premium Full Package(Interior + Exterior)": 180,
    "Elite Full Package(Interior + Exterior)": 225,
  },
  suv: {
    "Premium Interior Package": 160,
    "Elite Interior Package": 190,
    "Premium Exterior Package": 120,
    "Elite Exterior Package": 150,
    "Premium Full Package(Interior + Exterior)": 250,
    "Elite Full Package(Interior + Exterior)": 305,
  },
  truck: {
    "Premium Interior Package": 200,
    "Elite Interior Package": 230,
    "Premium Exterior Package": 160,
    "Elite Exterior Package": 190,
    "Premium Full Package(Interior + Exterior)": 320,
    "Elite Full Package(Interior + Exterior)": 385,
  },
};

// Addon pricing (extract numbers from price strings)
export const addonPrices = {
  "Headlight Restoration": 55,
  "Engine Bay Detail": 70,
  "Clay Bar Treatment": 55,
  "Ceramic Coating": 550,
  "UV Protection": 35,
  "Seat Shampoo": 70,
  "Carpet & Mat Shampoo": 55,
  "Smoke/Odor Removal": 95,
  "Pet Hair Removal": 55,
};

// Initial booking data state
export const initialBookingData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  vehicleType: "sedan",
  service: "",
  addons: [],
  message: "",
};
