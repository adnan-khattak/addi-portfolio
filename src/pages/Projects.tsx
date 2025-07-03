import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";

const Projects = () => {
  const { ref: headerRef, isInView: headerVisible } = useScrollAnimations();
  const { ref: projectsRef, isInView: projectsVisible } = useScrollAnimations();

  const projects = [
    {
      title: "Nuviamind",
      description: "AI wellness app with meditation features, HealthKit integration, multilingual support, and secure authentication. Built with OpenAI and ElevenLabs APIs for personalized wellness experiences.",
      technologies: ["React Native", "TypeScript", "OpenAI API", "ElevenLabs API", "HealthKit", "Firebase", "Stripe"],
      category: "AI Wellness",
      status: "Production",
      company: "SAASTELLAR",
      year: "2025"
    },
    {
      title: "Services App",
      description: "Social-style service platform featuring ads integration, voice calling capabilities, and social interactions with likes and comments system for service providers and clients.",
      technologies: ["React Native", "Firebase", "Google Ads", "WebRTC", "Redux", "FCM"],
      category: "Social Platform",
      status: "Completed",
      company: "TechCreator",
      year: "2024-2025"
    },
    {
      title: "Rideshare App",
      description: "Real-time ride booking application with Google Maps integration, live tracking, payment processing, and efficient ride matching algorithms.",
      technologies: ["React Native", "Google Maps API", "Firebase", "Stripe", "Redux", "WebSocket"],
      category: "Transportation",
      status: "Completed",
      company: "Personal Project",
      year: "2024"
    },
    {
      title: "Fire Safety App",
      description: "ML-powered fire detection system with real-time alerts, emergency notifications, and comprehensive safety management for residential and commercial properties.",
      technologies: ["React Native", "Machine Learning", "FCM", "Firebase", "Camera API", "Push Notifications"],
      category: "Safety & Security",
      status: "Completed",
      company: "Eonlight Solution",
      year: "2024"
    },
    {
      title: "Community Cleanup App",
      description: "Real-time citizen reporting platform with task management system featuring two-panel interface for efficient community cleanup coordination and monitoring.",
      technologies: ["React Native", "Firebase", "Google Maps", "Redux", "Real-time Database", "Image Processing"],
      category: "Community",
      status: "Completed",
      company: "Grey Software",
      year: "2023-2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">My Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of mobile applications I've built, from AI-powered wellness apps to real-time safety systems, 
            demonstrating expertise in React Native and modern mobile development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={projectsRef}
          variants={containerVariants}
          initial="hidden"
          animate={projectsVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="h-full bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-primary mb-2 group-hover:text-honey transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="text-accent font-medium">{project.company}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Production' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {project.title === "Nuviamind" && (
                      <Button variant="honey" size="sm" className="flex-1">
                        Live App
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={projectsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Great?</h3>
              <p className="text-primary-foreground/80 mb-6">
                Let's discuss your next mobile app project and bring your ideas to life with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="/contact">Start a Project</a>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="/experience">View Experience</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;