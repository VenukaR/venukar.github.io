import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Venuka Ranasinghe - Computer Science Student",
    template: "%s | Venuka Ranasinghe",
  },
  description: "22-year-old Computer Science undergraduate in final year, passionate about building innovative software solutions and exploring cutting-edge technologies.",
  openGraph: {
    title: "Venuka Ranasinghe - Computer Science Student",
    description:
      "22-year-old Computer Science undergraduate in final year, passionate about building innovative software solutions and exploring cutting-edge technologies.",
    url: "https://venukar.com",
    siteName: "Venuka Ranasinghe Portfolio",
    images: [
      {
        url: "https://venukar.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Venuka Ranasinghe",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
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
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}\
      </body>
    </html>
  );
}
