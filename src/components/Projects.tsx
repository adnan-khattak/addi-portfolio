import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Zap } from "lucide-react";

const Projects = () => {
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="bg-gradient-hero bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing my React Native projects featuring AI integration, real-time features, and innovative mobile solutions.
              Each project demonstrates expertise in modern mobile development and emerging technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-foreground/60" />
                  </div>
                  <Badge 
                    className="absolute top-4 right-4 bg-background/90 text-foreground border-border/50"
                  >
                    {project.type}
                  </Badge>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="hero" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
            <Button variant="hero" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;