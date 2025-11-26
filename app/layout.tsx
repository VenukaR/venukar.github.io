import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import StructuredData from "./components/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL('https://venukar.github.io'),
  title: {
    default: "Venuka Ranasinghe - Computer Science Student & Software Developer",
    template: "%s | Venuka Ranasinghe",
  },
  description: "Final year Computer Science student at IIT (University of Westminster). Specializing in full-stack development, AI, and innovative software solutions. Explore my projects including Rumble Guard and more.",
  keywords: [
    "Venuka Ranasinghe",
    "Computer Science",
    "Software Developer",
    "IIT Sri Lanka",
    "University of Westminster",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Rumble Guard",
    "Web Development",
    "Software Engineering",
    "Portfolio",
    "Sri Lanka Developer",
  ],
  authors: [{ name: "Venuka Ranasinghe", url: "https://venukar.github.io" }],
  creator: "Venuka Ranasinghe",
  publisher: "Venuka Ranasinghe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Venuka Ranasinghe - Computer Science Student & Software Developer",
    description:
      "Final year Computer Science student at IIT (University of Westminster). Specializing in full-stack development, AI, and innovative software solutions.",
    url: "https://venukar.github.io",
    siteName: "Venuka Ranasinghe Portfolio",
    images: [
      {
        url: "https://venukar.github.io/og.png",
        width: 1920,
        height: 1080,
        alt: "Venuka Ranasinghe - Computer Science Student Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Venuka Ranasinghe - Computer Science Student & Software Developer",
    description: "Final year Computer Science student at IIT. Specializing in full-stack development, AI, and innovative software solutions.",
    creator: "@venuka_r",
    images: ["https://venukar.github.io/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://venukar.github.io",
  },
  category: "technology",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://venukar.github.io" />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
