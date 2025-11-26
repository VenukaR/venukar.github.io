import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Venuka Ranasinghe",
  description: "View and download Venuka Ranasinghe's resume. Computer Science student at IIT (University of Westminster) with expertise in full-stack development, React, Next.js, and modern web technologies.",
  openGraph: {
    title: "Resume - Venuka Ranasinghe",
    description: "View my complete resume showcasing education, skills, experience, and achievements in software development.",
    url: "https://venukar.github.io/resume",
    type: "profile",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
