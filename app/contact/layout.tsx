import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Venuka Ranasinghe",
  description: "Get in touch with Venuka Ranasinghe. Computer Science student at IIT (University of Westminster). Connect via GitHub, LinkedIn, Twitter, or email.",
  openGraph: {
    title: "Contact - Venuka Ranasinghe",
    description: "Connect with me on GitHub, LinkedIn, Twitter, or send me an email. Let's build something amazing together!",
    url: "https://venukar.github.io/contact",
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
