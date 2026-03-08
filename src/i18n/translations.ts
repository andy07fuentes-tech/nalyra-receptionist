export type Language = 'fr' | 'en' | 'es' | 'it';

export const translations = {
  fr: {
    // Site
    site: {
      title: "Nalyra - Communication Commerciale Intelligente",
      description: "Transformez votre entreprise avec des services de réceptionniste alimentés par l'IA. Gestion d'appels intelligente 24/7, planification de rendez-vous et support client.",
    },

    // Navigation
    nav: {
      brandName: "Nalyra",
      brandSubname: "Communication Intelligente",
      tagline: "Votre Réception Numérique 24/7",
      home: "Accueil",
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      technology: "Technologie",
      testimonials: "Témoignages",
      contact: "Contact",
      ctaButton: "Commencer",
    },

    // Preloader
    preloader: {
      brandName: "Nalyra",
      brandSubname: "Communication Intelligente",
      yearText: "Nouvelle Génération",
    },

    // Hero
    hero: {
      scriptText: "L'Avenir de la Communication Commerciale",
      mainTitle: "Votre Réceptionniste\nIA Intelligent",
      ctaButton: "Essai Gratuit",
      videoDemo: "Démo Vidéo",
      prices: "Tarifs",
      decorativeText: "INTELLIGENT • EFFICACE • FIABLE",
      stats: {
        calls: { value: "100", suffix: "%", label: "Taux de Réponse" },
        availability: { value: "24", suffix: "/7", label: "Toujours Disponible" },
        savings: { value: "50", suffix: "%", label: "Réduction des Coûts" },
      },
    },

    // Feature Showcase
    featureShowcase: {
      step1: {
        subtitle: "DÉMONSTRATION",
        title: "Découvrez l'IA en action",
        description: "Visionnez notre démonstration pour comprendre comment notre réceptionniste virtuelle peut transformer votre entreprise.",
        cta: "Lancer la Vidéo",
      },
      step2: {
        subtitle: "Réception IA",
        title: "Ne ratez plus un seul client",
        description: "Chaque appel manqué, c'est un client perdu. Nalyra prend l'appel, comprend la demande et collecte les infos utiles.",
        cta: "Découvrir la Réception IA",
      },
      step3: {
        subtitle: "Rendez-vous & Agenda",
        title: "Planification instantanée, sans friction",
        description: "Vérifie les disponibilités, propose des créneaux, confirme par SMS/email, et réduit les no-shows.",
        cta: "Voir Comment Ça Marche",
      },
      step4: {
        subtitle: "Automatisation & Suivi",
        title: "Du contact à la conversion",
        description: "Crée automatiquement une fiche client, envoie un suivi, et alimente votre CRM/Google Sheets. Tout est traçable.",
        cta: "Explorer L'Automatisation",
      }
    },

    // Album Cube
    albumCube: {
      scrollHint: "Faites défiler pour explorer",
      backgroundTitle: "NALYRA",
      features: [
        { title: "VOIX IA", subtitle: "APPELS INTELLIGENTS" },
        { title: "CHATBOT", subtitle: "MESSAGERIE INTELLIGENTE" },
        { title: "AGENDA", subtitle: "PLANIFICATION AUTO" },
        { title: "GLOBAL", subtitle: "MULTILINGUE" },
      ]
    },

    // Video Promo
    videoPromo: {
      scriptText: "Vivez le Changement",
      subtitle: "NALYRA EN ACTION",
      titleMain: "Du Chaos de l'Accueil",
      titleAccent: "à l'Excellence",
      description: "Découvrez comment Nalyra transforme un accueil débordé en un centre d'efficacité sereine. Ne ratez plus aucun appel, ne perdez plus aucun prospect, et laissez votre équipe se concentrer sur l'essentiel.",
      feat1: { title: "Précision IA", desc: "Gère instantanément les demandes" },
      feat2: { title: "Installation Flash", desc: "Intégration sans friction" }
    },

    // Pricing
    pricing: {
      scriptText: "Un Investissement Rentable",
      subtitle: "NOS TARIFS",
      mainTitle: "Des forfaits adaptés à vos besoins",
      promoText: "Bénéficiez de 14 jours d'essai gratuit sur tous nos forfaits, avec un accès complet à la plateforme.",
      ctaButton: "Démarrer l'essai",
      tiers: [
        {
          name: "Standard",
          price: "250",
          description: "Pour les petits cabinets qui cherchent à automatiser leur réception.",
          features: [
            "Réceptionniste IA 24/7",
            "Prise de rendez-vous automatique",
            "Jusqu'à 500 appels / mois",
            "Support par email"
          ]
        },
        {
          name: "Professionnel",
          price: "450",
          isPopular: true,
          description: "La solution idéale pour les entreprises en pleine croissance.",
          features: [
            "Toutes les fonctionnalités Standard",
            "Jusqu'à 1500 appels / mois",
            "Routage d'appels intelligent",
            "Intégration CRM avancée",
            "Support prioritaire"
          ]
        },
        {
          name: "Entreprise",
          price: "600",
          description: "Pour les structures exigeant un volume élevé et une personnalisation totale.",
          features: [
            "Toutes les fonctionnalités Pro",
            "Appels illimités",
            "Personnalisation totale de la voix",
            "Gestion multi-agences",
            "Un gestionnaire de account dédié"
          ]
        }
      ]
    },

    // Features
    features: {
      scriptText: "Capacités Puissantes",
      subtitle: "FONCTIONNALITÉS IA",
      mainTitle: "Tout ce dont Votre Entreprise a Besoin",
      wines: {
        callHandling: {
          name: "Gestion d'Appels Intelligente",
          subtitle: "Routage Intelligent",
          description: "Notre réceptionniste IA répond aux appels avec des conversations naturelles, comprend l'intention de l'appelant et les achemine vers le bon service ou prend des messages détaillés.",
          tastingNotes: "Traitement du langage naturel avec analyse de sentiment",
          alcohol: "Multi-langue",
          temperature: "Instantané",
          aging: "99.9% de disponibilité",
        },
        scheduling: {
          name: "Planification de Rendez-vous",
          subtitle: "Intégration Calendrier",
          description: "Réservez des rendez-vous de manière transparente, envoyez des rappels et gérez votre calendrier. S'intègre avec Google Calendar, Outlook et les plateformes de planification populaires.",
          tastingNotes: "Disponibilité en temps réel avec détection de conflits",
          alcohol: "Multi-plateforme",
          temperature: "Automatisé",
          aging: "Réservation 24/7",
        },
        support: {
          name: "Support Client",
          subtitle: "Réponses Instantanées",
          description: "Fournissez des réponses instantanées aux questions courantes, résolvez les problèmes et escaladez les demandes complexes vers des agents humains si nécessaire.",
          tastingNotes: "Intégration de base de connaissances avec capacités d'apprentissage",
          alcohol: "Multi-canal",
          temperature: "Immédiat",
          aging: "Apprentissage Continu",
        },
      },
      featureCards: {
        aiPowered: { title: "Propulsé par IA", description: "NLP avancé pour des conversations naturelles" },
        alwaysOn: { title: "Toujours Actif", description: "Disponibilité 24/7 sans interruption" },
        instant: { title: "Réponse Instantanée", description: "Temps de réponse inférieurs à la seconde" },
        customizable: { title: "Personnalisable", description: "Adapté à votre voix de marque" },
      },
      quote: {
        text: "Le réceptionniste IA a transformé notre façon de gérer les demandes clients. Notre équipe peut se concentrer sur l'essentiel.",
        attribution: "Sarah Mitchell, PDG",
        prefix: "Histoire de Succès",
      },
    },

    // How It Works
    howItWorks: {
      scriptText: "Processus Simple",
      subtitle: "COMMENT ÇA MARCHE",
      mainTitle: "Commencez en Quelques Minutes",
      locationTag: "Basé sur le Cloud • Accès Mondial",
      slides: {
        setup: {
          title: "Configuration Rapide",
          subtitle: "Configurez Votre IA",
          area: "5",
          unit: "Minutes",
          description: "Inscrivez-vous et configurez votre réceptionniste IA avec les détails de votre entreprise, les scripts d'appel et les préférences. Aucune expertise technique requise.",
        },
        integrate: {
          title: "Intégration Facile",
          subtitle: "Connectez Vos Systèmes",
          area: "50+",
          unit: "Intégrations",
          description: "Connectez-vous à votre système téléphonique existant, CRM, calendrier et outils. Fonctionne parfaitement avec les plateformes commerciales populaires.",
        },
        launch: {
          title: "Mise en Ligne",
          subtitle: "Commencez à Recevoir des Appels",
          area: "24",
          unit: "Heures",
          description: "Votre réceptionniste IA devient actif et commence à gérer les appels immédiatement. Surveillez les performances et ajustez les paramètres en temps réel.",
        },
      },
    },

    // Technology
    technology: {
      scriptText: "Technologie de Pointe",
      subtitle: "NOTRE TECHNOLOGIE",
      mainTitle: "Propulsé par une IA Avancée",
      introText: "Notre réceptionniste IA exploite le traitement du langage naturel et l'apprentissage automatique de pointe pour offrir des conversations humanisées et une prise de décision intelligente.",
      timeline: {
        2020: "Recherche & Développement Commence",
        2022: "Premier Lancement Bêta",
        2023: "Partenariats Entreprise",
        newYear: "Expansion Mondiale",
      },
      tabs: {
        nlp: {
          name: "Langage Naturel",
          title: "Comprendre la Parole Humaine",
          description: "Notre moteur NLP propriétaire comprend le contexte, l'intention et l'émotion dans les conversations. Il gère les accents, l'argot et les requêtes complexes avec aisance.",
          highlight: "Taux de Précision de 95%",
        },
        ml: {
          name: "Apprentissage Automatique",
          title: "Amélioration Continue",
          description: "L'IA apprend de chaque interaction, améliorant les réponses et la compréhension au fil du temps. Votre réceptionniste devient plus intelligent chaque jour.",
          highlight: "Système Auto-Apprenant",
        },
        security: {
          name: "Sécurité Entreprise",
          title: "Protection de Niveau Bancaire",
          description: "Le chiffrement de bout en bout, la conformité SOC 2 et l'adhésion au RGPD garantissent que vos données et les informations client restent sécurisées.",
          highlight: "Certifié SOC 2",
        },
      },
      openingHours: "100% de Disponibilité SLA",
      openingHoursLabel: "Garantie de Fiabilité",
      ctaButton: "En Savoir Plus",
      yearBadge: "Nouveau",
      yearBadgeLabel: "Version",
      quote: {
        prefix: "Innovation",
        text: "Nous construisons l'avenir de la communication commerciale, une conversation à la fois.",
        attribution: "L'Équipe AI Receptionist",
      },
    },

    // News & Testimonials
    news: {
      scriptText: "Dernières Mises à Jour",
      subtitle: "ACTUALITÉS & INSIGHTS",
      mainTitle: "Actualités du Secteur",
      viewAllText: "Voir Tous les Articles",
      readMoreText: "Lire la Suite",
      articles: {
        trends: {
          title: "Tendances Réceptionniste IA",
          excerpt: "Découvrez comment les réceptionnistes IA transforment le service client dans tous les secteurs.",
          category: "Industrie",
        },
        integration: {
          title: "Nouvelles Intégrations CRM",
          excerpt: "Nous avons ajouté le support pour 15 nouvelles plateformes CRM incluant HubSpot et Pipedrive.",
          category: "Produit",
        },
        security: {
          title: "Renforcement de la Sécurité",
          excerpt: "Notre dernière mise à jour de sécurité apporte une détection et prévention avancées des menaces.",
          category: "Sécurité",
        },
        awards: {
          title: "Meilleure Solution IA",
          excerpt: "AI Receptionist remporte le prestigieux Prix de l'Innovation Technologique pour le service client.",
          category: "Récompenses",
        },
      },
      testimonialsScriptText: "Succès Client",
      testimonialsSubtitle: "TÉMOIGNAGES",
      testimonialsMainTitle: "Adoré par les Entreprises",
      testimonials: {
        1: {
          name: "Michael Chen",
          role: "PDG, TechStart Inc.",
          text: "Le réceptionniste IA a changé la donne. Nous avons réduit les appels manqués de 95% et nos clients adorent la réponse instantanée.",
        },
        2: {
          name: "Emily Rodriguez",
          role: "Responsable Bureau, MedCare Clinic",
          text: "La planification des rendez-vous est maintenant sans effort. Les patients peuvent réserver 24/7, et les rappels ont réduit les absences de 40%.",
        },
        3: {
          name: "David Park",
          role: "Directeur, Legal Solutions",
          text: "Professionnel, fiable et rentable. L'IA gère les demandes courantes pendant que nous nous concentrons sur les cas complexes.",
        },
      },
      storyScriptText: "Notre Histoire",
      storySubtitle: "À PROPOS DE NOUS",
      storyTitle: "Révolutionner la Communication Commerciale",
      storyParagraphs: {
        1: "Fondée par une équipe de chercheurs en IA et d'experts en service client, AI Receptionist est née d'une idée simple : chaque entreprise mérite l'accès à des outils de communication intelligents.",
        2: "Aujourd'hui, nous servons des milliers d'entreprises dans le monde entier, des praticiens solo aux organisations d'entreprise, les aidant à offrir des expériences client exceptionnelles 24 heures sur 24.",
      },
      storyTimeline: {
        users: { value: "10K+", label: "Utilisateurs Actifs" },
        calls: { value: "5M+", label: "Appels Gérés" },
        satisfaction: { value: "100%", label: "Satisfaction" },
      },
      storyQuote: {
        prefix: "Mission",
        text: "Démocratiser l'accès à la technologie de communication intelligente pour les entreprises de toutes tailles.",
        attribution: "Notre Mission",
      },
    },

    // Contact
    contact: {
      scriptText: "Contactez-nous",
      subtitle: "CONTACT",
      mainTitle: "Commencez Votre Essai Gratuit",
      introText: "Prêt à transformer votre communication commerciale ? Commencez avec un essai gratuit de 14 jours. Aucune carte de crédit requise.",
      contactInfoTitle: "Informations de Contact",
      contactItems: {
        address: { label: "Adresse", value: "350 Market Street, Suite 200", subtext: "San Francisco, CA 94105" },
        phone: { label: "Téléphone", value: "+1 (888) 555-AI-RX", subtext: "Ligne de Support 24/7" },
        email: { label: "Email", value: "hello@aireceptionist.com", subtext: "Nous répondons sous 2 heures" },
        hours: { label: "Heures", value: "Toujours Disponible", subtext: "24/7/365 Support" },
      },
      form: {
        nameLabel: "Nom Complet",
        namePlaceholder: "Jean Dupont",
        emailLabel: "Adresse Email",
        emailPlaceholder: "jean@entreprise.com",
        phoneLabel: "Numéro de Téléphone",
        phonePlaceholder: "+33 1 23 45 67 89",
        visitDateLabel: "Date de Démo Préférée",
        visitorsLabel: "Taille de l'Entreprise",
        visitorsOptions: ["1-10", "11-50", "51-200", "201-500", "500+"],
        messageLabel: "Message",
        messagePlaceholder: "Parlez-nous de vos besoins commerciaux...",
        submitText: "Demander une Démo",
        submittingText: "Envoi...",
        successMessage: "Merci ! Nous vous contacterons dans les 24 heures.",
        errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      },
      privacyNotice: "En soumettant ce formulaire, vous acceptez notre Politique de Confidentialité et nos Conditions de Service.",
    },

    // Footer
    footer: {
      brandName: "Nalyra",
      tagline: "Communication Intelligente",
      description: "Transformez votre entreprise avec des services de réceptionniste alimentés par l'IA. Disponible 24/7, toujours professionnel, incroyablement efficace.",
      newsletterLabel: "Abonnez-vous à notre newsletter",
      newsletterPlaceholder: "Entrez votre email",
      newsletterButtonText: "S'abonner",
      newsletterSuccessText: "Merci pour votre abonnement !",
      newsletterErrorText: "Veuillez réessayer.",
      copyrightText: "© Nalyra AI. Tous droits réservés.",
      backToTopText: "Retour en haut",
      linkGroups: {
        product: {
          title: "Produit",
          links: ["Fonctionnalités", "Tarification", "Intégrations", "API"],
        },
        company: {
          title: "Entreprise",
          links: ["À Propos", "Carrières", "Blog", "Presse"],
        },
      },
      legalLinks: ["Politique de Confidentialité", "Conditions de Service", "Politique de Cookies"],
    },

    // Language Toggle
    language: {
      title: "Langue",
      fr: "Français",
      en: "English",
      es: "Español",
      it: "Italiano",
    },
  },

  en: {
    // Site
    site: {
      title: "AI Receptionist - Smart Business Communication",
      description: "Transform your business with AI-powered receptionist services. 24/7 intelligent call handling, appointment scheduling, and customer support.",
    },

    // Navigation
    nav: {
      brandName: "Nalyra",
      brandSubname: "Intelligent Communication",
      tagline: "Your 24/7 Digital Front Desk",
      home: "Home",
      features: "Features",
      howItWorks: "How It Works",
      technology: "Technology",
      testimonials: "Testimonials",
      contact: "Contact",
      ctaButton: "Get Started",
    },

    // Preloader
    preloader: {
      brandName: "Nalyra",
      brandSubname: "Intelligent Communication",
      yearText: "Next Gen",
    },

    // Hero
    hero: {
      scriptText: "The Future of Business Communication",
      mainTitle: "Your Intelligent\nAI Receptionist",
      ctaButton: "Start Free Trial",
      videoDemo: "Video Demo",
      prices: "Prices",
      decorativeText: "INTELLIGENT • EFFICIENT • RELIABLE",
      stats: {
        calls: { value: "100", suffix: "%", label: "Call Answer Rate" },
        availability: { value: "24", suffix: "/7", label: "Always Available" },
        savings: { value: "50", suffix: "%", label: "Cost Reduction" },
      },
    },

    // Feature Showcase
    featureShowcase: {
      step1: {
        subtitle: "DEMONSTRATION",
        title: "See AI in action",
        description: "Watch our demo to understand how our virtual receptionist can transform your business.",
        cta: "Play Video",
      },
      step2: {
        subtitle: "AI Reception",
        title: "Never miss a single client again",
        description: "Every missed call is a lost client. Nalyra takes the call, understands the request, and collects the useful info.",
        cta: "Discover AI Reception",
      },
      step3: {
        subtitle: "Appointments & Agenda",
        title: "Instant scheduling, zero friction",
        description: "Check availability, propose time slots, confirm via SMS/email, and drastically reduce no-shows.",
        cta: "See How It Works",
      },
      step4: {
        subtitle: "Automation & Tracking",
        title: "From contact to conversion",
        description: "Automatically creates a client file, sends follow-ups, and feeds your CRM/Google Sheets. Everything is traceable.",
        cta: "Explore Automation",
      }
    },

    // Album Cube
    albumCube: {
      scrollHint: "Scroll to explore",
      backgroundTitle: "NALYRA",
      features: [
        { title: "VOICE AI", subtitle: "INTELLIGENT CALLS" },
        { title: "CHATBOT", subtitle: "SMART MESSAGING" },
        { title: "SCHEDULING", subtitle: "AUTO CALENDAR" },
        { title: "GLOBAL", subtitle: "MULTILINGUAL" },
      ]
    },

    // Video Promo
    videoPromo: {
      scriptText: "Experience the Change",
      subtitle: "NALYRA EN ACTION",
      titleMain: "From Overwhelmed",
      titleAccent: "To Unstoppable",
      description: "Watch how Nalyra transforms a chaotic front desk into a hub of calm efficiency. Never miss a call, never lose a lead, and let your team focus on what truly matters.",
      feat1: { title: "AI Precision", desc: "Handles complex inquiries instantly" },
      feat2: { title: "Instant Setup", desc: "Zero friction integration" }
    },

    // Pricing
    pricing: {
      scriptText: "A Profitable Investment",
      subtitle: "OUR PRICING",
      mainTitle: "Plans tailored to your needs",
      promoText: "Enjoy a 14-day free trial on all our plans, with full access to the platform.",
      ctaButton: "Start Trial",
      tiers: [
        {
          name: "Standard",
          price: "250",
          description: "For small practices looking to automate their reception.",
          features: [
            "24/7 AI Receptionist",
            "Automated appointment booking",
            "Up to 500 calls / month",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "450",
          isPopular: true,
          description: "The ideal solution for growing businesses.",
          features: [
            "All Standard features",
            "Up to 1500 calls / month",
            "Smart call routing",
            "Advanced CRM integration",
            "Priority support"
          ]
        },
        {
          name: "Enterprise",
          price: "600",
          description: "For organizations demanding high volume and total customization.",
          features: [
            "All Pro features",
            "Unlimited calls",
            "Total voice customization",
            "Multi-agency management",
            "Dedicated account manager"
          ]
        }
      ]
    },

    // Features
    features: {
      scriptText: "Powerful Capabilities",
      subtitle: "AI-POWERED FEATURES",
      mainTitle: "Everything Your Business Needs",
      wines: {
        callHandling: {
          name: "Smart Call Handling",
          subtitle: "Intelligent Routing",
          description: "Our AI receptionist answers calls with natural conversation, understands caller intent, and routes them to the right department or takes detailed messages.",
          tastingNotes: "Natural language processing with sentiment analysis",
          alcohol: "Multi-language",
          temperature: "Instant",
          aging: "99.9% Uptime",
        },
        scheduling: {
          name: "Appointment Scheduling",
          subtitle: "Calendar Integration",
          description: "Seamlessly book appointments, send reminders, and manage your calendar. Integrates with Google Calendar, Outlook, and popular scheduling platforms.",
          tastingNotes: "Real-time availability with conflict detection",
          alcohol: "Multi-platform",
          temperature: "Automated",
          aging: "24/7 Booking",
        },
        support: {
          name: "Customer Support",
          subtitle: "Instant Responses",
          description: "Provide instant answers to common questions, troubleshoot issues, and escalate complex inquiries to human agents when needed.",
          tastingNotes: "Knowledge base integration with learning capabilities",
          alcohol: "Multi-channel",
          temperature: "Immediate",
          aging: "Continuous Learning",
        },
      },
      featureCards: {
        aiPowered: { title: "AI-Powered", description: "Advanced NLP for natural conversations" },
        alwaysOn: { title: "Always On", description: "24/7 availability without breaks" },
        instant: { title: "Instant Response", description: "Sub-second response times" },
        customizable: { title: "Customizable", description: "Tailored to your brand voice" },
      },
      quote: {
        text: "The AI receptionist has transformed how we handle customer inquiries. Our team can focus on what matters most.",
        attribution: "Sarah Mitchell, CEO",
        prefix: "Success Story",
      },
    },

    // How It Works
    howItWorks: {
      scriptText: "Simple Setup Process",
      subtitle: "HOW IT WORKS",
      mainTitle: "Get Started in Minutes",
      locationTag: "Cloud-Based • Global Access",
      slides: {
        setup: {
          title: "Quick Setup",
          subtitle: "Configure Your AI",
          area: "5",
          unit: "Minutes",
          description: "Sign up and configure your AI receptionist with your business details, call scripts, and preferences. No technical expertise required.",
        },
        integrate: {
          title: "Easy Integration",
          subtitle: "Connect Your Systems",
          area: "50+",
          unit: "Integrations",
          description: "Connect with your existing phone system, CRM, calendar, and tools. Works seamlessly with popular business platforms.",
        },
        launch: {
          title: "Go Live",
          subtitle: "Start Taking Calls",
          area: "24",
          unit: "Hours",
          description: "Your AI receptionist goes live and starts handling calls immediately. Monitor performance and adjust settings in real-time.",
        },
      },
    },

    // Technology
    technology: {
      scriptText: "Cutting-Edge Technology",
      subtitle: "OUR TECHNOLOGY",
      mainTitle: "Powered by Advanced AI",
      introText: "Our AI receptionist leverages state-of-the-art natural language processing and machine learning to deliver human-like conversations and intelligent decision-making.",
      timeline: {
        2020: "Research & Development Begins",
        2022: "First Beta Launch",
        2023: "Enterprise Partnerships",
        newYear: "Global Expansion",
      },
      tabs: {
        nlp: {
          name: "Natural Language",
          title: "Understanding Human Speech",
          description: "Our proprietary NLP engine understands context, intent, and emotion in conversations. It handles accents, slang, and complex queries with ease.",
          highlight: "95% Accuracy Rate",
        },
        ml: {
          name: "Machine Learning",
          title: "Continuous Improvement",
          description: "The AI learns from every interaction, improving responses and understanding over time. Your receptionist gets smarter every day.",
          highlight: "Self-Learning System",
        },
        security: {
          name: "Enterprise Security",
          title: "Bank-Grade Protection",
          description: "End-to-end encryption, SOC 2 compliance, and GDPR adherence ensure your data and customer information remain secure.",
          highlight: "SOC 2 Certified",
        },
      },
      openingHours: "100% Uptime SLA",
      openingHoursLabel: "Reliability Guarantee",
      ctaButton: "Learn More",
      yearBadge: "Nouveau",
      yearBadgeLabel: "Founded",
      quote: {
        prefix: "Innovation",
        text: "We're building the future of business communication, one conversation at a time.",
        attribution: "The AI Receptionist Team",
      },
    },

    // News & Testimonials
    news: {
      scriptText: "Latest Updates",
      subtitle: "NEWS & INSIGHTS",
      mainTitle: "Industry News",
      viewAllText: "View All Articles",
      readMoreText: "Read More",
      articles: {
        trends: {
          title: "AI Receptionist Trends",
          excerpt: "Discover how AI receptionists are transforming customer service across industries.",
          category: "Industry",
        },
        integration: {
          title: "New CRM Integrations",
          excerpt: "We've added support for 15 new CRM platforms including HubSpot and Pipedrive.",
          category: "Product",
        },
        security: {
          title: "Security Enhancement",
          excerpt: "Our latest security update brings advanced threat detection and prevention.",
          category: "Security",
        },
        awards: {
          title: "Best AI Solution",
          excerpt: "AI Receptionist wins the prestigious Tech Innovation Award for customer service.",
          category: "Awards",
        },
      },
      testimonialsScriptText: "Customer Success",
      testimonialsSubtitle: "TESTIMONIALS",
      testimonialsMainTitle: "Loved by Businesses",
      testimonials: {
        1: {
          name: "Michael Chen",
          role: "CEO, TechStart Inc.",
          text: "The AI receptionist has been a game-changer. We've reduced missed calls by 95% and our customers love the instant response.",
        },
        2: {
          name: "Emily Rodriguez",
          role: "Office Manager, MedCare Clinic",
          text: "Appointment scheduling is now effortless. Patients can book 24/7, and reminders have reduced no-shows by 40%.",
        },
        3: {
          name: "David Park",
          role: "Director, Legal Solutions",
          text: "Professional, reliable, and cost-effective. The AI handles routine inquiries while we focus on complex cases.",
        },
      },
      storyScriptText: "Our Story",
      storySubtitle: "ABOUT US",
      storyTitle: "Revolutionizing Business Communication",
      storyParagraphs: {
        1: "Founded by a team of AI researchers and customer service experts, AI Receptionist was born from a simple idea: every business deserves access to intelligent communication tools.",
        2: "Today, we serve thousands of businesses worldwide, from solo practitioners to enterprise organizations, helping them deliver exceptional customer experiences around the clock.",
      },
      storyTimeline: {
        users: { value: "10K+", label: "Active Users" },
        calls: { value: "5M+", label: "Calls Handled" },
        satisfaction: { value: "100%", label: "Satisfaction" },
      },
      storyQuote: {
        prefix: "Mission",
        text: "To democratize access to intelligent communication technology for businesses of all sizes.",
        attribution: "Our Mission",
      },
    },

    // Contact
    contact: {
      scriptText: "Get in Touch",
      subtitle: "CONTACT US",
      mainTitle: "Start Your Free Trial",
      introText: "Ready to transform your business communication? Get started with a 14-day free trial. No credit card required.",
      contactInfoTitle: "Contact Information",
      contactItems: {
        address: { label: "Address", value: "350 Market Street, Suite 200", subtext: "San Francisco, CA 94105" },
        phone: { label: "Phone", value: "+1 (888) 555-AI-RX", subtext: "24/7 Support Line" },
        email: { label: "Email", value: "hello@aireceptionist.com", subtext: "We reply within 2 hours" },
        hours: { label: "Hours", value: "Always Available", subtext: "24/7/365 Support" },
      },
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
    },

    // Footer
    footer: {
      brandName: "Nalyra",
      tagline: "Intelligent Communication",
      description: "Transform your business with AI-powered receptionist services. Available 24/7, always professional, incredibly efficient.",
      newsletterLabel: "Subscribe to our newsletter",
      newsletterPlaceholder: "Enter your email",
      newsletterButtonText: "Subscribe",
      newsletterSuccessText: "Thanks for subscribing!",
      newsletterErrorText: "Please try again.",
      copyrightText: "© Nalyra AI. All rights reserved.",
      backToTopText: "Back to top",
      linkGroups: {
        product: {
          title: "Product",
          links: ["Features", "Pricing", "Integrations", "API"],
        },
        company: {
          title: "Company",
          links: ["About Us", "Careers", "Blog", "Press"],
        },
      },
      legalLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },

    // Language Toggle
    language: {
      title: "Language",
      fr: "Français",
      en: "English",
      es: "Español",
      it: "Italiano",
    },
  },

  es: {
    // Site
    site: {
      title: "AI Receptionist - Comunicación Empresarial Inteligente",
      description: "Transforme su negocio con servicios de recepcionista impulsados por IA. Gestión inteligente de llamadas 24/7, programación de citas y soporte al cliente.",
    },

    // Navigation
    nav: {
      brandName: "Recepcionista IA",
      brandSubname: "Comunicación Inteligente",
      tagline: "Tu Recepción Digital 24/7",
      home: "Inicio",
      features: "Funciones",
      howItWorks: "Cómo Funciona",
      technology: "Tecnología",
      testimonials: "Testimonios",
      contact: "Contacto",
      ctaButton: "Empezar",
    },

    // Preloader
    preloader: {
      brandName: "Recepcionista IA",
      brandSubname: "Comunicación Inteligente",
      yearText: "Next Gen",
    },

    // Hero
    hero: {
      scriptText: "El Futuro de la Comunicación Empresarial",
      mainTitle: "Su Recepcionista\nIA Inteligente",
      ctaButton: "Prueba Gratuita",
      decorativeText: "INTELIGENTE • EFICIENTE • CONFIABLE",
      stats: {
        calls: { value: "100", suffix: "%", label: "Tasa de Respuesta" },
        availability: { value: "24", suffix: "/7", label: "Siempre Disponible" },
        savings: { value: "50", suffix: "%", label: "Reducción de Costos" },
      },
    },

    // Feature Showcase
    featureShowcase: {
      step1: {
        subtitle: "DEMOSTRACIÓN",
        title: "Descubre la IA en acción",
        description: "Mire nuestra demostración para comprender cómo nuestra recepcionista virtual puede transformar su negocio.",
        cta: "Reproducir Video",
      },
      step2: {
        subtitle: "Recepción IA",
        title: "No pierda nunca más a un cliente",
        description: "Cada llamada perdida es un cliente perdido. Nalyra toma la llamada, entiende la solicitud y recopila la información útil.",
        cta: "Descubrir Recepción IA",
      },
      step3: {
        subtitle: "Citas y Agenda",
        title: "Programación instantánea, sin fricciones",
        description: "Verifica disponibilidad, propone horarios, confirma por SMS/email y reduce drásticamente las ausencias.",
        cta: "Ver Cómo Funciona",
      },
      step4: {
        subtitle: "Automatización y Seguimiento",
        title: "Del contacto a la conversión",
        description: "Crea automáticamente un archivo de cliente, envía seguimientos y alimenta tu CRM/Google Sheets. Todo es rastreable.",
        cta: "Explorar la Automatización",
      }
    },

    // Album Cube
    albumCube: {
      scrollHint: "Desplácese para explorar",
      backgroundTitle: "NALYRA",
      features: [
        { title: "VOZ IA", subtitle: "LLAMADAS INTELIGENTES" },
        { title: "CHATBOT", subtitle: "MENSAJERÍA INTELIGENTE" },
        { title: "AGENDA", subtitle: "PLANIFICACIÓN AUTO" },
        { title: "GLOBAL", subtitle: "MULTILINGÜE" },
      ]
    },

    // Pricing
    pricing: {
      scriptText: "Una Inversión Rentable",
      subtitle: "NUESTROS PRECIOS",
      mainTitle: "Planes adaptados a tus necesidades",
      promoText: "Disfrute de una prueba gratuita de 14 días en todos nuestros planes, con acceso completo a la plataforma.",
      ctaButton: "Iniciar Prueba",
      tiers: [
        {
          name: "Estándar",
          price: "250",
          description: "Para pequeños consultorios que buscan automatizar su recepción.",
          features: [
            "Recepcionista IA 24/7",
            "Reserva automática de citas",
            "Hasta 500 llamadas / mes",
            "Soporte por correo electrónico"
          ]
        },
        {
          name: "Profesional",
          price: "450",
          isPopular: true,
          description: "La solución ideal para empresas en crecimiento.",
          features: [
            "Todas las funciones Estándar",
            "Hasta 1500 llamadas / mes",
            "Enrutamiento inteligente de llamadas",
            "Integración avanzada de CRM",
            "Soporte prioritario"
          ]
        },
        {
          name: "Empresa",
          price: "600",
          description: "Para organizaciones que exigen un alto volumen y personalización total.",
          features: [
            "Todas las funciones Pro",
            "Llamadas ilimitadas",
            "Personalización total de voz",
            "Gestión multi-agencia",
            "Gerente de cuenta dedicado"
          ]
        }
      ]
    },

    // Features
    features: {
      scriptText: "Capacidades Potentes",
      subtitle: "FUNCIONES IA",
      mainTitle: "Todo lo que su Negocio Necesita",
      wines: {
        callHandling: {
          name: "Gestión Inteligente de Llamadas",
          subtitle: "Enrutamiento Inteligente",
          description: "Nuestro recepcionista IA responde llamadas con conversación natural, comprende la intención del llamante y lo dirige al departamento correcto o toma mensajes detallados.",
          tastingNotes: "Procesamiento de lenguaje natural con análisis de sentimiento",
          alcohol: "Multi-idioma",
          temperature: "Instantáneo",
          aging: "99.9% de Disponibilidad",
        },
        scheduling: {
          name: "Programación de Citas",
          subtitle: "Integración de Calendario",
          description: "Reserve citas sin problemas, envíe recordatorios y gestione su calendario. Se integra con Google Calendar, Outlook y plataformas de programación populares.",
          tastingNotes: "Disponibilidad en tiempo real con detección de conflictos",
          alcohol: "Multi-plataforma",
          temperature: "Automatizado",
          aging: "Reserva 24/7",
        },
        support: {
          name: "Soporte al Cliente",
          subtitle: "Respuestas Instantáneas",
          description: "Proporcione respuestas instantáneas a preguntas comunes, resuelva problemas y escale consultas complejas a agentes humanos cuando sea necesario.",
          tastingNotes: "Integración de base de conocimientos con capacidades de aprendizaje",
          alcohol: "Multi-canal",
          temperature: "Inmediato",
          aging: "Aprendizaje Continuo",
        },
      },
      featureCards: {
        aiPowered: { title: "Impulsado por IA", description: "NLP avanzado para conversaciones naturales" },
        alwaysOn: { title: "Siempre Activo", description: "Disponibilidad 24/7 sin interrupciones" },
        instant: { title: "Respuesta Instantánea", description: "Tiempos de respuesta inferiores al segundo" },
        customizable: { title: "Personalizable", description: "Adaptado a la voz de su marca" },
      },
      quote: {
        text: "El recepcionista IA ha transformado cómo manejamos las consultas de clientes. Nuestro equipo puede enfocarse en lo más importante.",
        attribution: "Sarah Mitchell, CEO",
        prefix: "Historia de Éxito",
      },
    },

    // How It Works
    howItWorks: {
      scriptText: "Proceso Simple",
      subtitle: "CÓMO FUNCIONA",
      mainTitle: "Comience en Minutos",
      locationTag: "Basado en la Nube • Acceso Global",
      slides: {
        setup: {
          title: "Configuración Rápida",
          subtitle: "Configure su IA",
          area: "5",
          unit: "Minutos",
          description: "Regístrese y configure su recepcionista IA con los detalles de su negocio, scripts de llamada y preferencias. No se requiere experiencia técnica.",
        },
        integrate: {
          title: "Integración Fácil",
          subtitle: "Conecte sus Sistemas",
          area: "50+",
          unit: "Integraciones",
          description: "Conecte con su sistema telefónico existente, CRM, calendario y herramientas. Funciona perfectamente con plataformas empresariales populares.",
        },
        launch: {
          title: "Poner en Marcha",
          subtitle: "Comience a Recibir Llamadas",
          area: "24",
          unit: "Horas",
          description: "Su recepcionista IA se activa y comienza a manejar llamadas inmediatamente. Monitoree el rendimiento y ajuste la configuración en tiempo real.",
        },
      },
    },

    // Technology
    technology: {
      scriptText: "Tecnología de Vanguardia",
      subtitle: "NUESTRA TECNOLOGÍA",
      mainTitle: "Impulsado por IA Avanzada",
      introText: "Nuestro recepcionista IA aprovecha el procesamiento de lenguaje natural y el aprendizaje automático de última generación para ofrecer conversaciones humanizadas y toma de decisiones inteligente.",
      timeline: {
        2020: "Investigación y Desarrollo Comienza",
        2022: "Primer Lanzamiento Beta",
        2023: "Alianzas Empresariales",
        newYear: "Expansión Global",
      },
      tabs: {
        nlp: {
          name: "Lenguaje Natural",
          title: "Comprender el Habla Humana",
          description: "Nuestro motor NLP patentado comprende el contexto, la intención y la emoción en las conversaciones. Maneja acentos, jerga y consultas complejas con facilidad.",
          highlight: "Tasa de Precisión del 95%",
        },
        ml: {
          name: "Aprendizaje Automático",
          title: "Mejora Continua",
          description: "La IA aprende de cada interacción, mejorando las respuestas y la comprensión con el tiempo. Su recepcionista se vuelve más inteligente cada día.",
          highlight: "Sistema Auto-Aprendizaje",
        },
        security: {
          name: "Seguridad Empresarial",
          title: "Protección de Nivel Bancario",
          description: "El cifrado de extremo a extremo, el cumplimiento SOC 2 y la adherencia al GDPR garantizan que sus datos y la información del cliente permanezcan seguros.",
          highlight: "Certificado SOC 2",
        },
      },
      openingHours: "100% de Disponibilidad SLA",
      openingHoursLabel: "Garantía de Confiabilidad",
      ctaButton: "Saber Más",
      yearBadge: "Nouveau",
      yearBadgeLabel: "Fundado",
      quote: {
        prefix: "Innovación",
        text: "Estamos construyendo el futuro de la comunicación empresarial, una conversación a la vez.",
        attribution: "El Equipo de AI Receptionist",
      },
    },

    // News & Testimonials
    news: {
      scriptText: "Últimas Actualizaciones",
      subtitle: "NOTICIAS Y PERSPECTIVAS",
      mainTitle: "Noticias de la Industria",
      viewAllText: "Ver Todos los Artículos",
      readMoreText: "Leer Más",
      articles: {
        trends: {
          title: "Tendencias de Recepcionista IA",
          excerpt: "Descubra cómo los recepcionistas IA están transformando el servicio al cliente en todas las industrias.",
          category: "Industria",
        },
        integration: {
          title: "Nuevas Integraciones CRM",
          excerpt: "Hemos agregado soporte para 15 nuevas plataformas CRM incluyendo HubSpot y Pipedrive.",
          category: "Producto",
        },
        security: {
          title: "Mejora de Seguridad",
          excerpt: "Nuestra última actualización de seguridad trae detección y prevención avanzadas de amenazas.",
          category: "Seguridad",
        },
        awards: {
          title: "Mejor Solución IA",
          excerpt: "AI Receptionist gana el prestigioso Premio a la Innovación Tecnológica por servicio al cliente.",
          category: "Premios",
        },
      },
      testimonialsScriptText: "Éxito del Cliente",
      testimonialsSubtitle: "TESTIMONIOS",
      testimonialsMainTitle: "Amado por Empresas",
      testimonials: {
        1: {
          name: "Michael Chen",
          role: "CEO, TechStart Inc.",
          text: "El recepcionista IA ha sido un cambio de juego. Hemos reducido las llamadas perdidas en un 95% y nuestros clientes aman la respuesta instantánea.",
        },
        2: {
          name: "Emily Rodriguez",
          role: "Gerente de Oficina, MedCare Clinic",
          text: "La programación de citas es ahora sin esfuerzo. Los pacientes pueden reservar 24/7, y los recordatorios han reducido las ausencias en un 40%.",
        },
        3: {
          name: "David Park",
          role: "Director, Legal Solutions",
          text: "Profesional, confiable y rentable. La IA maneja consultas rutinarias mientras nos enfocamos en casos complejos.",
        },
      },
      storyScriptText: "Nuestra Historia",
      storySubtitle: "SOBRE NOSOTROS",
      storyTitle: "Revolucionando la Comunicación Empresarial",
      storyParagraphs: {
        1: "Fundada por un equipo de investigadores de IA y expertos en servicio al cliente, AI Receptionist nació de una idea simple: cada negocio merece acceso a herramientas de comunicación inteligentes.",
        2: "Hoy, servimos a miles de negocios en todo el mundo, desde practicantes individuales hasta organizaciones empresariales, ayudándoles a ofrecer experiencias excepcionales al cliente las 24 horas.",
      },
      storyTimeline: {
        users: { value: "10K+", label: "Usuarios Activos" },
        calls: { value: "5M+", label: "Llamadas Gestionadas" },
        satisfaction: { value: "100%", label: "Satisfacción" },
      },
      storyQuote: {
        prefix: "Misión",
        text: "Democratizar el acceso a la tecnología de comunicación inteligente para negocios de todos los tamaños.",
        attribution: "Nuestra Misión",
      },
    },

    // Contact
    contact: {
      scriptText: "Póngase en Contacto",
      subtitle: "CONTÁCTENOS",
      mainTitle: "Comience su Prueba Gratuita",
      introText: "¿Listo para transformar su comunicación empresarial? Comience con una prueba gratuita de 14 días. No se requiere tarjeta de crédito.",
      contactInfoTitle: "Información de Contacto",
      contactItems: {
        address: { label: "Dirección", value: "350 Market Street, Suite 200", subtext: "San Francisco, CA 94105" },
        phone: { label: "Teléfono", value: "+1 (888) 555-AI-RX", subtext: "Línea de Soporte 24/7" },
        email: { label: "Email", value: "hello@aireceptionist.com", subtext: "Respondemos en 2 horas" },
        hours: { label: "Horas", value: "Siempre Disponible", subtext: "Soporte 24/7/365" },
      },
      form: {
        nameLabel: "Nombre Completo",
        namePlaceholder: "Juan García",
        emailLabel: "Dirección de Email",
        emailPlaceholder: "juan@empresa.com",
        phoneLabel: "Número de Teléfono",
        phonePlaceholder: "+34 123 456 789",
        visitDateLabel: "Fecha de Demo Preferida",
        visitorsLabel: "Tamaño de la Empresa",
        visitorsOptions: ["1-10", "11-50", "51-200", "201-500", "500+"],
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntenos sobre las necesidades de su negocio...",
        submitText: "Solicitar Demo",
        submittingText: "Enviando...",
        successMessage: "¡Gracias! Nos pondremos en contacto en 24 horas.",
        errorMessage: "Algo salió mal. Por favor intente de nuevo.",
      },
      privacyNotice: "Al enviar este formulario, acepta nuestra Política de Privacidad y Términos de Servicio.",
    },

    // Footer
    footer: {
      brandName: "AI Receptionist",
      tagline: "Comunicación Inteligente",
      description: "Transforme su negocio con servicios de recepcionista impulsados por IA. Disponible 24/7, siempre profesional, increíblemente eficiente.",
      newsletterLabel: "Suscríbase a nuestro boletín",
      newsletterPlaceholder: "Ingrese su email",
      newsletterButtonText: "Suscribirse",
      newsletterSuccessText: "¡Gracias por suscribirse!",
      newsletterErrorText: "Por favor intente de nuevo.",
      copyrightText: "© AI Receptionist. Todos los derechos reservados.",
      backToTopText: "Volver arriba",
      linkGroups: {
        product: {
          title: "Producto",
          links: ["Funciones", "Precios", "Integraciones", "API"],
        },
        company: {
          title: "Empresa",
          links: ["Sobre Nosotros", "Carreras", "Blog", "Prensa"],
        },
      },
      legalLinks: ["Política de Privacidad", "Términos de Servicio", "Política de Cookies"],
    },

    // Language Toggle
    language: {
      title: "Idioma",
      fr: "Français",
      en: "English",
      es: "Español",
      it: "Italiano",
    },
  },

  it: {
    // Site
    site: {
      title: "AI Receptionist - Comunicazione Aziendale Intelligente",
      description: "Trasforma la tua azienda con servizi di receptionist alimentati dall'IA. Gestione intelligente delle chiamate 24/7, pianificazione di appuntamenti e supporto clienti.",
    },

    // Navigation
    nav: {
      brandName: "Receptionist IA",
      brandSubname: "Comunicazione Intelligente",
      tagline: "La Tua Reception Digitale 24/7",
      home: "Home",
      features: "Funzionalità",
      howItWorks: "Come Funziona",
      technology: "Tecnologia",
      testimonials: "Testimonianze",
      contact: "Contatto",
      ctaButton: "Inizia",
    },

    // Preloader
    preloader: {
      brandName: "Receptionist IA",
      brandSubname: "Comunicazione Intelligente",
      yearText: "Nuova Generazione",
    },

    // Hero
    hero: {
      scriptText: "Il Futuro della Comunicazione Aziendale",
      mainTitle: "Il Tuo Receptionist\nIA Intelligente",
      ctaButton: "Prova Gratuita",
      decorativeText: "INTELLIGENTE • EFFICIENTE • AFFIDABILE",
      stats: {
        calls: { value: "100", suffix: "%", label: "Tasso di Risposta" },
        availability: { value: "24", suffix: "/7", label: "Sempre Disponibile" },
        savings: { value: "50", suffix: "%", label: "Riduzione Costi" },
      },
    },

    // Pricing
    pricing: {
      scriptText: "Un Investimento Redditizio",
      subtitle: "I NOSTRI PREZZI",
      mainTitle: "Piani su misura per le tue esigenze",
      promoText: "Goditi una prova gratuita di 14 giorni su tutti i nostri piani, con accesso completo alla piattaforma.",
      ctaButton: "Inizia Prova",
      tiers: [
        {
          name: "Standard",
          price: "250",
          description: "Per piccoli studi che cercano di automatizzare la loro reception.",
          features: [
            "Receptionist IA 24/7",
            "Prenotazione appuntamenti automatizzata",
            "Fino a 500 chiamate / mese",
            "Supporto via email"
          ]
        },
        {
          name: "Professionale",
          price: "450",
          isPopular: true,
          description: "La soluzione ideale per le aziende in crescita.",
          features: [
            "Tutte le funzioni Standard",
            "Fino a 1500 chiamate / mese",
            "Instradamento intelligente delle chiamate",
            "Integrazione CRM avanzata",
            "Supporto prioritario"
          ]
        },
        {
          name: "Eccellenza",
          price: "600",
          description: "Per organizzazioni che richiedono volumi elevati e personalizzazione totale.",
          features: [
            "Tutte le funzioni Pro",
            "Chiamate illimitate",
            "Personalizzazione totale della voce",
            "Gestione multi-agenzia",
            "Account manager dedicato"
          ]
        }
      ]
    },

    // Features
    features: {
      scriptText: "Capacità Potenti",
      subtitle: "FUNZIONALITÀ IA",
      mainTitle: "Tutto ciò che la Tua Azienda Necessita",
      wines: {
        callHandling: {
          name: "Gestione Intelligente Chiamate",
          subtitle: "Instradamento Intelligente",
          description: "Il nostro receptionist IA risponde alle chiamate con conversazioni naturali, comprende l'intento del chiamante e lo indirizza al reparto corretto o prende messaggi dettagliati.",
          tastingNotes: "Elaborazione del linguaggio naturale con analisi del sentimento",
          alcohol: "Multi-lingua",
          temperature: "Istantaneo",
          aging: "99.9% di Disponibilità",
        },
        scheduling: {
          name: "Pianificazione Appuntamenti",
          subtitle: "Integrazione Calendario",
          description: "Prenota appuntamenti senza problemi, invia promemoria e gestisci il tuo calendario. Si integra con Google Calendar, Outlook e piattaforme di pianificazione popolari.",
          tastingNotes: "Disponibilità in tempo reale con rilevamento conflitti",
          alcohol: "Multi-piattaforma",
          temperature: "Automatizzato",
          aging: "Prenotazione 24/7",
        },
        support: {
          name: "Supporto Clienti",
          subtitle: "Risposte Istantanee",
          description: "Fornisci risposte istantanee alle domande comuni, risolvi problemi e scala richieste complesse ad agenti umani quando necessario.",
          tastingNotes: "Integrazione base di conoscenza con capacità di apprendimento",
          alcohol: "Multi-canale",
          temperature: "Immediato",
          aging: "Apprendimento Continuo",
        },
      },
      featureCards: {
        aiPowered: { title: "Alimentato da IA", description: "NLP avanzato per conversazioni naturali" },
        alwaysOn: { title: "Sempre Attivo", description: "Disponibilità 24/7 senza interruzioni" },
        instant: { title: "Risposta Istantanea", description: "Tempi di risposta inferiori al secondo" },
        customizable: { title: "Personalizzabile", description: "Adattato alla voce del tuo brand" },
      },
      quote: {
        text: "Il receptionist IA ha trasformato il modo in cui gestiamo le richieste dei clienti. Il nostro team può concentrarsi su ciò che conta di più.",
        attribution: "Sarah Mitchell, CEO",
        prefix: "Storia di Successo",
      },
    },

    // How It Works
    howItWorks: {
      scriptText: "Processo Semplice",
      subtitle: "COME FUNZIONA",
      mainTitle: "Inizia in Pochi Minuti",
      locationTag: "Basato sul Cloud • Accesso Globale",
      slides: {
        setup: {
          title: "Configurazione Rapida",
          subtitle: "Configura il Tuo IA",
          area: "5",
          unit: "Minuti",
          description: "Registrati e configura il tuo receptionist IA con i dettagli della tua azienda, script di chiamata e preferenze. Nessuna competenza tecnica richiesta.",
        },
        integrate: {
          title: "Integrazione Facile",
          subtitle: "Connetti i Tuoi Sistemi",
          area: "50+",
          unit: "Integrazioni",
          description: "Connettiti al tuo sistema telefonico esistente, CRM, calendario e strumenti. Funziona perfettamente con piattaforme aziendali popolari.",
        },
        launch: {
          title: "Vai Live",
          subtitle: "Inizia a Ricevere Chiamate",
          area: "24",
          unit: "Ore",
          description: "Il tuo receptionist IA diventa attivo e inizia a gestire le chiamate immediatamente. Monitora le prestazioni e regola le impostazioni in tempo reale.",
        },
      },
    },

    // Technology
    technology: {
      scriptText: "Tecnologia all'Avanguardia",
      subtitle: "LA NOSTRA TECNOLOGIA",
      mainTitle: "Alimentato da IA Avanzata",
      introText: "Il nostro receptionist IA sfrutta l'elaborazione del linguaggio naturale e l'apprendimento automatico all'avanguardia per offrire conversazioni umane e presa di decisioni intelligente.",
      timeline: {
        2020: "Ricerca e Sviluppo Inizia",
        2022: "Primo Lancio Beta",
        2023: "Partnership Enterprise",
        newYear: "Espansione Globale",
      },
      tabs: {
        nlp: {
          name: "Linguaggio Naturale",
          title: "Comprendere il Discorso Umano",
          description: "Il nostro motore NLP proprietario comprende il contesto, l'intento e l'emozione nelle conversazioni. Gestisce accenti, gergo e query complesse con facilità.",
          highlight: "Tasso di Precisione del 95%",
        },
        ml: {
          name: "Apprendimento Automatico",
          title: "Miglioramento Continuo",
          description: "L'IA impara da ogni interazione, migliorando le risposte e la comprensione nel tempo. Il tuo receptionist diventa più intelligente ogni giorno.",
          highlight: "Sistema Auto-Apprendente",
        },
        security: {
          name: "Sicurezza Enterprise",
          title: "Protezione di Livello Bancario",
          description: "La crittografia end-to-end, la conformità SOC 2 e l'aderenza al GDPR garantiscono che i tuoi dati e le informazioni dei clienti rimangano sicuri.",
          highlight: "Certificato SOC 2",
        },
      },
      openingHours: "100% di Disponibilità SLA",
      openingHoursLabel: "Garanzia di Affidabilità",
      ctaButton: "Scopri di Più",
      yearBadge: "Nouveau",
      yearBadgeLabel: "Fondato",
      quote: {
        prefix: "Innovazione",
        text: "Stiamo costruendo il futuro della comunicazione aziendale, una conversazione alla volta.",
        attribution: "Il Team di AI Receptionist",
      },
    },

    // News & Testimonials
    news: {
      scriptText: "Ultimi Aggiornamenti",
      subtitle: "NOTIZIE E INSIGHTS",
      mainTitle: "Notizie del Settore",
      viewAllText: "Vedi Tutti gli Articoli",
      readMoreText: "Leggi di Più",
      articles: {
        trends: {
          title: "Tendenze Receptionist IA",
          excerpt: "Scopri come i receptionist IA stanno trasformando il servizio clienti in tutti i settori.",
          category: "Industria",
        },
        integration: {
          title: "Nuove Integrazioni CRM",
          excerpt: "Abbiamo aggiunto supporto per 15 nuove piattaforme CRM inclusi HubSpot e Pipedrive.",
          category: "Prodotto",
        },
        security: {
          title: "Miglioramento Sicurezza",
          excerpt: "Il nostro ultimo aggiornamento di sicurezza porta rilevamento e prevenzione avanzati delle minacce.",
          category: "Sicurezza",
        },
        awards: {
          title: "Miglior Soluzione IA",
          excerpt: "AI Receptionist vince il prestigioso Premio Innovazione Tecnologica per il servizio clienti.",
          category: "Premi",
        },
      },
      testimonialsScriptText: "Successo Cliente",
      testimonialsSubtitle: "TESTIMONIANZE",
      testimonialsMainTitle: "Amato dalle Aziende",
      testimonials: {
        1: {
          name: "Michael Chen",
          role: "CEO, TechStart Inc.",
          text: "Il receptionist IA è stato un punto di svolta. Abbiamo ridotto le chiamate perse del 95% e i nostri clienti adorano la risposta istantanea.",
        },
        2: {
          name: "Emily Rodriguez",
          role: "Responsabile Ufficio, MedCare Clinic",
          text: "La pianificazione degli appuntamenti è ora senza sforzo. I pazienti possono prenotare 24/7, e i promemoria hanno ridotto le assenze del 40%.",
        },
        3: {
          name: "David Park",
          role: "Direttore, Legal Solutions",
          text: "Professionale, affidabile ed economico. L'IA gestisce richieste di routine mentre ci concentriamo su casi complessi.",
        },
      },
      storyScriptText: "La Nostra Storia",
      storySubtitle: "CHI SIAMO",
      storyTitle: "Rivoluzionando la Comunicazione Aziendale",
      storyParagraphs: {
        1: "Fondata da un team di ricercatori IA e esperti di servizio clienti, AI Receptionist è nata da un'idea semplice: ogni azienda merita accesso a strumenti di comunicazione intelligenti.",
        2: "Oggi, serviamo migliaia di aziende in tutto il mondo, da praticanti singoli ad organizzazioni enterprise, aiutandoli a offrire esperienze clienti eccezionali 24 ore su 24.",
      },
      storyTimeline: {
        users: { value: "10K+", label: "Utenti Attivi" },
        calls: { value: "5M+", label: "Chiamate Gestite" },
        satisfaction: { value: "100%", label: "Soddisfazione" },
      },
      storyQuote: {
        prefix: "Missione",
        text: "Democratizzare l'accesso alla tecnologia di comunicazione intelligente per aziende di tutte le dimensioni.",
        attribution: "La Nostra Missione",
      },
    },

    // Contact
    contact: {
      scriptText: "Mettiti in Contatto",
      subtitle: "CONTATTACI",
      mainTitle: "Inizia la Tua Prova Gratuita",
      introText: "Pronto a trasformare la tua comunicazione aziendale? Inizia con una prova gratuita di 14 giorni. Nessuna carta di credito richiesta.",
      contactInfoTitle: "Informazioni di Contatto",
      contactItems: {
        address: { label: "Indirizzo", value: "350 Market Street, Suite 200", subtext: "San Francisco, CA 94105" },
        phone: { label: "Telefono", value: "+1 (888) 555-AI-RX", subtext: "Linea di Supporto 24/7" },
        email: { label: "Email", value: "hello@aireceptionist.com", subtext: "Rispondiamo entro 2 ore" },
        hours: { label: "Orari", value: "Sempre Disponibile", subtext: "Supporto 24/7/365" },
      },
      form: {
        nameLabel: "Nome Completo",
        namePlaceholder: "Mario Rossi",
        emailLabel: "Indirizzo Email",
        emailPlaceholder: "mario@azienda.com",
        phoneLabel: "Numero di Telefono",
        phonePlaceholder: "+39 123 456 7890",
        visitDateLabel: "Data Demo Preferita",
        visitorsLabel: "Dimensione Azienda",
        visitorsOptions: ["1-10", "11-50", "51-200", "201-500", "500+"],
        messageLabel: "Messaggio",
        messagePlaceholder: "Parlaci delle esigenze della tua azienda...",
        submitText: "Richiedi Demo",
        submittingText: "Invio...",
        successMessage: "Grazie! Ti contatteremo entro 24 ore.",
        errorMessage: "Qualcosa è andato storto. Per favore riprova.",
      },
      privacyNotice: "Inviando questo modulo, accetti la nostra Informativa sulla Privacy e i Termini di Servizio.",
    },

    // Footer
    footer: {
      brandName: "AI Receptionist",
      tagline: "Comunicazione Intelligente",
      description: "Trasforma la tua azienda con servizi di receptionist alimentati dall'IA. Disponibile 24/7, sempre professionale, incredibilmente efficiente.",
      newsletterLabel: "Iscriviti alla nostra newsletter",
      newsletterPlaceholder: "Inserisci la tua email",
      newsletterButtonText: "Iscriviti",
      newsletterSuccessText: "Grazie per l'iscrizione!",
      newsletterErrorText: "Per favore riprova.",
      copyrightText: "© AI Receptionist. Tutti i diritti riservati.",
      backToTopText: "Torna su",
      linkGroups: {
        product: {
          title: "Prodotto",
          links: ["Funzionalità", "Prezzi", "Integrazioni", "API"],
        },
        company: {
          title: "Azienda",
          links: ["Chi Siamo", "Carriere", "Blog", "Stampa"],
        },
      },
      legalLinks: ["Informativa Privacy", "Termini di Servizio", "Politica Cookie"],
    },

    // Language Toggle
    language: {
      title: "Lingua",
      fr: "Français",
      en: "English",
      es: "Español",
      it: "Italiano",
    },
  },
};
