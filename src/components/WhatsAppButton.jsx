import { motion } from "framer-motion";
import { whatsappLink } from "../data/siteConfig";

const WhatsAppButton = () => {
  const href = whatsappLink(
    "Hello Sandeep, I'm interested in commissioning a piece of art."
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.45)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <svg
        viewBox="0 0 32 32"
        className="relative w-7 h-7 sm:w-8 sm:h-8 fill-white"
        aria-hidden="true"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.366.694 4.57 1.892 6.422L4 29l7.74-1.853a11.93 11.93 0 0 0 4.261.78h.005c6.627 0 12-5.373 12-12.001C28.006 8.373 22.633 3 16.001 3zm0 21.79h-.004a9.78 9.78 0 0 1-4.98-1.36l-.357-.212-3.71.888.991-3.617-.233-.371a9.74 9.74 0 0 1-1.498-5.117c0-5.395 4.39-9.785 9.795-9.785 2.616 0 5.075 1.02 6.924 2.872a9.726 9.726 0 0 1 2.866 6.92c0 5.396-4.39 9.782-9.794 9.782zm5.366-7.33c-.294-.147-1.74-.858-2.01-.956-.27-.098-.467-.147-.663.147-.196.294-.76.956-.932 1.152-.171.196-.343.22-.637.073-.294-.147-1.241-.457-2.363-1.457-.874-.78-1.464-1.744-1.636-2.038-.171-.294-.018-.453.129-.6.132-.132.294-.343.441-.514.147-.171.196-.294.294-.49.098-.196.049-.367-.025-.514-.073-.147-.663-1.597-.909-2.188-.24-.575-.484-.498-.663-.507l-.564-.01c-.196 0-.514.073-.784.367-.27.294-1.03 1.006-1.03 2.456 0 1.45 1.054 2.85 1.2 3.046.147.196 2.075 3.168 5.027 4.442.703.303 1.252.484 1.68.62.706.225 1.349.193 1.857.117.566-.085 1.74-.711 1.985-1.398.245-.687.245-1.276.172-1.398-.073-.122-.27-.196-.564-.343z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
