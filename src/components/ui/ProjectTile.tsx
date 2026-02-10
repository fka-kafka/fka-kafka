import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Project, ProjectIconName } from "@/data/projects";
import {
  BarChart3,
  Server,
  Lock,
  Calendar,
  Smartphone,
  ShoppingBag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Icon mapping for project categories
 * Maps string icon names from data to actual Lucide components
 */
const iconMap: Record<ProjectIconName, LucideIcon> = {
  BarChart3,
  Server,
  Lock,
  Calendar,
  Smartphone,
  ShoppingBag,
};

export interface ProjectTileProps {
  project: Project;
  index: number;
  isInView: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

/**
 * ProjectTile Component
 * Displays a single project card with hover animations and metadata
 */
const ProjectTile = ({
  project,
  index,
  isInView,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: ProjectTileProps) => {
  const IconComponent = iconMap[project.iconName];

  return (
    <motion.article
      className={`project-card group border bg-background p-6 lg:p-10 hover:border-primary/30 transition-all duration-500 ${
        project.featured ? "border-primary/20 bg-primary/5" : "border-border"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      whileHover={{ y: -5 }}
    >
      <div className="grid lg:grid-cols-12 gap-8 relative z-10">
        {/* Project number with hover icon */}
        <div className="lg:col-span-1 relative flex flex-col items-center">
          <motion.div
            className="relative w-12 h-12 flex items-center justify-center"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Number - fades out on hover */}
            <motion.span
              className="font-mono text-4xl lg:text-5xl font-bold text-primary/30 absolute inset-0 flex items-center justify-center transition-colors duration-500"
              animate={{ opacity: isHovered ? 0 : 1 }}
            >
              {project.id}
            </motion.span>

            {/* Icon - fades in on hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-primary"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            >
              <IconComponent className="w-10 h-10" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {project.featured && (
            <motion.div
              className="absolute -top-4 -right-2 bg-primary text-primary-foreground text-xs font-mono px-2 py-1 rounded"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              FEATURED
            </motion.div>
          )}
        </div>

        {/* Project info */}
        <div className="lg:col-span-7">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center">
              <span className="hidden sm:inline mr-3 opacity-50">•</span>
              Updated {project.updated}
            </span>
          </div>
          <motion.h3
            className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300"
            layout
          >
            {project.title}
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block ml-2"
              >
                <Sparkles className="w-5 h-5 text-primary inline" />
              </motion.span>
            )}
          </motion.h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 font-mono text-xs border border-border bg-muted/30 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + tagIndex * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="technical"
                size="sm"
                onClick={() => window.open(project.github, "_blank")}
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                <Github size={14} className="mr-2" />
                View Code
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.demo, "_blank")}
                aria-label={`View details for ${project.title}`}
              >
                <ExternalLink size={14} className="mr-2" />
                Details
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Metrics */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:border-l lg:border-border lg:pl-8">
          <span className="font-mono text-xs uppercase tracking-widest text-primary/70 lg:text-muted-foreground">
            Key Features
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-4">
            {project.metrics.map((metric, metricIndex) => (
              <motion.div
                key={metric}
                className="flex items-center gap-2 text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + metricIndex * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-2 h-2 bg-primary flex-shrink-0"
                  animate={isHovered ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                />
                <span className="font-mono text-foreground">{metric}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectTile;
