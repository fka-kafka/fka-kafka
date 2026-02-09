import { motion } from "framer-motion";
import { type SkillCategory, skillFacts } from "@/data/skills";

interface SkillSetProps {
  category: SkillCategory;
  index: number;
  isInView: boolean;
  onSkillClick: (skill: string) => void;
}

const SkillSet = ({
  category,
  index,
  isInView,
  onSkillClick,
}: SkillSetProps) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-primary/60">
          0{index + 1}
        </span>
        <h3 className="font-semibold uppercase tracking-wider text-sm">
          {category.title}
        </h3>
      </div>
      <div className="border-l-2 border-primary/30 pl-4 space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            className={`font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer skill-glow ${skillFacts[skill] ? "hover:pl-2" : ""}`}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.2 + index * 0.1 + skillIndex * 0.05,
            }}
            whileHover={{ x: 5, color: "hsl(var(--primary))" }}
            onClick={() => onSkillClick(skill)}
          >
            {skill}
            {skillFacts[skill] && (
              <span className="ml-1 text-primary/40 text-xs">
                •
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillSet;
