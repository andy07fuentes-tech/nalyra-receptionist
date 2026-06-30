export type Language = 'fr' | 'en' | 'es' | 'it';

export const translations = {
  fr: {
    // Site
    site: {
      title: "Anvela - La Réceptionniste IA pour l'Industrie Auto",
      description: "Transformez votre garage avec une réceptionniste IA disponible 24/7. Ne manquez plus jamais un appel, remplissez votre agenda automatiquement.",
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
      enterButton: "Découvrir Anvela",
      tagline: "Votre garage ne dort plus",
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
      scriptText: "Pendant que vous travaillez...",
      mainTitle: "Chaque appel manqué\nest un travail perdu.",
      subhead: "Votre réceptionniste IA répond à chaque appel, prend vos rendez-vous et capture chaque client. Disponible 24/7.",
      ctaButton: "Offre de Lancement",
      videoDemo: "Démo Vidéo",
      prices: "Tarifs",
      decorativeText: "FIABLE • DISPONIBLE • ABORDABLE",
      ctaSubtitle: "1er mois à -50%",
      ctaMain: "Obtenir Anvela pour votre garage",
      noCreditCard: "Offre limitée • Opérationnel en 48h",
      stats: {
        calls: { value: "100", suffix: "%", label: "Appels Répondus" },
        availability: { value: "24", suffix: "/7", label: "Toujours Disponible" },
        savings: { value: "50", suffix: "%", label: "vs. Embaucher un Employé" },
      },
    },
    missedCalls: {
      subtitle: "IMPACT FINANCIER",
      title: "85 % des appelants ne rappellent jamais.",
      vision: "Et si chaque garage pouvait se permettre de ne jamais manquer un appel ?",
      cta: "Ne perdez plus d'argent",
    },

    // Gallery
    gallery: {
      scriptText: "Capacités de l'IA",
      mainTitle: "La Réception IA pour l'Industrie Auto",
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
      mainTitle: "Comment Anvela remplit votre agenda",
      processSubtitle: "NOTRE PROCESSUS"
    },

    // Pain Points
    painPoints: {
      scriptText: "Le Coût du Statu Quo",
      subtitle: "POINTS DE FRICTION",
      mainTitle: "Ce que vous perdez en silence à chaque appel sans réponse",
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
            benefit: "Votre personnel peut se concentrer sur des tâches à haute valeur ajoutée, comme accueillir le client qui est devant eux.",
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
          photo7: {
            title: "Voix Ultra-Réaliste",
            logic: "Une technologie de synthèse vocale qui imite parfaitement le ton et l'empathie humaine.",
            benefit: "Vos clients ne devinent jamais qu'ils parlent à une IA.",
            alt: "Technologie NLP Avancée"
          },
          photo8: {
            title: "Apprentissage Continue",
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
        { title: "SMS AUTO", subtitle: "RAPPELS & SUIVIS" },
        { title: "AGENDA", subtitle: "PLANIFICATION AUTO" },
        { title: "BILINGUE", subtitle: "FR / EN" },
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
      continuationLabel: "Voir la suite — confirmation & calendrier →",
    },

    // Pricing
    pricing: {
      scriptText: "Un Investissement Rentable",
      subtitle: "NOS TARIFS",
      mainTitle: "Des forfaits adaptés à vos besoins",
      promoText: "Offre de lancement : premier mois à 50% du tarif normal. Opérationnel en moins de 48h.",
      promoTextYearly: "Forfait annuel : 2 mois offerts + 10% de réduction. Opérationnel en moins de 48h.",
      ctaButton: "Profiter de l'offre",
      ctaButtonElite: "ACTIVER MON SYSTÈME",
      monthly: "Mensuel",
      yearly: "Annuel",
      yearlyBonus: "2 mois offerts & -10%",
      essentiel: "ESSENTIEL",
      bestValue: "⭐ LE PLUS POPULAIRE",
      tierIncludes: "inclus",
      completeSolution: "SOLUTION COMPLÈTE",
      recommended: "⭐ RECOMMANDÉ",
      cadMonth: "CAD / mois",
      annualBillingNotice: "(facturé {{price}}$ annuellement)",
      setupFeeLabel: "Frais de mise en service",
      popularLabel: "Le plus populaire",
      vsLabel: "L'AVANTAGE ANVELA",
      vsEmployee: "Réceptionniste à temps partiel",
      vsEmployeePrice: "~2 500$ / mois",
      vsAnvela: "Anvela — disponible 24/7",
      vsAnvelaPrice: "à partir de 199$ / mois · soit environ 49$ / sem.",
      vsTagline: "Pas pour remplacer votre équipe — pour lui donner du renfort, sans le coût extra.",
      roiTagline: "Un seul rendez-vous pourrait suffire à couvrir votre abonnement. Le reste est du gain pur.",
      roiStat1Title: "Appels manqués par semaine",
      roiStat1Desc: "Chaque appel sans réponse est un client qui appelle votre compétiteur. C'est une perte directe de revenus.",
      roiStat2Title: "Valeur d'un seul client",
      roiStat2Desc: "Même pour vos services les plus abordables, il suffit de 1 à 2 rendez-vous récupérés pour rentabiliser votre mois. Tout le reste est du profit net.",
      roiStat3Title: "ROI immédiat",
      roiStat3Desc: "Récupérez un seul client par mois et votre abonnement est payé. Le reste, c'est du profit pur.",
      tiers: [
        {
          name: "Night Shift",
          price: "199",
          weeklyNote: "soit environ 7$ par jour",
          setupFee: "0",
          setupFeeNote: "Contrat minimum de 3 mois",
          description: "Une voix naturelle qui répond après vos heures et remplit votre agenda pendant que vous êtes fermé.",
          features: [
            { label: "🌙 Réponse automatique après les heures", detail: "Lun–Ven 18h–8h + week-end 24h" },
            { label: "📞 IA qui répond et qualifie les appels", detail: "Questions fréquentes + prise d'informations client" },
            { label: "📅 Prise de rendez-vous automatique", detail: "Directement dans votre calendrier (Google Calendar)" },
            { label: "📩 Notification SMS instantanée", detail: "Dès qu'un lead ou un rendez-vous est capturé" },
            { label: "🌍 Optimisé pour le marché local (FR)" },
            { label: "☎️ Appels illimités" },
            { label: "🎯 Résultat", detail: "Aucun appel perdu après les heures. Votre calendrier se remplit même quand vous êtes fermé." },
            { label: "🎁 Offre de lancement", detail: "Premier mois à 50%" }
          ]
        },
        {
          name: "Co-Pilot",
          price: "449",
          weeklyNote: "soit environ 15$ par jour",
          isPopular: true,
          setupFee: "197",
          setupFeeNote: "Contrat minimum de 3 mois",
          description: "Une réceptionniste qui sonne humaine, au téléphone pour vous 24/7 — même quand vous êtes débordé ou fermé.",
          features: [
            { label: "📞 Réponse intelligente 24/7", detail: "L'IA prend les appels lorsque vous êtes indisponible ou débordé" },
            { label: "📅 Prise de rendez-vous automatisée", detail: "L'IA réserve directement dans votre calendrier" },
            { label: "🔁 Capture intelligente des appels manqués", detail: "Chaque appel est capturé avec les informations du client, même s'il ne reste pas en ligne." },
            { label: "💬 Rappels SMS automatisés (24h / 2h)", detail: "Réduction des absences" },
            { label: "📲 Transfert vers humain (si nécessaire)", detail: "L'appel peut être redirigé vers vous en direct" },
            { label: "🌙 Couverture 24/7 des appels", detail: "Aucun appel laissé sans réponse" },
            { label: "🌍 Bilingue (FR / EN)" },
            { label: "☎️ Appels illimités" },
            { label: "🎯 Résultat", detail: "Moins d'appels manqués. Plus de rendez-vous. Sans changer votre façon de travailler." },
            { label: "🎁 Offre de lancement", detail: "Premier mois à 50%" }
          ]
        },
        {
          name: "Anvela Signature",
          tagline: "Votre marque, protégée 24/7",
          price: "697",
          weeklyNote: "soit environ 23$ par jour",
          setupFee: "497",
          setupFeeNote: "Contrat minimum de 6 mois",
          description: "Tout le système Anvela géré pour vous : réputation protégée, suivi VIP et adaptation à la réalité de votre garage.",
          features: [
            { label: "🎙️ Voix naturelle, qualité adaptée à votre garage", detail: "On adapte la qualité de l'IA selon le volume et la complexité de vos appels — pour la meilleure expérience sans surcoût inutile." },
            { label: "⭐ Protection de votre réputation en ligne", detail: "Les clients insatisfaits sont redirigés en privé AVANT de laisser un avis négatif sur Google. Votre note reste protégée." },
            { label: "📊 Optimisation continue + rapports mensuels", detail: "On ajuste votre système chaque mois pour maximiser vos rendez-vous et vos revenus." },
            { label: "🎯 Support prioritaire VIP — réponse < 2 h", detail: "Accès direct à l'équipe Anvela. Vous passez avant tout le monde." },
            { label: "💬 Suivi client par SMS en moins de 15 minutes", detail: "Confirmation et relance immédiates — pas après 24h comme ailleurs." },
            { label: "🧠 Reconnaissance des clients réguliers", detail: "Mila reconnaît vos clients fidèles et personnalise chaque appel." },
            { label: "🌍 Multilingue — au-delà du bilingue", detail: "Mila accueille vos clients en français, en anglais et dans plusieurs autres langues." },
            { label: "📅 Gestion COMPLÈTE des rendez-vous", detail: "Réservation, modification ET annulation directement par téléphone." },
            { label: "🔗 Intégration CRM", detail: "Compatible avec les principales plateformes (évaluation incluse)." },
            { label: "✓ Tout ce qui est inclus dans Night Shift + Co-Pilot", detail: "Réponse 24/7 · Capture des appels manqués · Transfert vers humain · Bilingue FR/EN · Appels illimités" },
            { label: "🏆 Résultat", detail: "Plus de rendez-vous. Moins de pertes. Une réputation blindée. Zéro gestion." },
            { label: "🎁 Offre de lancement", detail: "Premier mois à 50%" }
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
          answer: "Les forfaits 'Night Shift' et 'Co-Pilot' ont un engagement minimal de 3 mois. Le forfait 'Anvela Signature' requiert 6 mois en raison de la complexité de l'intégration CRM personnalisée."
        },
        {
          question: "Pour quels types d'entreprises Anvela est-elle faite ?",
          answer: "Anvela est conçue spécifiquement pour les garages automobiles, ateliers de carrosserie et centres de service auto. Si vous avez un atelier et un téléphone qui sonne, Anvela est faite pour vous."
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
      mainTitle: "Tout ce dont votre garage a besoin pour ne plus perdre un client",
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
          uptime: "Continue",
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
        attribution: "L'Équipe Anvela",
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
          excerpt: "Découvrez comment les réceptionnistes IA transforment la gestion des appels dans les garages et ateliers automobiles.",
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
        2: "Notre mission : donner à chaque garage indépendant les outils téléphoniques des grandes chaînes — sans les coûts, sans la complexité.",
      },
      storyTimeline: {
        users: { value: "1er", label: "Client fondateur actif" },
        calls: { value: "48h", label: "Mise en service" },
        satisfaction: { value: "100%", label: "Satisfaction" },
      },
      storyQuote: {
        prefix: "Mission",
        text: "Donner à chaque garage indépendant les outils des grandes chaînes — sans les coûts.",
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
        phone: { label: "Téléphone", value: "(438) 814-7578", subtext: "Ligne directe Anvela 24/7" },
        sms: { label: "SMS", value: "(514) 679-2107", subtext: "Texte uniquement, réponse rapide" },
        email: { label: "Email", value: "support@anvela.ca", subtext: "Réponse sous 24h" },
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
        businessTypeOptions: ["Garage / Mécanique", "Carrosserie / Peinture", "Centre de Service Auto", "Concessionnaire", "Autre"],
        messageLabel: "Message",
        messagePlaceholder: "Décrivez vos besoins en réception ou posez vos questions...",
        submitText: "Envoyer ma demande",
        submittingText: "Envoi...",
        successMessage: "Merci ! Anvela vous rappellera sous peu.",
        errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
        calendarTitle: "Réservez votre appel découverte",
        calendarSubtitle: "Vous préférez parler directement avec Pablo ? Choisissez un créneau et discutons de vos besoins.",
        calendarButton: "Prendre rendez-vous",
        calendarOr: "ou",
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
        inputDescription: "Pour planifier votre appel de configuration, veuillez entrer votre numéro de téléphone ci-dessous.",
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
        calendarTitle: "Réservez votre appel découverte",
        calendarSubtitle: "Vous préférez parler directement avec Pablo ? Discutons de vos besoins.",
        calendarButton: "Prendre rendez-vous",
        calendarOr: "ou",
      },
    },

    // Founder
    founder: {
      scriptText: "La personne derrière Anvela",
      mainTitle: "Construit par quelqu'un qui a vu des garages perdre des clients chaque soir après 17h.",
      quote: "J'ai créé Anvela parce que chaque appel manqué est un client perdu. Votre entreprise mérite mieux.",
      title: "Fondateur & PDG",
      bio: "Pablo Fuentes a lancé Anvela après avoir vu trop de garages indépendants à Montréal perdre des clients à cause d'appels sans réponse — non pas par manque de service, mais par manque de temps. Entrepreneur technologique basé à Montréal, il a combiné l'IA vocale avec une connaissance du marché local pour créer une réceptionniste qui ne dort jamais, ne prend jamais de pause, et s'adapte à la langue de chaque client, quelle qu'elle soit. Anvela est sa réponse à une question simple : et si chaque garage indépendant pouvait se permettre de ne jamais manquer un appel ?",
      location: "Montréal, Québec",
    },

    // Footer
    footer: {
      brandName: "Anvela",
      tagline: "Communication Intelligente",
      description: "Transformez votre garage avec une réceptionniste IA disponible 24/7. Toujours professionnelle, incroyablement efficace.",
      newsletterLabel: "Abonnez-vous à notre newsletter",
      newsletterPlaceholder: "Entrez votre email",
      newsletterButtonText: "S'abonner",
      newsletterHeading: "Inscrivez-vous pour les mises à jour",
      newsletterSuccessText: "Merci pour votre abonnement !",
      newsletterErrorText: "Veuillez réessayer.",
      socialFollow: "Suivez-nous",
      madeInQuebec: "Fait au Québec",
      copyrightText: "© Anvela AI. Tous droits réservés.",
      backToTopText: "Retour en haut",
      linkGroups: {
        product: {
          title: "Produit",
          links: ["Fonctionnalités", "Tarifs", "FAQ"],
        },
        company: {
          title: "Anvela",
          links: ["À Propos", "Contact"],
        },
      },
      legalLinks: ["Politique de Confidentialité", "Conditions de Service", "Politique de Cookies"],
    },

    // Demo Showcase
    demoShowcase: {
      liveBadge: "DÉMO EN DIRECT · GARAGE PABLO",
      title: "Découvrez",
      titleSuffix: ", votre réceptionniste IA",
      subtitle: "Mila répond à chaque appel en français, en anglais et bien d'autres langues — prend des rendez-vous, vérifie les disponibilités, et envoie une confirmation par SMS. Automatiquement.",
      frame1: {
        label: "Présentation",
        pill: "Mila",
        footerTitle: "Mila se présente",
        footerSub: "Avatar IA · Présentation personnalisée",
        tag: "Simplement intelligent",
      },
      frame2: {
        label: "Appel en direct",
        pill: "EN DIRECT",
        footerTitle: "Vrai appel · Vraie réservation",
        footerSub: "Calendrier mis à jour · SMS envoyé automatiquement",
        tag: "En direct",
      },
      pills: {
        availability: { label: "24/7 Disponible", desc: "Ne manque aucun appel, jour et nuit" },
        bilingual: { label: "FR/EN et plus", desc: "Support multilingue naturel" },
        speed: { label: "<2s Réponse", desc: "Voix IA en temps réel" },
        booking: { label: "Réservation live", desc: "Vérifie le calendrier instantanément" },
        analytics: { label: "Analytiques", desc: "Résumés post-appel" },
        secure: { label: "Sécurisé", desc: "Données chiffrées" },
      },
      stats: {
        availability: "Disponible",
        responseTime: "Temps de réponse",
        languages: "Langues",
        calls: "Appels simultanés",
      },
      cta: {
        primary: "Essayer un appel démo",
        secondary: "En savoir plus →",
        connecting: "Connexion...",
        endCall: "Raccrocher",
      },
      continuationLabel: "Voir la suite →",
      multilingualLabel: "Multilingue naturel →",
      tutorialLabel: "Personnalisée pour vous →",
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
      title: "Anvela - The AI Receptionist for Auto Shops",
      description: "Transform your auto shop with an AI receptionist available 24/7. Never miss a call, fill your calendar automatically.",
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
      enterButton: "Discover Anvela",
      tagline: "Your shop never sleeps again",
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
      scriptText: "While you're under the hood...",
      mainTitle: "Every missed call\nis a job lost.",
      subhead: "Your AI receptionist answers every call, books your appointments and captures every client. Available 24/7.",
      ctaButton: "Launch Offer",
      videoDemo: "Video Demo",
      prices: "Prices",
      decorativeText: "RELIABLE • AVAILABLE • AFFORDABLE",
      ctaSubtitle: "1st month -50%",
      ctaMain: "Get Anvela for your shop",
      noCreditCard: "Limited offer • Live in 48h",
      stats: {
        calls: { value: "100", suffix: "%", label: "Calls Answered" },
        availability: { value: "24", suffix: "/7", label: "Always Available" },
        savings: { value: "50", suffix: "%", label: "vs. Hiring Staff" },
      },
    },
    missedCalls: {
      subtitle: "FINANCIAL IMPACT",
      title: "85% of callers never call back.",
      vision: "What if every auto shop could afford to never miss a call again?",
      cta: "Stop losing money",
    },

    // Gallery
    gallery: {
      scriptText: "AI Capabilities",
      mainTitle: "The AI Receptionist for the Auto Industry",
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
      mainTitle: "How Anvela Fills Your Calendar",
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
      mainTitle: "What You're Silently Losing Every Time a Call Goes Unanswered",
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
        { title: "AUTO SMS", subtitle: "REMINDERS & FOLLOW-UPS" },
        { title: "SCHEDULING", subtitle: "AUTO CALENDAR" },
        { title: "BILINGUAL", subtitle: "FR / EN" },
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
      ctaButtonElite: "ACTIVATE MY SYSTEM",
      monthly: "Monthly",
      yearly: "Yearly",
      yearlyBonus: "2 months free & -10%",
      essentiel: "ESSENTIAL",
      bestValue: "⭐ MOST POPULAR",
      tierIncludes: "included",
      completeSolution: "COMPLETE SOLUTION",
      recommended: "⭐ RECOMMENDED",
      cadMonth: "CAD / month",
      annualBillingNotice: "(billed ${{price}} annually)",
      setupFeeLabel: "Setup Fee",
      popularLabel: "Most Popular",
      vsLabel: "THE ANVELA ADVANTAGE",
      vsEmployee: "Part-time receptionist",
      vsEmployeePrice: "~$2,500 / month",
      vsAnvela: "Anvela — available 24/7",
      vsAnvelaPrice: "from $199 / month · approx. $49 / week",
      vsTagline: "Not to replace your team — to give it reinforcement, without the extra cost.",
      roiTagline: "A single appointment could be enough to cover your subscription. The rest is pure gain.",
      roiStat1Title: "Missed calls per week",
      roiStat1Desc: "Every unanswered call is a client calling your competitor. That's direct lost revenue.",
      roiStat2Title: "Value of a single client",
      roiStat2Desc: "Even for your most affordable services, 1 to 2 recovered bookings is enough to make your month profitable. Everything else is pure profit.",
      roiStat3Title: "Immediate ROI",
      roiStat3Desc: "Recover one client per month and your subscription is paid. Everything else is pure profit.",
      tiers: [
        {
          name: "Night Shift",
          price: "199",
          weeklyNote: "approx. $7 / day",
          setupFee: "0",
          setupFeeNote: "Minimum 3-month commitment",
          description: "A natural-sounding voice that answers after hours and keeps your calendar filling while you're closed.",
          features: [
            { label: "🌙 Automatic after-hours response", detail: "Mon–Fri 6pm–8am + Weekends 24/7" },
            { label: "📞 AI answers and qualifies calls", detail: "FAQ responses + client info capture" },
            { label: "📅 Automatic appointment booking", detail: "Directly in your calendar (Google Calendar)" },
            { label: "📩 Instant SMS notification", detail: "When a lead or appointment is captured" },
            { label: "🌍 Optimized for local market (EN)" },
            { label: "☎️ Unlimited calls" },
            { label: "🎯 Result", detail: "No calls missed after hours. Your calendar fills up even when you're closed." },
            { label: "🎁 Launch offer", detail: "First month 50% off" }
          ]
        },
        {
          name: "Co-Pilot",
          price: "449",
          weeklyNote: "approx. $15 / day",
          isPopular: true,
          setupFee: "197",
          setupFeeNote: "Minimum 3-month commitment",
          description: "A receptionist that sounds human, on the phone for you 24/7 — even when you're slammed or closed.",
          features: [
            { label: "📞 Intelligent 24/7 response", detail: "AI picks up when you're unavailable or overwhelmed" },
            { label: "📅 Automated appointment booking", detail: "AI books directly in your calendar" },
            { label: "🔁 Smart missed call capture", detail: "Every call captured with client info, even if they don't stay on the line." },
            { label: "💬 Automated SMS reminders (24h / 2h)", detail: "Reduces no-shows" },
            { label: "📲 Transfer to human (if needed)", detail: "Call can be redirected to you live" },
            { label: "🌙 24/7 call coverage", detail: "No call left unanswered" },
            { label: "🌍 Bilingual (FR / EN)" },
            { label: "☎️ Unlimited calls" },
            { label: "🎯 Result", detail: "Fewer missed calls. More appointments. Without changing how you work." },
            { label: "🎁 Launch offer", detail: "First month 50% off" }
          ]
        },
        {
          name: "Anvela Signature",
          tagline: "Your brand, protected 24/7",
          price: "697",
          weeklyNote: "approx. $23 / day",
          setupFee: "497",
          setupFeeNote: "Minimum 6-month commitment",
          description: "The full Anvela system, managed for you: protected reputation, VIP follow-up, and tuned to your shop's reality.",
          features: [
            { label: "🎙️ Natural voice, quality adapted to your shop", detail: "We adapt the AI quality based on your call volume and complexity to give you the best experience without overpaying." },
            { label: "⭐ Online reputation protection", detail: "Unhappy clients are redirected privately BEFORE leaving a negative Google review. Your rating stays protected." },
            { label: "📊 Continuous optimization + monthly reports", detail: "We adjust your system every month to maximize your appointments and revenue." },
            { label: "🎯 Priority VIP support — response < 2h", detail: "Direct access to the Anvela team. You come first." },
            { label: "💬 SMS follow-up in under 15 minutes", detail: "Immediate confirmation and follow-up — not 24h later like elsewhere." },
            { label: "🧠 Returning client recognition", detail: "Mila recognizes your loyal clients and personalizes every call." },
            { label: "🌍 Multilingual — beyond bilingual", detail: "Mila greets your clients in French, English and several other languages." },
            { label: "📅 COMPLETE appointment management", detail: "Booking, modification AND cancellation directly over the phone." },
            { label: "🔗 CRM integration", detail: "Compatible with major platforms (assessment included)." },
            { label: "✓ Everything included in Night Shift + Co-Pilot", detail: "24/7 response · Missed call capture · Human transfer · Bilingual FR/EN · Unlimited calls" },
            { label: "🏆 Result", detail: "More appointments. Fewer losses. A bulletproof reputation. Zero management." },
            { label: "🎁 Launch offer", detail: "First month 50% off" }
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
      continuationLabel: "Watch part 2 — confirmation & calendar →",
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
          answer: "The 'Night Shift' and 'Co-Pilot' plans have a 3-month minimum commitment. The 'Anvela Signature' plan requires 6 months due to the complexity of the custom CRM integration."
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
      mainTitle: "Everything Your Shop Needs to Never Lose Another Customer",
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
        attribution: "The Anvela Team",
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
          excerpt: "Discover how AI receptionists are transforming call management for auto shops and garages.",
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
        2: "Our mission: give every independent garage the phone technology of large chains — without the cost or complexity.",
      },
      storyTimeline: {
        users: { value: "1st", label: "Founding client active" },
        calls: { value: "48h", label: "Setup time" },
        satisfaction: { value: "100%", label: "Satisfaction" },
      },
      storyQuote: {
        prefix: "Mission",
        text: "Give every independent garage the tools of large chains — without the cost.",
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
        phone: { label: "Phone", value: "(438) 814-7578", subtext: "Anvela direct line 24/7" },
        sms: { label: "SMS", value: "(514) 679-2107", subtext: "Text only, fast response" },
        email: { label: "Email", value: "support@anvela.ca", subtext: "Reply within 24h" },
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
        businessTypeOptions: ["Garage / Mechanic", "Body Shop / Paint", "Auto Service Center", "Dealership", "Other"],
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your reception needs or ask any questions...",
        submitText: "Send My Request",
        submittingText: "Sending...",
        successMessage: "Thank you! Anvela will call you shortly.",
        errorMessage: "Something went wrong. Please try again.",
        calendarTitle: "Book your discovery call",
        calendarSubtitle: "Prefer to speak directly with Pablo? Pick a time and let's talk about your needs.",
        calendarButton: "Book a call",
        calendarOr: "or",
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
        inputDescription: "To schedule your configuration call, please enter your phone number below.",
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
        calendarTitle: "Book your discovery call",
        calendarSubtitle: "Prefer to speak directly with Pablo? Let's talk about your needs.",
        calendarButton: "Book a call",
        calendarOr: "or",
      },
    },

    // Founder
    founder: {
      scriptText: "The person behind Anvela",
      mainTitle: "Built by someone who watched garages lose customers every night after 5pm.",
      quote: "I built Anvela because every missed call is a lost client. Your business deserves better.",
      title: "Founder & CEO",
      bio: "Pablo Fuentes launched Anvela after watching too many independent garages in Montreal lose clients to missed calls — not from bad service, but from being stretched too thin. A tech entrepreneur based in Montreal, he combined AI voice technology with deep local market knowledge to build a receptionist that never sleeps, never takes breaks, and adapts to any language a client speaks. Anvela is his answer to one simple question: what if every independent garage could afford to never miss a call again?",
      location: "Montreal, Quebec",
    },

    // Footer
    footer: {
      brandName: "Anvela",
      tagline: "Intelligent Communication",
      description: "Transform your auto shop with an AI receptionist available 24/7. Always professional, incredibly efficient.",
      newsletterLabel: "Subscribe to our newsletter",
      newsletterPlaceholder: "Enter your email",
      newsletterButtonText: "Subscribe",
      newsletterHeading: "Sign up for updates",
      newsletterSuccessText: "Thanks for subscribing!",
      newsletterErrorText: "Please try again.",
      socialFollow: "Follow Us",
      madeInQuebec: "Made in Quebec",
      copyrightText: "© Anvela AI. All rights reserved.",
      backToTopText: "Back to top",
      linkGroups: {
        product: {
          title: "Product",
          links: ["Features", "Pricing", "FAQ"],
        },
        company: {
          title: "Anvela",
          links: ["About", "Contact"],
        },
      },
      legalLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },

    // Demo Showcase
    demoShowcase: {
      liveBadge: "LIVE DEMO · GARAGE PABLO",
      title: "Meet",
      titleSuffix: ", your AI receptionist",
      subtitle: "Mila answers every call in French, English and more languages — books appointments, checks availability, and sends SMS confirmations. Automatically.",
      frame1: {
        label: "Introduction",
        pill: "Mila",
        footerTitle: "Mila introduces herself",
        footerSub: "AI Avatar · Personalized presentation",
        tag: "Simply Intelligent",
      },
      frame2: {
        label: "Live call",
        pill: "LIVE",
        footerTitle: "Real call · Real booking",
        footerSub: "Calendar updated · SMS sent automatically",
        tag: "Live",
      },
      pills: {
        availability: { label: "24/7 Available", desc: "Never misses a call, day or night" },
        bilingual: { label: "FR/EN and more", desc: "Natural multilingual support" },
        speed: { label: "<2s Response", desc: "Real-time AI voice" },
        booking: { label: "Live booking", desc: "Checks calendar instantly" },
        analytics: { label: "Analytics", desc: "Post-call summaries" },
        secure: { label: "Secure", desc: "Encrypted data" },
      },
      stats: {
        availability: "Available",
        responseTime: "Response time",
        languages: "Languages",
        calls: "Simultaneous calls",
      },
      cta: {
        primary: "Try a demo call",
        secondary: "Learn more →",
        connecting: "Connecting...",
        endCall: "Hang up",
      },
      continuationLabel: "Watch part 2 →",
      multilingualLabel: "Multilingual in action →",
      tutorialLabel: "Personalized for you →",
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
      enterButton: "Descubrir Anvela",
      tagline: "Su taller nunca duerme más",
    },

    // Hero
    hero: {
      scriptText: "Mientras estás trabajando...",
      mainTitle: "Cada llamada perdida\nes un trabajo perdido.",
      subhead: "Tu recepcionista IA contesta cada llamada, agenda tus citas y capta a cada cliente. Disponible 24/7.",
      ctaButton: "Oferta de Lanzamiento",
      videoDemo: "Demo en Video",
      prices: "Precios",
      decorativeText: "CONFIABLE • DISPONIBLE • ACCESIBLE",
      ctaSubtitle: "1er mes al -50%",
      ctaMain: "Obtén Anvela para tu taller",
      noCreditCard: "Oferta limitada • Operativo en 48h",
      stats: {
        calls: { value: "100", suffix: "%", label: "Llamadas Respondidas" },
        availability: { value: "24", suffix: "/7", label: "Siempre Disponible" },
        savings: { value: "50", suffix: "%", label: "vs. Contratar Personal" },
      },
    },
    missedCalls: {
      subtitle: "IMPACTO FINANCIERO",
      title: "El 85% de quienes llaman nunca vuelve a llamar.",
      vision: "¿Y si cada taller automotriz pudiera permitirse no volver a perder una llamada?",
      cta: "Deja de perder dinero",
    },

    // Gallery
    gallery: {
      scriptText: "Capacidades de IA",
      mainTitle: "La Recepción IA para la Industria Automotriz",
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
      mainTitle: "Lo que pierde en silencio cada vez que una llamada no es contestada",
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
        { title: "SMS AUTO", subtitle: "RECORDATORIOS & SEGUIMIENTO" },
        { title: "AGENDA", subtitle: "PLANIFICACIÓN AUTO" },
        { title: "BILINGÜE", subtitle: "FR / EN" },
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
      ctaButtonElite: "ACTIVAR MI SISTEMA",
      monthly: "Mensual",
      yearly: "Anual",
      yearlyBonus: "2 meses gratis & -10%",
      essentiel: "ESENCIAL",
      bestValue: "⭐ MÁS POPULAR",
      tierIncludes: "incluido",
      completeSolution: "SOLUCIÓN COMPLETA",
      recommended: "⭐ RECOMENDADO",
      cadMonth: "CAD / mes",
      annualBillingNotice: "(facturado ${{price}} anualmente)",
      setupFeeLabel: "Gasto de puesta en servicio",
      popularLabel: "El más popular",
      vsLabel: "LA VENTAJA ANVELA",
      vsEmployee: "Recepcionista a tiempo parcial",
      vsEmployeePrice: "~$2 500 / mes",
      vsAnvela: "Anvela — disponible 24/7",
      vsAnvelaPrice: "desde $199 / mes · aprox. $49 / sem.",
      vsTagline: "No para reemplazar a tu equipo — para darle refuerzo, sin el costo extra.",
      roiTagline: "Una sola cita podría ser suficiente para cubrir tu suscripción. El resto es ganancia pura.",
      roiStat1Title: "Llamadas perdidas por semana",
      roiStat1Desc: "Cada llamada sin respuesta es un cliente que llama a tu competidor. Es una pérdida directa de ingresos.",
      roiStat2Title: "Valor de un solo cliente",
      roiStat2Desc: "Incluso para tus servicios más económicos, con 1 o 2 reservas recuperadas ya rentabilizas el mes. Todo lo demás es ganancia neta.",
      roiStat3Title: "ROI inmediato",
      roiStat3Desc: "Recupera un solo cliente al mes y tu suscripción está pagada. El resto es ganancia pura.",
      tiers: [
        {
          name: "Night Shift",
          price: "199",
          weeklyNote: "aprox. $7 / día",
          setupFee: "0",
          setupFeeNote: "Contrato mínimo de 3 meses",
          description: "Una voz natural que responde fuera de horario y mantiene tu agenda llenándose mientras estás cerrado.",
          features: [
            { label: "🌙 Respuesta automática fuera de horario", detail: "Lun–Vie 18h–8h + fin de semana 24h" },
            { label: "📞 IA responde y califica llamadas", detail: "Preguntas frecuentes + captura de información del cliente" },
            { label: "📅 Reserva automática de citas", detail: "Directamente en su calendario (Google Calendar)" },
            { label: "📩 Notificación SMS instantánea", detail: "Cuando se captura un lead o una cita" },
            { label: "🌍 Optimizado para el mercado local (ES)" },
            { label: "☎️ Llamadas ilimitadas" },
            { label: "🎯 Resultado", detail: "Ninguna llamada perdida fuera de horario. Su calendario se llena incluso cuando está cerrado." },
            { label: "🎁 Oferta de lanzamiento", detail: "Primer mes al 50%" }
          ]
        },
        {
          name: "Co-Pilot",
          price: "449",
          weeklyNote: "aprox. $15 / día",
          isPopular: true,
          setupFee: "197",
          setupFeeNote: "Contrato mínimo de 3 meses",
          description: "Una recepcionista que suena humana, al teléfono por ti 24/7 — incluso cuando estás saturado o cerrado.",
          features: [
            { label: "📞 Respuesta inteligente 24/7", detail: "La IA atiende cuando no está disponible o está ocupado" },
            { label: "📅 Reserva automatizada de citas", detail: "La IA reserva directamente en su calendario" },
            { label: "🔁 Captura inteligente de llamadas perdidas", detail: "Cada llamada se captura con la información del cliente, aunque no permanezca en línea." },
            { label: "💬 Recordatorios SMS automáticos (24h / 2h)", detail: "Reduce las ausencias" },
            { label: "📲 Transferencia a humano (si es necesario)", detail: "La llamada puede redirigirse a usted en vivo" },
            { label: "🌙 Cobertura de llamadas 24/7", detail: "Ninguna llamada sin respuesta" },
            { label: "🌍 Bilingüe (FR / EN)" },
            { label: "☎️ Llamadas ilimitadas" },
            { label: "🎯 Resultado", detail: "Menos llamadas perdidas. Más citas. Sin cambiar su forma de trabajar." },
            { label: "🎁 Oferta de lanzamiento", detail: "Primer mes al 50%" }
          ]
        },
        {
          name: "Anvela Signature",
          tagline: "Su marca, protegida 24/7",
          price: "697",
          weeklyNote: "aprox. $23 / día",
          setupFee: "497",
          setupFeeNote: "Contrato mínimo de 6 meses",
          description: "Todo el sistema Anvela gestionado para ti: reputación protegida, seguimiento VIP y adaptado a la realidad de tu taller.",
          features: [
            { label: "🎙️ Voz natural, calidad adaptada a su taller", detail: "Adaptamos la calidad de la IA según el volumen y la complejidad de sus llamadas — para la mejor experiencia sin pagar de más." },
            { label: "⭐ Protección de su reputación en línea", detail: "Los clientes insatisfechos son redirigidos en privado ANTES de dejar una reseña negativa en Google. Su nota queda protegida." },
            { label: "📊 Optimización continua + informes mensuales", detail: "Ajustamos su sistema cada mes para maximizar sus citas e ingresos." },
            { label: "🎯 Soporte VIP prioritario — respuesta < 2h", detail: "Acceso directo al equipo Anvela. Usted va primero." },
            { label: "💬 Seguimiento por SMS en menos de 15 minutos", detail: "Confirmación y seguimiento inmediatos — no 24h después como en otros." },
            { label: "🧠 Reconocimiento de clientes habituales", detail: "Mila reconoce a sus clientes fieles y personaliza cada llamada." },
            { label: "🌍 Multilingüe — más allá del bilingüe", detail: "Mila atiende a sus clientes en francés, inglés y varios otros idiomas." },
            { label: "📅 Gestión COMPLETA de citas", detail: "Reserva, modificación Y cancelación directamente por teléfono." },
            { label: "🔗 Integración CRM", detail: "Compatible con las principales plataformas (evaluación incluida)." },
            { label: "✓ Todo lo incluido en Night Shift + Co-Pilot", detail: "Respuesta 24/7 · Captura de llamadas perdidas · Transferencia a humano · Bilingüe FR/EN · Llamadas ilimitadas" },
            { label: "🏆 Resultado", detail: "Más citas. Menos pérdidas. Una reputación blindada. Cero gestión." },
            { label: "🎁 Oferta de lanzamiento", detail: "Primer mes al 50%" }
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
      continuationLabel: "Ver parte 2 — confirmación y calendario →",
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
          answer: "Los planes 'Night Shift' y 'Co-Pilot' tienen un compromiso mínimo de 3 meses. El plan 'Anvela Signature' requiere 6 meses debido a la complejidad de la integración personalizada con CRM."
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
      mainTitle: "Todo lo que su taller necesita para no perder otro cliente",
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
          uptime: "Continua",
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
          excerpt: "Descubra cómo los recepcionistas IA están transformando la gestión de llamadas en talleres y centros automotrices.",
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
        2: "Nuestra misión: dar a cada taller independiente la tecnología telefónica de las grandes cadenas — sin los costos ni la complejidad.",
      },
      storyTimeline: {
        users: { value: "1er", label: "Cliente fundador activo" },
        calls: { value: "48h", label: "Tiempo de configuración" },
        satisfaction: { value: "100%", label: "Satisfacción" },
      },
      storyQuote: {
        prefix: "Misión",
        text: "Dar a cada taller independiente las herramientas de las grandes cadenas — sin los costos.",
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
        phone: { label: "Teléfono", value: "(438) 814-7578", subtext: "Línea directa Anvela 24/7" },
        sms: { label: "SMS", value: "(514) 679-2107", subtext: "Solo texto, respuesta rápida" },
        email: { label: "Email", value: "support@anvela.ca", subtext: "Respuesta en 24h" },
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
        businessTypeOptions: ["Garage / Mecánico", "Carrocería / Pintura", "Centro de Servicio Auto", "Concesionario", "Otro"],
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntenos sobre sus necesidades de recepción o haga sus preguntas...",
        submitText: "Enviar mi solicitud",
        submittingText: "Enviando...",
        successMessage: "¡Gracias! Anvela le llamará en breve.",
        errorMessage: "Algo salió mal. Por favor intente de nuevo.",
        calendarTitle: "Reserve su llamada de descubrimiento",
        calendarSubtitle: "¿Prefiere hablar directamente con Pablo? Elija un horario y hablemos de sus necesidades.",
        calendarButton: "Reservar una llamada",
        calendarOr: "o",
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
        inputDescription: "Para programar su llamada de configuración, ingrese su número de teléfono a continuación.",
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
        calendarTitle: "Reserve su llamada de descubrimiento",
        calendarSubtitle: "¿Prefiere hablar directamente con Pablo? Hablemos de sus necesidades.",
        calendarButton: "Reservar una llamada",
        calendarOr: "o",
      },
    },

    // Founder
    founder: {
      scriptText: "La persona detrás de Anvela",
      mainTitle: "Construido por alguien que vio talleres perder clientes cada noche después de las 17h.",
      quote: "Creé Anvela porque cada llamada perdida es un cliente perdido. Su negocio merece más.",
      title: "Fundador & CEO",
      bio: "Pablo Fuentes lanzó Anvela después de ver demasiados talleres independientes en Montreal perder clientes por llamadas sin respuesta — no por falta de servicio, sino por falta de tiempo. Emprendedor tecnológico con base en Montreal, combinó la IA de voz con un profundo conocimiento del mercado local para crear una recepcionista que nunca duerme, nunca descansa y se adapta al idioma de cada cliente, sea cual sea. Anvela es su respuesta a una pregunta sencilla: ¿y si cada taller independiente pudiera permitirse no perder nunca una llamada?",
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
      newsletterHeading: "Regístrese para recibir actualizaciones",
      newsletterSuccessText: "¡Gracias por suscribirse!",
      newsletterErrorText: "Por favor intente de nuevo.",
      socialFollow: "Síguenos",
      madeInQuebec: "Hecho en Quebec",
      copyrightText: "© Anvela AI. Todos los derechos reservados.",
      backToTopText: "Volver arriba",
      linkGroups: {
        product: {
          title: "Producto",
          links: ["Funciones", "Precios", "FAQ"],
        },
        company: {
          title: "Anvela",
          links: ["Sobre Nosotros", "Contacto"],
        },
      },
      legalLinks: ["Política de Privacidad", "Términos de Servicio", "Política de Cookies"],
    },

    // Demo Showcase
    demoShowcase: {
      liveBadge: "DEMO EN VIVO · GARAGE PABLO",
      title: "Conoce a",
      titleSuffix: ", tu recepcionista IA",
      subtitle: "Mila responde cada llamada en francés, inglés y más idiomas — programa citas, verifica disponibilidad y envía confirmaciones por SMS. Automáticamente.",
      frame1: {
        label: "Presentación",
        pill: "Mila",
        footerTitle: "Mila se presenta",
        footerSub: "Avatar IA · Presentación personalizada",
        tag: "Simplemente inteligente",
      },
      frame2: {
        label: "Llamada en vivo",
        pill: "EN VIVO",
        footerTitle: "Llamada real · Reserva real",
        footerSub: "Calendario actualizado · SMS enviado automáticamente",
        tag: "En vivo",
      },
      pills: {
        availability: { label: "24/7 Disponible", desc: "No pierde ninguna llamada, día y noche" },
        bilingual: { label: "FR/EN y más", desc: "Soporte multilingüe natural" },
        speed: { label: "<2s Respuesta", desc: "Voz IA en tiempo real" },
        booking: { label: "Reserva en vivo", desc: "Verifica el calendario al instante" },
        analytics: { label: "Analíticas", desc: "Resúmenes post-llamada" },
        secure: { label: "Seguro", desc: "Datos cifrados" },
      },
      stats: {
        availability: "Disponible",
        responseTime: "Tiempo de respuesta",
        languages: "Idiomas",
        calls: "Llamadas simultáneas",
      },
      cta: {
        primary: "Probar una llamada demo",
        secondary: "Saber más →",
        connecting: "Conectando...",
        endCall: "Colgar",
      },
      continuationLabel: "Ver parte 2 →",
      multilingualLabel: "Multilingüe en acción →",
      tutorialLabel: "Personalizada para ti →",
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
      enterButton: "Scopri Anvela",
      tagline: "La tua officina non dorme più",
    },

    // Hero
    hero: {
      scriptText: "Mentre sei sotto il cofano...",
      mainTitle: "Ogni chiamata persa\nè un lavoro perso.",
      subhead: "La tua receptionist IA risponde a ogni chiamata, fissa gli appuntamenti e cattura ogni cliente. Disponibile 24/7.",
      ctaButton: "Offerta di Lancio",
      videoDemo: "Video Demo",
      prices: "Prezzi",
      decorativeText: "AFFIDABILE • DISPONIBILE • CONVENIENTE",
      ctaSubtitle: "1° mese al -50%",
      ctaMain: "Ottieni Anvela per la tua officina",
      noCreditCard: "Offerta limitata • Operativo in 48h",
      stats: {
        calls: { value: "100", suffix: "%", label: "Chiamate Risposte" },
        availability: { value: "24", suffix: "/7", label: "Sempre Disponibile" },
        savings: { value: "50", suffix: "%", label: "vs. Assumere Personale" },
      },
    },
    missedCalls: {
      subtitle: "IMPATTO FINANZIARIO",
      title: "L'85% di chi chiama non richiama mai.",
      vision: "E se ogni officina potesse permettersi di non perdere mai più una chiamata?",
      cta: "Smetti di perdere soldi",
    },

    // Gallery
    gallery: {
      scriptText: "Capacità dell'IA",
      mainTitle: "La Reception IA per l'Industria Auto",
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
      mainTitle: "Come Anvela riempie il tuo calendario",
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
      mainTitle: "Ciò che perdi in silenzio ogni volta che una chiamata rimane senza risposta",
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
        { title: "SMS AUTO", subtitle: "PROMEMORIA & FOLLOW-UP" },
        { title: "AGENDA", subtitle: "PIANIFICAZIONE AUTO" },
        { title: "BILINGUE", subtitle: "FR / EN" },
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
      ctaButtonElite: "ATTIVA IL MIO SISTEMA",
      monthly: "Mensile",
      yearly: "Annuale",
      yearlyBonus: "2 mesi gratuiti & -10%",
      essentiel: "ESSENZIALE",
      bestValue: "⭐ PIÙ POPOLARE",
      tierIncludes: "incluso",
      completeSolution: "SOLUZIONE COMPLETA",
      recommended: "⭐ CONSIGLIATO",
      cadMonth: "CAD / mese",
      annualBillingNotice: "(fatturato ${{price}} annualmente)",
      setupFeeLabel: "Spese di attivazione",
      popularLabel: "Il più popolare",
      vsLabel: "IL VANTAGGIO ANVELA",
      vsEmployee: "Receptionist part-time",
      vsEmployeePrice: "~2 500$ / mese",
      vsAnvela: "Anvela — disponibile 24/7",
      vsAnvelaPrice: "da $199 / mese · circa 49$ / sett.",
      vsTagline: "Non per sostituire il tuo team — per dargli supporto, senza i costi aggiuntivi.",
      roiTagline: "Un solo appuntamento potrebbe bastare a coprire il tuo abbonamento. Il resto è guadagno puro.",
      roiStat1Title: "Chiamate perse a settimana",
      roiStat1Desc: "Ogni chiamata senza risposta è un cliente che chiama il tuo concorrente. È una perdita diretta di fatturato.",
      roiStat2Title: "Valore di un singolo cliente",
      roiStat2Desc: "Anche per i tuoi servizi più economici, bastano 1 o 2 prenotazioni recuperate per rendere profittevole il mese. Tutto il resto è profitto netto.",
      roiStat3Title: "ROI immediato",
      roiStat3Desc: "Recupera un solo cliente al mese e il tuo abbonamento è pagato. Il resto è profitto puro.",
      tiers: [
        {
          name: "Night Shift",
          price: "199",
          weeklyNote: "circa 7$ al giorno",
          setupFee: "0",
          setupFeeNote: "Contratto minimo 3 mesi",
          description: "Una voce naturale che risponde fuori orario e continua a riempire la tua agenda mentre sei chiuso.",
          features: [
            { label: "🌙 Risposta automatica fuori orario", detail: "Lun–Ven 18h–8h + weekend 24h" },
            { label: "📞 IA risponde e qualifica le chiamate", detail: "FAQ + acquisizione informazioni cliente" },
            { label: "📅 Prenotazione automatica appuntamenti", detail: "Direttamente nel tuo calendario (Google Calendar)" },
            { label: "📩 Notifica SMS istantanea", detail: "Quando viene acquisito un lead o un appuntamento" },
            { label: "🌍 Ottimizzato per il mercato locale (IT)" },
            { label: "☎️ Chiamate illimitate" },
            { label: "🎯 Risultato", detail: "Nessuna chiamata persa fuori orario. Il tuo calendario si riempie anche quando sei chiuso." },
            { label: "🎁 Offerta di lancio", detail: "Primo mese al 50%" }
          ]
        },
        {
          name: "Co-Pilot",
          price: "449",
          weeklyNote: "circa 15$ al giorno",
          isPopular: true,
          setupFee: "197",
          setupFeeNote: "Contratto minimo 3 mesi",
          description: "Una receptionist che suona umana, al telefono per te 24/7 — anche quando sei sommerso o chiuso.",
          features: [
            { label: "📞 Risposta intelligente 24/7", detail: "L'IA risponde quando non sei disponibile o sei occupato" },
            { label: "📅 Prenotazione automatizzata", detail: "L'IA prenota direttamente nel tuo calendario" },
            { label: "🔁 Acquisizione intelligente chiamate perse", detail: "Ogni chiamata viene acquisita con le info del cliente, anche se non rimane in linea." },
            { label: "💬 Promemoria SMS automatici (24h / 2h)", detail: "Riduzione delle assenze" },
            { label: "📲 Trasferimento a umano (se necessario)", detail: "La chiamata può essere reindirizzata a te in diretta" },
            { label: "🌙 Copertura chiamate 24/7", detail: "Nessuna chiamata senza risposta" },
            { label: "🌍 Bilingue (FR / EN)" },
            { label: "☎️ Chiamate illimitate" },
            { label: "🎯 Risultato", detail: "Meno chiamate perse. Più appuntamenti. Senza cambiare il tuo modo di lavorare." },
            { label: "🎁 Offerta di lancio", detail: "Primo mese al 50%" }
          ]
        },
        {
          name: "Anvela Signature",
          tagline: "Il tuo marchio, protetto 24/7",
          price: "697",
          weeklyNote: "circa 23$ al giorno",
          setupFee: "497",
          setupFeeNote: "Contratto minimo 6 mesi",
          description: "Tutto il sistema Anvela gestito per te: reputazione protetta, follow-up VIP e adattato alla realtà del tuo garage.",
          features: [
            { label: "🎙️ Voce naturale, qualità adattata al tuo garage", detail: "Adattiamo la qualità dell'IA al volume e alla complessità delle tue chiamate — per la migliore esperienza senza costi eccessivi." },
            { label: "⭐ Protezione della reputazione online", detail: "I clienti insoddisfatti vengono reindirizzati in privato PRIMA di lasciare una recensione negativa su Google. Il tuo punteggio resta protetto." },
            { label: "📊 Ottimizzazione continua + report mensili", detail: "Aggiustiamo il tuo sistema ogni mese per massimizzare appuntamenti e ricavi." },
            { label: "🎯 Supporto VIP prioritario — risposta < 2h", detail: "Accesso diretto al team Anvela. Sei sempre il primo." },
            { label: "💬 Follow-up SMS in meno di 15 minuti", detail: "Conferma e ricontatto immediati — non dopo 24h come altrove." },
            { label: "🧠 Riconoscimento dei clienti abituali", detail: "Mila riconosce i tuoi clienti fedeli e personalizza ogni chiamata." },
            { label: "🌍 Multilingue — oltre il bilingue", detail: "Mila accoglie i tuoi clienti in francese, in inglese e in diverse altre lingue." },
            { label: "📅 Gestione COMPLETA degli appuntamenti", detail: "Prenotazione, modifica E cancellazione direttamente al telefono." },
            { label: "🔗 Integrazione CRM", detail: "Compatibile con le principali piattaforme (valutazione inclusa)." },
            { label: "✓ Tutto incluso in Night Shift + Co-Pilot", detail: "Risposta 24/7 · Cattura chiamate perse · Trasferimento umano · Bilingue FR/EN · Chiamate illimitate" },
            { label: "🏆 Risultato", detail: "Più appuntamenti. Meno perdite. Una reputazione blindata. Zero gestione." },
            { label: "🎁 Offerta di lancio", detail: "Primo mese al 50%" }
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
      continuationLabel: "Guarda parte 2 — conferma e calendario →",
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
          answer: "I piani 'Night Shift' e 'Co-Pilot' hanno un impegno minimo di 3 mesi. Il piano 'Anvela Signature' richiede 6 mesi a causa della complessità dell'integrazione CRM personalizzata."
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
      mainTitle: "Tutto ciò di cui la tua officina ha bisogno per non perdere mai più un cliente",
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
          uptime: "Continua",
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
          excerpt: "Scopri come i receptionist IA stanno trasformando la gestione delle chiamate nelle officine e nei centri auto.",
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
        2: "La nostra missione: dare a ogni officina indipendente la tecnologia telefonica delle grandi catene — senza i costi né la complessità.",
      },
      storyTimeline: {
        users: { value: "1°", label: "Cliente fondatore attivo" },
        calls: { value: "48h", label: "Tempo di avvio" },
        satisfaction: { value: "100%", label: "Soddisfazione" },
      },
      storyQuote: {
        prefix: "Missione",
        text: "Dare a ogni officina indipendente gli strumenti delle grandi catene — senza i costi.",
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
        phone: { label: "Telefono", value: "(438) 814-7578", subtext: "Linea diretta Anvela 24/7" },
        sms: { label: "SMS", value: "(514) 679-2107", subtext: "Solo testo, risposta rapida" },
        email: { label: "Email", value: "support@anvela.ca", subtext: "Risposta entro 24h" },
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
        businessTypeOptions: ["Garage / Meccanico", "Carrozzeria / Verniciatura", "Centro Assistenza Auto", "Concessionaria", "Altro"],
        messageLabel: "Messaggio",
        messagePlaceholder: "Descrivici le tue esigenze di reception o fai le tue domande...",
        submitText: "Invia la mia richiesta",
        submittingText: "Invio...",
        successMessage: "Grazie! Anvela ti richiamerà a breve.",
        errorMessage: "Qualcosa è andato storto. Per favore riprova.",
        calendarTitle: "Prenota la tua chiamata di scoperta",
        calendarSubtitle: "Preferisci parlare direttamente con Pablo? Scegli un orario e discutiamo delle tue esigenze.",
        calendarButton: "Prenota una chiamata",
        calendarOr: "oppure",
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
        inputDescription: "Per programmare la tua chiamata di configurazione, inserisci il tuo numero di telefono qui sotto.",
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
        calendarTitle: "Prenota la tua chiamata di scoperta",
        calendarSubtitle: "Preferisci parlare direttamente con Pablo? Discutiamo delle tue esigenze.",
        calendarButton: "Prenota una chiamata",
        calendarOr: "oppure",
      },
    },

    // Founder
    founder: {
      scriptText: "La persona dietro Anvela",
      mainTitle: "Costruito da qualcuno che ha visto le officine perdere clienti ogni sera dopo le 17.",
      quote: "Ho creato Anvela perché ogni chiamata persa è un cliente perso. La tua azienda merita di meglio.",
      title: "Fondatore & CEO",
      bio: "Pablo Fuentes ha lanciato Anvela dopo aver visto troppe officine indipendenti di Montreal perdere clienti per chiamate senza risposta — non per mancanza di servizio, ma per mancanza di tempo. Imprenditore tecnologico con sede a Montreal, ha combinato l'IA vocale con una profonda conoscenza del mercato locale per creare una receptionist che non dorme mai, non si prende mai pause e si adatta alla lingua di ogni cliente, qualunque essa sia. Anvela è la sua risposta a una semplice domanda: e se ogni officina indipendente potesse permettersi di non perdere mai una chiamata?",
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
      newsletterHeading: "Iscriviti per gli aggiornamenti",
      newsletterSuccessText: "Grazie per l'iscrizione!",
      newsletterErrorText: "Per favore riprova.",
      socialFollow: "Seguici",
      madeInQuebec: "Fatto in Quebec",
      copyrightText: "© Anvela AI. Tutti i diritti riservati.",
      backToTopText: "Torna su",
      linkGroups: {
        product: {
          title: "Prodotto",
          links: ["Funzionalità", "Prezzi", "FAQ"],
        },
        company: {
          title: "Anvela",
          links: ["Chi Siamo", "Contatto"],
        },
      },
      legalLinks: ["Informativa Privacy", "Termini di Servizio", "Politica Cookie"],
    },

    // Demo Showcase
    demoShowcase: {
      liveBadge: "DEMO DAL VIVO · GARAGE PABLO",
      title: "Scopri",
      titleSuffix: ", la tua receptionist IA",
      subtitle: "Mila risponde a ogni chiamata in francese, in inglese e in altre lingue — prenota appuntamenti, verifica la disponibilità e invia conferme via SMS. Automaticamente.",
      frame1: {
        label: "Presentazione",
        pill: "Mila",
        footerTitle: "Mila si presenta",
        footerSub: "Avatar IA · Presentazione personalizzata",
        tag: "Semplicemente intelligente",
      },
      frame2: {
        label: "Chiamata dal vivo",
        pill: "LIVE",
        footerTitle: "Vera chiamata · Vera prenotazione",
        footerSub: "Calendario aggiornato · SMS inviato automaticamente",
        tag: "Dal vivo",
      },
      pills: {
        availability: { label: "24/7 Disponibile", desc: "Non perde nessuna chiamata, giorno e notte" },
        bilingual: { label: "FR/EN e altro", desc: "Supporto multilingue naturale" },
        speed: { label: "<2s Risposta", desc: "Voce IA in tempo reale" },
        booking: { label: "Prenotazione live", desc: "Verifica il calendario istantaneamente" },
        analytics: { label: "Analitiche", desc: "Riepiloghi post-chiamata" },
        secure: { label: "Sicuro", desc: "Dati crittografati" },
      },
      stats: {
        availability: "Disponibile",
        responseTime: "Tempo di risposta",
        languages: "Lingue",
        calls: "Chiamate simultanee",
      },
      cta: {
        primary: "Prova una chiamata demo",
        secondary: "Scopri di più →",
        connecting: "Connessione...",
        endCall: "Riaggancia",
      },
      continuationLabel: "Guarda parte 2 →",
      multilingualLabel: "Multilingue in azione →",
      tutorialLabel: "Personalizzata per te →",
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
