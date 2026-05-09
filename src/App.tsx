import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, Brush, Compass, FileText, MapPin, MessageSquare, Monitor, Search, Shield, User, Wrench, Eye } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import React from "react";
import aboutImage from "@assets/ChatGPT_Image_May_4,_2026,_06_03_24_PM_1777914210882.png";
import servicesImage from "@assets/ChatGPT_Image_May_4,_2026,_06_05_49_PM_1777914363236.png";
import logo from "@assets/oendigitalslogo2.png";
import qrCode from "@assets/oendigitalqr.jpeg";

const queryClient = new QueryClient();
const bookingFormUrl = "https://forms.gle/hxgvBHHS85Gvt3UP7";
const privacyPolicyUrl =
  "https://docs.google.com/document/d/e/2PACX-1vQkOQUVcIaXQCsfAh6_jIvJocnZ_RBfmc0SVY7M3JQ_X30SrM6bHNAojwAzE-638osTBznxf3Iiqjca/pub?embedded=true";
const cookiePolicyUrl =
  "https://docs.google.com/document/d/e/2PACX-1vSvmtmdRsU5x4lTEoqgfOdnDbj3ChwDgAuKKBReA28bM9jnmoO7jbbnJ6yEc-o0i6kqsyUVVmDdptEO/pub?embedded=true";
const termsAndConditionsUrl =
  "https://docs.google.com/document/d/e/2PACX-1vSaa7Mg-fMVvzDVMo_TdC6LhGue4hQqRrCOmd9zglzxczV17zcGpzIS08Qshi5oYiZnFmlMoVgNgQ7c/pub?embedded=true";
const complaintsProcedureUrl =
  "https://docs.google.com/document/d/e/2PACX-1vQbCsBXGNWnclAihUgcCdvyODyfYTdKNxj9yvn2Qk7azowvSQn312soPGoKewKhb0-7YHIwCXYUMeZN/pub?embedded=true";
const websiteDesignSeoTitle = "Website Design Pembrokeshire | Oen Digitals";
const websiteDesignMetaDescription =
  "Website design and digital support for small businesses in Pembrokeshire and Wales. Oen Digitals creates clear, modern websites with forms, SEO basics, branding support and practical AI tools.";

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
          <div className="flex items-center">
            <img
              src={logo}
              alt="OEN Digitals Ltd"
              className="h-12 w-auto rounded-sm object-contain md:h-14"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" onClick={smoothScroll} className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-services">Services</a>
            <a href="#process" onClick={smoothScroll} className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-process">Process</a>
            <a href="#about" onClick={smoothScroll} className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-about">About</a>
            <a href="mailto:enquiries@oendigitals.co.uk" className="text-foreground/80 hover:text-primary transition-colors" data-testid="link-nav-email">Contact</a>
          </div>
          <Button asChild className="rounded-full shadow-lg shadow-primary/20 hidden sm:inline-flex" data-testid="button-nav-cta">
            <a href={bookingFormUrl} target="_blank" rel="noreferrer">Book a Call</a>
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
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
            I provide web design, booking systems, and digital support for small businesses across <strong>Wales</strong>{" "}
            {"and "}<strong>Pembrokeshire</strong>. I help you build simple, effective websites and tools that actually work for your day-to-day business.
          </p>
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
              <a href={bookingFormUrl} target="_blank" rel="noreferrer">
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
            className="rounded-2xl mb-12 shadow-xl relative bg-secondary/40 border border-border/50"
          >
            <img
              src={servicesImage}
              alt="Services overview"
              className="block w-full rounded-2xl object-contain"
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
            <div className="aspect-[1424/1104] rounded-2xl relative group shadow-2xl bg-secondary/40 border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent z-10"></div>
              <img
                src={aboutImage}
                alt="Digital Empowerment Specialist"
                className="block w-full h-full rounded-2xl object-contain group-hover:scale-[1.02] transition-transform duration-700"
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

          <div className="mb-10 flex justify-center">
            <div className="rounded-lg border border-white/10 bg-white p-2 shadow-2xl shadow-primary/20">
              <img
                src={qrCode}
                alt="OEN Digitals QR code"
                className="h-36 w-36 rounded object-contain sm:h-40 sm:w-40"
                data-testid="img-contact-qr"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="h-14 px-8 text-base rounded-full shadow-2xl shadow-primary/20 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto" data-testid="button-footer-primary">
              <a href={bookingFormUrl} target="_blank" rel="noreferrer">
                Book Your Free Digital Clarity Call
              </a>
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
      <SiteFooter />

      <CookieBanner />

    </div>
  );
}

function Seo({ title, description }: { title: string; description: string }) {
  React.useEffect(() => {
    document.title = title;

    let descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.content = description;
  }, [title, description]);

  return null;
}

function SiteFooter() {
  return (
    <footer className="py-8 text-center text-muted-foreground bg-secondary/95 text-sm border-t border-white/5">
      <p>&copy; {new Date().getFullYear()} Digital Empowerment Specialist. All rights reserved.</p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <a
          href="/privacy-policy"
          className="inline-flex text-foreground/70 hover:text-primary transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="/cookie"
          className="inline-flex text-foreground/70 hover:text-primary transition-colors"
        >
          Cookie Policy
        </a>
        <a
          href="/terms-and-conditions"
          className="inline-flex text-foreground/70 hover:text-primary transition-colors"
        >
          Terms & Conditions
        </a>
        <a
          href="/complaints-procedure"
          className="inline-flex text-foreground/70 hover:text-primary transition-colors"
        >
          Complaints Procedure
        </a>
      </div>
    </footer>
  );
}

function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(localStorage.getItem("oen-cookie-consent") !== "accepted");
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("oen-cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-lg border border-border bg-background/95 p-4 text-left shadow-2xl backdrop-blur md:flex md:items-center md:justify-between md:gap-5">
      <p className="text-sm leading-relaxed text-muted-foreground">
        We use essential cookies to keep this site working properly. Read our{" "}
        <a href="/cookie" className="font-medium text-primary hover:underline">
          Cookie Policy
        </a>
        .
      </p>
      <Button
        type="button"
        onClick={acceptCookies}
        className="mt-3 h-10 rounded-full px-5 md:mt-0"
      >
        Accept
      </Button>
    </div>
  );
}

function PrivacyPolicy() {
  return <DocumentPage title="OEN Digitals Privacy Policy" documentUrl={privacyPolicyUrl} />;
}

function CookiePolicy() {
  return <DocumentPage title="OEN Digitals Cookie Policy" documentUrl={cookiePolicyUrl} />;
}

function TermsAndConditions() {
  return (
    <DocumentPage
      title="OEN Digitals Terms and Conditions"
      documentUrl={termsAndConditionsUrl}
    />
  );
}

function ComplaintsProcedure() {
  return (
    <DocumentPage
      title="OEN Digitals Complaints Procedure"
      documentUrl={complaintsProcedureUrl}
    />
  );
}

function WebsiteDesignPembrokeshire() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title={websiteDesignSeoTitle}
        description={websiteDesignMetaDescription}
      />

      <header className="border-b border-border/40 bg-background/95 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="OEN Digitals Ltd"
              className="h-12 w-auto rounded-sm object-contain"
            />
          </a>
          <Button asChild className="rounded-full shadow-lg shadow-primary/20">
            <a href={bookingFormUrl} target="_blank" rel="noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 py-20 text-center md:px-12 md:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
              Website Design Pembrokeshire
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-7xl">
              Website Design for Local Businesses in Pembrokeshire
            </h1>
            <div className="mx-auto mb-10 max-w-3xl space-y-5 text-xl leading-relaxed text-muted-foreground">
              <p>
                Oen Digitals helps small businesses, sole traders and local
                creatives build clear, modern websites that are easy to
                understand, easy to update and designed to help customers take
                action.
              </p>
              <p>
                Whether you need a simple business website, a refreshed online
                presence, a booking form, or support connecting your digital
                tools, we can help you build something practical and
                professional.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="h-14 rounded-full px-8">
                <a href={bookingFormUrl} target="_blank" rel="noreferrer">
                  Start a project
                </a>
              </Button>
              <Button size="lg" asChild className="h-14 rounded-full px-8">
                <a href={bookingFormUrl} target="_blank" rel="noreferrer">
                  Book Your Free Digital Clarity Call
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 rounded-full px-8">
                <a href="mailto:enquiries@oendigitals.co.uk">Email Me Today</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="border-y border-border/50 bg-muted/40 px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Who We Work With
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Oen Digitals works with local businesses across Pembrokeshire
                and Wales looking for straightforward, modern digital support
                without unnecessary complexity.
              </p>
            </div>
            <div className="mb-10 rounded-lg border border-border/50 bg-card p-6">
              <p className="mb-4 font-semibold text-foreground">
                We commonly support:
              </p>
              <div className="grid gap-3 text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "small businesses",
                  "sole traders",
                  "creatives and artists",
                  "cafes and hospitality businesses",
                  "local services",
                  "wellness and community projects",
                  "businesses needing a clearer online presence",
                ].map((item) => (
                  <div key={item} className="rounded-md bg-background/70 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Whether you are starting from scratch or improving an existing
              website, the goal is to create something professional,
              approachable and easy for customers to use.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Monitor className="h-7 w-7 text-primary" />}
                title="Modern Websites"
                description="Clean, mobile-friendly websites built for real businesses."
              />
              <FeatureCard
                icon={<Search className="h-7 w-7 text-primary" />}
                title="SEO Basics"
                description="Helping customers find your business online."
              />
              <FeatureCard
                icon={<Compass className="h-7 w-7 text-primary" />}
                title="Digital Support"
                description="Practical support with forms, Google setup, branding and content."
              />
              <FeatureCard
                icon={<Bot className="h-7 w-7 text-primary" />}
                title="AI Tools"
                description="Exploring modern AI tools to streamline business tasks and workflows."
              />
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                What's Included
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Services can be tailored depending on the needs of each
                business, but projects may include:
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Monitor className="h-7 w-7 text-primary" />}
                title="Website Design"
                description="Modern, responsive websites designed to work across desktop, tablet and mobile devices."
              />
              <FeatureCard
                icon={<MessageSquare className="h-7 w-7 text-primary" />}
                title="Contact Forms & Customer Enquiries"
                description="Simple ways for customers to contact your business directly through your website."
              />
              <FeatureCard
                icon={<Brush className="h-7 w-7 text-primary" />}
                title="Branding Support"
                description="Help with visual consistency, layout direction and digital presentation."
              />
              <FeatureCard
                icon={<MapPin className="h-7 w-7 text-primary" />}
                title="Google Business Setup"
                description="Support setting up or improving your Google Business presence to help local customers find you online."
              />
              <FeatureCard
                icon={<FileText className="h-7 w-7 text-primary" />}
                title="SEO Foundations"
                description="Basic on-page SEO structure to help improve visibility on search engines over time."
              />
              <FeatureCard
                icon={<Bot className="h-7 w-7 text-primary" />}
                title="AI-Assisted Digital Tools"
                description="Exploring practical AI tools that can support workflow, content planning and customer engagement."
              />
              <FeatureCard
                icon={<Wrench className="h-7 w-7 text-primary" />}
                title="Ongoing Digital Support"
                description="Continued support for updates, changes and improvements where required."
              />
            </div>
          </div>
        </section>

        {/* Reassurance */}
        <section className="border-y border-border/50 bg-muted/40 px-6 py-16 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
              Built Around Real Businesses
            </h2>
            <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Oen Digitals focuses on practical digital solutions for real
                local businesses — not overcomplicated systems that are
                difficult to manage later.
              </p>
              <p>
                The aim is to create websites and digital tools that feel clear,
                professional and approachable for both businesses and their
                customers.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Oen Digitals */}
        <section className="border-y border-border/50 bg-secondary px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Why Choose Oen Digitals
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Local businesses often need someone trustworthy, approachable,
                responsive and understandable. Oen Digitals is built around
                practical support, clear communication and digital work that
                feels manageable.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <FeatureCard
                icon={<MapPin className="h-7 w-7 text-primary" />}
                title="Local & Personable"
                description="Oen Digitals works closely with businesses across Pembrokeshire and Wales, offering straightforward digital support without unnecessary jargon or pressure."
              />
              <FeatureCard
                icon={<Monitor className="h-7 w-7 text-primary" />}
                title="Modern Digital Approach"
                description="We combine website design, branding support and modern digital tools to help businesses build a stronger online presence in a practical and manageable way."
              />
              <FeatureCard
                icon={<User className="h-7 w-7 text-primary" />}
                title="Built for Small Businesses"
                description="Every business is different. The focus is on creating solutions that fit the size, goals and day-to-day reality of each client rather than forcing a one-size-fits-all approach."
              />
              <FeatureCard
                icon={<Wrench className="h-7 w-7 text-primary" />}
                title="Ongoing Support"
                description="Digital support does not stop the moment a website goes live. Ongoing help and guidance are available where needed to support future growth and updates."
              />
              <FeatureCard
                icon={<Bot className="h-7 w-7 text-primary" />}
                title="AI-Aware & Forward Thinking"
                description="Oen Digitals explores practical AI-assisted workflows and tools that can help businesses improve efficiency, content planning and customer experience without overcomplicating operations."
              />
            </div>
            <p className="mt-10 rounded-lg border border-primary/20 bg-background p-6 text-center text-lg font-medium leading-relaxed text-foreground">
              Proud to support local businesses, creatives and independent
              projects across Pembrokeshire and Wales.
            </p>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Recent Projects
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Oen Digitals is currently working with local businesses and
                creative projects across Pembrokeshire and Wales.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
              <div className="rounded-lg border border-border/50 bg-card p-7">
                <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
                  Selected project examples and case studies will be added as
                  work is completed and approved for public showcase.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  If you would like to discuss a project or collaboration,
                  please get in touch.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-secondary p-7">
                <h3 className="mb-5 text-2xl font-bold text-foreground">
                  Current Focus Areas
                </h3>
                <div className="grid gap-3 text-muted-foreground">
                  {[
                    "small business websites",
                    "local SEO foundations",
                    "branding support",
                    "digital visibility",
                    "AI-assisted workflows",
                    "modern contact and enquiry systems",
                  ].map((area) => (
                    <div key={area} className="rounded-md bg-background/70 px-4 py-3">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-y border-border/50 bg-muted/40 px-6 py-16 md:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "Do you only work with businesses in Pembrokeshire?",
                  answer:
                    "No — while Oen Digitals is based in Wales and works with many local businesses, support can also be provided remotely for clients across the UK.",
                },
                {
                  question: "How much does a website cost?",
                  answer:
                    "Every project is different depending on the size, functionality and support required. Quotes are tailored to each business based on the agreed scope of work.",
                },
                {
                  question: "Do you offer ongoing support after a website goes live?",
                  answer:
                    "Yes. Ongoing updates, support and improvements can be discussed depending on the needs of the business.",
                },
                {
                  question: "Can you help improve my Google visibility?",
                  answer:
                    "Basic SEO foundations and Google Business support can be included to help improve online visibility over time.",
                },
                {
                  question: "Do I need to provide my own content and images?",
                  answer:
                    "Clients can provide their own content, branding and images where available. Guidance can also be provided during the process if needed.",
                },
                {
                  question: "Can you help with branding and digital setup too?",
                  answer:
                    "Yes. Oen Digitals can support with branding direction, digital presentation, contact systems and practical online setup for small businesses.",
                },
                {
                  question: "Do you use AI tools?",
                  answer:
                    "Yes — where appropriate, modern AI-assisted tools may be used to support workflow, content planning and digital efficiency. All final work is reviewed and tailored to the client’s needs.",
                },
              ].map((faq) => (
                <div key={faq.question} className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact call-to-action */}
        <section className="px-6 py-20 text-center md:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-5 text-4xl font-bold text-foreground md:text-5xl">
              Ready to Build Your Online Presence?
            </h2>
            <div className="mx-auto mb-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Whether you need a new website, digital support, branding
                guidance or help improving your online visibility, Oen Digitals
                is here to help.
              </p>
              <p>
                Get in touch to discuss your project, ask questions or explore
                ideas for your business.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="h-14 rounded-full px-8">
                <a href={bookingFormUrl} target="_blank" rel="noreferrer">
                  Start a Project
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 rounded-full px-8">
                <a href="mailto:enquiries@oendigitals.co.uk">Email Oen Digitals</a>
              </Button>
            </div>
            <p className="mt-8 text-sm font-medium text-muted-foreground">
              Based in Pembrokeshire, supporting businesses across Wales and
              beyond.
            </p>
          </div>
        </section>

      </main>

      <SiteFooter />
      <CookieBanner />
    </div>
  );
}

function DocumentPage({ title, documentUrl }: { title: string; documentUrl: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/40 bg-background/95 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="OEN Digitals Ltd"
              className="h-12 w-auto rounded-sm object-contain"
            />
          </a>
          <Button asChild variant="outline" className="rounded-full">
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </header>

      <main className="px-4 py-8 md:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-white shadow-2xl">
          <iframe
            src={documentUrl}
            title={title}
            className="h-[80vh] w-full bg-white"
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-card border-border/50">
      <CardContent className="p-6">
        <div className="mb-5 inline-flex rounded-lg bg-accent p-3">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
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
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie" component={CookiePolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/complaints-procedure" component={ComplaintsProcedure} />
      <Route path="/website-design-pembrokeshire" component={WebsiteDesignPembrokeshire} />
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
