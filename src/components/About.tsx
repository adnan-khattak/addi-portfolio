import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Coffee, Heart, Target, GraduationCap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that exceed expectations",
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Genuinely love crafting digital experiences that matter",
    },
    {
      icon: Coffee,
      title: "Collaborative",
      description: "Believe great products come from great teamwork",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-hero text-white ">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              React Native Developer with 3 years of experience building scalable 
              cross-platform mobile applications. Proven track record in delivering 
              AI-integrated wellness apps, real-time features, and secure subscription-based models.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Main Content */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With{" "}
                  <span className="text-primary font-semibold">
                    3 years of experience
                  </span>{" "}
                  in React Native development, I specialize in building cross-platform 
                  mobile applications that deliver exceptional user experiences across 
                  iOS and Android platforms.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My expertise includes{" "}
                  <span className="text-accent font-semibold">
                    AI integration
                  </span>{" "}
                  with OpenAI and ElevenLabs APIs, HealthKit integration for wellness apps, 
                  real-time features, and secure payment implementations with Stripe.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have experience working remotely with international teams and 
                  managing full app development cycles from concept to deployment. 
                  Graduated with a{" "}
                  <span className="text-honey font-semibold">
                    Bachelor's in Software Engineering
                  </span>{" "}
                  from UET Mardan (2020-2024, CGPA: 3.08).
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  Download Resume
                </Button>
                <Button variant="outline" size="lg">
                  View Projects
                </Button>
              </div>
            </div>

            {/* Right - Values Grid */}
            <div
              className="grid grid-cols-2 gap-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="p-6 bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-elegant group"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Education</h3>
            <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">Bachelor in Software Engineering</h4>
                  <p className="text-accent font-semibold">University of Engineering and Technology (UET) Mardan</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span>2020 - 2024</span>
                <span className="font-semibold text-primary">CGPA: 3.08</span>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                3+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                15+
              </div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-honey mb-2">
                12+
              </div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">
                100%
              </div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
