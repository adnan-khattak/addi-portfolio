import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimations, useStaggeredAnimations } from "@/hooks/use-scroll-animations";

const Projects = () => {
  const { ref: headerRef, variants: headerVariants } = useScrollAnimations();
  const { ref: gridRef, containerVariants, childVariants } = useStaggeredAnimations(5, 0.15);
  const { ref: ctaRef, variants: ctaVariants } = useScrollAnimations();

  const projects = [
    {
      title: "Nuviamind",
      description: "AI wellness app with OpenAI integration, ElevenLabs voice synthesis, HealthKit data integration, and comprehensive meditation features.",
      image: "/placeholder.svg",
      tech: ["React Native", "OpenAI API", "ElevenLabs", "HealthKit", "TypeScript"],
      type: "AI Wellness",
      icon: Zap,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Services App",
      description: "Social-style service platform featuring advertisement system, in-app calling functionality, and user engagement with likes and comments.",
      image: "/placeholder.svg", 
      tech: ["React Native", "Firebase", "FCM", "TypeScript", "Social Features"],
      type: "Social Platform",
      icon: Globe,
      gradient: "from-accent to-accent-glow"
    },
    {
      title: "Rideshare App",
      description: "Real-time ride booking application with Google Maps integration, live tracking, and seamless booking experience.",
      image: "/placeholder.svg",
      tech: ["React Native", "Google Maps", "Real-time APIs", "Geolocation", "Firebase"],
      type: "Transportation",
      icon: Smartphone,
      gradient: "from-honey to-honey-dark"
    },
    {
      title: "Fire Safety App",
      description: "ML-powered fire detection system with real-time monitoring, emergency alerts, and automated notification system for safety management.",
      image: "/placeholder.svg",
      tech: ["React Native", "Machine Learning", "FCM", "Camera APIs", "Firebase"],
      type: "Safety",
      icon: Zap,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Community Cleanup App",
      description: "Real-time citizen reporting platform with two-panel task management system for efficient community engagement and cleanup coordination.",
      image: "/placeholder.svg",
      tech: ["React Native", "Google Maps", "Firebase", "Real-time Features", "Geolocation"],
      type: "Community",
      icon: Globe,
      gradient: "from-green-500 to-teal-500"
    }
  ];

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
              Showcasing my React Native projects featuring AI integration, real-time features, and innovative mobile solutions.
              Each project demonstrates expertise in modern mobile development and emerging technologies.
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
            {projects.map((project, index) => (
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
                      className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-30`}
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
                        <project.icon className="w-16 h-16 text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300" />
                      </motion.div>
                    </div>
                    <Badge 
                      className="absolute top-4 right-4 bg-background/90 text-foreground border-border/50 backdrop-blur-sm"
                    >
                      {project.type}
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
                      {project.tech.map((tech, techIndex) => (
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

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.div 
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button variant="outline" size="sm" className="w-full group/btn">
                          <motion.div
                            className="flex items-center"
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                            Code
                          </motion.div>
                        </Button>
                      </motion.div>
                      <motion.div 
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button variant="hero" size="sm" className="w-full group/btn">
                          <motion.div
                            className="flex items-center"
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                            Demo
                          </motion.div>
                        </Button>
                      </motion.div>
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
              <Button variant="hero" size="lg" className="group">
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View All Projects
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;