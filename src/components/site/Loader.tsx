import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2500);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center"
        >
          <motion.img
            src={logo}
            alt="Nature Lovers Adventure"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-2 ring-gold/40"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-display font-bold text-cream text-xl md:text-2xl tracking-tight"
          >
            NATURE LOVERS ADVENTURE
          </motion.div>
          <div className="mt-8 w-[240px] h-px bg-cream/15 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
              className="h-full bg-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
