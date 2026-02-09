import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories, skillFacts } from "@/data/skills";
import SkillSet from "@/components/ui/SkillSet";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [clickedSkill, setClickedSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    if (skillFacts[skill]) {
      setClickedSkill(skill);
      setTimeout(() => setClickedSkill(null), 2000);
    }
  };

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50h40M60 50h40M50 0v40M50 60v40"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-primary"
              />
              <circle
                cx="50"
                cy="50"
                r="4"
                fill="currentColor"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Easter egg tooltip */}
      {clickedSkill && skillFacts[clickedSkill] && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-primary text-primary-foreground px-6 py-3 font-mono text-sm"
        >
          {clickedSkill}: {skillFacts[clickedSkill]}
        </motion.div>
      )}

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <div className="w-12 h-px bg-primary" />
          <span className="section-number">04 / SKILLS</span>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-1">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              Technical
              <br />
              <span className="text-highlight">Toolkit</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              A comprehensive set of technologies I've been working with over
              years of building production systems.{" "}
              <span className="text-primary/75 italic">
                Click some skills for secrets!
              </span>
            </motion.p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <SkillSet
                  key={category.title}
                  category={category}
                  index={categoryIndex}
                  isInView={isInView}
                  onSkillClick={handleSkillClick}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="flex items-center gap-4 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="w-4 h-4 bg-primary"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            Always expanding the toolkit
          </span>
          <div className="flex-1 h-px bg-primary/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
