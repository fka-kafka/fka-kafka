import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative min-h-screen flex items-center blueprint-grid-intense overflow-hidden">
      {/* Animated geometric accents */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 border border-primary/20 rotate-45 hidden lg:block"
        aria-hidden="true"
        animate={!reduceMotion ? { rotate: [45, 55, 45] } : {}}
        transition={!reduceMotion ? { duration: 10, repeat: Infinity, ease: "easeInOut" } : {}}
      />
      <motion.div className="absolute top-28 left-10 w-24 h-24 border border-primary/75 hidden md:block float" />
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full opacity-60 lg:opacity-100"
        aria-hidden="true"
        animate={!reduceMotion ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } : {}}
        transition={!reduceMotion ? { duration: 2, repeat: Infinity } : {}}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full opacity-60 lg:opacity-100"
        aria-hidden="true"
        animate={!reduceMotion ? { y: [0, -20, 0] } : {}}
        transition={!reduceMotion ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
      />

      {/* Vertical line accent */}
      <div className="absolute right-6 lg:right-12 top-32 bottom-32 w-px bg-primary/75  hidden md:block" />

      <div className="container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl">
          {/* Section indicator */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-12 h-px bg-primary"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="section-number">{profile.hero.greeting}</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {profile.name}
            <br />
            <motion.span
              className="text-highlight text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.span className="">
                {profile.title.split(" ").slice(0, 2).join(" ")} <br />
                {profile.title.split(" ").slice(2).join(" ")}
              </motion.span>
            </motion.span>
            <br />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className=" text-foreground text-2xl pb-1">
              {profile.hero.tagline}
            </span>
            <br />
            {profile.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#about"
            >
              <Button variant="hero" size="lg">
                Know More
              </Button>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="technical" size="lg">
                Get In Touch →
              </Button>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              {profile.hero.availability}
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-6 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
          animate={!reduceMotion ? { y: [0, 10, 0] } : {}}
          transition={!reduceMotion ? { duration: 2, repeat: Infinity } : {}}
        >
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown size={16} className="text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
