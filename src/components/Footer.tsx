import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleLogoClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 7) {
        setShowSecret(true);
        setTimeout(() => setShowSecret(false), 4000);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <footer className="py-8 border-t border-border relative">
      {/* Easter egg - secret message */}
      {showSecret && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 font-mono text-sm text-center"
        >
          Quite the Easter Egg Hunter I see ...
        </motion.div>
      )}

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <motion.div
            className="flex items-center gap-4 cursor-pointer"
            onClick={handleLogoClick}
            onKeyDown={(e) => e.key === "Enter" && handleLogoClick()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            role="button"
            tabIndex={0}
            aria-label="Brandon Kigen Logo - Click to find an easter egg"
          >
            <motion.div
              className="w-8 h-8 border border-primary/50 flex items-center justify-center"
              animate={clickCount > 0 ? { rotate: clickCount * 10 } : {}}
              transition={{ type: "spring" }}
            >
              <span className="font-mono text-primary text-xs font-bold">
                BK
              </span>
            </motion.div>
            <span className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Brandon Kigen. All rights
              reserved.
            </span>
          </motion.div>

          {/* Tech line */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-mono text-xs text-muted-foreground  tracking-widest">
              Crafted by <i>kafka</i>
            </span>
            <motion.div
              className="w-4 h-4 bg-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
