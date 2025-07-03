import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "SAASTELLAR",
      position: "Senior React Native Engineer",
      duration: "05/2025 - Present",
      location: "Doha, Qatar",
      type: "Full-time",
      description: "Building NuviaMind AI wellness app with advanced features including meditation, HealthKit integration, multilingual support, and secure authentication systems.",
      achievements: [
        "Integrated OpenAI and ElevenLabs APIs for AI-powered wellness features",
        "Implemented HealthKit integration for comprehensive health data tracking",
        "Built multilingual support for global user accessibility",
        "Developed secure authentication and subscription management"
      ],
      tech: ["React Native", "TypeScript", "OpenAI API", "ElevenLabs", "HealthKit", "Firebase"]
    },
    {
      company: "TechCreator",
      position: "React Native Developer",
      duration: "12/2024 - 05/2025",
      location: "Swabi, Pakistan",
      type: "Full-time",
      description: "Enhanced user satisfaction and feature utilization through real-time mobile features development and optimization.",
      achievements: [
        "Improved user engagement by implementing real-time features",
        "Enhanced app performance and user satisfaction metrics",
        "Collaborated with remote international teams effectively",
        "Delivered features ahead of project timelines"
      ],
      tech: ["React Native", "JavaScript", "Firebase", "Real-time APIs"]
    },
    {
      company: "Eonlight Solution",
      position: "Full Stack Mobile Developer",
      duration: "05/2024 - 12/2024",
      location: "Remote",
      type: "Full-time",
      description: "Developed fire safety application with ML-based real-time fire detection capabilities and emergency push notification alerts.",
      achievements: [
        "Built ML-powered real-time fire detection system",
        "Implemented emergency push notification infrastructure",
        "Integrated camera APIs for real-time monitoring",
        "Optimized app performance for critical safety scenarios"
      ],
      tech: ["React Native", "Machine Learning", "Firebase", "FCM", "Camera APIs"]
    },
    {
      company: "Grey Software",
      position: "React Native Developer",
      duration: "06/2023 - 05/2024",
      location: "Remote",
      type: "Full-time",
      description: "Created community cleanup application with real-time reporting capabilities and two-panel task management system for efficient community engagement.",
      achievements: [
        "Developed real-time citizen reporting system",
        "Built dual-panel task management interface",
        "Implemented geolocation-based community features",
        "Enhanced community engagement through intuitive UI/UX"
      ],
      tech: ["React Native", "TypeScript", "Google Maps", "Firebase", "Geolocation"]
    },
    {
      company: "CodSoft",
      position: "Intern",
      duration: "04/2023",
      location: "Remote",
      type: "Internship",
      description: "Built and optimized mobile application features while learning industry best practices and development workflows.",
      achievements: [
        "Successfully completed mobile app development projects",
        "Learned React Native fundamentals and best practices",
        "Contributed to feature optimization and bug fixes",
        "Gained experience in team collaboration and version control"
      ],
      tech: ["React Native", "JavaScript", "Git", "Mobile Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My journey through React Native development, building expertise in 
              mobile applications, AI integration, and real-time features across various innovative projects.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-honey hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-hero rounded-full border-4 border-background shadow-glow hidden md:block z-10" />

                  {/* Content Card */}
                  <Card className="ml-0 md:ml-20 p-8 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Building className="w-5 h-5 text-primary" />
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                        </div>
                        <p className="text-xl text-accent font-semibold mb-3">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <Badge variant="secondary">{exp.type}</Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="bg-muted/30 border-border/50 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;