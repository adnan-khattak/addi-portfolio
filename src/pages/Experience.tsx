import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Experience = () => {
  const experiences = [
    {
      company: "Voultrex",
      position: "Software Engineer",
      period: "05/2025 - Present",
      location: "Doha, Qatar",
      type: "Full-time",
      description: "Building Evolve AI Fitness App with advanced features including meditation, HealthKit integration, multilingual support, and secure authentication systems.",
      achievements: [
        "Integrated OpenAI for personalized Fitness and Calories experiences",
        "Implemented secure authentication and subscription management with Stripe",
        "Developed multilingual support for global user base",
        "Built comprehensive HealthKit integration for wellness tracking",
        "Integerate Mapbox for User live tracking"
      ],
      technologies: ["React Native", "TypeScript", "OpenAI API", "HealthKit", "Firebase", "Supabase", "RevenueCat"]
    },
    {
      company: "TechCreator",
      position: "React Native Developer",
      period: "12/2024 - 05/2025",
      location: "Swabi, Pakistan",
      type: "Full-time",
      description: "Enhanced user satisfaction and feature utilization with real-time mobile features. Developed social-style service platform with advanced functionality.",
      achievements: [
        "Built Services App with social interactions (likes, comments)",
        "Integrated Google Ads and voice calling capabilities",
        "Improved user engagement through real-time features",
        "Enhanced overall app performance and user satisfaction"
      ],
      technologies: ["React Native", "Firebase", "Google Ads", "WebRTC", "Redux", "FCM"]
    },
    {
      company: "Eonlight Solution",
      position: "Full Stack Mobile Developer",
      period: "05/2024 - 12/2024",
      location: "Remote",
      type: "Full-time",
      description: "Developed fire safety application with ML-based real-time detection and push alerts for comprehensive safety management.",
      achievements: [
        "Implemented ML-powered fire detection algorithms",
        "Built real-time alert system with push notifications",
        "Developed emergency response coordination features",
        "Created comprehensive safety management dashboard"
      ],
      technologies: ["React Native", "Machine Learning", "FCM", "Firebase", "Camera API", "Push Notifications"]
    },
    {
      company: "Grey Software",
      position: "React Native Developer",
      period: "06/2023 - 05/2024",
      location: "Remote",
      type: "Full-time",
      description: "Created community cleanup app with real-time reporting and two-panel task management system for efficient community coordination.",
      achievements: [
        "Built real-time citizen reporting platform",
        "Developed two-panel task management interface",
        "Implemented Google Maps integration for location tracking",
        "Created efficient community coordination workflows"
      ],
      technologies: ["React Native", "Firebase", "Google Maps", "Redux", "Real-time Database", "Image Processing"]
    },
    {
      company: "CodSoft",
      position: "Intern",
      period: "04/2023",
      location: "Remote",
      type: "Internship",
      description: "Built and optimized mobile app features during internship program, gaining hands-on experience in React Native development.",
      achievements: [
        "Successfully completed internship program",
        "Built and optimized mobile app features",
        "Learned React Native development fundamentals",
        "Collaborated with development team on various projects"
      ],
      technologies: ["React Native", "JavaScript", "Firebase", "Git", "Agile Development"]
    }
  ];

  const testimonials = [
    {
      name: "Senior Product Manager",
      position: "International Company",
      content: "Working with Adnan has been exceptional. His React Native expertise and attention to detail helped deliver our mobile app ahead of schedule with outstanding performance.",
      rating: 5
    },
    {
      name: "Technical Lead",
      position: "Remote Team",
      content: "Adnan's ability to integrate complex APIs like OpenAI and HealthKit while maintaining code quality is impressive. His work on real-time features significantly improved user engagement.",
      rating: 5
    },
    {
      name: "Project Manager", 
      position: "Development Team",
      content: "The fire safety app with ML detection that Adnan built exceeded our expectations. His technical skills in React Native and problem-solving abilities are top-notch.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3 years of React Native development experience across international teams, building innovative mobile applications from AI wellness apps to ML-powered safety systems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16 px-4 md:px-0">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-honey rounded" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-0 w-12 md:w-16 h-12 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow z-10 animate-pulse">
                  <div className="w-5 md:w-6 h-5 md:h-6 bg-primary-foreground rounded-full shadow-lg" />
                </div>

                {/* Content Card with blurred background glow */}
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl -z-10" />
                  <Card className="md:ml-24 bg-gradient-card border-border/50 hover:shadow-elegant hover:scale-[1.02] transition-transform transition-shadow duration-500">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl text-primary tracking-wide font-semibold">
                            {exp.position}
                          </CardTitle>
                          <p className="text-lg font-semibold text-foreground tracking-tight">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end gap-2">
                          <Badge variant="secondary" className="w-fit px-3 py-1 rounded-full">
                            {exp.period}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`w-fit px-3 py-1 rounded-full ${
                              exp.type === 'Entrepreneurship'
                                ? 'border-honey text-honey'
                                : exp.type === 'Leadership'
                                ? 'border-accent text-accent'
                                : exp.type === 'Full-time'
                                ? 'border-primary text-primary'
                                : 'border-muted-foreground text-muted-foreground'
                            }`}
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-muted-foreground">
                              <CheckCircleIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-3 flex-col md:flex-row">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 rounded-full">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Client Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-card/50 border-border/50 hover:shadow-elegant hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-honey text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <Card className="bg-gradient-hero p-8 text-center border-0 shadow-glow max-w-2xl mx-auto">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Ready to add my expertise to your team? Let's discuss how I can help drive your next project to success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-honey text-foreground rounded-md font-medium hover:bg-honey-dark transition-colors"
                >
                  Hire Me
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background/20 text-primary-foreground rounded-md font-medium hover:bg-background/30 transition-colors border border-primary-foreground/20"
                >
                  Download Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
