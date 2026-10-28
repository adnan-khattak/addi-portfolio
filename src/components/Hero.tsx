import { portfolioStats } from "@/data/portfolio";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Smartphone, Zap, Star } from "lucide-react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useParallax } from "@/hooks/use-scroll-animations";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { scrollY } = useScroll();
  const parallaxY = useParallax(0.3);
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const titles = [
    "React Native Developer",
    "Mobile App Developer",
    "Production App Engineer",
    "TypeScript Developer",
    "Mobile Release Engineer",
  ];

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      clearInterval(interval);
    };
  }, [titles.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    float: {
      y: prefersReducedMotion ? 0 : [-10, 10, -10],
      rotate: prefersReducedMotion ? 0 : [0, 180, 360],
      transition: {
        duration: prefersReducedMotion ? 0 : 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-20">
      {/* Enhanced Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </motion.div>

      {/* Floating Elements with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { size: "w-2 h-2", position: "top-20 left-20", color: "bg-primary", delay: 0 },
          { size: "w-1 h-1", position: "top-40 right-32", color: "bg-accent", delay: 2 },
          { size: "w-3 h-3", position: "bottom-40 left-32", color: "bg-honey", delay: 4 },
          { size: "w-1.5 h-1.5", position: "top-60 right-20", color: "bg-primary-glow", delay: 1 },
        ].map((dot, index) => (
          <motion.div
            key={index}
            className={`absolute ${dot.position} ${dot.size} ${dot.color} rounded-full opacity-60`}
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: `${dot.delay}s` }}
          />
        ))}

        {/* Large Glow Effects with Parallax */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"
          style={{ y: prefersReducedMotion ? 0 : parallaxY * 0.5 }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl"
          style={{ y: prefersReducedMotion ? 0 : parallaxY * -0.3 }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 6
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Dynamic Title with Enhanced Typography */}
              <motion.div className="mb-8" variants={itemVariants}>
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="text-primary"
                    whileHover={{
                      textShadow: prefersReducedMotion ? "none" : "0 0 20px hsl(var(--primary-glow))"
                    }}
                  >
                    Adnan
                  </motion.span>
                  <br />
                  <motion.span
                    className="text-foreground"
                    whileHover={{
                      color: prefersReducedMotion ? undefined : "hsl(var(--accent))"
                    }}
                  >
                    Khattak
                  </motion.span>
                </motion.h1>

                <div className="h-20 flex items-center justify-center lg:justify-start">
                  <motion.h2
                    className="text-2xl md:text-4xl font-bold text-muted-foreground transition-all duration-500 flex items-center gap-3"
                    key={currentTitle}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    transition={{ duration: prefersReducedMotion ? 0.1 : 0.5 }}
                  >
                    <motion.div
                      whileHover={{ rotate: prefersReducedMotion ? 0 : 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Code className="w-8 h-8 text-primary" />
                    </motion.div>
                    {titles[currentTitle]}
                  </motion.h2>
                </div>
              </motion.div>

              {/* Enhanced Description */}
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                variants={itemVariants}
              >
                Building and maintaining production mobile apps with
                <motion.span
                  className="text-primary font-semibold"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                >
                  {" "}React Native
                </motion.span>
                ,<motion.span
                  className="text-accent font-semibold"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                > native integrations</motion.span>,
                and
                <motion.span
                  className="text-honey font-semibold"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                >
                  {" "}reliable releases
                </motion.span>
                . From DealRevs and Carantee to Spendlio, Real Horse, and Evolve —
                I work across features, framework migrations, CI/CD, and production debugging.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                >
                  <Button variant="hero" size="xl" className="group" asChild>
                    <Link to="/contact">
                      <motion.div
                        className="flex items-center"
                        whileHover={{ x: prefersReducedMotion ? 0 : 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Let's Collaborate
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                >
                  <Button variant="accent" size="xl" className="group" asChild>
                    <Link to="/projects">
                      <motion.div
                        className="flex items-center"
                        whileHover={{ x: prefersReducedMotion ? 0 : 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Smartphone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        View Production Work
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats Section with Hover Effects */}
              <motion.div
                className="grid grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                {portfolioStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center lg:text-left cursor-pointer"
                    whileHover={{
                      scale: prefersReducedMotion ? 1 : 1.05,
                      y: prefersReducedMotion ? 0 : -5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Badge with Animation */}
              <motion.div
                className="flex justify-center lg:justify-start mt-8"
                variants={itemVariants}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium cursor-pointer"
                  whileHover={{
                    scale: prefersReducedMotion ? 1 : 1.05,
                    backgroundColor: "hsl(var(--primary) / 0.15)"
                  }}
                  animate={prefersReducedMotion ? {} : {
                    boxShadow: [
                      "0 0 0 0 hsl(var(--primary) / 0)",
                      "0 0 0 10px hsl(var(--primary) / 0.1)",
                      "0 0 0 0 hsl(var(--primary) / 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut" as const
                  }}
                >
                  <motion.div
                    animate={prefersReducedMotion ? {} : { rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear" as const
                    }}
                  >
                    <Star className="w-4 h-4" />
                  </motion.div>
                  Open to Mobile Engineering Opportunities
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Visual Elements */}
            <motion.div
              className="relative flex items-center justify-center"
              variants={itemVariants}
            >
              {/* Floating Tech Icons with Enhanced Animation */}
              {[
                { icon: Code, position: "-top-4 -left-4", size: "w-16 h-16", gradient: "bg-gradient-hero", delay: 0 },
                { icon: Smartphone, position: "-top-4 -right-4", size: "w-14 h-14", gradient: "bg-gradient-to-br from-accent to-accent-glow", delay: 1 },
                { icon: Zap, position: "-bottom-4 -left-4", size: "w-12 h-12", gradient: "bg-gradient-honey", delay: 2 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} ${item.size} ${item.gradient} rounded-2xl flex items-center justify-center shadow-glow z-10 cursor-pointer`}
                  variants={floatingVariants}
                  animate="float"
                  whileHover={{
                    scale: prefersReducedMotion ? 1 : 1.1,
                    rotate: prefersReducedMotion ? 0 : 10
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
              ))}

              {/* Main Profile Image Container with Enhanced Effects */}
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl border border-border/50 shadow-elegant backdrop-blur-sm flex items-center justify-center relative overflow-hidden cursor-pointer"
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.02,
                  rotateY: prefersReducedMotion ? 0 : 5,
                  rotateX: prefersReducedMotion ? 0 : 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Inner glow effect */}
                <motion.div
                  className="absolute inset-4 bg-gradient-hero rounded-2xl opacity-10"
                  animate={prefersReducedMotion ? {} : {
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" as const
                  }}
                />

                {/* Profile Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-24 h-24 mx-auto rounded-full bg-gradient-hero p-1 shadow-glow mb-6"
                    whileHover={{
                      scale: prefersReducedMotion ? 1 : 1.1,
                      rotate: prefersReducedMotion ? 0 : 360
                    }}
                    transition={{
                      rotate: { duration: 0.5 },
                      scale: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">AK</span>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-2">Adnan Khattak</h3>
                    <p className="text-muted-foreground">Mobile Software Engineer</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Tech Stack Section */}
          <div
            className="mt-20 text-center animate-slide-up"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-muted-foreground mb-6 text-lg">
              Production mobile engineering, from code to release
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "React Native",
                "TypeScript",
                "GitHub Actions",
                "Xcode CLI",
                "Firebase",
                "Crashlytics & Sentry",
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="group px-6 py-3 bg-card/50 border border-border/50 rounded-xl text-sm font-medium text-card-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center bg-background/50 backdrop-blur-sm">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
