import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venuka Ranasinghe",
  description: "Get in touch with Venuka Ranasinghe. Computer Science student at IIT (University of Westminster). Connect via GitHub, LinkedIn, Twitter, or email.",
  openGraph: {
    title: "Venuka Ranasinghe",
    description: "Connect with me on GitHub, LinkedIn, Twitter, or send me an email. Let's build something amazing together!",
    url: "https://venukar.github.io/",
    type: "profile",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
