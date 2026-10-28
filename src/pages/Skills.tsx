import { skills, skillCategories, portfolioStats } from "@/data/portfolio";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Skills & Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production mobile engineering across React Native, native integrations, release automation, crash debugging, and AI-assisted development workflows.
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
          {portfolioStats.map(stat => (
            <Card key={stat.label} className="text-center bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
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
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                    {skill.name}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
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
                    {["React Native", "TypeScript", "JavaScript", "Redux", "Siri Shortcuts", "OCR/text recognition"].map((tech) => (
                      <div key={tech} className="flex flex-wrap items-center justify-between gap-2 p-2 rounded bg-background/50">
                        <span className="text-sm">{tech}</span>

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
                    {["Firebase", "Supabase", "Google Maps", "HealthKit", "Stripe", "RevenueCat"].map((tech) => (
                      <div key={tech} className="flex flex-wrap items-center justify-between gap-2 p-2 rounded bg-background/50">
                        <span className="text-sm">{tech}</span>

                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery & Tooling */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <CardTitle className="text-primary">Delivery & Tooling</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["GitHub Actions", "Xcode CLI", "Firebase App Distribution", "Crashlytics & Sentry", "Claude Code", "Cursor", "MCP tooling"].map((tech) => (
                      <div key={tech} className="flex flex-wrap items-center justify-between gap-2 p-2 rounded bg-background/50">
                        <span className="text-sm">{tech}</span>

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
                Building or Modernizing a Mobile App?
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
