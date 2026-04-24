import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/repertoire";

const Repertoire = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="repertoire" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-card/25 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-primary" />
          <span className="section-number">/ REAL-WORLD EXPERIENCE</span>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My
            <br />
            <span className="text-highlight">Repertoire</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            aria-hidden="true"
            className="absolute w-96 h-96 border-2 border-primary/20 rotate-12 hidden lg:block"
          />
          <motion.div
            aria-hidden="true"
            className="absolute -right-20 -bottom-20 w-24 h-24 border-2 border-primary/50 rotate-12 hidden lg:block"
          />
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative border-l-2 border-primary/30 pl-8 pb-8"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 top-0 w-6 h-6 bg-primary border-4 border-background rounded-full" />

              {/* Experience Card */}
              <motion.div
                className="group p-6 border border-border bg-card/50 hover:border-primary/70 transition-all duration-500"
                whileHover={{ x: 10 }}
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <motion.h3
                      className="text-xl font-bold text-foreground"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                    >
                      {exp.position}
                    </motion.h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">
                        {exp.company}
                      </span>
                      {exp.location && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Date Range */}
                <div className="flex items-center gap-2 mb-4 font-mono text-xs text-muted-foreground">
                  <span>{exp.startDate}</span>
                  <span className="w-2 h-px bg-primary/50" />
                  <span>{exp.endDate}</span>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4 text-muted-foreground">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary mt-1">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/5 border border-primary/30 text-primary/80 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Repertoire;
