import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Coffee, Heart, Target, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimations, useStaggeredAnimations } from "@/hooks/use-scroll-animations";

const About = () => {
  const { ref: headerRef, variants: headerVariants } = useScrollAnimations();
  const { ref: contentRef, variants: contentVariants } = useScrollAnimations();
  const { ref: valuesRef, containerVariants, childVariants } = useStaggeredAnimations(4, 0.1);
  const { ref: educationRef, variants: educationVariants } = useScrollAnimations();
  const { ref: statsRef, containerVariants: statsContainer, childVariants: statsChild } = useStaggeredAnimations(4, 0.2);

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Target,
      title: "Goal-Oriented", 
      description: "Focused on delivering results that exceed expectations",
      color: "from-accent to-accent-glow"
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Genuinely love crafting digital experiences that matter",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Coffee,
      title: "Collaborative",
      description: "Believe great products come from great teamwork",
      color: "from-honey to-honey-dark"
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            ref={headerRef}
            className="text-center mb-16"
            initial={headerVariants.slideUp.initial}
            animate={headerVariants.slideUp.animate}
            transition={headerVariants.slideUp.transition}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-white px-2 py-1 rounded-md">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              React Native Developer with 3 years of experience building scalable 
              cross-platform mobile applications. Proven track record in delivering 
              AI-integrated wellness apps, real-time features, and secure subscription-based models.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Main Content */}
            <motion.div 
              ref={contentRef}
              initial={contentVariants.slideLeft.initial}
              animate={contentVariants.slideLeft.animate}
              transition={contentVariants.slideLeft.transition}
            >
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  With{" "}
                  <motion.span 
                    className="text-primary font-semibold"
                    whileHover={{ color: "hsl(var(--primary-glow))" }}
                  >
                    3 years of experience
                  </motion.span>{" "}
                  in React Native development, I specialize in building cross-platform 
                  mobile applications that deliver exceptional user experiences across 
                  iOS and Android platforms.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  My expertise includes{" "}
                  <motion.span 
                    className="text-accent font-semibold"
                    whileHover={{ color: "hsl(var(--accent-glow))" }}
                  >
                    AI integration
                  </motion.span>{" "}
                  with OpenAI and ElevenLabs APIs, HealthKit integration for wellness apps, 
                  real-time features, and secure payment implementations with Stripe.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  I have experience working remotely with international teams and 
                  managing full app development cycles from concept to deployment. 
                  Graduated with a{" "}
                  <motion.span 
                    className="text-honey font-semibold"
                    whileHover={{ color: "hsl(var(--honey-dark))" }}
                  >
                    Bachelor's in Software Engineering
                  </motion.span>{" "}
                  from UET Mardan (2020-2024, CGPA: 3.08).
                </motion.p>
              </div>

              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="hero" size="lg" className="interactive-lift">
                    Download Resume
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="interactive-scale" asChild>
                    <a href="#skills">
                      View Skills
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Values Grid */}
            <motion.div
              ref={valuesRef}
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={childVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="p-6 bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-elegant group cursor-pointer h-full">
                    <div className="text-center">
                      <motion.div 
                        className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-glow`}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300,
                          rotate: { duration: 0.6 }
                        }}
                      >
                        <value.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div 
            ref={educationRef}
            className="mb-16"
            initial={educationVariants.fadeIn.initial}
            animate={educationVariants.fadeIn.animate}
            transition={educationVariants.fadeIn.transition}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Education</h3>
            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -4
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 max-w-2xl mx-auto cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ 
                      scale: { type: "spring", stiffness: 300 },
                      rotate: { duration: 0.5 }
                    }}
                  >
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Bachelor in Software Engineering</h4>
                    <p className="text-accent font-semibold">University of Engineering and Technology (UET) Mardan</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>2020 - 2024</span>
                  <motion.span 
                    className="font-semibold text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    CGPA: 3.08
                  </motion.span>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={statsContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { value: "3+", label: "Years Experience", color: "text-primary" },
              { value: "10+", label: "Projects", color: "text-accent" },
              { value: "8+", label: "Technologies", color: "text-honey" },
              { value: "100%", label: "Satisfaction", color: "text-primary-glow" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                variants={statsChild}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                  whileHover={{ 
                    textShadow: "0 0 20px currentColor"
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
