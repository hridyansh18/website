// Pricing data for Sandeep Art Gallery commission charges
// Source: Official rate card (poster)
// Note: Advance payment required for booking. Delivery charges extra. Urgent orders chargeable.

import gracefulSmile from "../assets/images/artworks/graceful-smile.jpg";
import sariPortraitBloodArt from "../assets/images/artworks/sari-portrait-blood-art.jpg";
import radha from "../assets/images/artworks/radha.jpg";

export const artTypes = [
  {
    id: "pencil",
    name: "Pencil Sketch",
    tagline: "Classic graphite portraiture",
    icon: "✏️",
    accentColor: "#C0C0C0",
    image: gracefulSmile,
    pricing: [
      { size: "A4",   faces: "Single Face", price: 1000 },
      { size: "A3",   faces: "Single Face", price: 1500 },
      { size: "A3",   faces: "Double Face", price: 2000 },
      { size: "A2",   faces: "Single Face", price: 4000 },
      { size: "A2",   faces: "Double Face", price: 5000 },
    ],
  },
  {
    id: "blood",
    name: "Blood Sketch",
    tagline: "Rare pigment, unrepeatable art",
    icon: "🩸",
    accentColor: "#C0392B",
    image: sariPortraitBloodArt,
    pricing: [
      { size: "A4",    faces: "Single Face",   price: 1000 },
      { size: "A3",    faces: "Single Face",   price: 1500 },
      { size: "A3",    faces: "Double Face",   price: 2000 },
      { size: "12×18", faces: "Single Face",   price: 2500 },
      { size: "12×18", faces: "Triple Face",   price: 3000 },
      { size: "18×24", faces: "Single Face",   price: 4000 },
      { size: "18×24", faces: "Double Face",   price: 4800 },
      { size: "18×24", faces: "Multiple Face", price: 5000 },
      { size: "24×36", faces: "Single Face",   price: 5500 },
      { size: "24×36", faces: "Double Face",   price: 6500 },
      { size: "24×36", faces: "Triple Face",   price: 7500 },
      { size: "24×36", faces: "Multiple Face", price: 8500 },
    ],
  },
  {
    id: "oil",
    name: "Oil Painting",
    tagline: "Colour portrait in rich oils",
    icon: "🎨",
    accentColor: "#D4AF37",
    image: radha,
    pricing: [
      { size: "A4",    faces: "Single Face",   price: 1500 },
      { size: "A3",    faces: "Single Face",   price: 2200 },
      { size: "A3",    faces: "Double Face",   price: 2800 },
      { size: "12×18", faces: "Single Face",   price: 3200 },
      { size: "12×18", faces: "Triple Face",   price: 3800 },
      { size: "18×24", faces: "Single Face",   price: 4800 },
      { size: "18×24", faces: "Double Face",   price: 5600 },
      { size: "18×24", faces: "Multiple Face", price: 5800 },
      { size: "24×36", faces: "Single Face",   price: 6300 },
      { size: "24×36", faces: "Double Face",   price: 7300 },
      { size: "24×36", faces: "Triple Face",   price: 8300 },
      { size: "24×36", faces: "Multiple Face", price: 9300 },
    ],
  },
];

// Get unique sizes for a given art type
export const getSizes = (artTypeId) => {
  const art = artTypes.find((a) => a.id === artTypeId);
  if (!art) return [];
  return [...new Set(art.pricing.map((p) => p.size))];
};

// Get available faces for a given art type + size
export const getFaces = (artTypeId, size) => {
  const art = artTypes.find((a) => a.id === artTypeId);
  if (!art) return [];
  return art.pricing
    .filter((p) => p.size === size)
    .map((p) => p.faces);
};

// Get price for a specific art type + size + faces combo
export const getPrice = (artTypeId, size, faces) => {
  const art = artTypes.find((a) => a.id === artTypeId);
  if (!art) return null;
  const match = art.pricing.find(
    (p) => p.size === size && p.faces === faces
  );
  return match ? match.price : null;
};
