// =============================================================================
// AI Receptionist - Villa Template Configuration
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Lumina - Smart Business Communication",
  description: "Transform your business with AI-powered receptionist services. 24/7 intelligent call handling, appointment scheduling, and customer support.",
  language: "en",
  keywords: "Lumina, AI receptionist, virtual assistant, business automation, call handling, appointment scheduling",
  ogImage: "/images/og-image.jpg",
  canonical: "https://lumina.ai",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Lumina",
  brandSubname: "Intelligent Communication",
  tagline: "Your 24/7 Digital Front Desk",
  navLinks: [
    { name: "Home", href: "#home", icon: "Home" },
    { name: "Features", href: "#features", icon: "Sparkles" },
    { name: "How It Works", href: "#how-it-works", icon: "Users" },
    { name: "Technology", href: "#technology", icon: "BookOpen" },
    { name: "Testimonials", href: "#testimonials", icon: "Newspaper" },
    { name: "Contact", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "Get Started",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "Vigilox",
  brandSubname: "Intelligent Communication",
  yearText: "Next Gen",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "The Future of Business Communication",
  mainTitle: "Your Intelligent\nAI Receptionist",
  ctaButtonText: "Start Free Trial",
  ctaTarget: "#features",
  stats: [
    { value: 100, suffix: "%", label: "Call Answer Rate" },
    { value: 24, suffix: "/7", label: "Always Available" },
    { value: 50, suffix: "%", label: "Cost Reduction" },
  ],
  decorativeText: "INTELLIGENT • EFFICIENT • RELIABLE",
  backgroundImage: "/images/hero-banner.jpg",
};

// -----------------------------------------------------------------------------
// Wine Showcase Config → AI Features Config
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "Powerful Capabilities",
  subtitle: "AI-POWERED FEATURES",
  mainTitle: "Everything Your Business Needs",
  wines: [
    {
      id: "call-handling",
      name: "Smart Call Handling",
      subtitle: "Intelligent Routing",
      year: "",
      image: "/images/feature-call.jpg",
      filter: "",
      glowColor: "bg-blue-500/20",
      description: "Our AI receptionist answers calls with natural conversation, understands caller intent, and routes them to the right department or takes detailed messages.",
      tastingNotes: "Natural language processing with sentiment analysis",
      alcohol: "Multi-language",
      temperature: "Instant",
      aging: "99.9% Uptime",
    },
    {
      id: "scheduling",
      name: "Appointment Scheduling",
      subtitle: "Calendar Integration",
      year: "",
      image: "/images/feature-scheduling.jpg",
      filter: "brightness(1.15) sepia(0.3) hue-rotate(-20deg) saturate(1.3)",
      glowColor: "bg-emerald-500/20",
      description: "Seamlessly book appointments, send reminders, and manage your calendar. Integrates with Google Calendar, Outlook, and popular scheduling platforms.",
      tastingNotes: "Real-time availability with conflict detection",
      alcohol: "Multi-platform",
      temperature: "Automated",
      aging: "24/7 Booking",
    },
    {
      id: "support",
      name: "Customer Support",
      subtitle: "Instant Responses",
      year: "",
      image: "/images/feature-support.jpg",
      filter: "brightness(1.3) sepia(0.4) hue-rotate(30deg) saturate(0.6)",
      glowColor: "bg-amber-500/20",
      description: "Provide instant answers to common questions, troubleshoot issues, and escalate complex inquiries to human agents when needed.",
      tastingNotes: "Knowledge base integration with learning capabilities",
      alcohol: "Multi-channel",
      temperature: "Immediate",
      aging: "Continuous Learning",
    },
  ],
  features: [
    { icon: "Sparkles", title: "AI-Powered", description: "Advanced NLP for natural conversations" },
    { icon: "Thermometer", title: "Always On", description: "24/7 availability without breaks" },
    { icon: "Clock", title: "Instant Response", description: "Sub-second response times" },
    { icon: "Wine", title: "Customizable", description: "Tailored to your brand voice" },
  ],
  quote: {
    text: "The AI receptionist has transformed how we handle customer inquiries. Our team can focus on what matters most.",
    attribution: "Sarah Mitchell, CEO",
    prefix: "Success Story",
  },
};

// -----------------------------------------------------------------------------
// Winery Carousel Config → How It Works Config
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "Simple Setup Process",
  subtitle: "HOW IT WORKS",
  mainTitle: "Get Started in Minutes",
  locationTag: "Cloud-Based • Global Access",
  slides: [
    {
      image: "/images/step-setup.jpg",
      title: "Quick Setup",
      subtitle: "Configure Your AI",
      area: "5",
      unit: "Minutes",
      description: "Sign up and configure your AI receptionist with your business details, call scripts, and preferences. No technical expertise required.",
    },
    {
      image: "/images/step-integrate.jpg",
      title: "Easy Integration",
      subtitle: "Connect Your Systems",
      area: "50+",
      unit: "Integrations",
      description: "Connect with your existing phone system, CRM, calendar, and tools. Works seamlessly with popular business platforms.",
    },
    {
      image: "/images/step-launch.jpg",
      title: "Go Live",
      subtitle: "Start Taking Calls",
      area: "24",
      unit: "Hours",
      description: "Your AI receptionist goes live and starts handling calls immediately. Monitor performance and adjust settings in real-time.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Museum Config → Technology Config
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "Cutting-Edge Technology",
  subtitle: "OUR TECHNOLOGY",
  mainTitle: "Powered by Advanced AI",
  introText: "Our AI receptionist leverages state-of-the-art natural language processing and machine learning to deliver human-like conversations and intelligent decision-making.",
  timeline: [
    { year: "2020", event: "Research & Development Begins" },
    { year: "2022", event: "First Beta Launch" },
    { year: "2023", event: "Enterprise Partnerships" },
    { year: "", event: "Global Expansion" },
  ],
  tabs: [
    {
      id: "nlp",
      name: "Natural Language",
      icon: "History",
      image: "/images/tech-nlp.jpg",
      content: {
        title: "Understanding Human Speech",
        description: "Our proprietary NLP engine understands context, intent, and emotion in conversations. It handles accents, slang, and complex queries with ease.",
        highlight: "95% Accuracy Rate",
      },
    },
    {
      id: "ml",
      name: "Machine Learning",
      icon: "BookOpen",
      image: "/images/tech-ml.jpg",
      content: {
        title: "Continuous Improvement",
        description: "The AI learns from every interaction, improving responses and understanding over time. Your receptionist gets smarter every day.",
        highlight: "Self-Learning System",
      },
    },
    {
      id: "security",
      name: "Enterprise Security",
      icon: "Award",
      image: "/images/tech-security.jpg",
      content: {
        title: "Bank-Grade Protection",
        description: "End-to-end encryption, SOC 2 compliance, and GDPR adherence ensure your data and customer information remain secure.",
        highlight: "SOC 2 Certified",
      },
    },
  ],
  openingHours: "100% Uptime SLA",
  openingHoursLabel: "Reliability Guarantee",
  ctaButtonText: "Learn More",
  yearBadge: "New",
  yearBadgeLabel: "Version",
  quote: {
    prefix: "Innovation",
    text: "We're building the future of business communication, one conversation at a time.",
    attribution: "The AI Receptionist Team",
  },
  founderPhotoAlt: "AI Technology Visualization",
  founderPhoto: "/images/tech-visual.jpg",
};

// -----------------------------------------------------------------------------
// News Config → Testimonials Config
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "Latest Updates",
  subtitle: "NEWS & INSIGHTS",
  mainTitle: "Industry News",
  viewAllText: "View All Articles",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/news-ai-trends.jpg",
      title: "AI Receptionist Trends",
      excerpt: "Discover how AI receptionists are transforming customer service across industries.",
      date: "March 1,",
      category: "Industry",
    },
    {
      id: 2,
      image: "/images/news-integration.jpg",
      title: "New CRM Integrations",
      excerpt: "We've added support for 15 new CRM platforms including HubSpot and Pipedrive.",
      date: "February 28,",
      category: "Product",
    },
    {
      id: 3,
      image: "/images/news-security.jpg",
      title: "Security Enhancement",
      excerpt: "Our latest security update brings advanced threat detection and prevention.",
      date: "February 20,",
      category: "Security",
    },
    {
      id: 4,
      image: "/images/news-awards.jpg",
      title: "Best AI Solution",
      excerpt: "AI Receptionist wins the prestigious Tech Innovation Award for customer service.",
      date: "February 15,",
      category: "Awards",
    },
  ],
  testimonialsScriptText: "Customer Success",
  testimonialsSubtitle: "TESTIMONIALS",
  testimonialsMainTitle: "Loved by Businesses",
  testimonials: [
    {
      name: "Michael Chen",
      role: "CEO, TechStart Inc.",
      text: "The AI receptionist has been a game-changer. We've reduced missed calls by 95% and our customers love the instant response.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Office Manager, MedCare Clinic",
      text: "Appointment scheduling is now effortless. Patients can book 24/7, and reminders have reduced no-shows by 40%.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Director, Legal Solutions",
      text: "Professional, reliable, and cost-effective. The AI handles routine inquiries while we focus on complex cases.",
      rating: 5,
    },
  ],
  storyScriptText: "Our Story",
  storySubtitle: "ABOUT US",
  storyTitle: "Revolutionizing Business Communication",
  storyParagraphs: [
    "Founded by a team of AI researchers and customer service experts, AI Receptionist was born from a simple idea: every business deserves access to intelligent communication tools.",
    "Today, we serve thousands of businesses worldwide, from solo practitioners to enterprise organizations, helping them deliver exceptional customer experiences around the clock.",
  ],
  storyTimeline: [
    { value: "10K+", label: "Active Users" },
    { value: "5M+", label: "Calls Handled" },
    { value: "100%", label: "Satisfaction" },
  ],
  storyQuote: {
    prefix: "Mission",
    text: "To democratize access to intelligent communication technology for businesses of all sizes.",
    attribution: "Our Mission",
  },
  storyImage: "/images/our-story.jpg",
  storyImageCaption: "The AI Receptionist Team",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get in Touch",
  subtitle: "CONTACT US",
  mainTitle: "Start Your Free Trial",
  introText: "Ready to transform your business communication? Get started with a 14-day free trial. No credit card required.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    { icon: "MapPin", label: "Address", value: "350 Market Street, Suite 200", subtext: "San Francisco, CA 94105" },
    { icon: "Phone", label: "Phone", value: "+1 (888) 555-AI-RX", subtext: "24/7 Support Line" },
    { icon: "Mail", label: "Email", value: "hello@aireceptionist.com", subtext: "We reply within 2 hours" },
    { icon: "Clock", label: "Hours", value: "Always Available", subtext: "24/7/365 Support" },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "John Smith",
    emailLabel: "Email Address",
    emailPlaceholder: "john@company.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+1 (555) 000-0000",
    visitDateLabel: "Preferred Demo Date",
    visitorsLabel: "Company Size",
    visitorsOptions: ["1-10", "11-50", "51-200", "201-500", "500+"],
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your business needs...",
    submitText: "Request Demo",
    submittingText: "Sending...",
    successMessage: "Thank you! We'll contact you within 24 hours.",
    errorMessage: "Something went wrong. Please try again.",
  },
  privacyNotice: "By submitting this form, you agree to our Privacy Policy and Terms of Service.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Lumina",
  tagline: "Intelligent Communication",
  description: "Transform your business with AI-powered receptionist services. Available 24/7, always professional, incredibly efficient.",
  socialLinks: [
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
  ],
  linkGroups: [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#integrations" },
        { name: "API", href: "#api" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Blog", href: "#blog" },
        { name: "Press", href: "#press" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "San Francisco, CA" },
    { icon: "Phone", text: "+1 (888) 555-AI-RX" },
    { icon: "Mail", text: "hello@aireceptionist.com" },
  ],
  newsletterLabel: "Subscribe to our newsletter",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thanks for subscribing!",
  newsletterErrorText: "Please try again.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
  copyrightText: "© AI Receptionist. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  icpText: "",
  backToTopText: "Back to top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};
