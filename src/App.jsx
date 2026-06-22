import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Commission from "./pages/Commission";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35, ease: "easeInOut" },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/gallery"
          element={
            <motion.div {...pageTransition}>
              <Gallery />
            </motion.div>
          }
        />
        <Route
          path="/commission"
          element={
            <motion.div {...pageTransition}>
              <Commission />
            </motion.div>
          }
        />
        <Route
          path="/pricing"
          element={
            <motion.div {...pageTransition}>
              <Pricing />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div {...pageTransition}>
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="bg-emerald-deep min-h-screen font-body">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
