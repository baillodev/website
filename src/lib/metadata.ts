import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Mamadou Baillo Diallo — Entrepreneur & AI Developer",
  description:
    "Portfolio of Mamadou Baillo Diallo. Entrepreneur and AI Developer focused on building clean, scalable, and maintainable digital products.",
  keywords: [
    "Mamadou Baillo Diallo",
    "BAILLODEV",
    "AI Developer",
    "Full Stack Developer",
    "Next.js",
    "Django",
    "FastAPI",
    "Flutter",
    "Artificial Intelligence",
  ],
  authors: [
    {
      name: "Mamadou Baillo Diallo",
      url: "https://baillo.dev",
    },
  ],
  creator: "Mamadou Baillo Diallo",
  publisher: "BAILLODEV",
  metadataBase: new URL("https://baillo.dev"),

  openGraph: {
    title: "Mamadou Baillo Diallo — Entrepreneur & AI Developer",
    description:
      "Building digital products with clarity, performance, and long-term maintainability.",
    url: "https://baillo.dev",
    siteName: "BAILLODEV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BAILLODEV — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mamadou Baillo Diallo — Entrepreneur & AI Developer",
    description:
      "Portfolio and personal website of Mamadou Baillo Diallo.",
    images: ["/og-image.png"],
  },
};
