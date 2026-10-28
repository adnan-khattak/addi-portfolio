import { profile, engineeringHighlights } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/optimized-image";
import profileImage from '../assets/addimage.jpeg';


const About = () => {
  const milestones = [
    {
      year: "2023",
      title: "Started Professional Journey",
      description: "Began as an intern at CodSoft, building and optimizing mobile app features"
    },
    {
      year: "2023",
      title: "React Native Developer at Grey Software",
      description: "Created community cleanup app with real-time reporting and task management"
    },
    {
      year: "2024",
      title: "Full Stack Mobile Developer at Eonlight",
      description: "Developed fire safety app with ML-based real-time detection and push alerts"
    },
    {
      year: "2024",
      title: "React Native Developer at TechCreator",
      description: "Enhanced user satisfaction with real-time mobile features in Swabi, Pakistan"
    },
    {
      year: "2025",
      title: "Software Engineer at Voultrex",
      description: "Built Evolve, an AI fitness and wellness app with HealthKit integration"
    },
    {
      year: "Mobile",
      title: "Software Engineer at TBox Solutionz",
      description: "Production app engineering: React Native migrations, native integrations, release automation, and crash debugging"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {profile.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div className="animate-slide-up">
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm Adnan Khattak, a software engineer focused on production mobile apps.
                  My work includes DealRevs, Carantee, Spendlio, Real Horse, and Evolve,
                  spanning automotive, personal finance, equestrian, and fitness products.
                </p>
                <p>
                  At TBox Solutionz, my engineering work includes React Native 0.64→0.81 migration,
                  CI/CD with GitHub Actions, Xcode CLI, and Firebase App Distribution, and crash
                  investigation with Crashlytics and Sentry. I also work with Siri Shortcuts,
                  OCR/text recognition, Google Maps, and AI-assisted tooling such as Claude Code,
                  Cursor, and MCP.
                </p>
                <p>
                  I graduated with a Bachelor's degree in Software Engineering from UET Mardan (2020-2024) and
                  am currently based in Islamabad, Pakistan, working with teams across different time zones to
                  deliver innovative mobile solutions.
                </p>
                <div className="pt-4">
                  <Button variant="honey" asChild>
                    <a href="/contact?subject=Resume%20request">
                      Request My Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Image */}
          {/* <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-honey/20 p-1 shadow-glow">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center shadow-elegant">
                      <span className="text-4xl font-bold text-primary-foreground">AK</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Adnan Khattak</h3>
                    <p className="text-muted-foreground">React Native Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Profile Image */}
<div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
  <div className="relative">
    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-honey/20 p-1 shadow-glow">
      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center shadow-elegant overflow-hidden">
            <OptimizedImage
              src={profileImage}
              alt="Adnan Khattak - React Native Developer"
              className="w-full h-full object-cover rounded-full"
              width={128}
              height={128}
              priority={true}
              placeholder="blur"
            />
          </div>
          <h3 className="text-xl font-bold text-foreground">Adnan Khattak</h3>
          <p className="text-muted-foreground">React Native Developer</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* Career Timeline */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Career Journey</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-honey" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.title}
                  className="relative flex items-start mb-8"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 shrink-0 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-sm font-bold text-primary-foreground">{milestone.year}</span>
                  </div>

                  {/* Content */}
                  <Card className="ml-6 flex-1 bg-card/50 border-border/50 hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Engineering Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {engineeringHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/50 border-border/50 hover:shadow-elegant hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <CardContent className="pt-0">
                  <h3 className="font-semibold text-primary mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="honey" asChild>
              <a href="/contact?subject=Resume%20request">
                Request Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/skills">
                View Skills
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
