import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import ProjectTile from "@/components/ui/ProjectTile";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggleProjects = () => {
    if (visibleCount < projects.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 bg-card/30 blueprint-grid-dense-intense"
      ref={ref}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <div className="w-12 h-px bg-primary" />
          <span className="section-number">/ SOME OF MY WORK</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Open Source
            <br />
            <span className="text-highlight">Contributions</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-md lg:text-right"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            A curated selection of open source projects demonstrating full-stack development, 
            API design, and modern architectural patterns. Contributing to the developer community.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <ProjectTile
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              isHovered={hoveredProject === project.id}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            />
          ))}
        </div>

        {/* View all projects */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="outline" size="lg" onClick={handleToggleProjects}>
              {visibleCount < projects.length ? "View More..." : "Show Less"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
