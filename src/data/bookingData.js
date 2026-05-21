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

export const RV_SQFT_RATE = 10;
export const RV_SERVICE_NAME = "RV Cleaning";

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
        prices: { sedan: "$150", suv: "$180", suv3row: "$215", truck: "$200", rv: "$10/sq ft" },
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
        prices: { sedan: "$170", suv: "$200", suv3row: "$235", truck: "$230", rv: "$10/sq ft" },
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
        prices: { sedan: "$80", suv: "$120", suv3row: "$155", truck: "$160", rv: "$10/sq ft" },
      },
      {
        name: "Elite",
        description: "Full exterior restoration with lasting shine.",
        features: [
          "Iron Decontamination",
          "Clay Bar Treatment",
          "UV Protection (up to 6 months)",
        ],
        prices: { sedan: "$110", suv: "$150", suv3row: "$185", truck: "$190", rv: "$10/sq ft" },
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
        prices: { sedan: "$180", suv: "$250", suv3row: "$285", truck: "$320", rv: "$10/sq ft" },
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
          "UV Protection (up to 6 months)",
        ],
        prices: { sedan: "$225", suv: "$305", suv3row: "$340", truck: "$385", rv: "$10/sq ft" },
      },
    ],
  },
  {
    category: "Specialty Services",
    tiers: [
      {
        name: "One Step Paint Correction",
        description:
          "Single-stage polish that reduces light swirls and haze while boosting gloss and depth.",
        features: [
          "Paint Assessment and Prep Wash",
          "Light Defect and Swirl Reduction",
          "Gloss Enhancement Polish",
          "Protective Finish Applied",
        ],
        prices: { sedan: "Starting at $400", suv: "Starting at $400", suv3row: "Starting at $400", truck: "Starting at $400", rv: "Starting at $400" },
      },
      {
        name: "Two Step Paint Correction",
        description:
          "Two-stage correction process to target heavier imperfections and refine for a clear, deep finish.",
        features: [
          "Paint Assessment and Decontamination",
          "Cutting Step for Deeper Defect Removal",
          "Refinement Polish for Clarity and Gloss",
          "Protective Finish Applied",
        ],
        prices: { sedan: "Starting at $700", suv: "Starting at $700", suv3row: "Starting at $700", truck: "Starting at $700", rv: "Starting at $700" },
      },
    ],
  },
  {
    category: "Motorcycle Services",
    tiers: [
      {
        name: "Motorcycle Detail",
        description:
          "Comprehensive bike detailing to clean, brighten, and protect your ride from top to bottom.",
        features: [],
        prices: { motorcycle: "Starting at $200" },
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
    "Premium Interior Package": 150,
    "Elite Interior Package": 170,
    "Premium Exterior Package": 80,
    "Elite Exterior Package": 110,
    "Premium Full Package(Interior + Exterior)": 180,
    "Elite Full Package(Interior + Exterior)": 225,
  },
  suv: {
    "Premium Interior Package": 180,
    "Elite Interior Package": 200,
    "Premium Exterior Package": 120,
    "Elite Exterior Package": 150,
    "Premium Full Package(Interior + Exterior)": 250,
    "Elite Full Package(Interior + Exterior)": 305,
  },
  suv3row: {
    "Premium Interior Package": 215,
    "Elite Interior Package": 235,
    "Premium Exterior Package": 155,
    "Elite Exterior Package": 185,
    "Premium Full Package(Interior + Exterior)": 285,
    "Elite Full Package(Interior + Exterior)": 340,
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
  squareFootage: "",
  service: "",
  addons: [],
  message: "",
};
