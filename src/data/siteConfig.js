// Central source of truth for site-wide contact details and brand copy.
// Update values here once — every component that needs contact info imports from this file.

export const siteConfig = {
  artistName: "Sandeep Singh Parmar",
  galleryName: "Sandeep Art Gallery",
  tagline: "Handmade Portraits From Your Memories",

  email: "sandeeparts00@gmail.com",

  phones: [
    { raw: "9171105322", display: "+91 91711 05322" },
    { raw: "9202325750", display: "+91 92023 25750" },
  ],

  // Primary number used for WhatsApp links and the floating action button
  whatsappNumber: "919202325750",

  instagramHandle: "@sandeep_arts01",
  instagramUrl: "https://instagram.com/sandeep_arts01",
  youtubeUrl: "https://www.youtube.com/@Sandeeparts01",

  address: {
    line1: "Nehru Nagar, Road No 08",
    line2: "Atal Dwar Lig",
    city: "Indore",
    pincode: "452001",
    full: "Nehru Nagar, Road No 08, Atal Dwar Lig, Indore - 452001",
  },

  hours: ["Mon – Sat: 10am – 7pm", "Sunday: By appointment"],
};

export const whatsappLink = (message) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject, body) =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
