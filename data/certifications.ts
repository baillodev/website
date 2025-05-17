export interface Certification {
  image: string
  title: string
  description: string
}

export const coursera: Certification[] = [
  {
    image: "/certifications/front-end.jpg",
    title: "Introduction to Front-End Development",
    description: "Découverte des bases du développement web côté client"
  },
  {
    image: "/certifications/javascript.jpg",
    title: "Programming with JavaScript",
    description: "Apprentissage des fondamentaux de JavaScript pour le développement web dynamique."
  },
  {
    image: "/certifications/version-control.jpg",
    title: "Version Control",
    description: "Maîtrise de Git et GitHub pour le suivi et la gestion de versions de projets."
  },
  {
    image: "/certifications/html-css.jpg",
    title: "HTML and CSS in Depth",
    description: "Approfondissement des concepts HTML5 et CSS3 pour créer des interfaces web modernes."
  },
  {
    image: "/certifications/react-basics.jpg",
    title: "React Basics",
    description: "Introduction à la bibliothèque React pour la création de composants web interactifs."
  },
  {
    image: "/certifications/advanced-react.jpg",
    title: "Advanced React",
    description: "Techniques avancées avec React : hooks, routing, context API et gestion d'état."
  },
  {
    image: "/certifications/ux-ui.jpg",
    title: "Principles of UX/certifications/UI Design",
    description: "Principes de design centrés sur l'utilisateur pour concevoir des interfaces efficaces."
  },
  {
    image: "/certifications/back-end.jpg",
    title: "Introduction to Back-End Development",
    description: "Découverte des bases du développement web côté serveur."
  },
]

export const odc: Certification[] = [
  {
    image: "/certifications/android.jpg",
    title: "Android",
    description: "Formation au développement d'applications mobiles Android avec Kotlin."
  },
  {
    image: "/certifications/linux.jpg",
    title: "Fondamentaux du système Linux",
    description: "Découverte de l’environnement Linux, commandes de base et gestion du système."
  },
  {
    image: "/certifications/react.jpg",
    title: "ReactJS",
    description: "Création d'interfaces réactives avec ReactJS, gestion des états et composants dynamiques."
  },
]

export const cisco: Certification[] = [
  {
    image: "/certifications/it.jpg",
    title: "IT Essentials: PC Hardware and Software",
    description: "Compréhension du matériel informatique, installation de systèmes et dépannage de base."
  },
  {
    image: "/certifications/ccna1.jpg",
    title: "CCNAv7: Introduction to Networks",
    description: "Notions de base des réseaux : protocoles, topologies, modèles OSI et TCP/certifications/IP."
  },
  {
    image: "/certifications/ccna2.jpg",
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    description: "Techniques de commutation, de routage et configuration de réseaux sans fil."
  },
]
