import { profile } from "@/data/portfolio";
import { createContactMailto } from "@/lib/contact";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: searchParams.get("subject") || "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = createContactMailto(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Quick response for urgent inquiries",
      action: "Message on WhatsApp",
      href: "https://wa.me/923430229384",
      icon: "💬",
      color: "bg-green-500"
    },
    {
      title: "Email",
      description: "Detailed project discussions",
      action: "adnanktk540@gmail.com",
      href: `mailto:${profile.email}`,
      icon: "📧",
      color: "bg-blue-500"
    },
    {
      title: "LinkedIn",
      description: "Professional networking",
      action: "Connect on LinkedIn",
      href: profile.linkedin,
      icon: "💼",
      color: "bg-blue-600"
    },
    {
      title: "GitHub",
      description: "Code and development projects",
      action: "View GitHub Profile",
      href: profile.github,
      icon: "⌘",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Get In Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's talk about mobile engineering roles, production app development, React Native migrations, native features, or CI/CD and release workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Start a Conversation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="text-sm text-muted-foreground">Opens your email app with a draft to review and send. You can also email <a className="text-primary underline" href={`mailto:${profile.email}`}>{profile.email}</a> directly.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project discussion, consultation, etc."
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      rows={6}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Prepare Email
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Other Ways to Connect</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={method.title}
                    className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border/50 bg-card/50"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center text-white text-xl shadow-lg`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                          <Button variant="outline" size="sm" asChild>
                            <a href={method.href} target="_blank" rel="noopener noreferrer">
                              {method.action}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Availability Info */}
            <Card className="bg-honey/10 border-honey/20 shadow-honey">
              <CardContent className="p-6">
                <h3 className="font-semibold text-honey-dark mb-3">Current Availability</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Available for new projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Response time: 24-48 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Timezone: UTC+5 (PKT)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-glow">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-4">Let's Build Something Great</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-xs opacity-80">Featured Apps</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">iOS</div>
                    <div className="text-xs opacity-80">Native Features</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">CI/CD</div>
                    <div className="text-xs opacity-80">Releases</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
