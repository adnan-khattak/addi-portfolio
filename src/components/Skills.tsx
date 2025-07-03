import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      skills: [
        { name: "React Native", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "Redux", level: 88 },
        { name: "Cross-Platform", level: 90 }
      ]
    },
    {
      title: "AI & APIs",
      icon: Brain,
      gradient: "from-accent to-accent-glow",
      skills: [
        { name: "OpenAI API", level: 85 },
        { name: "ElevenLabs API", level: 85 },
        { name: "HealthKit", level: 80 },
        { name: "Google Maps API", level: 88 },
        { name: "FCM", level: 85 }
      ]
    },
    {
      title: "Backend & Cloud",
      icon: Database,
      gradient: "from-honey to-honey-dark",
      skills: [
        { name: "Firebase", level: 90 },
        { name: "Supabase", level: 85 },
        { name: "Stripe", level: 82 },
        { name: "Real-time APIs", level: 88 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Development",
      icon: Code2,
      gradient: "from-primary-glow to-accent",
      skills: [
        { name: "Git", level: 90 },
        { name: "Agile", level: 85 },
        { name: "Google Ads", level: 75 },
        { name: "Material UI", level: 80 },
        { name: "Machine Learning", level: 70 }
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: GitBranch },
    { name: "Firebase", icon: Database },
    { name: "Google Maps", icon: Globe },
    { name: "OpenAI", icon: Brain },
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
              My expertise in React Native development, AI integration, real-time features, 
              and modern mobile app technologies.
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
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted/50"
                      />
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
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-honey mb-2">10+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">5+</div>
              <div className="text-muted-foreground">AI Integrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;