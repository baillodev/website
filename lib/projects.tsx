import { Nextjs } from "@/components/icons/nextjs";
import { Django } from "@/components/icons/django";
import { React } from "@/components/icons/react";
import { Typescript } from "@/components/icons/typescript";
import { Firebase } from "@/components/icons/firebase";

type ProjectType = {
  title: string;
  description: string;
  technologies: {
    icon: React.ReactNode;
    name: string;
  }[];
  category: 'Application Web' | 'Application Mobile' | 'Solution SaaS' | 'Projet Open Source' | 'Proof of Concept';
  impact: string;
  featured?: boolean; // À true pour les projets phares
};

export const projectsData: ProjectType[] = [
  {
    title: "Plateforme SaaS de Gestion d'Événements",
    description: "Solution complète de billetterie et gestion d'événements avec paiements en ligne et analytics temps réel.",
    technologies: [
      { icon: <Nextjs />, name: "Next.js" },
      { icon: <Django />, name: "Django" },
      { icon: <Typescript />, name: "TypeScript" }
    ],
    category: 'Solution SaaS',
    impact: "Augmentation de 30% des ventes pour les clients utilisateurs",
    featured: true
  },

  {
    title: "Application Mobile de Fitness IA",
    description: "Coach sportif personnel avec analyse de mouvement par vision algorithmique.",
    technologies: [
      { icon: <React />, name: "React Native" },
      { icon: <Firebase />, name: "Firebase" }
    ],
    category: 'Application Mobile',
    impact: "1000+ téléchargements en bêta test"
  },

  {
    title: "Librairie de Composants UI Accessibles",
    description: "Collection de composants React avec focus sur l'accessibilité WCAG AA.",
    technologies: [
      { icon: <Typescript />, name: "TypeScript" },
      { icon: <React />, name: "React" }
    ],
    category: 'Projet Open Source',
    impact: "Adoptée par 3 startups locales"
  },

  {
    title: "Site Vitrine pour Restaurant Gastronomique",
    description: "Réservations en ligne intégrées avec système de gestion de table.",
    technologies: [
      { icon: <Nextjs />, name: "Next.js" }
    ],
    category: 'Application Web',
    impact: "Réduction de 40% des appels téléphoniques"
  },

  {
    title: "Outil d'Analyse de Sentiments",
    description: "MVP analysant les avis clients via traitement NLP.",
    technologies: [
      { icon: <Django />, name: "Django" }
    ],
    category: 'Proof of Concept',
    impact: "Validé le marché pour un produit ultérieur"
  }
];