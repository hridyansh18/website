// Artwork data for Sandeep Art Gallery
//
// Real photographed artworks live in src/assets/images/artworks/.
// To add a new piece: save the photo into that folder, import it below,
// then add a new object to the `artworks` array using that import.
// See src/assets/images/README.md for more detail.

import balKrishna from "../assets/images/artworks/bal-krishna.jpg";
import bloodArtMan from "../assets/images/artworks/blood-art-man.jpg";
import gracefulSmile from "../assets/images/artworks/graceful-smile.jpg";
import hanuman from "../assets/images/artworks/hanuman.jpg";
import kaliMata from "../assets/images/artworks/kali-mata.jpg";
import krishnaWithRoses from "../assets/images/artworks/krishna-with-roses.jpg";
import maharanaPratap from "../assets/images/artworks/maharana-pratap.jpg";
import radha from "../assets/images/artworks/radha.jpg";
import sariPortraitBloodArt from "../assets/images/artworks/sari-portrait-blood-art.jpg";
import timelessStrength from "../assets/images/artworks/timeless-strength.jpg";

export const categories = [
  { id: "all", label: "All Works" },
  { id: "religious", label: "Religious Art" },
  { id: "blood-art", label: "Blood Art" },
  { id: "canvas", label: "Canvas Paintings" },
  { id: "sketches", label: "Pencil Sketches" },
];

export const artworks = [
  {
    id: 1,
    title: "Bal Krishna Behind the Tree",
    category: "religious",
    categoryLabel: "Religious Art",
    medium: "Watercolor on Paper",
    year: "2025",
    size: "16in x 20in",
    image: balKrishna,
    orientation: "portrait",
    description:
      "A tender depiction of young Krishna peeking from behind a tree trunk, rendered in soft watercolor against a glowing sunset backdrop.",
  },
  {
    id: 2,
    title: "Divine Hanuman",
    category: "religious",
    categoryLabel: "Religious Art",
    medium: "Graphite & Color Pencil on Paper",
    year: "2024",
    size: "18in x 24in",
    image: hanuman,
    orientation: "portrait",
    description:
      "A majestic portrayal of Lord Hanuman adorned with sacred ornaments and a radiant halo. Fine pencil shading meets rich color detailing in the jewelry and garlands, symbolizing devotion and strength.",
  },
  {
    id: 3,
    title: "Fierce Goddess Kali",
    category: "religious",
    categoryLabel: "Religious Art",
    medium: "Acrylic on Canvas",
    year: "2025",
    size: "20in x 24in",
    image: kaliMata,
    orientation: "portrait",
    description:
      "A powerful depiction of Goddess Kali, embodying divine energy and transformation. Bold colors, expressive features, and ornate embellishments create a striking visual representation of strength and protection.",
  },
  {
    id: 4,
    title: "Radha in Divine Grace",
    category: "religious",
    categoryLabel: "Religious Art",
    medium: "Acrylic on Paper",
    year: "2024",
    size: "16in x 20in",
    image: radha,
    orientation: "portrait",
    description:
      "A serene portrayal inspired by Radha, highlighted with subtle blue tones and elegant ornamentation. The artwork radiates beauty, devotion, and timeless spiritual charm.",
  },
  {
    id: 5,
    title: "Krishna Among the Roses",
    category: "canvas",
    categoryLabel: "Canvas Paintings",
    medium: "Acrylic on Canvas",
    year: "2024",
    size: "20in x 24in",
    image: krishnaWithRoses,
    orientation: "portrait",
    description:
      "A striking close-up profile of Krishna framed by golden roses and lilies, finished in rich acrylic with fine gold detailing.",
  },
  {
    id: 6,
    title: "Maharana Pratap",
    category: "canvas",
    categoryLabel: "Canvas Paintings",
    medium: "Watercolor on Canvas",
    year: "2024",
    size: "18in x 26in",
    image: maharanaPratap,
    orientation: "portrait",
    description:
      "A heroic full-length portrait of the legendary Rajput warrior king, painted against a sweeping desert and mountain landscape with intricate period detailing.",
  },
  {
    id: 7,
    title: "Portrait in Sari",
    category: "blood-art",
    categoryLabel: "Blood Art",
    medium: "Blood Pigment on Paper",
    year: "2024",
    size: "14in x 18in",
    image: sariPortraitBloodArt,
    orientation: "portrait",
    description:
      "An intimate sepia-toned portrait created using the studio's signature blood pigment technique, capturing warmth and likeness in a single unrepeatable medium.",
  },
  {
    id: 8,
    title: "Quiet Resolve",
    category: "blood-art",
    categoryLabel: "Blood Art",
    medium: "Blood Pigment on Paper",
    year: "2024",
    size: "14in x 18in",
    image: bloodArtMan,
    orientation: "portrait",
    description:
      "A commissioned portrait rendered entirely in the studio's blood pigment technique, the warm sepia tones lending the subject a quiet, enduring presence.",
  },
  {
    id: 9,
    title: "Graceful Smile",
    category: "sketches",
    categoryLabel: "Pencil Sketches",
    medium: "Graphite on Paper",
    year: "2024",
    size: "14in x 18in",
    image: gracefulSmile,
    orientation: "portrait",
    description:
      "A beautifully detailed portrait capturing a warm smile and relaxed elegance. Delicate shading and refined pencil work bring depth, realism, and emotional warmth to the composition.",
  },
  {
    id: 10,
    title: "Timeless Strength",
    category: "sketches",
    categoryLabel: "Pencil Sketches",
    medium: "Charcoal & Graphite on Paper",
    year: "2024",
    size: "16in x 20in",
    image: timelessStrength,
    orientation: "portrait",
    description:
      "A heartfelt monochrome portrait reflecting resilience, wisdom, and grace. Detailed shading and realistic textures bring authenticity and emotional depth to the artwork.",
  },
];

export const getArtworksByCategory = (categoryId) => {
  if (categoryId === "all") return artworks;
  return artworks.filter((art) => art.category === categoryId);
};
