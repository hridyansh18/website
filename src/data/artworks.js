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
import couplePortrait from "../assets/images/artworks/couple-portrait.png";
import motherPortrait from "../assets/images/artworks/mother.png";
import youngManSketch from "../assets/images/artworks/youngMan.png";
import traditionalWoman from "../assets/images/artworks/traditionalWoman.png";
import happyCouple from "../assets/images/artworks/happyCouple.png";
import traditionalGirl from "../assets/images/artworks/traditionalGirl.png";
import modernGirl from "../assets/images/artworks/modernGirl.png";
import smilingLady from "../assets/images/artworks/smilingLady.png";
import gentlemanPortrait from "../assets/images/artworks/gentlemanPortrait.png";
import elegantWoman from "../assets/images/artworks/elegantWoman.png";
import royalCouplePortrait from "../assets/images/artworks/royalCouplePortrait.png";
import smilingGirlPortrait from "../assets/images/artworks/smilingGirlPortrait.png";
import grandmotherPortrait from "../assets/images/artworks/grandmotherPortrait.png";
import traditionalWomanSketch from "../assets/images/artworks/traditional.png";
import familyPortrait from "../assets/images/artworks/family.png";
import girlWithDog from "../assets/images/artworks/girlWithDog.png";
import fatherSonPortrait from "../assets/images/artworks/fatherSon.png";  

export const categories = [
  { id: "all", label: "All Works" },
  { id: "religious", label: "Religious Art" },
  { id: "blood-art", label: "Blood Art" },
  { id: "oil-paintings", label: "Oil Paintings" },
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
    category: "oil-paintings",
    categoryLabel: "Oil Paintings",
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
    category: "oil-paintings",
    categoryLabel: "Oil Paintings",
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
{
  id: 11,
  title: "Couple Portrait",
  category: "oil-paintings",
  categoryLabel: "Oil Paintings",
  medium: "Oil on Canvas",
  year: "2025",
  size: '24" × 30"',
  image: couplePortrait,
  orientation: "portrait",
  description:
    "A vibrant handcrafted oil portrait of a smiling couple featuring expressive brushstrokes and a modern abstract background.",
},

{
  id: 12,
  title: "Mother Portrait",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '16" × 20"',
  image: motherPortrait,
  orientation: "portrait",
  description:
    "A heartfelt blood art portrait capturing the warmth, grace, and unconditional love of a mother with intricate traditional details.",
},

{
  id: 13,
  title: "Young Man Sketch",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '16" × 20"',
  image: youngManSketch,
  orientation: "portrait",
  description:
    "A realistic blood portrait of a smiling young man showcasing detailed facial expressions and lifelike shading.",
},

{
  id: 14,
  title: "Traditional Woman Portrait",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '18" × 24"',
  image: traditionalWoman,
  orientation: "portrait",
  description:
    "An elegant blood art portrait of a woman in traditional attire, highlighting cultural beauty and intricate jewelry.",
},

{
  id: 15,
  title: "Couple Commission Portrait",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '18" × 24"',
  image: happyCouple,
  orientation: "portrait",
  description:
    "A customized blood portrait celebrating togetherness with realistic detailing and expressive smiles.",
},

{
  id: 16,
  title: "Traditional Girl Portrait",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '18" × 24"',
  image: traditionalGirl,
  orientation: "portrait",
  description:
    "A graceful blood art portrait featuring a young woman in traditional dress with elegant ornaments and refined detailing.",
},

{
  id: 17,
  title: "Modern Girl Portrait",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '16" × 20"',
  image: modernGirl,
  orientation: "portrait",
  description:
    "A clean and realistic blood portrait of a young woman with natural expressions and delicate artistic shading.",
},

{
  id: 18,
  title: "Smiling Lady Portrait",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '18" × 24"',
  image: smilingLady,
  orientation: "portrait",
  description:
    "A beautifully handcrafted blood portrait emphasizing joyful expressions, traditional attire, and fine tonal work.",
},

{
  id: 19,
  title: "Professional Gentleman Portrait",
  category: "oil-paintings",
  categoryLabel: "Oil Paintings",
  medium: "Oil on Canvas",
  year: "2025",
  size: '24" × 36"',
  image: gentlemanPortrait,
  orientation: "portrait",
  description:
    "A formal oil painting of a gentleman in a cream suit with realistic textures and a classic studio background.",
},

{
  id: 20,
  title: "Elegant Woman Portrait",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '16" × 20"',
  image: elegantWoman,
  orientation: "portrait",
  description:
    "A realistic blood art portrait of a young woman with traditional jewelry, soft shading, and expressive facial features.",
},
{
  id: 21,
  title: "Royal Couple Portrait",
  category: "oil-paintings",
  categoryLabel: "Oil Paintings",
  medium: "Oil on Canvas",
  year: "2025",
  size: '24" × 36"',
  image: royalCouplePortrait,
  orientation: "portrait",
  description:
    "A luxurious oil painting of a distinguished couple in traditional attire, featuring rich textures, vibrant colors, and timeless elegance.",
},

{
  id: 22,
  title: "Smiling Girl Portrait",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '16" × 20"',
  image: smilingGirlPortrait,
  orientation: "portrait",
  description:
    "A realistic blood art portrait of a smiling young woman, capturing her cheerful expression with delicate shading and fine detailing.",
},

{
  id: 23,
  title: "Grandmother Portrait",
  category: "oil-paintings",
  categoryLabel: "Oil Paintings",
  medium: "Oil on Canvas",
  year: "2025",
  size: '24" × 30"',
  image: grandmotherPortrait,
  orientation: "portrait",
  description:
    "A heartfelt oil painting of an elderly woman, beautifully portraying wisdom, warmth, and the grace of age with lifelike brushwork.",
},

{
  id: 24,
  title: "Traditional Woman Sketch",
  category: "blood-art",
  categoryLabel: "Blood Art",
  medium: "Blood on Paper",
  year: "2025",
  size: '16" × 20"',
  image: traditionalWomanSketch,
  orientation: "portrait",
  description:
    "An elegant blood art portrait of a young woman in traditional attire, highlighted with intricate patterns and expressive features.",
},
{
  id: 25,
  title: "Family Portrait",
  category: "oil-paintings",
  categoryLabel: "Oil Paintings",
  medium: "Oil on Canvas",
  year: "2025",
  size: '30" × 40"',
  image: familyPortrait,
  orientation: "portrait",
  description:
    "A beautifully handcrafted oil painting of a happy family, capturing love, warmth, and togetherness with realistic detailing and elegant lighting.",
},

{
  id: 26,
  title: "Girl with Labrador Portrait",
  category: "oil-paintings",
  categoryLabel: "Oil Paintings",
  medium: "Colored Pencil on Paper",
  year: "2025",
  size: '18" × 24"',
  image: girlWithDog,
  orientation: "portrait",
  description:
    "A realistic colored pencil portrait of a young woman with her beloved Labrador, celebrating the special bond between humans and pets.",
},

{
  id: 27,
  title: "Father and Son Portrait",
  category: "oil-paintings",
  categoryLabel: "Oil Paintings",
  medium: "Oil on Canvas",
  year: "2025",
  size: '36" × 48"',
  image: fatherSonPortrait,
  orientation: "portrait",
  description:
    "A heartwarming oil painting portraying the affectionate bond between a father and son, painted with expressive realism and vibrant colors.",
},
];

export const getArtworksByCategory = (categoryId) => {
  if (categoryId === "all") return artworks;
  return artworks.filter((art) => art.category === categoryId);
};
