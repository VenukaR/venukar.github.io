import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Venuka Ranasinghe",
  description: "Photo gallery showcasing moments from Venuka Ranasinghe's academic journey, events, awards, and achievements at IIT (University of Westminster).",
  openGraph: {
    title: "Gallery - Venuka Ranasinghe",
    description: "Explore photos from my academic journey, events, and achievements",
    url: "https://venukar.github.io/gallery",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
