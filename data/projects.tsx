type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  websiteLink?: string;
  githubLink?: string;
};

export const projects: Project[] = [
  {
    title: "StickerSmash",
    description: "Une application interactive de livre d'autocollants construite avec Expo, suivant la documentation officielle.",
    technologies: ["Expo", "React Native", "TypeScript"],
    image: "/stickersmash.png",
    githubLink: "https://github.com/baillodev/sticker-smash",
  },
  {
    title: "Dashboard",
    description: "Un tableau de bord réactif construit avec Next.js, dans le cadre du projet officiel de la documentation de Next.js.",
    technologies: ["Next.js", "TypeScript", "TailindCSS"],
    image: "/dashboard.png",
    githubLink: "https://github.com/baillodev/next-dashboard",
  },
  {
    title: "GunShop",
    description: "Un site pour les armes et accessoires, construit avec React et Firebase.",
    technologies: ["React", "Firebase", "TailwindCSS"],
    image: "/gunshop.png",
    websiteLink: "https://gun-shop-app.web.app/",
    githubLink: "https://github.com/baillodev/gun-shop",
  },
  {
    title: "AfriModeOtaku",
    description: "AfriModeOtaku est une boutique en ligne dédiée aux passionnés d'anime et de manga en Afrique.",
    technologies: ["Hostinger Website Builder"],
    image: "/afrimodeotaku.png",
    websiteLink: "https://afrimodeotaku.com/"
  }

];