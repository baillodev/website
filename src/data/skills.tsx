import { Django } from "@/components/icons/django";
import { Expo } from "@/components/icons/expo";
import { Figma } from "@/components/icons/figma";
import { Firebase } from "@/components/icons/firebase";
import { Github } from "@/components/icons/github";
import { Linux } from "@/components/icons/linux";
import { Neon } from "@/components/icons/neon";
import { Nextjs } from "@/components/icons/nextjs";
import { Openai } from "@/components/icons/openai";
import { Postgresql } from "@/components/icons/postgresql";
import { Postman } from "@/components/icons/postman";
import { Prisma } from "@/components/icons/prisma";
import { Python } from "@/components/icons/python";
import { React } from "@/components/icons/react";
import { SQlite } from "@/components/icons/sqlite";
import { Tailwind } from "@/components/icons/tailwind";
import { Typescript } from "@/components/icons/typescript";

type skillsTypes = {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: 'Langage' | 'Frontend' | 'Backend' | 'DB' | 'Tools' | 'UI/UX' | 'OS' | 'Mobile' | 'AI';
};

export const skillsItems: skillsTypes[] = [
  {
    icon: <Typescript size={64} />,
    title: "TypeScript",
    description: "Surcouche de JavaScript avec typage statique pour un code plus sûr et maintenable.",
    category: 'Langage'
  },
  {
    icon: <Python size={64} />,
    title: "Python",
    description: "Langage polyvalent utilisé pour le web, l'automatisation et l'IA.",
    category: 'Langage'
  },

  {
    icon: <Nextjs size={64} />,
    title: "Next.js",
    description: "Framework React pour le rendu côté serveur et l'optimisation SEO.",
    category: 'Frontend'
  },
  {
    icon: <React size={64} />,
    title: "React",
    description: "Librairie JavaScript pour créer des interfaces utilisateur dynamiques.",
    category: 'Frontend'
  },
  {
    icon: <Tailwind size={64} />,
    title: "Tailwind CSS",
    description: "Framework CSS utilitaire pour styliser rapidement.",
    category: 'Frontend'
  },

  {
    icon: <Django size={64} />,
    title: "Django",
    description: "Framework Python pour créer des applications web robustes et sécurisées.",
    category: 'Backend'
  },

  {
    icon: <Postgresql size={64} />,
    title: "PostgreSQL",
    description: "Base de données relationnelle open source ultra-puissante.",
    category: 'DB'
  },
  {
    icon: <Prisma size={64} />,
    title: "Prisma",
    description: "ORM moderne pour gérer les bases de données SQL avec TypeScript.",
    category: 'DB'
  },
  {
    icon: <Firebase size={64} />,
    title: "Firebase",
    description: "Plateforme complète de Google avec base de données temps réel.",
    category: 'DB'
  },
  {
    icon: <Neon size={64} />,
    title: "Neon",
    description: "PostgreSQL cloud-native avec scalabilité optimale.",
    category: 'DB'
  },
  {
    icon: <SQlite size={64} />,
    title: "SQLite",
    description: "Base de données légère pour les apps mobiles.",
    category: 'DB'
  },

  {
    icon: <Expo size={64} />,
    title: "Expo",
    description: "Plateforme pour développer des apps React Native facilement.",
    category: 'Mobile'
  },

  {
    icon: <Openai size={64} />,
    title: "OpenAI",
    description: "API d'IA avancée pour générer du texte et comprendre le langage.",
    category: 'AI'
  },

  {
    icon: <Github size={64} />,
    title: "GitHub",
    description: "Plateforme de collaboration et gestion de version.",
    category: 'Tools'
  },
  {
    icon: <Postman size={64} />,
    title: "Postman",
    description: "Outil pour tester et documenter les API.",
    category: 'Tools'
  },
  {
    icon: <Linux size={64} />,
    title: "Linux",
    description: "Système d'exploitation open source pour le développement.",
    category: 'OS'
  },

  {
    icon: <Figma size={64} />,
    title: "Figma",
    description: "Outil de design UI/UX collaboratif.",
    category: 'UI/UX'
  }
];