import { skills, skillCategories as categories, portfolioStats } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  GitBranch,
  Brain,
  Settings
} from "lucide-react";

const Skills = () => {
  const categoryIcons = [Smartphone, Brain, Database, Cloud, Code2];
  const gradients = ["from-primary to-primary-glow", "from-accent to-accent-glow", "from-honey to-honey-dark", "from-primary-glow to-accent"];
  const skillCategories = categories.filter(category => category !== "All").map((title, index) => ({
    title,
    icon: categoryIcons[index % categoryIcons.length],
    gradient: gradients[index % gradients.length],
    skills: skills.filter(skill => skill.category === title),
  }));
  const tools = [
    { name: "GitHub Actions", icon: GitBranch },
    { name: "Xcode CLI", icon: Settings },
    { name: "Firebase App Distribution", icon: Cloud },
    { name: "Crashlytics & Sentry", icon: Database },
    { name: "Claude Code", icon: Brain },
    { name: "Cursor", icon: Code2 },
    { name: "MCP tooling", icon: Settings },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Practical tools for production mobile apps: React Native and native features,
              CI/CD and distribution, crash debugging, and AI-assisted engineering.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="p-8 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-glow`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>

                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Specialized Tools</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="group flex flex-col items-center gap-3 p-6 bg-card/30 border border-border/30 rounded-2xl hover:bg-card/60 hover:border-border/60 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            {portfolioStats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
