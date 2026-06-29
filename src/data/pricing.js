// Pricing data for Sandeep Art Gallery commission services.
// Mirrors the official rate card shared by the studio.
// To update prices: edit the `rows` array for the relevant plan below.

export const pricingPlans = [
  {
    id: "pencil-sketch",
    title: "Pencil Sketch",
    icon: "pencil",
    accent: "neutral",
    rows: [
      { size: "A4", faces: "Single Face", price: 1000 },
      { size: "A3", faces: "Single Face", price: 1500 },
      { size: "A3", faces: "Double Face", price: 2000 },
      { size: "A2", faces: "Single Face", price: 4000 },
      { size: "A2", faces: "Double Face", price: 5000 },
    ],
  },
  {
    id: "blood-sketch",
    title: "Blood Sketch",
    icon: "droplet",
    accent: "red",
    rows: [
      { size: "A4", faces: "Single Face", price: 1000 },
      { size: "A3", faces: "Single Face", price: 1500 },
      { size: "A3", faces: "Double Face", price: 2000 },
      { size: "12×18", faces: "Single Face", price: 2500 },
      { size: "12×18", faces: "Double Face", price: 3000 },
      { size: "18×24", faces: "Single Face", price: 4000 },
      { size: "18×24", faces: "Double Face", price: 4800 },
      { size: "18×24", faces: "Multiple Face", price: 5000 },
      { size: "24×36", faces: "Single Face", price: 5500 },
      { size: "24×36", faces: "Double Face", price: 6500 },
      { size: "24×36", faces: "Triple Face", price: 7500 },
      { size: "24×36", faces: "Multiple Face", price: 8500 },
    ],
  },
  {
    id: "oil-painting",
    title: "Oil Painting Colour Portrait",
    icon: "palette",
    accent: "gold",
    rows: [
      { size: "A4", faces: "Single Face", price: 1500 },
      { size: "A3", faces: "Single Face", price: 2200 },
      { size: "A3", faces: "Double Face", price: 2800 },
      { size: "12×18", faces: "Single Face", price: 3200 },
      { size: "12×18", faces: "Triple Face", price: 3800 },
      { size: "18×24", faces: "Single Face", price: 4800 },
      { size: "18×24", faces: "Double Face", price: 5600 },
      { size: "18×24", faces: "Multiple Face", price: 5800 },
      { size: "24×36", faces: "Single Face", price: 6300 },
      { size: "24×36", faces: "Double Face", price: 7300 },
      { size: "24×36", faces: "Triple Face", price: 8300 },
      { size: "24×36", faces: "Multiple Face", price: 9300 },
    ],
  },
];

export const pricingNotes = [
  "Advance payment required for booking.",
  "Delivery charges extra.",
  "Urgent orders chargeable.",
];

export const formatRupees = (amount) => `₹${amount.toLocaleString("en-IN")}`;
