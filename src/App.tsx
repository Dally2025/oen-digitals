import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Compass, Shield, User, Eye } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import React from "react";
import aboutImage from "@assets/ChatGPT_Image_May_4,_2026,_06_03_24_PM_1777914210882.png";
import servicesImage from "@assets/ChatGPT_Image_May_4,_2026,_06_05_49_PM_1777914363236.png";

const queryClient = new QueryClient();

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  if (elem) {
    elem.scrollIntoView({ behavior: "smooth" });
  }
};

function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-serif font-bold text-xl tracking-tight text-foreground flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-full" />
            Empower<span className="text-muted-foreground">Digital</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" onClick={smoothScroll} className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-services">Services</a>
            <a href="#process" onClick={smoothScroll} className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-process">Process</a>
            <a href="#about" onClick={smoothScroll} className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-about">About</a>
            <a href="mailto:enquiries@oendigitals.co.uk" className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-email">Contact</a>
          </div>
          <Button asChild className="rounded-full shadow-lg shadow-primary/20 hidden sm:inline-flex" data-testid="button-nav-cta">
            <a href="#contact" onClick={smoothScroll}>Book a Call</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
          data-testid="section-hero"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Digital Empowerment Specialist
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-foreground">
            Technology that works for you, <span className="text-primary italic">not against you.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
            Empowered, not just connected. Stop guessing and start knowing.
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <a
              href="#services"
              onClick={smoothScroll}
              data-testid="link-hero-services"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/30 text-primary text-sm font-semibold tracking-wide hover:bg-primary/10 transition-colors duration-200"
            >
              View Services
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="h-14 px-8 text-base rounded-full shadow-xl shadow-primary/25 w-full sm:w-auto group" data-testid="button-hero-primary">
              <a href="#contact" onClick={smoothScroll}>
                Book Your Free Digital Clarity Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base rounded-full w-full sm:w-auto" data-testid="button-hero-secondary">
              <a href="mailto:enquiries@oendigitals.co.uk">
                Email Me Today
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Scrolling ticker banner */}
      <div className="relative overflow-hidden py-4 bg-primary/10 border-y border-primary/20">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {[
                "OEN Digitals Ltd",
                "Digital Strategy",
                "Web Development",
                "Digital Literacy Coaching",
                "Accessibility Audits",
                "Digital Transformation",
                "SEO Optimisation",
                "Small Business Growth",
                "UX & Inclusive Design",
                "Tech Empowerment",
                "Online Presence",
                "Digital Confidence",
                "OEN Digitals Ltd",
                "SEND-Friendly Web Apps",
                "Workflow Automation",
                "Digital Clarity",
              ].map((word, j) => (
                <span key={j} className="inline-flex items-center gap-4 px-6 text-sm font-semibold uppercase tracking-widest">
                  <span className="text-primary">{word}</span>
                  <span className="text-primary/30 text-lg">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <section id="proof" className="py-12 bg-secondary text-secondary-foreground">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
            data-testid="section-social-proof"
          >
            <p className="text-xl md:text-3xl font-serif max-w-4xl mx-auto leading-relaxed">
              "I've helped clients save up to <span className="text-primary font-bold">6 hours a week</span> by simplifying their daily digital workflows."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto" data-testid="section-services">
          <div className="mb-16 md:w-2/3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Core Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">Clarity over complexity.</h3>
          </div>

          {/* Services hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden mb-12 shadow-xl relative"
          >
            <img
              src={servicesImage}
              alt="Services overview"
              className="w-full object-cover object-center max-h-[420px]"
              data-testid="img-services"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={<Compass className="h-8 w-8 text-primary" />}
              title="Digital Strategy & Roadmap"
              description="Clear objectives and direction before building anything. We map out exactly what you need and, more importantly, what you don't."
              delay={0.1}
            />
            <ServiceCard 
              icon={<User className="h-8 w-8 text-primary" />}
              title="Confidence-First Web Apps"
              description="Intuitive tools designed for everyone, including those with low digital literacy or SEND needs. Usability is never an afterthought."
              delay={0.2}
            />
            <ServiceCard 
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="Digital Literacy Coaching"
              description="One-on-one sessions so you never feel reliant on an agency again. Build the muscle memory to manage your own platforms."
              delay={0.3}
            />
            <ServiceCard 
              icon={<Eye className="h-8 w-8 text-primary" />}
              title="Accessibility Audits"
              description="Inclusive digital services for people of all abilities. Ensure your brand is welcoming to every single visitor."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-muted/50 border-y border-border/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12" data-testid="section-about">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent z-10"></div>
              <img
                src={aboutImage}
                alt="Digital Empowerment Specialist"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                data-testid="img-about"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">A Trusted Human Guide</h2>
            <div className="prose prose-lg text-muted-foreground prose-p:leading-relaxed">
              <p className="text-xl text-foreground font-medium mb-6">
                "I'm not here to lecture you on technical specs."
              </p>
              <p>
                "I'm here to be your teacher and partner — creating a two-way conversation that helps you move from digitally timid to digitally dominant."
              </p>
              <p>
                Technology should amplify your work, not act as a barrier. Together, we'll demystify your digital environment, streamline your tools, and build a setup you actually enjoy using.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px bg-border flex-1"></div>
              <span className="font-serif font-medium text-foreground tracking-widest uppercase text-sm">Consultant & Specialist</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto" data-testid="section-process">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">How We Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">The Path to Autonomy</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0"></div>
            
            <ProcessStep 
              number="01"
              title="Clarity"
              description="Identify exactly where you feel stuck. We map the friction points without the jargon."
              delay={0.1}
            />
            <ProcessStep 
              number="02"
              title="Strategy"
              description="A simple, step-by-step roadmap tailored to your pace. No overwhelming overhauls."
              delay={0.3}
            />
            <ProcessStep 
              number="03"
              title="Autonomy"
              description="Tools built for you, with total confidence to use them. You hold the keys."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-secondary text-secondary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto relative z-10"
          data-testid="section-contact"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to take control?</h2>
          <p className="text-xl text-secondary-foreground/70 mb-10 max-w-xl mx-auto">
            Stop letting technology dictate your day. Let's build a system that works for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-2xl shadow-primary/20 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto" data-testid="button-footer-primary">
              Book Your Free Digital Clarity Call
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base rounded-full border-secondary-foreground/20 hover:bg-secondary-foreground hover:text-secondary w-full sm:w-auto" data-testid="button-footer-secondary">
              <a href="mailto:enquiries@oendigitals.co.uk">
                Email Me Today
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground bg-secondary/95 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Digital Empowerment Specialist. All rights reserved.</p>
      </footer>

    </div>
  );
}

function ServiceCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full bg-card hover:border-primary/50 transition-colors duration-300 border-border/50 shadow-sm hover:shadow-md">
        <CardContent className="p-8 flex flex-col h-full">
          <div className="mb-6 p-4 bg-accent inline-flex rounded-2xl w-fit">
            {icon}
          </div>
          <h4 className="text-2xl font-bold mb-3 text-foreground">{title}</h4>
          <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProcessStep({ number, title, description, delay }: { number: string, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative z-10"
    >
      <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-sm h-full flex flex-col items-center text-center relative group hover:border-primary/50 transition-colors duration-300">
        <div className="w-16 h-16 bg-secondary text-secondary-foreground flex items-center justify-center rounded-full font-serif text-xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-primary-foreground shadow-lg">
          {number}
        </div>
        <h4 className="text-2xl font-bold mb-4 text-foreground">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
