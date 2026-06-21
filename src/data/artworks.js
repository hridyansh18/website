// Artwork data for Sandeep Art Gallery
//
// Real photographed artworks live in src/assets/images/artworks/.
// To add a new piece: save the photo into that folder, import it below,
// then add a new object to the `artworks` array using that import.
// See src/assets/images/README.md for more detail.

import krishnaWithRoses from "../assets/images/artworks/krishna-with-roses.jpg";
import balKrishna from "../assets/images/artworks/bal-krishna.png";
import sariPortraitBloodArt from "../assets/images/artworks/sari-portrait-blood-art.png";
import hanumanDivine from "../assets/images/artworks/hanumanji.png";
import gracefulSmile from "../assets/images/artworks/girl.png";
import kaliPainting from "../assets/images/artworks/kali-mata.png";

export const categories = [
  { id: "all", label: "All Works" },
  { id: "portraits", label: "Portraits" },
  { id: "religious", label: "Religious Art" },
  { id: "blood-art", label: "Blood Art" },
  { id: "canvas", label: "Canvas Paintings" },
  { id: "sketches", label: "Pencil Sketches" },
];

export const artworks = [
  {
    id: 1,
    title: "Divine Hanuman",
    category: "canvas",
    categoryLabel: "Canvas Paintings",
    medium: "Acrylic on Canvas",
    year: "2024",
    size: "20in x 24in",
    image: hanumanDivine,
    orientation: "portrait",
    description:
      "A majestic portrayal of Lord Hanuman adorned with sacred ornaments and vibrant floral garlands. The artwork symbolizes devotion, strength, and unwavering faith through rich colors and intricate detailing.",
  },
  {
    id: 2,
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
  id: 3,
  title: "Graceful Smile",
  category: "pencil-sketch",
  categoryLabel: "Pencil Sketches",
  medium: "Charcoal & Graphite on Paper",
  year: "2024",
  size: "14in x 18in",
  image: gracefulSmile,
  orientation: "portrait",
  description:
    "A beautifully detailed portrait capturing a warm smile and relaxed elegance. Delicate shading and refined pencil work bring depth, realism, and emotional warmth to the composition.",
},
  {
    id: 4,
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
    id: 5,
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
  id: 3,
  title: "Fierce Goddess Kali",
  category: "canvas",
  categoryLabel: "Canvas Paintings",
  medium: "Acrylic on Canvas",
  year: "2025",
  size: "20in x 24in",
  image: kaliPainting,
  orientation: "portrait",
  description:
    "A powerful depiction of Goddess Kali, embodying divine energy and transformation. Bold colors, expressive features, and ornate embellishments create a striking visual representation of strength and protection.",
},
];

export const getArtworksByCategory = (categoryId) => {
  if (categoryId === "all") return artworks;
  return artworks.filter((art) => art.category === categoryId);
};
