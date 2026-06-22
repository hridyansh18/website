import Hero from "../components/Hero";
import CommissionSection from "../components/CommissionSection";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";
import AboutPreview from "../components/AboutPreview";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <CommissionSection />
      <ProcessSection />
      <Testimonials />
      <AboutPreview />
      <ContactCTA />
    </>
  );
};

export default Home;
