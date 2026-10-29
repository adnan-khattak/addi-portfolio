import { productionProjects } from "@/data/portfolio";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimations, useStaggeredAnimations } from "@/hooks/use-scroll-animations";

const Projects = () => {
  const { ref: headerRef, variants: headerVariants } = useScrollAnimations();
  const { ref: gridRef, containerVariants, childVariants } = useStaggeredAnimations(5, 0.15);
  const { ref: ctaRef, variants: ctaVariants } = useScrollAnimations();


  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={headerRef}
            className="text-center mb-16"
            initial={headerVariants.slideUp.initial}
            animate={headerVariants.slideUp.animate}
            transition={headerVariants.slideUp.transition}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Production apps across automotive, personal finance, equestrian, and fitness products.
              My work covers feature delivery, native integrations, maintenance, and releases.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {productionProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={childVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="group overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 h-full cursor-pointer">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      className={`h-48 bg-gradient-to-br ${["from-primary to-primary-glow", "from-accent to-accent-glow", "from-honey to-honey-dark"][index % 3]} opacity-20 transition-opacity duration-300 group-hover:opacity-30`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        <Smartphone className="w-16 h-16 text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300" />
                      </motion.div>
                    </div>
                    <Badge
                      className="absolute top-4 right-4 bg-background/90 text-foreground border-border/50 backdrop-blur-sm"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "hsl(var(--primary) / 0.1)",
                            color: "hsl(var(--primary))"
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs bg-muted/50 text-muted-foreground transition-all duration-200 cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <Badge variant="outline" className="mb-4">Production</Badge>
                    <div>
                      {project.url ? (
                        <Button variant="hero" size="sm" asChild>
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />View {project.title}
                          </a>
                        </Button>
                      ) : (
                        <Button variant="hero" size="sm" asChild>
                          <Link to={`/contact?subject=${encodeURIComponent(project.title)}`}>Discuss {project.title}</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            ref={ctaRef}
            className="text-center"
            initial={ctaVariants.fadeIn.initial}
            animate={ctaVariants.fadeIn.animate}
            transition={ctaVariants.fadeIn.transition}
          >
            <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/projects">View All Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
