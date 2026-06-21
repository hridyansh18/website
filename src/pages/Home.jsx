import Hero from "../components/Hero";
import FeaturedGallery from "../components/FeaturedGallery";
import CommissionSection from "../components/CommissionSection";
import PricingSection from "../components/PricingSection";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";
import AboutPreview from "../components/AboutPreview";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedGallery />
      <CommissionSection />
      <PricingSection />
      <ProcessSection />
      <Testimonials />
      <AboutPreview />
      <ContactCTA />
    </>
  );
};

export default Home;
