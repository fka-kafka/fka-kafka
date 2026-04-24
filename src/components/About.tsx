import { Cloud, Database, Layout, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { expertise } from "@/data/about";
import { profile } from "@/data/profile";
import type { ExpertiseIconName } from "@/data/about";
import type { LucideIcon } from "lucide-react";

/**
 * Icon mapping for expertise areas
 * Maps string icon names from data to actual Lucide components
 */
const iconMap: Record<ExpertiseIconName, LucideIcon> = {
  Layout,
  Server,
  Database,
  Cloud,
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background accent - simplified */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-card/30 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-primary" />
          <span className="section-number">/ WHO YOU'LL BE WORKING WITH</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Text */}
          <div className=" flex items-center ">
            <div>
              <motion.h2
                className="text-3xl md:text-3xl lg:text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {profile.about.heading.line1}
                <br />
                <span className="text-highlight">
                  {profile.about.heading.line2}
                </span>
              </motion.h2>

              <motion.div
                className="space-y-6 text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {profile.about.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right column - Expertise cards */}
          <motion.div
            className="space-y-4 lg:hover:scale-105 transition-transform duration-1000"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {expertise.map((item, index) => {
              const IconComponent = iconMap[item.iconName];
              return (
                <motion.div
                  key={item.title}
                  className="group p-6 border border-border bg-card/50 hover:border-primary/50 transition-all duration-500"
                  variants={itemVariants}
                  whileHover={{ x: 10, borderColor: "hsl(var(--primary))" }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs text-primary/60">
                          0{index + 1}
                        </span>
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
