import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skillCategories = [
    "All",
    "Mobile",
    "Frontend", 
    "Backend",
    "APIs & Integrations",
    "Tools & Workflow"
  ];

  const skills = [
    {
      name: "React Native",
      category: "Mobile",
      level: 95,
      years: "3+ years",
      description: "Expert in cross-platform mobile development, performance optimization, and native module integration.",
      projects: 12
    },
    {
      name: "TypeScript",
      category: "Frontend",
      level: 90,
      years: "3+ years", 
      description: "Advanced proficiency in type safety, modern patterns, and large-scale application development.",
      projects: 10
    },
    {
      name: "JavaScript",
      category: "Frontend",
      level: 88,
      years: "3+ years",
      description: "Extensive experience with ES6+, async programming, and modern JavaScript frameworks.",
      projects: 15
    },
    {
      name: "Redux",
      category: "Frontend",
      level: 85,
      years: "3+ years",
      description: "State management for complex applications, middleware integration, and performance optimization.",
      projects: 8
    },
    {
      name: "Firebase",
      category: "Backend",
      level: 92,
      years: "3+ years",
      description: "Real-time databases, authentication, cloud functions, push notifications, and analytics.",
      projects: 12
    },
    {
      name: "Supabase",
      category: "Backend",
      level: 80,
      years: "2+ years",
      description: "Modern backend-as-a-service with PostgreSQL, real-time subscriptions, and authentication.",
      projects: 5
    },
    {
      name: "Stripe",
      category: "APIs & Integrations",
      level: 85,
      years: "2+ years",
      description: "Payment processing, subscription management, and secure financial transactions.",
      projects: 6
    },
    {
      name: "HealthKit",
      category: "APIs & Integrations",
      level: 80,
      years: "1+ years",
      description: "iOS health data integration, wellness tracking, and privacy-compliant health apps.",
      projects: 2
    },
    {
      name: "OpenAI API",
      category: "APIs & Integrations",
      level: 85,
      years: "1+ years",
      description: "AI integration, natural language processing, and intelligent app features.",
      projects: 3
    },
    {
      name: "ElevenLabs API",
      category: "APIs & Integrations",
      level: 80,
      years: "1+ years",
      description: "Voice synthesis, text-to-speech integration, and audio content generation.",
      projects: 2
    },
    {
      name: "Google Maps API",
      category: "APIs & Integrations",
      level: 88,
      years: "2+ years",
      description: "Location services, mapping, geolocation, and navigation features.",
      projects: 7
    },
    {
      name: "FCM (Firebase Cloud Messaging)",
      category: "Backend",
      level: 85,
      years: "3+ years",
      description: "Push notifications, messaging, and real-time communication systems.",
      projects: 10
    },
    {
      name: "Google Ads",
      category: "APIs & Integrations",
      level: 75,
      years: "1+ years", 
      description: "Ad integration, monetization strategies, and advertising platform integration.",
      projects: 3
    },
    {
      name: "Git",
      category: "Tools & Workflow",
      level: 90,
      years: "3+ years",
      description: "Version control, collaborative development, branching strategies, and code review.",
      projects: 15
    },
    {
      name: "Agile Development",
      category: "Tools & Workflow",
      level: 82,
      years: "3+ years",
      description: "Scrum methodology, sprint planning, and collaborative development practices.",
      projects: 10
    },
    {
      name: "Material UI",
      category: "Frontend",
      level: 78,
      years: "2+ years",
      description: "UI component library, design systems, and consistent user interface development.",
      projects: 6
    }
  ];

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getSkillColor = (level: number) => {
    if (level >= 90) return "text-green-500";
    if (level >= 80) return "text-blue-500";
    if (level >= 70) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Skills & Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3 years of React Native expertise with focus on AI integrations, real-time features, and cross-platform mobile development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {skillCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "hero" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Skills Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Card className="text-center bg-gradient-hero text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-6">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-honey">8+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {filteredSkills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border/50 bg-gradient-card"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                    {skill.name}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Skill Level Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className={`text-sm font-semibold ${getSkillColor(skill.level)}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-hero h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Experience & Projects */}
                <div className="flex justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium text-foreground">{skill.years}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-muted-foreground">Projects:</span>
                    <span className="font-medium text-foreground">{skill.projects}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack Visual */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Technology Stack</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mobile & Frontend */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <CardTitle className="text-primary">Mobile & Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["React Native", "TypeScript", "JavaScript", "Redux", "Material UI"].map((tech) => (
                      <div key={tech} className="flex items-center justify-between p-2 rounded bg-background/50">
                        <span className="text-sm">{tech}</span>
                        <Badge variant="outline" className="text-xs">Expert</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Backend & Services */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle className="text-primary">Backend & Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Firebase", "Supabase", "FCM", "Stripe", "Google Maps"].map((tech) => (
                      <div key={tech} className="flex items-center justify-between p-2 rounded bg-background/50">
                        <span className="text-sm">{tech}</span>
                        <Badge variant="outline" className="text-xs">Advanced</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI & Integrations */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <CardTitle className="text-primary">AI & Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["OpenAI API", "ElevenLabs API", "HealthKit", "Google Ads", "Git"].map((tech) => (
                      <div key={tech} className="flex items-center justify-between p-2 rounded bg-background/50">
                        <span className="text-sm">{tech}</span>
                        <Badge variant="outline" className="text-xs">Proficient</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '1s' }}>
          <Card className="bg-gradient-hero p-8 text-center border-0 shadow-glow max-w-2xl mx-auto">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Leverage These Skills?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Let's discuss how my expertise can help solve your technical challenges and drive your project forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="honey" size="lg" asChild>
                  <a href="/contact">Start a Project</a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="/projects">View My Work</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;