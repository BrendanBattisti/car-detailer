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
        prices: { sedan: "$85", suv: "$105", truck: "$125" },
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
        prices: { sedan: "$125", suv: "$155", truck: "$185" },
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
        prices: { sedan: "$95", suv: "$115", truck: "$135" },
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
        prices: { sedan: "$145", suv: "$175", truck: "$205" },
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
        prices: { sedan: "$150", suv: "$180", truck: "$210" },
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
        prices: { sedan: "$225", suv: "$275", truck: "$325" },
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
    "Premium Interior Package": 85,
    "Elite Interior Package": 125,
    "Premium Exterior Package": 95,
    "Elite Exterior Package": 145,
    "Premium Full Package(Interior + Exterior)": 150,
    "Elite Full Package(Interior + Exterior)": 225,
  },
  suv: {
    "Premium Interior Package": 105,
    "Elite Interior Package": 155,
    "Premium Exterior Package": 115,
    "Elite Exterior Package": 175,
    "Premium Full Package(Interior + Exterior)": 180,
    "Elite Full Package(Interior + Exterior)": 275,
  },
  truck: {
    "Premium Interior Package": 125,
    "Elite Interior Package": 185,
    "Premium Exterior Package": 135,
    "Elite Exterior Package": 205,
    "Premium Full Package(Interior + Exterior)": 210,
    "Elite Full Package(Interior + Exterior)": 325,
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
