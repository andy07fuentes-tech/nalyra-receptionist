export type Language = 'fr' | 'en' | 'es' | 'it';

export const translations = {
  fr: {
    // Site
    site: {
      title: "Anvela - Communication Commerciale Intelligente",
      description: "Transformez votre entreprise avec des services de réceptionniste alimentés par l'IA. Gestion d'appels intelligente 24/7, planification de rendez-vous et support client.",
    },

    // Navigation
    nav: {
      brandName: "Anvela",
      brandSubname: "Communication Intelligente",
      tagline: "Votre Réception Numérique 24/7",
      home: "Accueil",
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      technology: "Technologie",
      testimonials: "Témoignages",
      contact: "Contact",
      ctaButton: "Commencer",
      freeTrial: "Parler à Anvela",
      endCall: "Terminer",
      connecting: "Connexion...",
    },

    preloader: {
      brandName: "Anvela",
      brandSubname: "Communication Intelligente",
      yearText: "Nouvelle Génération",
      enterButton: "Lancer l'Expérience",
    },

    // Cinematic Showcase
    cinematic: {
      step1: {
        subtitle: "Expérience Client",
        title: "Disponibilité Radieuse",
        description: "Votre réceptionniste numérique ne connaît jamais de mauvaise journée. Chaque client est accueilli avec une chaleur constante et un professionnalisme bienveillant, 24h/24."
      },
      step2: {
        subtitle: "Fiabilité Totale",
        title: "Zéro Absence, Zéro Interruption",
        description: "La fiabilité redéfinie. Pas de congés maladie, pas d'absences imprévues, et aucun trou de couverture. Anvela est toujours au poste pour que votre entreprise ne rate aucun appel."
      },
      step3: {
        subtitle: "Éthique & Image",
        title: "Courtoisie Inébranlable",
        description: "Un protocole parfait, à chaque fois. Notre IA conserve un ton poli, calme et respectueux, même face aux situations complexes, protégeant ainsi l'image de votre marque."
      },
      step4: {
        subtitle: "Productivité Maximale",
        title: "Performance sans Pause",
        description: "Une productivité continue sans temps mort. Pas de pause café, pas d'heures de déjeuner, ni de demandes de vacances. Un service ininterrompu qui optimise votre efficacité."
      }
    },

    // Hero
    hero: {
      scriptText: "L'Avenir de la Communication Commerciale",
      mainTitle: "Votre Réceptionniste\nIA Intelligent",
      ctaButton: "Offre de Lancement",
      videoDemo: "Démo Vidéo",
      prices: "Tarifs",
      decorativeText: "INTELLIGENT • EFFICACE • FIABLE",
      ctaSubtitle: "1er mois à -50%",
      ctaMain: "Commencer avec Anvela",
      noCreditCard: "Offre limitée • Opérationnel en 48h",
      stats: {
        calls: { value: "100", suffix: "%", label: "Taux de Réponse" },
        availability: { value: "24", suffix: "/7", label: "Toujours Disponible" },
        savings: { value: "50", suffix: "%", label: "Réduction des Coûts" },
      },
    },
    missedCalls: {
      subtitle: "IMPACT FINANCIER",
      title: "Chaque appel manqué est une opportunité perdue.",
      vision: "Et si chaque entreprise pouvait se permettre de ne jamais manquer un appel ?",
      cta: "Ne perdez plus d'argent",
    },

    // Gallery
    gallery: {
      scriptText: "Capacités de l'IA",
      mainTitle: "Conçu pour Tous les Secteurs",
      selectClients: "L'Avantage Anvela",
      clientsList: "Chaque appel manqué est un client perdu et une opportunité financière gâchée. Notre IA intelligente gère vos réservations, répond aux questions complexes et qualifie vos leads 24h/24 et 7/7, avec une précision humaine et une efficacité robotique.",
      item1: { title: "RÉSERVATION SMART", subtitle: "GESTION AGENDAS" },
      item2: { title: "CAPTURE DE LEADS", subtitle: "QUALIFICATION IA" },
      item3: { title: "RÉCEPTION 24/7", subtitle: " DISPONIBILITÉ TOTALE" },
      item4: { title: "SYNCHRONISATION", subtitle: "FLUX DE TRAVAIL" },
      item5: { title: "MULTILINGUE", subtitle: "FR / EN / ES / IT" },
      item6: { title: "SUIVI PAR SMS", subtitle: "CONFIRMATION AUTO" },
      item7: { title: "DONNÉES CLIENTS", subtitle: "INTÉGRATION CRM" },
      item8: { title: "RELAIS ÉQUIPE", subtitle: "SUPPORT DÉBORDEMENT" },
      item9: { title: "EXPÉRIENCE CLIENT", subtitle: "VOIX PROFESSIONNELLE" },
      item10: { title: "SÉCURITÉ", subtitle: "PROTECTION DONNÉES" },
      item11: { title: "INTELLIGENCE", subtitle: "LOGIQUE AVANCÉE" },
      special: {
        anvelaTitle: "Anvela AI",
        anvelaSubtitle: "- voici anvela - notre ai -"
      }
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
        description: "Chaque appel manqué, c'est un client perdu. Anvela prend l'appel, comprend la demande et collecte les infos utiles.",
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
      },
      mainTitle: "Comment Anvela propulse votre croissance",
      processSubtitle: "NOTRE PROCESSUS"
    },

    // Pain Points
    painPoints: {
      scriptText: "Le Coût du Statu Quo",
      subtitle: "POINTS DE FRICTION",
      mainTitle: "Quand la Réception Humaine Ne Peut Pas Tout Gérer",
      description: "Entre les appels manqués, les heures fermées et les moments de forte affluence, même les meilleures équipes ne peuvent pas répondre à tout, tout le temps. Anvela prend le relais en arrière-plan pour que rien ne soit perdu.",
      items: [
        {
          title: "Fuite de Revenus",
          description: "85% des appelants ne rappellent pas s'ils tombent sur une messagerie. Chaque appel manqué est un client perdu.",
          icon: "PhoneMissed"
        },
        {
          title: "Coûts Fixes Élevés",
          description: "Le recrutement, la formation et les avantages sociaux pour un personnel 24/7 sont un gouffre financier imprévisible.",
          icon: "TrendingUp"
        },
        {
          title: "Lacunes de Couverture",
          description: "Les humains ont besoin de pauses et de sommeil. Anvela offre une disponibilité absolue 24/7/365, sans exception.",
          icon: "Clock"
        },
        {
          title: "Service Inconstant",
          description: "La performance du personnel fluctue. Anvela offre une expérience premium et parfaitement polie à chaque interaction.",
          icon: "Zap"
        },
        {
          title: "Rotation du Personnel",
          description: "Les rôles de support ont un turn-over de 75%, entraînant une perte constante de savoir-faire et des coûts de re-formation.",
          icon: "RefreshCw"
        },
        {
          title: "Friction Administrative",
          description: "La saisie manuelle entraîne des erreurs, des doubles réservations et la perte d'informations cruciales sur les prospects.",
          icon: "ClipboardList"
        }
      ],
      gallery: {
        back: "Retour",
        ctaTitle: "Vos clients détestent attendre au téléphone. Ne laissez plus aucun appel sans réponse.",
        ctaButton: "Découvrir les points de friction",
        photos: {
          photo1: {
            title: "Filet de Sécurité 'Zéro Opportunité'",
            logic: "L'IA agit comme un relais intelligent. Elle ne décroche que si la ligne principale est occupée ou après trois sonneries sans réponse.",
            benefit: "Chaque prospect est capturé et réservé sans que votre équipe ne se sente pressée par le téléphone alors qu'un patient est devant elle.",
            alt: "Réception IA - Bureau noir avec téléphone"
          },
          photo2: {
            title: "Relais 'Prospects Chauds' Après-Heures",
            logic: "Pendant que votre équipe se repose, Anvela prend l'appel, planifie le rendez-vous dans votre agenda et enregistre le résumé complet.",
            benefit: "À 8h00, pas de piles de messages vocaux vagues. Juste une liste de clients déjà réservés à confirmer et à accueillir.",
            alt: "Planification intelligente sur tablette"
          },
          photo3: {
            title: "Élimination de la 'Corvée Administrative'",
            logic: "L'IA gère les appels FAQ à haut volume et faible valeur (horaires, adresse, assurances, tarifs de base).",
            benefit: "Votre personnel peut se concentrer sur des tâches à haute valeur ajoutée, comme rassurer un patient anxieux.",
            alt: "Support client et interaction"
          },
          photo4: {
            title: "Synchronisation CRM Directe",
            logic: "Chaque interaction est synchronisée avec votre CRM ou Google Sheets, déclenchant des suivis automatiques.",
            benefit: "Plus de saisie manuelle erronée. Toutes les infos sont traçables, propres et prêtes pour la conversion finale.",
            alt: "Automatisation et flux CRM"
          },
          photo5: {
            title: "Configuration Éclair",
            logic: "Mise en place de votre profil IA en moins de 10 minutes avec vos préférences métier.",
            benefit: "Gagnez du temps dès la première heure.",
            alt: "Configuration rapide Anvela"
          },
          photo6: {
            title: "Intégration Transparente",
            logic: "Compatible avec 99% des systèmes téléphoniques et calendriers actuels.",
            benefit: "Aucun changement d'infrastructure requis.",
            alt: "Intégration transparente"
          },
          photo7: {
            title: "Voix Ultra-Réaliste",
            logic: "Une technologie de synthèse vocale qui imite parfaitement le ton et l'empathie humaine.",
            benefit: "Vos clients ne devinent jamais qu'ils parlent à une IA.",
            alt: "Technologie NLP Avancée"
          },
          photo8: {
            title: "Apprentissage Continu",
            logic: "L'IA apprend de chaque interaction pour devenir plus précise chaque jour.",
            benefit: "Un employé qui ne cesse de s'améliorer.",
            alt: "Apprentissage automatique"
          },
          photo9: {
            title: "Vision Anvela",
            logic: "Redéfinir le futur du service client par l'intelligence conversationnelle.",
            benefit: "Positionnez votre entreprise comme leader technologique.",
            alt: "Anvela Vision"
          }
        },
        labels: {
          logic: "Logique",
          benefit: "Bénéfice"
        }
      }
    },

    // Album Cube
    albumCube: {
      scrollHint: "Faites défiler pour explorer",
      backgroundTitle: "ANVELA",
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
      subtitle: "ANVELA EN ACTION",
      titleMain: "Du Chaos de l'Accueil",
      titleAccent: "à l'Excellence",
      description: "Découvrez comment Anvela transforme un accueil débordé en un centre d'efficacité sereine. Ne ratez plus aucun appel, ne perdez plus aucun prospect, et laissez votre équipe se concentrer sur l'essentiel.",
      feat1: { title: "Précision IA", desc: "Gère instantanément les demandes" },
      feat2: { title: "Installation Flash", desc: "Intégration sans friction" },
      steps: [
        { title: "Configuration de Votre IA", description: "Nous formons votre réceptionniste sur vos services, vos tarifs et vos disponibilités." },
        { title: "Test de Réception", description: "Phase de test interne pour garantir une fluidité et une précision absolue." },
        { title: "Mise en Ligne Directe", description: "Activation du transfert d'appels. Votre IA commence à travailler instantanément." },
        { title: "Optimisation Continue", description: "Suivi des performances et ajustements basés sur les interactions réelles." }
      ]
    },

    videoDemo: {
      title: "Anvela en Action",
      description: "Découvrez comment notre réceptionniste IA transforme votre accueil client, gère vos rendez-vous et qualifie vos prospects 24h/24.",
      tabs: {
        overview: "Présentation",
        realCall: "Appel Réel"
      },
      realCall: {
        step1: "Flux de conversation naturel",
        step2: "Prise de rendez-vous en direct",
        step3: "Changement de langue instantané",
        step4: "Transcription en temps réel",
        step5: "Interaction humaine fluide"
      },
      step1: { text: "Démo Anvela", helper: "Regardez l'IA en situation réelle." },
      step2: { text: "Efficacité Absolue", helper: "Zéro appel manqué, 100% de satisfaction." },
      step3: { text: "Intégration Simple", helper: "Prêt en moins de 10 minutes." },
      step4: { text: "Multilingue", helper: "Parle la langue de vos clients." },
      step5: { text: "Sécurité & Fiabilité", helper: "Vos données sont protégées." },
    },

    // Pricing
    pricing: {
      scriptText: "Un Investissement Rentable",
      subtitle: "NOS TARIFS",
      mainTitle: "Des forfaits adaptés à vos besoins",
      promoText: "Offre de lancement : premier mois à 50% du tarif normal. Opérationnel en moins de 48h.",
      promoTextYearly: "Forfait annuel : 2 mois offerts + 10% de réduction. Opérationnel en moins de 48h.",
      ctaButton: "Profiter de l'offre",
      monthly: "Mensuel",
      yearly: "Annuel",
      yearlyBonus: "2 mois offerts & -10%",
      essentiel: "ESSENTIEL",
      bestValue: "MEILLEURE VALEUR",
      completeSolution: "SOLUTION COMPLÈTE",
      cadMonth: "CAD / mois",
      annualBillingNotice: "(facturé {{price}}$ annuellement)",
      setupFeeLabel: "Frais de mise en service",
      popularLabel: "Le plus populaire",
      vsLabel: "L'AVANTAGE ANVELA",
      vsEmployee: "Réceptionniste à temps partiel",
      vsEmployeePrice: "~2 500$ / mois",
      vsAnvela: "Anvela — disponible 24/7",
      vsAnvelaPrice: "à partir de 199$ / mois · ~50$ / sem.",
      vsTagline: "Pas pour remplacer votre équipe — pour lui donner du renfort, sans les coûts.",
      tiers: [
        {
          name: "The Night Shift",
          price: "199",
          weeklyNote: "moins de 50$/semaine",
          setupFee: "0",
          setupFeeNote: "Contrat 3 mois minimum",
          description: "Votre équipe se repose. Vos leads, eux, ne dorment pas. On capture chaque appel manqué pendant que vous êtes fermé – et votre calendrier se remplit tout seul.",
          features: [
            "Disponibilité : Lun-Ven (18h00 – 8h00) + Week-ends 24h",
            "Appels : Illimités (sans frais par minute)",
            "IA : Réponse aux FAQ + capture de leads qualifiés",
            "Réservation : Prise de rendez-vous automatique (Google Calendar)",
            "Notification : SMS instantané dès qu’un lead est capturé",
            "Transcription complète + résumé IA des appels",
            "Rapport : 'Night Shift Report' quotidien à 8h00",
            "Langue : Français – spécialisé pour les marchés locaux (Québec)",
            "Réduction des no-shows : jusqu'à 30–50% grâce aux rappels intelligents"
          ]
        },
        {
          name: "The Co-Pilot",
          price: "299",
          weeklyNote: "moins de 75$/semaine",
          isPopular: true,
          setupFee: "197",
          setupFeeNote: "Contrat 3 mois minimum",
          description: "Couverture complète 24/7. Votre téléphone ne sonne plus dans le vide – il génère des revenus, même en plein milieu d’une intervention.",
          features: [
            "Inclut TOUT le forfait The Night Shift",
            "Suivi : Appels non résolus loggés avec transcription complète",
            "Disponibilité : 24/7 (débordement jour + nuit complète)",
            "Routage : Humain d’abord (3 sonneries), l’IA prend le relais",
            "Transfert : Redirection vers votre accueil (1 numéro configuré)",
            "Réservation : Prise de RDV + rappels SMS (24h et 2h avant)",
            "Gestion : Modifications et annulations gérées par l’IA",
            "Interactions : Bilingue (Français / Anglais)",
            "Appels : Illimités",
            "Rappels auto pour no-shows (rappel IA pour rebooker)",
            "Routage intelligent : Analyse le contexte pour prioriser et router",
            "Offre lancement : premier mois à 50% du tarif normal"
          ]
        },
        {
          name: "The Elite",
          price: "597",
          weeklyNote: "moins de 150$/semaine",
          setupFee: "497",
          setupFeeNote: "Contrat 6 mois minimum",
          description: "Votre système de croissance complet. L’IA répond, relance, réserve et suit chaque lead – pendant que vous, vous travaillez.",
          features: [
            "Inclut TOUT de The Night Shift et The Co-Pilot",
            "Transfert : Destinations illimitées (réception, gérant, service...)",
            "Mémoire client : Mila reconnaît les clients réguliers par nom et véhicule",
            "Logique : Intégration CRM native avec tableau de bord",
            "Relances : SMS automatique dans les 15 min pour chaque lead",
            "Triage : Arborescence multi-étapes intelligente",
            "Support : Support VIP Prioritaire (réponse < 2h)",
            "BONUS : Site web one-page gratuit inclus",
            "Appels : Illimités",
            "Rapports mensuels personnalisés + optimisation IA",
            "Augmentation RDV : +30–40%"
          ]
        }
      ]
    },

    // FAQ
    faq: {
      subtitle: "FAQ",
      mainTitle: "Questions Fréquentes",
      items: [
        {
          question: "Comment se passe l'intégration avec mon système actuel ?",
          answer: "C'est très simple. Nous configurons un transfert d'appel conditionnel (si occupé ou non-réponse) vers votre numéro Anvela dédié. Vous gardez votre numéro actuel et vos clients ne voient aucun changement."
        },
        {
          question: "Est-ce que l'IA peut vraiment prendre des rendez-vous ?",
          answer: "Oui, absolument. Anvela se connecte directement à votre calendrier (Google, Outlook, Calendly, etc.). Elle vérifie vos disponibilités en temps réel, réserve le créneau et vous envoie une confirmation instantanée."
        },
        {
          question: "Que se passe-t-il si l'IA ne connaît pas la réponse ?",
          answer: "Si une demande est trop complexe, Anvela peut soit transférer l'appel vers un membre de votre équipe en direct (Routage Intelligent), soit prendre un message détaillé avec les coordonnées du client pour un rappel."
        },
        {
          question: "Puis-je personnaliser la voix et le script ?",
          answer: "Oui. Nous travaillons avec vous pour définir le ton, le vocabulaire et les scénarios de réponse. Votre réceptionniste peut être formelle, amicale ou spécialisée selon votre secteur d'activité."
        },
        {
          question: "Y a-t-il un engagement à long terme ?",
          answer: "Les forfaits 'Night Shift' et 'Co-Pilot' ont un engagement minimal de 3 mois. Le forfait 'Elite' requiert 6 mois en raison de la complexité de l'intégration CRM personnalisée."
        },
        {
          question: "Pour quels types d'entreprises Anvela est-elle faite ?",
          answer: "Anvela fonctionne pour toute entreprise qui reçoit des appels : garages, cliniques, cabinets juridiques, immobilier, restaurants, commerces et plus encore. Si vos clients vous appellent, Anvela peut répondre à leur place."
        },
        {
          question: "Anvela est-elle bilingue ?",
          answer: "Oui. Anvela s'adapte automatiquement à la langue de votre client dès les premiers mots de la conversation — français, anglais, espagnol, et bien d'autres. Peu importe d'où vient votre client, Anvela lui répond dans sa langue."
        },
        {
          question: "Combien de temps faut-il pour être opérationnel ?",
          answer: "En général, moins de 48 heures. Une fois votre forfait confirmé, notre équipe configure votre réceptionniste IA, l'intègre à votre numéro existant et effectue les tests. Vous êtes opérationnel rapidement, sans perturbation."
        }
      ]
    },

    // Features
    features: {
      scriptText: "Capacités Puissantes",
      subtitle: "FONCTIONNALITÉS IA",
      mainTitle: "Tout ce dont Votre Entreprise a Besoin",
      solutions: {
        callHandling: {
          name: "Gestion d'Appels",
          subtitle: "Routage Intelligent",
          description: "Anvela répond aux appels avec des conversations naturelles, comprend l'intention et achemine vers le bon service.",
          tastingNotes: "Traitement du langage naturel avec analyse de sentiment",
          accuracy: "99%",
          speed: "Instantané",
          uptime: "24/7",
        },
        scheduling: {
          name: "Planification",
          subtitle: "Calendrier Auto",
          description: "Réservez des rendez-vous, envoyez des rappels et gérez votre calendrier sans aucune intervention humaine.",
          tastingNotes: "Disponibilité en temps réel avec détection de conflits",
          accuracy: "100%",
          speed: "Automatisé",
          uptime: "Illimité",
        },
        support: {
          name: "Support Client",
          subtitle: "Réponses Instantanées",
          description: "Fournissez des réponses instantanées aux questions courantes et résolvez les problèmes complexes en un clin d'œil.",
          tastingNotes: "Base de connaissances avec capacités d'auto-apprentissage",
          accuracy: "95%",
          speed: "Immédiat",
          uptime: "Continu",
        },
      },
      metrics: {
        accuracy: "Précision",
        speed: "Vitesse",
        uptime: "Disponibilité"
      },
      featureCards: {
        aiPowered: { title: "Propulsé par IA", description: "NLP avancé pour des conversations naturelles" },
        alwaysOn: { title: "Toujours Actif", description: "Disponibilité 24/7 sans interruption" },
        instant: { title: "Réponse Instantanée", description: "Temps de réponse inférieurs à la seconde" },
        customizable: { title: "Personnalisable", description: "Adapté à votre image de marque" },
      },
      quote: {
        text: "Anvela a transformé notre façon de gérer les demandes clients. Notre équipe peut se concentrer sur l'essentiel.",
        attribution: "Pablo Fuentes, Client fondateur",
        prefix: "Client Fondateur",
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
      testimonialsScriptText: "Premier Client",
      testimonialsSubtitle: "CLIENT FONDATEUR",
      testimonialsMainTitle: "En Service Dès le Premier Jour",
      foundingClient: {
        name: "Garage Pablo",
        role: "Client fondateur — Montréal, QC",
        text: "Anvela répond à chaque appel, prend les rendez-vous et envoie les confirmations — sans intervention humaine. C'est exactement ce dont un garage indépendant a besoin.",
      },
      foundingSpots: {
        label: "Places disponibles",
        title: "Devenez client fondateur",
        text: "Nous acceptons un nombre limité de garages fondateurs. Prix fondateur garanti à vie — sans hausse future.",
        cta: "Réserver ma place",
      },
      storyScriptText: "Notre Histoire",
      storySubtitle: "À PROPOS DE NOUS",
      storyTitle: "Né à Montréal, pour les garages indépendants",
      storyParagraphs: {
        1: "Anvela est née d'une réalité simple : les garages indépendants perdent des clients chaque soir parce que personne ne répond au téléphone. Fondée à Montréal, Anvela déploie une réceptionniste IA en 48 heures — sans formation, sans frais cachés.",
        2: "Nous démarrons avec les garages, mais la vision est plus large : offrir à chaque entreprise locale un standard téléphonique IA professionnel, à la hauteur des grandes entreprises.",
      },
      storyTimeline: {
        users: { value: "1er", label: "Client fondateur actif" },
        calls: { value: "48h", label: "Mise en service" },
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
      mainTitle: "Parlons-en",
      introText: "Prêt à transformer votre communication ? Soumettez votre demande — notre équipe vous rappelle dans les minutes qui suivent. Premier mois à 50%.",
      contactInfoTitle: "Informations de Contact",
      contactItems: {
        address: { label: "Adresse", value: "Montréal, Québec, Canada" },
        phone: { label: "Téléphone", value: "(438) 814-7578 · (514) 679-2107", subtext: "Ligne directe Anvela 24/7" },
        email: { label: "Email", value: "pablo@anvela.ca · support@anvela.ca", subtext: "Réponse sous 24h" },
        hours: { label: "Heures", value: "Toujours Disponible", subtext: "24/7/365 Support" },
      },
      form: {
        nameLabel: "Nom Complet",
        namePlaceholder: "Jean Tremblay",
        emailLabel: "Adresse Email",
        emailPlaceholder: "jean@entreprise.com",
        phoneLabel: "Numéro de Téléphone",
        phonePlaceholder: "+1 (514) 000-0000",
        businessNameLabel: "Nom de l'entreprise",
        businessNamePlaceholder: "Ex. : Garage Tremblay",
        businessTypeLabel: "Type d'entreprise",
        businessTypeOptions: ["Garage / Auto", "Médical / Clinique", "Juridique", "Immobilier", "Restaurant", "Commerce / Détail", "Autre"],
        messageLabel: "Message",
        messagePlaceholder: "Décrivez vos besoins en réception ou posez vos questions...",
        submitText: "Envoyer ma demande",
        submittingText: "Envoi...",
        successMessage: "Merci ! Nous vous contacterons dans les 24 heures.",
        errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      },
      privacyNotice: "En soumettant ce formulaire, vous acceptez notre Politique de Confidentialité et nos Conditions de Service.",
    },

    // Onboarding
    onboarding: {
      stepCounter: "Étape {{step}} sur 3",
      saveExit: "Sauvegarder & Quitter",
      step1: {
        badge: "Identifier votre entreprise",
        title: "Connectons votre",
        titleHighlight: "Identité commerciale.",
        description: "Trouvez votre entreprise. Nous récupérerons votre localisation et vos horaires pour créer votre profil IA personnalisé.",
        searchPlaceholder: "Rechercher votre entreprise...",
        continueButton: "Continuer vers les forfaits",
        changeButton: "Changer",
      },
      step2: {
        title: "Choisissez votre",
        titleHighlight: "Forfait Anvela.",
        description: "Sélectionnez le niveau qui correspond à votre volume d'activité. Les tarifs incluent la gestion automatisée des appels, la prise de rendez-vous et le support bilingue.",
        backButton: "Retour",
        continueButton: "Continuer vers la confirmation",
        selectedLabel: "SÉLECTIONNÉ",
        selectLabel: "CHOISIR CE FORFAIT",
        cadMonth: "CAD / mois",
      },
      step3: {
        title: "Dernière étape :",
        titleHighlight: "Vérification par appel.",
        description: "Nous avons enregistré le profil de {{business}} et votre intérêt pour le forfait {{plan}}.",
        inputDescription: "Pour finaliser votre abonnement et planifier votre appel de configuration, veuillez entrer votre numéro de téléphone direct ci-dessous.",
        phonePlaceholder: "+1 (514) 000-0000",
        backButton: "Retour",
        submittingButton: "Appel en cours...",
        submitButton: "Demander un appel d'intégration",
      },
      step4: {
        title: "Demande",
        titleHighlight: "Confirmée.",
        description: "Excellent choix. Nous avons reçu votre demande pour le forfait {{plan}}.",
        nextStepsTitle: "Quelle est la prochaine étape ?",
        nextStepsText: "Un expert Anvela vous appellera dans les 24 heures pour finaliser votre configuration.",
        returnLink: "Retourner à l'accueil",
      },
    },

    // Founder
    founder: {
      scriptText: "La personne derrière Anvela",
      mainTitle: "Construit par quelqu'un qui comprend les défis des petites entreprises.",
      quote: "J'ai créé Anvela parce que chaque appel manqué est un client perdu. Votre entreprise mérite mieux.",
      title: "Fondateur & PDG",
      bio: "Pablo Fuentes a lancé Anvela après avoir vu trop d'entreprises montréalaises perdre des clients à cause d'appels sans réponse — non pas par manque de service, mais par manque de temps. Entrepreneur technologique basé à Montréal, il a combiné l'IA vocale avec une connaissance du marché local pour créer une réceptionniste qui ne dort jamais, ne prend jamais de pause, et s'adapte à la langue de chaque client, quelle qu'elle soit. Anvela est sa réponse à une question simple : et si chaque entreprise pouvait se permettre de ne jamais manquer un appel ?",
      location: "Montréal, Québec",
    },

    // Footer
    footer: {
      brandName: "Anvela",
      tagline: "Communication Intelligente",
      description: "Transformez votre entreprise avec des services de réceptionniste alimentés par l'IA. Disponible 24/7, toujours professionnel, incroyablement efficace.",
      newsletterLabel: "Abonnez-vous à notre newsletter",
      newsletterPlaceholder: "Entrez votre email",
      newsletterButtonText: "S'abonner",
      newsletterSuccessText: "Merci pour votre abonnement !",
      newsletterErrorText: "Veuillez réessayer.",
      copyrightText: "© Anvela AI. Tous droits réservés.",
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
      brandName: "Anvela",
      brandSubname: "Intelligent Communication",
      tagline: "Your 24/7 Digital Front Desk",
      home: "Home",
      features: "Features",
      howItWorks: "How It Works",
      technology: "Technology",
      testimonials: "Testimonials",
      contact: "Contact",
      ctaButton: "Get Started",
      freeTrial: "Speak to Anvela",
      endCall: "End Call",
      connecting: "Connecting...",
    },

    preloader: {
      brandName: "Anvela",
      brandSubname: "Intelligent Communication",
      yearText: "Next Gen",
      enterButton: "Start Experience",
    },

    // Cinematic Showcase
    cinematic: {
      step1: {
        subtitle: "Customer Experience",
        title: "Radiant Availability",
        description: "Your digital receptionist never has a bad day. Every client is greeted with constant warmth and benevolent professionalism, 24/7."
      },
      step2: {
        subtitle: "Total Reliability",
        title: "Zero Absence, Zero Interruption",
        description: "Reliability redefined. No sick days, no unexpected absences, and no coverage gaps. Anvela is always on duty so your business never misses a call."
      },
      step3: {
        subtitle: "Ethics & Image",
        title: "Unwavering Courtesy",
        description: "A perfect protocol, every time. Our AI maintains a polite, calm, and respectful tone even in complex situations, protecting your brand image."
      },
      step4: {
        subtitle: "Max Productivity",
        title: "Non-Stop Performance",
        description: "Continuous productivity without downtime. No coffee breaks, no lunch hours, or vacation requests. Uninterrupted service that optimizes your efficiency."
      }
    },

    // Hero
    hero: {
      scriptText: "The Future of Business Communication",
      mainTitle: "Your Intelligent\nAI Receptionist",
      ctaButton: "Launch Offer",
      videoDemo: "Video Demo",
      prices: "Prices",
      decorativeText: "INTELLIGENT • EFFICIENT • RELIABLE",
      ctaSubtitle: "1st month -50%",
      ctaMain: "Get Started with Anvela",
      noCreditCard: "Limited offer • Live in 48h",
      stats: {
        calls: { value: "100", suffix: "%", label: "Call Answer Rate" },
        availability: { value: "24", suffix: "/7", label: "Always Available" },
      },
    },
    missedCalls: {
      subtitle: "FINANCIAL IMPACT",
      title: "Every missed call is a lost opportunity.",
      vision: "What if every business could afford to never miss a call again?",
      cta: "Stop losing money",
    },

    // Gallery
    gallery: {
      scriptText: "AI Capabilities",
      mainTitle: "Built for Every Industry",
      selectClients: "The Anvela Advantage",
      clientsList: "Every missed call is a missed client and missed revenue. Our intelligent AI handles your bookings, answers complex questions, and qualifies your leads 24/7, with human-like precision and robotic efficiency.",
      item1: { title: "SMART BOOKING", subtitle: "CALENDAR MGMT" },
      item2: { title: "LEAD CAPTURE", subtitle: "AI QUALIFICATION" },
      item3: { title: "24/7 RECEPTION", subtitle: "TOTAL AVAILABILITY" },
      item4: { title: "SYNCHRONIZATION", subtitle: "WORKFLOW AUTOMATION" },
      item5: { title: "MULTILINGUAL", subtitle: "FR / EN / ES / IT" },
      item6: { title: "SMS FOLLOW-UP", subtitle: "AUTO CONFIRMATION" },
      item7: { title: "CLIENT DATA", subtitle: "CRM INTEGRATION" },
      item8: { title: "TEAM RELAY", subtitle: "OVERFLOW SUPPORT" },
      item9: { title: "CLIENT EXPERIENCE", subtitle: "PROFESSIONAL VOICE" },
      item10: { title: "SECURITY", subtitle: "DATA PROTECTION" },
      item11: { title: "INTELLIGENCE", subtitle: "ADVANCED LOGIC" },
      special: {
        anvelaTitle: "Anvela AI",
        anvelaSubtitle: "- voici anvela - our ai -"
      }
    },

    // Feature Showcase
    featureShowcase: {
      processSubtitle: "OUR PROCESS",
      mainTitle: "How Anvela Powers Your Growth",
      step1: {
        subtitle: "DEMONSTRATION",
        title: "See AI in action",
        description: "Watch our demo to understand how our virtual receptionist can transform your business.",
        cta: "Play Video",
      },
      step2: {
        subtitle: "AI Reception",
        title: "Never miss a single client again",
        description: "Every missed call is a lost client. Anvela takes the call, understands the request, and collects the useful info.",
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
      },
    },

    // Pain Points
    painPoints: {
      scriptText: "The Cost of Inaction",
      subtitle: "FRICTION POINTS",
      mainTitle: "When Human Reception Can't Handle Everything",
      description: "Between missed calls, closed hours, and peak times, even the best teams can't answer everything, all the time. Anvela takes over in the background so nothing is lost.",
      items: [
        {
          title: "Revenue Leakage",
          description: "85% of callers won't call back if they hit voicemail. Every missed call is a lost opportunity.",
          icon: "PhoneMissed"
        },
        {
          title: "High Fixed Costs",
          description: "Hiring, training, and 24/7 benefits for staff is a massive and unpredictable capital drain.",
          icon: "TrendingUp"
        },
        {
          title: "Coverage Gaps",
          description: "Humans need breaks, sleep, and time off. Anvela provides absolute 24/7/365 availability, no exceptions.",
          icon: "Clock"
        },
        {
          title: "Inconsistent Quality",
          description: "Staff performance fluctuates. Anvela delivers a perfectly polite, premium experience 100% of the time.",
          icon: "Zap"
        },
        {
          title: "The Turnover Cycle",
          description: "Support roles have 75% annual turnover, leading to constant brain drain and retraining costs.",
          icon: "RefreshCw"
        },
        {
          title: "Operational Friction",
          description: "Manual data entry leads to human errors, double bookings, and lost lead information.",
          icon: "ClipboardList"
        }
      ],
      gallery: {
        back: "Back",
        ctaTitle: "Your clients hate waiting on the phone. Don't leave any more calls unanswered.",
        ctaButton: "Discover friction points",
        photos: {
          photo1: {
            title: "Zero-Opportunity Safety Net",
            logic: "The AI acts as an intelligent relay. It only answers if the main line is busy or after three unanswered rings.",
            benefit: "Every prospect is captured and booked without your team feeling rushed by the phone while a patient is in front of them.",
            alt: "AI Reception - Black desk with phone"
          },
          photo2: {
            title: "After-Hours Hot Lead Relay",
            logic: "While your team rests, Anvela takes the call, schedules the appointment in your agenda, and saves a full summary.",
            benefit: "At 8:00 AM, no piles of vague voicemails. Just a list of already booked clients ready to be confirmed and welcomed.",
            alt: "Smart planning on tablet"
          },
          photo3: {
            title: "Elimination of 'Administrative Drudgery'",
            logic: "The AI handles high-volume, low-value FAQ calls (hours, address, insurance, basic rates).",
            benefit: "Your staff can focus on high-value tasks, like reassuring an anxious patient.",
            alt: "Customer support and interaction"
          },
          photo4: {
            title: "Direct CRM Synchronization",
            logic: "Every interaction is synchronized with your CRM or Google Sheets, triggering automatic follow-ups.",
            benefit: "No more manual entry errors. All info is traceable, clean, and ready for final conversion.",
            alt: "Automation and CRM flow"
          },
          photo5: {
            title: "Lightning-Fast Setup",
            logic: "Set up your AI profile in less than 10 minutes with your business preferences.",
            benefit: "Save time from the very first hour.",
            alt: "Quick Anvela setup"
          },
          photo6: {
            title: "Seamless Integration",
            logic: "Compatible with 99% of current phone systems and calendars.",
            benefit: "No infrastructure changes required.",
            alt: "Seamless integration"
          },
          photo7: {
            title: "Ultra-Realistic Voice",
            logic: "Speech synthesis technology that perfectly mimics human tone and empathy.",
            benefit: "Your clients never guess they're talking to an AI.",
            alt: "Advanced NLP Technology"
          },
          photo8: {
            title: "Continuous Learning",
            logic: "The AI learns from every interaction to become more accurate every day.",
            benefit: "An employee who never stops improving.",
            alt: "Machine learning"
          },
          photo9: {
            title: "Anvela Vision",
            logic: "Redefining the future of customer service through conversational intelligence.",
            benefit: "Position your business as a technology leader.",
            alt: "Anvela Vision"
          }
        },
        labels: {
          logic: "Logic",
          benefit: "Benefit"
        }
      }
    },

    // Album Cube
    albumCube: {
      scrollHint: "Scroll to explore",
      backgroundTitle: "ANVELA",
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
      subtitle: "ANVELA EN ACTION",
      titleMain: "From Overwhelmed",
      titleAccent: "To Unstoppable",
      description: "Watch how Anvela transforms a chaotic front desk into a hub of calm efficiency. Never miss a call, never lose a lead, and let your team focus on what truly matters.",
      feat1: { title: "AI Precision", desc: "Handles complex inquiries instantly" },
      feat2: { title: "Instant Setup", desc: "Zero friction integration" }
    },

    // Pricing
    pricing: {
      scriptText: "A Profitable Investment",
      subtitle: "OUR PRICING",
      mainTitle: "Plans tailored to your needs",
      promoText: "Launch offer: first month at 50% off normal price. Up and running in under 48 hours.",
      promoTextYearly: "Annual plan: 2 months free + 10% off. Up and running in under 48 hours.",
      ctaButton: "Claim offer",
      monthly: "Monthly",
      yearly: "Yearly",
      yearlyBonus: "2 months free & -10%",
      essentiel: "ESSENTIAL",
      bestValue: "BEST VALUE",
      completeSolution: "COMPLETE SOLUTION",
      cadMonth: "CAD / month",
      annualBillingNotice: "(billed ${{price}} annually)",
      setupFeeLabel: "Setup Fee",
      popularLabel: "Most Popular",
      vsLabel: "THE ANVELA ADVANTAGE",
      vsEmployee: "Part-time receptionist",
      vsEmployeePrice: "~$2,500 / month",
      vsAnvela: "Anvela — available 24/7",
      vsAnvelaPrice: "from $199 / month · ~$50 / week",
      vsTagline: "Not a replacement for your team — extra support, without the extra payroll.",
      tiers: [
        {
          name: "The Night Shift",
          price: "199",
          weeklyNote: "less than $50 / week",
          setupFee: "0",
          setupFeeNote: "3-month minimum contract",
          description: "Your team rests. Your leads don't. We capture every missed call while you're closed — and your calendar fills up on its own.",
          features: [
            "Availability: Mon–Fri (6 PM – 8 AM) + Weekends 24h",
            "Calls: Unlimited (no per-minute fees)",
            "AI: FAQ Answering + Qualified Lead Capture",
            "Booking: Automatic Appointment Booking (Google Calendar)",
            "Notification: Instant SMS as soon as a lead is captured",
            "Full transcription + AI call summary",
            "Report: Daily 8 AM 'Night Shift Report'",
            "Language: Optimized for local markets",
            "No-show reduction: up to 30–50% thanks to smart reminders"
          ]
        },
        {
          name: "The Co-Pilot",
          price: "299",
          weeklyNote: "less than $75 / week",
          isPopular: true,
          setupFee: "197",
          setupFeeNote: "3-month minimum contract",
          description: "Full 24/7 coverage. Your phone stops ringing in a vacuum — it generates revenue, even during busy hours.",
          features: [
            "Includes EVERYTHING in 'The Night Shift'",
            "Follow-up: Unresolved calls logged with full transcription",
            "Availability: 24/7 (Day overflow + Full after-hours)",
            "Routing: Human first (3 rings), AI takes over",
            "Transfer: Live call redirect to your front desk (1 number)",
            "Booking: Appointment Booking + SMS reminders (24h/2h)",
            "Management: Cancellations & Rescheduling handled by AI",
            "Interactions: Bilingual (English / French)",
            "Calls: Unlimited",
            "Auto-callbacks for no-shows (AI call to rebook)",
            "Smart Routing: Context-aware prioritization & routing",
            "Launch offer: first month at 50% off normal price"
          ]
        },
        {
          name: "The Elite",
          price: "597",
          weeklyNote: "less than $150 / week",
          setupFee: "497",
          setupFeeNote: "6-month minimum contract",
          description: "Your complete growth system. AI answers, follows up, books, and tracks every lead — while you work.",
          features: [
            "Includes EVERYTHING in 'The Night Shift' and 'The Co-Pilot'",
            "Transfer: Unlimited destinations (front desk, manager, service...)",
            "Client memory: Mila recognizes returning clients by name and vehicle",
            "Logic: Native CRM Integration with dashboard",
            "Follow-ups: Auto SMS within 15 min for every lead",
            "Triage: Intelligent multi-step branching logic",
            "Support: Priority VIP Support (response < 2h)",
            "BONUS: Free one-page website included",
            "Calls: Unlimited",
            "Monthly personalized reports + AI optimization",
            "Appointment increase: +30–40%"
          ]
        }
      ]
    },

    // Features
    videoDemo: {
      title: "Anvela in Action",
      description: "Discover how our AI receptionist transforms your customer service, handles your appointments, and qualifies your leads 24/7.",
      tabs: {
        overview: "Overview",
        realCall: "Real Call"
      },
      realCall: {
        step1: "Natural conversational flow",
        step2: "Live appointment booking",
        step3: "Instant language switching",
        step4: "Real-time transcription",
        step5: "Fluid human interaction"
      },
      step1: { text: "Anvela Demo", helper: "Watch the AI in real-life scenarios." },
      step2: { text: "Absolute Efficiency", helper: "Zero missed calls, 100% satisfaction." },
      step3: { text: "Simple Integration", helper: "Ready in less than 10 minutes." },
      step4: { text: "Multilingual", helper: "Speaks your customers' language." },
      step5: { text: "Security & Reliability", helper: "Your data is protected." },
    },

    // FAQ
    faq: {
      subtitle: "SUPPORT",
      mainTitle: "Frequently Asked Questions",
      description: "Have questions about Anvela? We have the answers. If you can't find what you're looking for, don't hesitate to contact us.",
      moreInfoTitle: "Want to know more?",
      moreInfoText: "Our team is available for a personalized 15-minute demonstration.",
      moreInfoButton: "Speak with an expert",
      items: [
        {
          question: "How does integration with my current system work?",
          answer: "It's very simple. We set up a conditional call forwarding (if busy or no answer) to your dedicated Anvela number. You keep your current number and your customers see no change."
        },
        {
          question: "Can the AI really take appointments?",
          answer: "Yes, absolutely. Anvela connects directly to your calendar (Google, Outlook, Calendly, etc.). It checks your availability in real-time, reserves the slot, and sends you an instant confirmation."
        },
        {
          question: "What happens if the AI doesn't know the answer?",
          answer: "If a request is too complex, Anvela can either transfer the call to a live member of your team (Smart Routing), or take a detailed message with the client's contact information for a callback."
        },
        {
          question: "Can I customize the voice and script?",
          answer: "Yes. We work with you to define the tone, vocabulary, and response scenarios. Your receptionist can be formal, friendly, or specialized according to your industry."
        },
        {
          question: "Is there a long-term commitment?",
          answer: "The 'Night Shift' and 'Co-Pilot' plans have a 3-month minimum commitment. The 'Elite' plan requires 6 months due to the complexity of the custom CRM integration."
        },
        {
          question: "What types of businesses is Anvela for?",
          answer: "Anvela works for any business that receives calls: auto shops, clinics, law offices, real estate agencies, restaurants, retail stores, and more. If your clients call you, Anvela can answer for you."
        },
        {
          question: "Is Anvela bilingual?",
          answer: "Yes. Anvela automatically adapts to your client's language from the very first words of the conversation — French, English, Spanish, and more. No matter where your client is from, Anvela responds in their language."
        },
        {
          question: "How long does it take to get up and running?",
          answer: "Generally less than 48 hours. Once your plan is confirmed, our team configures your AI receptionist, integrates it with your existing number, and runs tests. You're live quickly with zero disruption."
        }
      ]
    },

    features: {
      scriptText: "Powerful Capabilities",
      subtitle: "AI-POWERED FEATURES",
      mainTitle: "Everything Your Business Needs",
      solutions: {
        callHandling: {
          name: "Call Handling",
          subtitle: "Smart Routing",
          description: "Anvela answers calls with natural conversation, understands intent, and routes to the right person.",
          tastingNotes: "Natural language processing with sentiment analysis",
          accuracy: "99%",
          speed: "Instant",
          uptime: "24/7",
        },
        scheduling: {
          name: "Scheduling",
          subtitle: "Auto Calendar",
          description: "Seamlessly book appointments, send reminders, and manage your schedule without human intervention.",
          tastingNotes: "Real-time availability with conflict detection",
          accuracy: "100%",
          speed: "Automated",
          uptime: "Unlimited",
        },
        support: {
          name: "Customer Support",
          subtitle: "Instant Answers",
          description: "Provide immediate responses to common questions and handle complex inquiries with ease.",
          tastingNotes: "Knowledge base integration with self-learning capabilities",
          accuracy: "95%",
          speed: "Immediate",
          uptime: "Continuous",
        },
      },
      metrics: {
        accuracy: "Accuracy",
        speed: "Speed",
        uptime: "Uptime"
      },
      featureCards: {
        aiPowered: { title: "AI-Powered", description: "Advanced NLP for natural conversations" },
        alwaysOn: { title: "Always On", description: "24/7 availability without breaks" },
        instant: { title: "Instant Response", description: "Sub-second response times" },
        customizable: { title: "Customizable", description: "Tailored to your brand identity" },
      },
      quote: {
        text: "Anvela handles every call, books appointments and sends confirmations — no human needed. Exactly what an independent garage needs.",
        attribution: "Pablo Fuentes, Founding Client",
        prefix: "Founding Client",
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
      testimonialsScriptText: "Founding Client",
      testimonialsSubtitle: "FOUNDING CLIENT",
      testimonialsMainTitle: "Live From Day One",
      foundingClient: {
        name: "Garage Pablo",
        role: "Founding client — Montreal, QC",
        text: "Anvela answers every call, books appointments and sends confirmations — no human needed. Exactly what an independent garage needs.",
      },
      foundingSpots: {
        label: "Spots available",
        title: "Become a founding client",
        text: "We're accepting a limited number of founding garages. Founding price locked in for life — no future increases.",
        cta: "Reserve my spot",
      },
      storyScriptText: "Our Story",
      storySubtitle: "ABOUT US",
      storyTitle: "Built in Montreal, for independent garages",
      storyParagraphs: {
        1: "Anvela was built on a simple reality: independent garages lose clients every evening because no one picks up the phone. Founded in Montreal, Anvela deploys an AI receptionist in 48 hours — no training, no hidden fees.",
        2: "We're starting with garages, but the vision is broader: give every local business a professional AI phone system that works like a big company's.",
      },
      storyTimeline: {
        users: { value: "1st", label: "Founding client active" },
        calls: { value: "48h", label: "Setup time" },
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
      mainTitle: "Let's Talk",
      introText: "Ready to transform how your business handles calls? Submit your info — our team reaches out within minutes. First month 50% off.",
      contactInfoTitle: "Contact Information",
      contactItems: {
        address: { label: "Address", value: "Montreal, Quebec, Canada" },
        phone: { label: "Phone", value: "(438) 814-7578 · (514) 679-2107", subtext: "Anvela direct line 24/7" },
        email: { label: "Email", value: "pablo@anvela.ca · support@anvela.ca", subtext: "Reply within 24h" },
        hours: { label: "Hours", value: "Always Available", subtext: "24/7/365 Support" },
      },
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Jean Tremblay",
        emailLabel: "Email Address",
        emailPlaceholder: "jean@business.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+1 (514) 000-0000",
        businessNameLabel: "Business Name",
        businessNamePlaceholder: "e.g. Tremblay Auto Shop",
        businessTypeLabel: "Type of Business",
        businessTypeOptions: ["Garage / Auto", "Medical / Clinic", "Legal", "Real Estate", "Restaurant", "Retail / Store", "Other"],
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your reception needs or ask any questions...",
        submitText: "Send My Request",
        submittingText: "Sending...",
        successMessage: "Thank you! We'll contact you within 24 hours.",
        errorMessage: "Something went wrong. Please try again.",
      },
      privacyNotice: "By submitting this form, you agree to our Privacy Policy and Terms of Service.",
    },

    // Onboarding
    onboarding: {
      stepCounter: "Step {{step}} of 3",
      saveExit: "Save & Exit",
      step1: {
        badge: "Identify Your Business",
        title: "Let's connect your",
        titleHighlight: "Business Identity.",
        description: "Find your business. We'll pull your location and hours to start building your custom AI profile.",
        searchPlaceholder: "Search for your business...",
        continueButton: "Continue to Plans",
        changeButton: "Change",
      },
      step2: {
        title: "Choose Your",
        titleHighlight: "Anvela Plan.",
        description: "Select the tier that best fits your business volume. Pricing includes automated call handling, scheduling, and bilingual support.",
        backButton: "Back",
        continueButton: "Continue to Confirmation",
        selectedLabel: "SELECTED",
        selectLabel: "SELECT PLAN",
        cadMonth: "CAD / month",
      },
      step3: {
        title: "Final Step:",
        titleHighlight: "Call Verification.",
        description: "We've captured your business profile for {{business}} and your interest in the {{plan}} tier.",
        inputDescription: "To finalize your subscription and schedule your configuration call, please enter your direct phone number below.",
        phonePlaceholder: "+1 (514) 000-0000",
        backButton: "Back",
        submittingButton: "Calling...",
        submitButton: "Request Integration Call",
      },
      step4: {
        title: "Request",
        titleHighlight: "Confirmed.",
        description: "Excellent choice. We've received your request for the {{plan}} plan.",
        nextStepsTitle: "What happens next?",
        nextStepsText: "An Anvela expert will call you within 24 hours to finalize your setup.",
        returnLink: "Return to Home",
      },
    },

    // Founder
    founder: {
      scriptText: "The person behind Anvela",
      mainTitle: "Built by someone who understands the challenges small businesses face.",
      quote: "I built Anvela because every missed call is a lost client. Your business deserves better.",
      title: "Founder & CEO",
      bio: "Pablo Fuentes launched Anvela after watching too many Montreal businesses lose clients to missed calls — not from bad service, but from being stretched too thin. A tech entrepreneur based in Montreal, he combined AI voice technology with deep local market knowledge to build a receptionist that never sleeps, never takes breaks, and adapts to any language a client speaks. Anvela is his answer to one simple question: what if every business could afford to never miss a call again?",
      location: "Montreal, Quebec",
    },

    // Footer
    footer: {
      brandName: "Anvela",
      tagline: "Intelligent Communication",
      description: "Transform your business with AI-powered receptionist services. Available 24/7, always professional, incredibly efficient.",
      newsletterLabel: "Subscribe to our newsletter",
      newsletterPlaceholder: "Enter your email",
      newsletterButtonText: "Subscribe",
      newsletterSuccessText: "Thanks for subscribing!",
      newsletterErrorText: "Please try again.",
      copyrightText: "© Anvela AI. All rights reserved.",
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
      brandName: "Anvela",
      brandSubname: "Comunicación Inteligente",
      tagline: "Tu Recepción Digital 24/7",
      home: "Inicio",
      features: "Funciones",
      howItWorks: "Cómo Funciona",
      technology: "Tecnología",
      testimonials: "Testimonios",
      contact: "Contacto",
      ctaButton: "Empezar",
      freeTrial: "Hablar con Anvela",
      endCall: "Colgar",
      connecting: "Conectando...",
    },

    // Preloader
    preloader: {
      brandName: "Recepcionista IA",
      brandSubname: "Comunicación Inteligente",
      yearText: "Next Gen",
      enterButton: "Iniciar Experiencia",
    },

    // Hero
    hero: {
      scriptText: "El Futuro de la Comunicación Empresarial",
      mainTitle: "Su Recepcionista\nIA Inteligente",
      ctaButton: "Oferta de Lanzamiento",
      videoDemo: "Demo en Video",
      prices: "Precios",
      decorativeText: "INTELIGENTE • EFICIENTE • CONFIABLE",
      ctaSubtitle: "1er mes al -50%",
      ctaMain: "Comenzar con Anvela",
      noCreditCard: "Oferta limitada • Operativo en 48h",
      stats: {
        calls: { value: "100", suffix: "%", label: "Tasa de Respuesta" },
        availability: { value: "24", suffix: "/7", label: "Siempre Disponible" },
      },
    },
    missedCalls: {
      subtitle: "IMPACTO FINANCIERO",
      title: "Cada llamada perdida es una oportunidad perdida.",
      vision: "¿Y si cada empresa pudiera permitirse no volver a perder una llamada?",
      cta: "Deja de perder dinero",
    },

    // Gallery
    gallery: {
      scriptText: "Capacidades de IA",
      mainTitle: "Diseñado para Todos los Sectores",
      selectClients: "La Ventaja Anvela",
      clientsList: "Cada llamada perdida es un cliente perdido y dinero que dejas de ganar. Nuestra IA inteligente gestiona tus reservas, responde preguntas complejas y califica tus leads 24/7, con precisión humana y eficiencia robótica.",
      item1: { title: "RESERVA INTELIGENTE", subtitle: "GESTIÓN AGENDAS" },
      item2: { title: "CAPTURA DE LEADS", subtitle: "CALIFICACIÓN IA" },
      item3: { title: "RECEPCIÓN 24/7", subtitle: "DISPONIBILIDAD TOTAL" },
      item4: { title: "SINCRONIZACIÓN", subtitle: "FLUJO DE TRABAJO" },
      item5: { title: "MULTILINGÜE", subtitle: "FR / EN / ES / IT" },
      item6: { title: "SEGUIMIENTO SMS", subtitle: "CONFIRMACIÓN AUTO" },
      item7: { title: "DATOS DE CLIENTES", subtitle: "INTEGRACIÓN CRM" },
      item8: { title: "RELEVO DE EQUIPO", subtitle: "APOYO DESBORDAMIENTO" },
      item9: { title: "EXPERIENCIA CLIENTE", subtitle: "VOZ PROFESIONAL" },
      item10: { title: "SEGURIDAD", subtitle: "PROTECCIÓN DATOS" },
      item11: { title: "INTELIGENCIA", subtitle: "LÓGICA AVANZADA" },
      special: {
        anvelaTitle: "Anvela AI",
        anvelaSubtitle: "- aquí está anvela - nuestra ia -"
      }
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
        description: "Cada llamada perdida es un cliente perdido. Anvela toma la llamada, entiende la solicitud y recopila la información útil.",
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

    // Pain Points
    painPoints: {
      scriptText: "El Costo de la Inacción",
      subtitle: "PUNTOS DE FRICCIÓN",
      mainTitle: "Cuando la Recepción Humana no Puede Manejarlo Todo",
      description: "Entre las llamadas perdidas, el horario de cierre y los momentos de mayor afluencia, incluso los mejores equipos no pueden responder a todo, todo el tiempo. Anvela toma el relevo en segundo plano para que no se pierda nada.",
      items: [
        {
          title: "Fuga de Ingresos",
          description: "El 85% de las personas no vuelven a llamar si caen al buzón de voz. Cada llamada perdida es un cliente perdido.",
          icon: "PhoneMissed"
        },
        {
          title: "Costos Fijos Elevados",
          description: "La contratación, formación y beneficios de personal 24/7 es un drenaje de capital masivo e impredecible.",
          icon: "TrendingUp"
        },
        {
          title: "Brechas de Cobertura",
          description: "Los humanos necesitan descansos y sueño. Anvela ofrece disponibilidad absoluta 24/7/365, sin excepciones.",
          icon: "Clock"
        },
        {
          title: "Servicio Inconsistente",
          description: "El rendimiento del personal fluctúa. Anvela ofrece una experiencia premium y perfectamente amable en cada interacción.",
          icon: "Zap"
        },
        {
          title: "El Ciclo de Rotación",
          description: "Los roles de soporte tienen una rotación anual del 75%, lo que genera una pérdida constante de conocimientos.",
          icon: "RefreshCw"
        },
        {
          title: "Fricción Operativa",
          description: "La entrada manual de datos genera errores humanos, duplicidad de citas y pérdida de información de prospectos.",
          icon: "ClipboardList"
        }
      ],
      gallery: {
        back: "Volver",
        ctaTitle: "Tus clientes odian esperar al teléfono. No dejes más llamadas sin respuesta.",
        ctaButton: "Descubrir puntos de fricción",
        photos: {
          photo1: {
            title: "Red de Seguridad 'Cero Oportunidad'",
            logic: "La IA actúa como un relé inteligente. Solo responde si la línea principal está ocupada o después de tres timbres sin respuesta.",
            benefit: "Cada prospecto es capturado y reservado sin que su equipo se sienta presionado por el teléfono mientras hay un paciente delante.",
            alt: "Recepción IA - Escritorio negro con teléfono"
          },
          photo2: {
            title: "Relé de leads calientes fuera de horario",
            logic: "Mientras su equipo descansa, Anvela toma la llamada, programa la cita en su agenda y guarda un resumen completo.",
            benefit: "A las 8:00 AM, sin montones de mensajes de voz vagos. Solo una lista de clientes ya reservados listos para ser confirmados.",
            alt: "Planificación inteligente en tableta"
          },
          photo3: {
            title: "Eliminación de la 'Tarea Administrativa'",
            logic: "La IA maneja llamadas de preguntas frecuentes de alto volumen y bajo valor (horarios, dirección, seguros, tarifas básicas).",
            benefit: "Su personal puede enfocarse en tareas de alto valor, como tranquilizar a un paciente ansioso.",
            alt: "Soporte al cliente e interacción"
          },
          photo4: {
            title: "Sincronización Directa con CRM",
            logic: "Cada interacción se sincroniza con su CRM o Google Sheets, activando seguimientos automáticos.",
            benefit: "No más errores de entrada manual. Toda la info es rastreable, limpia y lista para la conversión final.",
            alt: "Automatización y flujo de CRM"
          },
          photo5: {
            title: "Configuración Relámpago",
            logic: "Configure su perfil de IA en menos de 10 minutos con sus preferencias comerciales.",
            benefit: "Ahorre tiempo desde la primera hora.",
            alt: "Configuración rápida de Anvela"
          },
          photo6: {
            title: "Integración Sin Fisuras",
            logic: "Compatible con el 99% de los sistemas telefónicos y calendarios actuales.",
            benefit: "No se requieren cambios de infraestructura.",
            alt: "Integración perfecta"
          },
          photo7: {
            title: "Voz Ultra Realista",
            logic: "Tecnología de síntesis de voz que imita perfectamente el tono y la empatía humanos.",
            benefit: "Sus clientes nunca adivinan que están hablando con una IA.",
            alt: "Tecnología NLP avanzada"
          },
          photo8: {
            title: "Aprendizaje Continuo",
            logic: "La IA aprende de cada interacción para ser más precisa cada día.",
            benefit: "Un empleado que nunca deja de mejorar.",
            alt: "Aprendizaje automático"
          },
          photo9: {
            title: "Visión Anvela",
            logic: "Redefiniendo el futuro del servicio al cliente a través de la inteligencia conversacional.",
            benefit: "Posicione su negocio como líder tecnológico.",
            alt: "Visión Anvela"
          }
        },
        labels: {
          logic: "Lógica",
          benefit: "Beneficio"
        }
      }
    },

    // Album Cube
    albumCube: {
      scrollHint: "Desplácese para explorar",
      backgroundTitle: "ANVELA",
      features: [
        { title: "VOZ IA", subtitle: "LLAMADAS INTELIGENTES" },
        { title: "CHATBOT", subtitle: "MENSAJERÍA INTELIGENTE" },
        { title: "AGENDA", subtitle: "PLANIFICACIÓN AUTO" },
        { title: "GLOBAL", subtitle: "MULTILINGÜE" },
      ]
    },

    // Video Promo
    videoPromo: {
      scriptText: "Viva el Cambio",
      subtitle: "ANVELA EN ACCIÓN",
      titleMain: "Del Caos de la Recepción",
      titleAccent: "a la Excelencia",
      description: "Descubra cómo Anvela transforma una recepción desbordada en un centro de eficiencia serena. No pierda más llamadas, no pierda más leads y deje que su equipo se concentre en lo esencial.",
      feat1: { title: "Precisión IA", desc: "Gestione instantáneamente las solicitudes" },
      feat2: { title: "Instalación Relámpago", desc: "Integración sin fricciones" }
    },

    // Pricing
    pricing: {
      scriptText: "Una Inversión Rentable",
      subtitle: "NUESTROS PRECIOS",
      mainTitle: "Planes adaptados a tus necesidades",
      promoText: "Oferta de lanzamiento: primer mes al 50% del precio normal. Operativo en menos de 48 horas.",
      promoTextYearly: "Plan anual: 2 meses gratis + 10% de descuento. Operativo en menos de 48 horas.",
      ctaButton: "Aprovechar la oferta",
      monthly: "Mensual",
      yearly: "Anual",
      yearlyBonus: "2 meses gratis & -10%",
      essentiel: "ESENCIAL",
      bestValue: "MEJOR VALOR",
      completeSolution: "SOLUCIÓN COMPLETA",
      cadMonth: "CAD / mes",
      annualBillingNotice: "(facturado ${{price}} anualmente)",
      setupFeeLabel: "Gasto de puesta en servicio",
      popularLabel: "El más popular",
      vsLabel: "LA VENTAJA ANVELA",
      vsEmployee: "Recepcionista a tiempo parcial",
      vsEmployeePrice: "~$2 500 / mes",
      vsAnvela: "Anvela — disponible 24/7",
      vsAnvelaPrice: "desde $199 / mes · ~$50 / sem.",
      vsTagline: "No para reemplazar a tu equipo — para darle refuerzo, sin el costo extra.",
      tiers: [
        {
          name: "The Night Shift",
          price: "199",
          weeklyNote: "menos de $50 / semana",
          setupFee: "0",
          setupFeeNote: "Contrato mínimo de 3 meses",
          description: "Su equipo descansa. Sus leads no. Capturamos cada llamada perdida mientras está cerrado, y su calendario se llena solo.",
          features: [
            "Disponibilidad: Lun-Vie (18:00 - 8:00) + Fines de semana 24h",
            "Llamadas: Ilimitadas (sin cargos por minuto)",
            "IA: Respuesta a FAQ + captura de leads calificados",
            "Reserva: Citas automáticas (Google Calendar)",
            "Notificación: SMS instantáneo al capturar un lead",
            "Transcripción completa + resumen IA de llamadas",
            "Informe: 'Night Shift Report' diario a las 8:00",
            "Idioma: Optimizado para mercados locales",
            "Reducción de no-shows: hasta 30–50% con recordatorios"
          ]
        },
        {
          name: "The Co-Pilot",
          price: "299",
          weeklyNote: "menos de $75 / semana",
          isPopular: true,
          setupFee: "197",
          setupFeeNote: "Contrato mínimo de 3 meses",
          description: "Cobertura completa 24/7. Su teléfono deja de sonar en el vacío: genera ingresos, incluso durante las horas de trabajo.",
          features: [
            "Incluye TODO del plan 'The Night Shift'",
            "Seguimiento: Llamadas no resueltas con transcripción",
            "Disponibilidad: 24/7 (Desbordamiento día + Noche completa)",
            "Enrutamiento: Humano primero (3 tonos), la IA toma el relevo",
            "Transferencia: Redirección en vivo a su recepción (1 número)",
            "Reserva: Citas + recordatorios SMS (24h/2h)",
            "Gestión: Modificaciones y cancelaciones por IA",
            "Interacciones: Bilingüe (Inglés / Español)",
            "Llamadas: Ilimitadas",
            "Auto-callbacks para no-shows (IA vuelve a llamar)",
            "Enrutamiento inteligente: Análisis de contexto y prioridad",
            "Oferta lanzamiento: primer mes al 50% del precio normal"
          ]
        },
        {
          name: "The Elite",
          price: "597",
          weeklyNote: "menos de $150 / semana",
          setupFee: "497",
          setupFeeNote: "Contrato mínimo de 6 meses",
          description: "Su sistema completo de crecimiento. La IA responde, relanza, reserva y sigue a cada lead, mientras usted trabaja.",
          features: [
            "Incluye TODO de 'The Night Shift' y 'The Co-Pilot'",
            "Transferencia: Destinos ilimitados (recepción, gerente, servicio...)",
            "Memoria de clientes: Mila reconoce a los clientes habituales por nombre y vehículo",
            "Lógica: Integración CRM nativa con tablero",
            "Seguimiento: SMS automático en 15 min para cada lead",
            "Triaje: Lógica inteligente de múltiples pasos",
            "Soporte: Soporte VIP Prioritario (respuesta < 2h)",
            "BONUS: Sitio web de una página gratis incluido",
            "Llamadas: Ilimitadas",
            "Informes mensuales personalizados + optimización IA",
            "Aumento de citas: +30–40%"
          ]
        }
      ]
    },

    // Features
    videoDemo: {
      title: "Anvela en Acción",
      description: "Descubra cómo nuestra recepcionista IA transforma su atención al cliente, gestiona sus citas y califica a sus prospectos las 24 horas.",
      tabs: {
        overview: "Resumen",
        realCall: "Llamada Real"
      },
      realCall: {
        step1: "Flujo de conversación natural",
        step2: "Reserva de citas en vivo",
        step3: "Cambio de idioma instantáneo",
        step4: "Transcripción en tiempo real",
        step5: "Interacción humana fluida"
      },
      step1: { text: "Demo Anvela", helper: "Vea la IA en situaciones reales." },
      step2: { text: "Eficiencia Absoluta", helper: "Cero llamadas perdidas, 100% de satisfacción." },
      step3: { text: "Integración Simple", helper: "Listo en menos de 10 minutos." },
      step4: { text: "Multilingüe", helper: "Habla el idioma de sus clientes." },
      step5: { text: "Seguridad y Fiabilidad", helper: "Sus datos están protegidos." },
    },

    // FAQ
    faq: {
      subtitle: "ASISTENCIA",
      mainTitle: "Preguntas Frecuentes",
      description: "¿Tiene preguntas sobre Anvela? Tenemos las respuestas. Si no encuentra lo que busca, no dude en contactarnos.",
      moreInfoTitle: "¿Quiere saber más?",
      moreInfoText: "Nuestro equipo está disponible para una demostración personalizada de 15 minutos.",
      moreInfoButton: "Hablar con un experto",
      items: [
        {
          question: "¿Cómo funciona la integración con mi sistema actual?",
          answer: "Es muy sencillo. Configuramos un desvío de llamadas condicional (si está ocupado o no responde) a su número dedicado de Anvela. Mantiene su número actual y sus clientes no ven ningún cambio."
        },
        {
          question: "¿Puede la IA realmente concertar citas?",
          answer: "Sí, absolutamente. Anvela se conecta directamente a su calendario (Google, Outlook, Calendly, etc.). Comprueba su disponibilidad en tiempo real, reserva el espacio y le envía una confirmación instantánea."
        },
        {
          question: "¿Qué pasa si la IA no conoce la respuesta?",
          answer: "Si una solicitud es demasiado compleja, Anvela puede desviar la llamada a un miembro de su equipo en vivo (Enrutamiento Inteligente) o tomar un mensaje detallado con la información de contacto del cliente para una devolución de llamada."
        },
        {
          question: "¿Puedo personalizar la voz y el guion?",
          answer: "Sí. Trabajamos con usted para definir el tono, el vocabulario y los escenarios de respuesta. Su recepcionista puede ser formal, amable o especializada según su sector de actividad."
        },
        {
          question: "¿Existe un compromiso a largo plazo?",
          answer: "Los planes 'Night Shift' y 'Co-Pilot' tienen un compromiso mínimo de 3 meses. El plan 'Elite' requiere 6 meses debido a la complejidad de la integración personalizada con CRM."
        },
        {
          question: "¿Para qué tipos de empresas es Anvela?",
          answer: "Anvela funciona para cualquier negocio que reciba llamadas: talleres, clínicas, bufetes de abogados, inmobiliarias, restaurantes, tiendas y más. Si sus clientes le llaman, Anvela puede responder por usted."
        },
        {
          question: "¿Es Anvela bilingüe?",
          answer: "Sí. Anvela se adapta automáticamente al idioma de su cliente desde las primeras palabras de la conversación — francés, inglés, español y más. Sin importar de dónde venga su cliente, Anvela le responde en su idioma."
        },
        {
          question: "¿Cuánto tiempo se tarda en estar operativo?",
          answer: "Generalmente menos de 48 horas. Una vez confirmado su plan, nuestro equipo configura su recepcionista de IA, la integra con su número existente y realiza las pruebas. Estará en funcionamiento rápidamente sin ninguna interrupción."
        }
      ]
    },

    features: {
      scriptText: "Capacidades Potentes",
      subtitle: "FUNCIONES IA",
      mainTitle: "Todo lo que su Negocio Necesita",
      solutions: {
        callHandling: {
          name: "Gestión de Llamadas",
          subtitle: "Enrutamiento Inteligente",
          description: "Anvela responde llamadas con conversación natural, comprende la intención y las dirige al departamento correcto.",
          tastingNotes: "Procesamiento de lenguaje natural con análisis de sentimiento",
          accuracy: "99%",
          speed: "Instantáneo",
          uptime: "24/7",
        },
        scheduling: {
          name: "Programación",
          subtitle: "Agenda Automática",
          description: "Reserve citas sin problemas, envíe recordatorios y gestione su calendario sin intervención humana.",
          tastingNotes: "Disponibilidad en tiempo real con detección de conflictos",
          accuracy: "100%",
          speed: "Automatizado",
          uptime: "Ilimitado",
        },
        support: {
          name: "Soporte al Cliente",
          subtitle: "Respuestas Instantáneas",
          description: "Proporcione respuestas inmediatas a preguntas comunes y resuelva consultas complejas con facilidad.",
          tastingNotes: "Integración de base de conocimientos con capacidad de autoaprendizaje",
          accuracy: "95%",
          speed: "Inmediato",
          uptime: "Continuo",
        },
      },
      metrics: {
        accuracy: "Precisión",
        speed: "Velocidad",
        uptime: "Disponibilidad"
      },
      featureCards: {
        aiPowered: { title: "Impulsado por IA", description: "NLP avanzado para conversaciones naturales" },
        alwaysOn: { title: "Siempre Activo", description: "Disponibilidad 24/7 sin interrupciones" },
        instant: { title: "Respuesta Instantánea", description: "Tiempos de respuesta inferiores al segundo" },
        customizable: { title: "Personalizable", description: "Adaptado a la identidad de su marca" },
      },
      quote: {
        text: "Anvela atiende cada llamada, agenda citas y envía confirmaciones — sin intervención humana. Exactamente lo que necesita un garage independiente.",
        attribution: "Pablo Fuentes, Cliente Fundador",
        prefix: "Cliente Fundador",
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
      testimonialsScriptText: "Cliente Fundador",
      testimonialsSubtitle: "CLIENTE FUNDADOR",
      testimonialsMainTitle: "En Servicio Desde el Primer Día",
      foundingClient: {
        name: "Garage Pablo",
        role: "Cliente fundador — Montreal, QC",
        text: "Anvela atiende cada llamada, agenda citas y envía confirmaciones — sin intervención humana. Exactamente lo que necesita un garage independiente.",
      },
      foundingSpots: {
        label: "Plazas disponibles",
        title: "Conviértete en cliente fundador",
        text: "Aceptamos un número limitado de garages fundadores. Precio fundador garantizado de por vida — sin aumentos futuros.",
        cta: "Reservar mi plaza",
      },
      storyScriptText: "Nuestra Historia",
      storySubtitle: "SOBRE NOSOTROS",
      storyTitle: "Nacido en Montreal, para garages independientes",
      storyParagraphs: {
        1: "Anvela nació de una realidad simple: los garages independientes pierden clientes cada noche porque nadie contesta el teléfono. Fundada en Montreal, Anvela implementa un recepcionista IA en 48 horas — sin formación, sin tarifas ocultas.",
        2: "Empezamos con garages, pero la visión es más amplia: dar a cada negocio local un sistema telefónico IA profesional que funcione como el de una gran empresa.",
      },
      storyTimeline: {
        users: { value: "1er", label: "Cliente fundador activo" },
        calls: { value: "48h", label: "Tiempo de configuración" },
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
      mainTitle: "Hablemos",
      introText: "¿Listo para transformar cómo su negocio maneja las llamadas? Envíe su información — nuestro equipo le contacta en minutos. Primer mes al 50%.",
      contactInfoTitle: "Información de Contacto",
      contactItems: {
        address: { label: "Dirección", value: "Montreal, Quebec, Canadá" },
        phone: { label: "Teléfono", value: "(438) 814-7578 · (514) 679-2107", subtext: "Línea directa Anvela 24/7" },
        email: { label: "Email", value: "pablo@anvela.ca · support@anvela.ca", subtext: "Respuesta en 24h" },
        hours: { label: "Horas", value: "Siempre Disponible", subtext: "Soporte 24/7/365" },
      },
      form: {
        nameLabel: "Nombre Completo",
        namePlaceholder: "Juan García",
        emailLabel: "Dirección de Email",
        emailPlaceholder: "juan@empresa.com",
        phoneLabel: "Número de Teléfono",
        phonePlaceholder: "+34 123 456 789",
        businessNameLabel: "Nombre de la Empresa",
        businessNamePlaceholder: "Ej. Taller Tremblay",
        businessTypeLabel: "Tipo de Negocio",
        businessTypeOptions: ["Garage / Auto", "Médico / Clínica", "Legal", "Inmobiliaria", "Restaurante", "Comercio / Tienda", "Otro"],
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntenos sobre sus necesidades de recepción o haga sus preguntas...",
        submitText: "Enviar mi solicitud",
        submittingText: "Enviando...",
        successMessage: "¡Gracias! Nos pondremos en contacto en 24 horas.",
        errorMessage: "Algo salió mal. Por favor intente de nuevo.",
      },
      privacyNotice: "Al enviar este formulario, acepta nuestra Política de Privacidad y Términos de Servicio.",
    },

    // Onboarding
    onboarding: {
      stepCounter: "Paso {{step}} de 3",
      saveExit: "Guardar y Salir",
      step1: {
        badge: "Identificar su empresa",
        title: "Conectemos su",
        titleHighlight: "Identidad Comercial.",
        description: "Encuentre su empresa. Obtendremos su ubicación y horarios para crear su perfil IA personalizado.",
        searchPlaceholder: "Buscar su empresa...",
        continueButton: "Continuar a los Planes",
        changeButton: "Cambiar",
      },
      step2: {
        title: "Elija su",
        titleHighlight: "Plan Anvela.",
        description: "Seleccione el nivel que mejor se adapte a su volumen de negocio. El precio incluye gestión automática de llamadas, citas y soporte bilingüe.",
        backButton: "Atrás",
        continueButton: "Continuar a la Confirmación",
        selectedLabel: "SELECCIONADO",
        selectLabel: "ELEGIR ESTE PLAN",
        cadMonth: "CAD / mes",
      },
      step3: {
        title: "Último paso:",
        titleHighlight: "Verificación por llamada.",
        description: "Hemos registrado el perfil de {{business}} y su interés en el plan {{plan}}.",
        inputDescription: "Para finalizar su suscripción y programar su llamada de configuración, ingrese su número de teléfono directo a continuación.",
        phonePlaceholder: "+1 (514) 000-0000",
        backButton: "Atrás",
        submittingButton: "Llamando...",
        submitButton: "Solicitar llamada de integración",
      },
      step4: {
        title: "Solicitud",
        titleHighlight: "Confirmada.",
        description: "Excelente elección. Hemos recibido su solicitud para el plan {{plan}}.",
        nextStepsTitle: "¿Qué sigue?",
        nextStepsText: "Un experto de Anvela le llamará en 24 horas para finalizar su configuración.",
        returnLink: "Volver al inicio",
      },
    },

    // Founder
    founder: {
      scriptText: "La persona detrás de Anvela",
      mainTitle: "Construido por alguien que entiende los desafíos de las pequeñas empresas.",
      quote: "Creé Anvela porque cada llamada perdida es un cliente perdido. Su negocio merece más.",
      title: "Fundador & CEO",
      bio: "Pablo Fuentes lanzó Anvela después de ver demasiadas empresas en Montreal perder clientes por llamadas sin respuesta — no por falta de servicio, sino por falta de tiempo. Emprendedor tecnológico con base en Montreal, combinó la IA de voz con un profundo conocimiento del mercado local para crear una recepcionista que nunca duerme, nunca descansa y se adapta al idioma de cada cliente, sea cual sea. Anvela es su respuesta a una pregunta sencilla: ¿y si cada empresa pudiera permitirse no perder nunca una llamada?",
      location: "Montreal, Quebec",
    },

    // Footer
    footer: {
      brandName: "Anvela",
      brandSubname: "Comunicación Inteligente",
      tagline: "Tu Recepción Digital 24/7",
      description: "Transforme su negocio con servicios de recepcionista impulsados por IA. Disponible 24/7, siempre profesional, increíblemente eficiente.",
      newsletterLabel: "Suscríbase a nuestro boletín",
      newsletterPlaceholder: "Ingrese su email",
      newsletterButtonText: "Suscribirse",
      newsletterSuccessText: "¡Gracias por suscribirse!",
      newsletterErrorText: "Por favor intente de nuevo.",
      copyrightText: "© Anvela AI. All rights reserved.",
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
      brandName: "Anvela",
      brandSubname: "Comunicazione Intelligente",
      tagline: "La Tua Reception Digitale 24/7",
      home: "Home",
      features: "Funzionalità",
      howItWorks: "Come Funziona",
      technology: "Tecnologia",
      testimonials: "Testimonianze",
      contact: "Contatto",
      ctaButton: "Inizia",
      freeTrial: "Parla con Anvela",
      endCall: "Termina",
      connecting: "Connessione...",
    },

    // Preloader
    preloader: {
      brandName: "Receptionist IA",
      brandSubname: "Comunicazione Intelligente",
      yearText: "Nuova Generazione",
      enterButton: "Inizia Esperienza",
    },

    // Hero
    hero: {
      scriptText: "Il Futuro della Comunicazione Aziendale",
      mainTitle: "Il Tuo Receptionist\nIA Intelligente",
      ctaButton: "Offerta di Lancio",
      videoDemo: "Video Demo",
      prices: "Prezzi",
      decorativeText: "INTELLIGENTE • EFFICIENTE • AFFIDABILE",
      ctaSubtitle: "1° mese al -50%",
      ctaMain: "Inizia con Anvela",
      noCreditCard: "Offerta limitata • Operativo in 48h",
      stats: {
        calls: { value: "100", suffix: "%", label: "Tasso di Risposta" },
        availability: { value: "24", suffix: "/7", label: "Sempre Disponibile" },
        savings: { value: "50", suffix: "%", label: "Riduzione Costi" },
      },
    },
    missedCalls: {
      subtitle: "IMPATTO FINANZIARIO",
      title: "Ogni chiamata persa è un'opportunità persa.",
      vision: "E se ogni azienda potesse permettersi di non perdere mai più una chiamata?",
      cta: "Smetti di perdere soldi",
    },

    // Gallery
    gallery: {
      scriptText: "Capacità dell'IA",
      mainTitle: "Progettato per Ogni Settore",
      selectClients: "Il Vantaggio Anvela",
      clientsList: "Ogni chiamata persa è un cliente perso e un mancato guadagno. La nostra IA intelligente gestisce le tue prenotazioni, risponde a domande complesse e qualifica i tuoi lead 24/7, con precisione umana ed efficienza robotica.",
      item1: { title: "PRENOTAZIONE SMART", subtitle: "GESTIONE AGENDAS" },
      item2: { title: "CATTURA LEAD", subtitle: "QUALIFICAZIONE IA" },
      item3: { title: "RICEVIMENTO 24/7", subtitle: "DISPONIBILITÀ TOTALE" },
      item4: { title: "SINCRONIZZAZIONE", subtitle: "FLUSSO DI LAVORO" },
      item5: { title: "MULTILINGUA", subtitle: "FR / EN / ES / IT" },
      item6: { title: "FOLLOW-UP SMS", subtitle: "CONFERMA AUTO" },
      item7: { title: "DATI CLIENTI", subtitle: "INTEGRAZIONE CRM" },
      item8: { title: "RELEVO DI SQUADRA", subtitle: "SUPPORTO OVERFLOW" },
      item9: { title: "ESPERIENZA CLIENTE", subtitle: "VOCE PROFESSIONALE" },
      item10: { title: "SICUREZZA", subtitle: "PROTEZIONE DATI" },
      item11: { title: "INTELLIGENZA", subtitle: "LOGICA AVANZADA" },
      special: {
        anvelaTitle: "Anvela AI",
        anvelaSubtitle: "- ecco anvela - la nostra ia -"
      }
    },

    // Feature Showcase
    featureShowcase: {
      processSubtitle: "IL NOSTRO PROCESSO",
      mainTitle: "Come Anvela spinge la tua crescita",
      step1: {
        subtitle: "DIMOSTRAZIONE",
        title: "Scopri l'IA in azione",
        description: "Guarda la nostra dimostrazione per capire come la nostra receptionist virtuale può trasformare la tua azienda.",
        cta: "Avvia Video",
      },
      step2: {
        subtitle: "Reception IA",
        title: "Non perdere mai più un singolo cliente",
        description: "Ogni chiamata persa è un cliente perso. Anvela risponde, comprende la richiesta e raccoglie le informazioni utili.",
        cta: "Scopri la Reception IA",
      },
      step3: {
        subtitle: "Appuntamenti & Agenda",
        title: "Pianificazione istantanea, senza attriti",
        description: "Verifica la disponibilità, propone fasce orarie, conferma via SMS/email e riduce drasticamente i no-show.",
        cta: "Vedi Come Funziona",
      },
      step4: {
        subtitle: "Automazione & Seguimento",
        title: "Dal contatto alla conversione",
        description: "Crea automaticamente una scheda cliente, invia follow-up e alimenta il tuo CRM/Google Sheets. Tutto è tracciabile.",
        cta: "Esplora l'Automazione",
      },
    },

    // Pain Points
    painPoints: {
      scriptText: "Il Costo dell'Inazione",
      subtitle: "PUNTI DI ATTRITO",
      mainTitle: "Quando la Reception Umana Non Può Gestire Tutto",
      description: "Tra chiamate perse, orari di chiusura e momenti di punta, anche i team migliori non possono rispondere a tutto, tutto il tempo. Anvela subentra in background affinché nulla vada perduto.",
      items: [
        {
          title: "Perdita di Ricavi",
          description: "L'85% delle persone non richiama se finisce in segreteria. Ogni chiamata persa è un cliente perso.",
          icon: "PhoneMissed"
        },
        {
          title: "Costi Fissi Elevati",
          description: "Assunzione, formazione e benefit per il personale 24/7 sono un drenaggio di capitale massiccio e imprevedibile.",
          icon: "TrendingUp"
        },
        {
          title: "Lacune di Copertura",
          description: "Gli esseri umani hanno bisogno di pause e sonno. Anvela offre disponibilità assoluta 24/7/365, senza eccezioni.",
          icon: "Clock"
        },
        {
          title: "Qualità Incoerente",
          description: "Le prestazioni del personale fluttuano. Anvela offre un'esperienza premium e perfettamente cortese ogni volta.",
          icon: "Zap"
        },
        {
          title: "Ciclo di Rotazione",
          description: "I ruoli di supporto hanno un turn-over annuo del 75%, portando a una costante perdita di know-how.",
          icon: "RefreshCw"
        },
        {
          title: "Attrito Operativo",
          description: "L'inserimento manuale dei dati porta a errori umani, doppie prenotazioni e perdita di informazioni sui lead.",
          icon: "ClipboardList"
        }
      ],
      gallery: {
        back: "Indietro",
        ctaTitle: "I tuoi clienti odiano aspettare al telefono. Non lasciare più chiamate senza risposta.",
        ctaButton: "Scopri i punti di attrito",
        photos: {
          photo1: {
            title: "Rete di Sicurezza 'Zero Opportunità'",
            logic: "L'IA agisce come un relè intelligente. Risponde solo se la linea principale è occupata o dopo tre squilli senza risposta.",
            benefit: "Ogni potenziale cliente viene catturato e prenotato senza che il tuo team si senta pressato dal telefono mentre ha un paziente davanti.",
            alt: "Reception IA - Scrivania nera con telefono"
          },
          photo2: {
            title: "Relè Lead Caldi Fuori Orario",
            logic: "Mentre il tuo team riposa, Anvela risponde alla chiamata, pianifica l'appuntamento nella tua agenda e salva un riepilogo completo.",
            benefit: "Alle 8:00, niente pile di messaggi vocali vaghi. Solo un elenco di clienti già prenotati pronti per essere confermati.",
            alt: "Pianificazione intelligente su tablet"
          },
          photo3: {
            title: "Eliminazione del 'Lavoro Amministrativo'",
            logic: "L'IA gestisce le chiamate FAQ ad alto volume e basso valore (orari, indirizzo, assicurazioni, tariffe base).",
            benefit: "Il tuo personale può concentrarsi su attività ad alto valore, come rassicurare un paziente ansioso.",
            alt: "Supporto clienti e interazione"
          },
          photo4: {
            title: "Sincronizzazione CRM Diretta",
            logic: "Ogni interazione è sincronizzata con il tuo CRM o Google Sheets, attivando follow-up automatici.",
            benefit: "Niente più errori di inserimento manuale. Tutte le info sono tracciabili, pulite e pronte per la conversione finale.",
            alt: "Automazione e flusso CRM"
          },
          photo5: {
            title: "Configurazione Lampo",
            logic: "Configura il tuo profilo IA in meno di 10 minuti con le tue preferenze aziendali.",
            benefit: "Risparmia tempo fin dalla prima ora.",
            alt: "Configurazione rapida Anvela"
          },
          photo6: {
            title: "Integrazione Senza Soluzioni di Continuità",
            logic: "Compatibile con il 99% degli attuali sistemi telefonici e calendari.",
            benefit: "Nessun cambiamento di infrastruttura richiesto.",
            alt: "Integrazione perfetta"
          },
          photo7: {
            title: "Voce Ultra-Realistica",
            logic: "Tecnologia di sintesi vocale che imita perfettamente il tono e l'empatia umani.",
            benefit: "I tuoi clienti non indovinano mai che stanno parlando con un'IA.",
            alt: "Tecnologia NLP avanzata"
          },
          photo8: {
            title: "Apprendimento Continuo",
            logic: "L'IA impara da ogni interazione per diventare più precisa ogni giorno.",
            benefit: "Un dipendente che non smette mai di migliorare.",
            alt: "Apprendimento automatico"
          },
          photo9: {
            title: "Visione Anvela",
            logic: "Ridefinire il futuro del servizio clienti attraverso l'intelligenza conversazionale.",
            benefit: "Posiziona la tua attività come leader tecnologico.",
            alt: "Visione Anvela"
          }
        },
        labels: {
          logic: "Logica",
          benefit: "Beneficio"
        }
      }
    },

    // Album Cube
    albumCube: {
      scrollHint: "Scorri per esplorare",
      backgroundTitle: "ANVELA",
      features: [
        { title: "VOCE IA", subtitle: "CHIAMATE INTELLIGENTI" },
        { title: "CHATBOT", subtitle: "MESSAGGISTICA SMART" },
        { title: "AGENDA", subtitle: "PIANIFICAZIONE AUTO" },
        { title: "GLOBALE", subtitle: "MULTILINGUA" },
      ]
    },

    // Video Promo
    videoPromo: {
      scriptText: "Vivi il Cambiamento",
      subtitle: "ANVELA IN AZIONE",
      titleMain: "Dal Caos della Reception",
      titleAccent: "all'Eccellenza",
      description: "Scopri come Anvela trasforma una reception sovraccarica in un centro di efficienza sereno. Non perdere più chiamate, non perdere più lead e lascia che il tuo team si concentri sull'essenziale.",
      feat1: { title: "Precisione IA", desc: "Gestisce istantaneamente le richieste" },
      feat2: { title: "Installazione Lampo", desc: "Integrazione senza attriti" }
    },

    // Pricing
    pricing: {
      scriptText: "Un Investimento Redditizio",
      subtitle: "I NOSTRI PREZZI",
      mainTitle: "Piani su misura per le tue esigenze",
      promoText: "Offerta di lancio: primo mese al 50% del prezzo normale. Operativo in meno di 48 ore.",
      promoTextYearly: "Piano annuale: 2 mesi gratuiti + 10% di sconto. Operativo in meno di 48 ore.",
      ctaButton: "Approfitta dell'offerta",
      monthly: "Mensile",
      yearly: "Annuale",
      yearlyBonus: "2 mesi gratuiti & -10%",
      essentiel: "ESSENZIALE",
      bestValue: "MIGLIOR VALORE",
      completeSolution: "SOLUZIONE COMPLETA",
      cadMonth: "CAD / mese",
      annualBillingNotice: "(fatturato ${{price}} annualmente)",
      setupFeeLabel: "Spese di attivazione",
      popularLabel: "Il più popolare",
      vsLabel: "IL VANTAGGIO ANVELA",
      vsEmployee: "Receptionist part-time",
      vsEmployeePrice: "~2 500$ / mese",
      vsAnvela: "Anvela — disponibile 24/7",
      vsAnvelaPrice: "da $199 / mese · ~$50 / sett.",
      vsTagline: "Non per sostituire il tuo team — per dargli supporto, senza i costi aggiuntivi.",
      tiers: [
        {
          name: "The Night Shift",
          price: "199",
          weeklyNote: "meno di 50$ / settimana",
          setupFee: "0",
          setupFeeNote: "Contratto minimo 3 mesi",
          description: "Il tuo team riposa. I tuoi lead no. Catturiamo ogni chiamata persa mentre sei chiuso — e il tuo calendario si riempie da solo.",
          features: [
            "Disponibilità: Lun–Ven (18:00 – 8:00) + Weekend 24h",
            "Chiamate: Illimitate (senza costi al minuto)",
            "IA: Risposte FAQ + cattura lead qualificati",
            "Prenotazione: Appuntamenti automatici (Google Calendar)",
            "Notifica: SMS istantaneo alla cattura di un lead",
            "Trascrizione completa + riepilogo IA chiamate",
            "Rapporto: 'Night Shift Report' quotidiano alle 8:00",
            "Lingua: Ottimizzato per i mercati locali",
            "Riduzione no-shows: fino al 30–50% con promemoria"
          ]
        },
        {
          name: "The Co-Pilot",
          price: "299",
          weeklyNote: "meno di 75$ / settimana",
          isPopular: true,
          setupFee: "197",
          setupFeeNote: "Contratto minimo 3 mesi",
          description: "Copertura completa 24/7. Il tuo telefono smette di squillare a vuoto — genera entrate, anche durante il lavoro.",
          features: [
            "Include TUTTO del pacchetto 'The Night Shift'",
            "Seguimento: Chiamate non risolte con trascrizione",
            "Disponibilità: 24/7 (Overflow giorno + Notte intera)",
            "Routing: Umano prima (3 squilli), l'IA prende il sopravvento",
            "Trasferimento: Reindirizzamento live alla tua reception (1 numero)",
            "Prenotazione: Appuntamenti + promemoria SMS (24h/2h)",
            "Gestione: Modifiche e cancellazioni gestite dall'IA",
            "Interazioni: Bilingue (Inglese / Italiano)",
            "Chiamate: Illimitate",
            "Auto-callbacks per no-shows (l'IA richiama)",
            "Routing intelligente: Analisi del contesto e priorità",
            "Offerta lancio: primo mese al 50% del prezzo normale"
          ]
        },
        {
          name: "The Elite",
          price: "597",
          weeklyNote: "meno di 150$ / settimana",
          setupFee: "497",
          setupFeeNote: "Contratto minimo 6 mesi",
          description: "Il tuo sistema di crescita completo. L'IA risponde, rilancia, prenota e segue ogni lead — mentre tu lavori.",
          features: [
            "Include TUTTO di 'The Night Shift' e 'The Co-Pilot'",
            "Trasferimento: Destinazioni illimitate (reception, manager, servizio...)",
            "Memoria clienti: Mila riconosce i clienti abituali per nome e veicolo",
            "Logica: Integrazione CRM nativa con dashboard",
            "Follow-up: SMS auto entro 15 min per ogni lead",
            "Triage: Logica intelligente a più fasi",
            "Supporto: Supporto VIP prioritario (risposta < 2h)",
            "BONUS: Sito web di una pagina gratuito incluso",
            "Chiamate: Illimitate",
            "Rapporti mensili personalizzati + ottimizzazione IA",
            "Aumento appuntamenti: +30–40%"
          ]
        }
      ]
    },

    videoDemo: {
      title: "Anvela in Azione",
      description: "Scopri come la nostra receptionist IA trasforma il tuo servizio clienti, gestisce i tuoi appuntamenti e qualifica i tuoi lead 24 ore su 24.",
      tabs: {
        overview: "Panoramica",
        realCall: "Chiamata Reale"
      },
      realCall: {
        step1: "Flusso di conversazione naturale",
        step2: "Prenotazione appuntamenti dal vivo",
        step3: "Cambio lingua istantaneo",
        step4: "Trascrizione in tempo reale",
        step5: "Interazione umana fluida"
      },
      step1: { text: "Demo Anvela", helper: "Guarda l'IA in situazioni reali." },
      step2: { text: "Efficienza Assoluta", helper: "Zero chiamate perse, 100% di soddisfazione." },
      step3: { text: "Integrazione Semplice", helper: "Pronto in meno di 10 minuti." },
      step4: { text: "Multilingue", helper: "Parle la lingua dei tuoi clienti." },
      step5: { text: "Sicurezza e Affidabilità", helper: "I tuoi dati sono protetti." },
    },

    faq: {
      subtitle: "ASSISTENZA",
      mainTitle: "Domande Frequenti",
      description: "Hai domande su Anvela? Abbiamo le risposte. Se non trovi quello che cerchi, non esitare a contattarci.",
      moreInfoTitle: "Vuoi saperne di più?",
      moreInfoText: "Il nostro team è disponibile per una dimostrazione personalizzata di 15 minuti.",
      moreInfoButton: "Parla con un esperto",
      items: [
        {
          question: "Come funziona l'integrazione con il mio sistema attuale?",
          answer: "È semplicissimo. Configuriamo un trasferimento di chiamata condizionale (se occupato o mancata risposta) verso il tuo numero Anvela dedicato. Mantieni il tuo numero attuale e i tuoi clienti non vedranno alcun cambiamento."
        },
        {
          question: "L'IA può davvero prendere appuntamenti?",
          answer: "Sì, assolutamente. Anvela si connette direttamente al tuo calendario (Google, Outlook, Calendly, etc.). Verifica la tua disponibilità in tempo reale, prenota lo slot e ti invia una conferma istantanea."
        },
        {
          question: "Cosa succede se l'IA non conosce la risposta?",
          answer: "Se una richiesta è troppo complessa, Anvela può trasferire la chiamata a un membro del tuo team in diretta (Instradamento Intelligente) o prendere un messaggio dettagliato con i recapiti del cliente per essere ricontattato."
        },
        {
          question: "Posso personalizzare la voce e lo script?",
          answer: "Sì. Lavoriamo con te per definire il tono, il vocabolario e gli scenari di risposta. Il tuo receptionist può essere formale, amichevole o specializzato in base al tuo settore di attività."
        },
        {
          question: "C'è un impegno a lungo termine?",
          answer: "I piani 'Night Shift' e 'Co-Pilot' hanno un impegno minimo di 3 mesi. Il piano 'Elite' richiede 6 mesi a causa della complessità dell'integrazione CRM personalizzata."
        },
        {
          question: "Per che tipo di aziende è pensata Anvela?",
          answer: "Anvela funziona per qualsiasi azienda che riceve chiamate: officine, cliniche, studi legali, agenzie immobiliari, ristoranti, negozi e altro ancora. Se i tuoi clienti ti chiamano, Anvela può rispondere al posto tuo."
        },
        {
          question: "Anvela è bilingue?",
          answer: "Sì. Anvela si adatta automaticamente alla lingua del cliente dalle prime parole della conversazione — francese, inglese, spagnolo e altro ancora. Indipendentemente da dove viene il tuo cliente, Anvela gli risponde nella sua lingua."
        },
        {
          question: "Quanto tempo ci vuole per essere operativi?",
          answer: "Generalmente meno di 48 ore. Una volta confermato il piano, il nostro team configura il tuo receptionist IA, lo integra con il tuo numero esistente ed esegue i test. Sei operativo rapidamente, senza alcuna interruzione."
        }
      ]
    },

    features: {
      scriptText: "Capacità Potenti",
      subtitle: "FUNZIONALITÀ IA",
      mainTitle: "Tutto ciò che la Tua Azienda Necessita",
      solutions: {
        callHandling: {
          name: "Gestione Chiamate",
          subtitle: "Instradamento Intelligente",
          description: "Anvela risponde alle chiamate con conversazione naturale, comprende l'intento e le indirizza al reparto corretto.",
          tastingNotes: "Elaborazione del linguaggio naturale con analisi del sentimento",
          accuracy: "99%",
          speed: "Istantaneo",
          uptime: "24/7",
        },
        scheduling: {
          name: "Pianificazione",
          subtitle: "Agenda Automatica",
          description: "Prenota appuntamenti, invia promemoria e gestisci il tuo calendario senza alcun intervento umano.",
          tastingNotes: "Disponibilità in tempo reale con rilevamento conflitti",
          accuracy: "100%",
          speed: "Automatizzato",
          uptime: "Illimitato",
        },
        support: {
          name: "Supporto Clienti",
          subtitle: "Risposte Istantanee",
          description: "Fornisci risposte immediate alle domande comuni e gestisci le richieste complesse con facilità.",
          tastingNotes: "Integrazione base di conoscenza con capacità di auto-apprendimento",
          accuracy: "95%",
          speed: "Immediato",
          uptime: "Continuo",
        },
      },
      metrics: {
        accuracy: "Precisione",
        speed: "Velocità",
        uptime: "Disponibilità"
      },
      featureCards: {
        aiPowered: { title: "Alimentato da IA", description: "NLP avanzato per conversazioni naturali" },
        alwaysOn: { title: "Sempre Attivo", description: "Disponibilità 24/7 senza interruzioni" },
        instant: { title: "Risposta Istantanea", description: "Tempi di risposta inferiori al secondo" },
        customizable: { title: "Personalizzabile", description: "Adattato all'identità del tuo brand" },
      },
      quote: {
        text: "Anvela risponde ad ogni chiamata, prenota appuntamenti e invia conferme — senza intervento umano. Esattamente ciò di cui un'officina indipendente ha bisogno.",
        attribution: "Pablo Fuentes, Cliente Fondatore",
        prefix: "Cliente Fondatore",
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
      testimonialsScriptText: "Cliente Fondatore",
      testimonialsSubtitle: "CLIENTE FONDATORE",
      testimonialsMainTitle: "Attivo Dal Primo Giorno",
      foundingClient: {
        name: "Garage Pablo",
        role: "Cliente fondatore — Montreal, QC",
        text: "Anvela risponde ad ogni chiamata, prenota appuntamenti e invia conferme — senza intervento umano. Esattamente ciò di cui un'officina indipendente ha bisogno.",
      },
      foundingSpots: {
        label: "Posti disponibili",
        title: "Diventa cliente fondatore",
        text: "Accettiamo un numero limitato di officine fondatrici. Prezzo fondatore garantito a vita — nessun aumento futuro.",
        cta: "Prenota il mio posto",
      },
      storyScriptText: "La Nostra Storia",
      storySubtitle: "CHI SIAMO",
      storyTitle: "Nato a Montreal, per le officine indipendenti",
      storyParagraphs: {
        1: "Anvela è nata da una realtà semplice: le officine indipendenti perdono clienti ogni sera perché nessuno risponde al telefono. Fondata a Montreal, Anvela implementa un receptionist IA in 48 ore — senza formazione, senza costi nascosti.",
        2: "Iniziamo con le officine, ma la visione è più ampia: dare a ogni attività locale un sistema telefonico IA professionale che funzioni come quello di una grande azienda.",
      },
      storyTimeline: {
        users: { value: "1°", label: "Cliente fondatore attivo" },
        calls: { value: "48h", label: "Tempo di avvio" },
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
      mainTitle: "Parliamo",
      introText: "Pronto a trasformare come la tua azienda gestisce le chiamate? Invia le tue informazioni — il nostro team ti contatta entro pochi minuti. Primo mese al 50%.",
      contactInfoTitle: "Informazioni di Contatto",
      contactItems: {
        address: { label: "Indirizzo", value: "Montreal, Quebec, Canada" },
        phone: { label: "Telefono", value: "(438) 814-7578 · (514) 679-2107", subtext: "Linea diretta Anvela 24/7" },
        email: { label: "Email", value: "pablo@anvela.ca · support@anvela.ca", subtext: "Risposta entro 24h" },
        hours: { label: "Orari", value: "Sempre Disponibile", subtext: "Supporto 24/7/365" },
      },
      form: {
        nameLabel: "Nome Completo",
        namePlaceholder: "Mario Rossi",
        emailLabel: "Indirizzo Email",
        emailPlaceholder: "mario@azienda.com",
        phoneLabel: "Numero di Telefono",
        phonePlaceholder: "+39 123 456 7890",
        businessNameLabel: "Nome dell'Azienda",
        businessNamePlaceholder: "Es. Garage Tremblay",
        businessTypeLabel: "Tipo di Attività",
        businessTypeOptions: ["Garage / Auto", "Medico / Clinica", "Legale", "Immobiliare", "Ristorante", "Commercio / Negozio", "Altro"],
        messageLabel: "Messaggio",
        messagePlaceholder: "Descrivici le tue esigenze di reception o fai le tue domande...",
        submitText: "Invia la mia richiesta",
        submittingText: "Invio...",
        successMessage: "Grazie! Ti contatteremo entro 24 ore.",
        errorMessage: "Qualcosa è andato storto. Per favore riprova.",
      },
      privacyNotice: "Inviando questo modulo, accetti la nostra Informativa sulla Privacy e i Termini di Servizio.",
    },

    // Onboarding
    onboarding: {
      stepCounter: "Passo {{step}} di 3",
      saveExit: "Salva ed Esci",
      step1: {
        badge: "Identifica la tua azienda",
        title: "Colleghiamo la tua",
        titleHighlight: "Identità Aziendale.",
        description: "Trova la tua azienda. Recupereremo la tua posizione e gli orari per creare il tuo profilo IA personalizzato.",
        searchPlaceholder: "Cerca la tua azienda...",
        continueButton: "Continua ai Piani",
        changeButton: "Cambia",
      },
      step2: {
        title: "Scegli il tuo",
        titleHighlight: "Piano Anvela.",
        description: "Seleziona il livello più adatto al tuo volume di attività. Il prezzo include la gestione automatica delle chiamate, appuntamenti e supporto bilingue.",
        backButton: "Indietro",
        continueButton: "Continua alla Conferma",
        selectedLabel: "SELEZIONATO",
        selectLabel: "SCEGLI QUESTO PIANO",
        cadMonth: "CAD / mese",
      },
      step3: {
        title: "Ultimo passo:",
        titleHighlight: "Verifica tramite chiamata.",
        description: "Abbiamo registrato il profilo di {{business}} e il tuo interesse per il piano {{plan}}.",
        inputDescription: "Per finalizzare il tuo abbonamento e programmare la chiamata di configurazione, inserisci il tuo numero di telefono diretto qui sotto.",
        phonePlaceholder: "+1 (514) 000-0000",
        backButton: "Indietro",
        submittingButton: "Chiamando...",
        submitButton: "Richiedi chiamata di integrazione",
      },
      step4: {
        title: "Richiesta",
        titleHighlight: "Confermata.",
        description: "Ottima scelta. Abbiamo ricevuto la tua richiesta per il piano {{plan}}.",
        nextStepsTitle: "Cosa succede dopo?",
        nextStepsText: "Un esperto Anvela ti chiamerà entro 24 ore per finalizzare la configurazione.",
        returnLink: "Torna alla home",
      },
    },

    // Founder
    founder: {
      scriptText: "La persona dietro Anvela",
      mainTitle: "Costruito da qualcuno che capisce le sfide delle piccole imprese.",
      quote: "Ho creato Anvela perché ogni chiamata persa è un cliente perso. La tua azienda merita di meglio.",
      title: "Fondatore & CEO",
      bio: "Pablo Fuentes ha lanciato Anvela dopo aver visto troppe aziende di Montreal perdere clienti per chiamate senza risposta — non per mancanza di servizio, ma per mancanza di tempo. Imprenditore tecnologico con sede a Montreal, ha combinato l'IA vocale con una profonda conoscenza del mercato locale per creare una receptionist che non dorme mai, non si prende mai pause e si adatta alla lingua di ogni cliente, qualunque essa sia. Anvela è la sua risposta a una semplice domanda: e se ogni azienda potesse permettersi di non perdere mai una chiamata?",
      location: "Montreal, Quebec",
    },

    // Footer
    footer: {
      brandName: "Anvela",
      brandSubname: "Comunicazione Intelligente",
      tagline: "La Tua Reception Digitale 24/7",
      description: "Trasforma la tua azienda con servizi di receptionist alimentati dall'IA. Disponibile 24/7, sempre professionale, incredibilmente efficiente.",
      newsletterLabel: "Iscriviti alla nostra newsletter",
      newsletterPlaceholder: "Inserisci la tua email",
      newsletterButtonText: "Iscriviti",
      newsletterSuccessText: "Grazie per l'iscrizione!",
      newsletterErrorText: "Per favore riprova.",
      copyrightText: "© Anvela AI. All rights reserved.",
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
