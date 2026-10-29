import { experiences, engineeringHighlights } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Experience = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production mobile engineering across TBox Solutionz and international teams: React Native modernization, native features, automated releases, and app reliability.
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
                <div className="absolute -left-3 md:left-0 w-6 md:w-16 h-6 md:h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow z-10 animate-pulse">
                  <div className="w-5 md:w-6 h-5 md:h-6 bg-primary-foreground rounded-full shadow-lg" />
                </div>

                {/* Content Card with blurred background glow */}
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/20 rounded-full filter blur-3xl -z-10" />
                  <Card className="ml-6 md:ml-24 bg-gradient-card border-border/50 hover:shadow-elegant hover:scale-[1.02] transition-transform transition-shadow duration-500">
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
                            {exp.period || "Mobile Engineering"}
                          </Badge>
                          {exp.type && <Badge
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
                          </Badge>}
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

        <div className="animate-slide-up">
          <h2 className="text-3xl font-bold text-center mb-12">Engineering Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {engineeringHighlights.map(highlight => (
              <Card key={highlight.title} className="bg-card/50 border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader><CardTitle className="text-xl text-primary">{highlight.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground leading-relaxed">{highlight.description}</p></CardContent>
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
                  href="/contact?subject=Resume%20request"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background/20 text-primary-foreground rounded-md font-medium hover:bg-background/30 transition-colors border border-primary-foreground/20"
                >
                  Request Resume
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
