import { notFound, redirect } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = allProjects.find((project) => project.slug === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Venuka Ranasinghe`,
    description: project.description,
    keywords: [project.title, "Venuka Ranasinghe", "project", "software development", "portfolio"],
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://venukar.github.io/projects/${project.slug}`,
      type: "article",
      publishedTime: project.date,
      authors: ["Venuka Ranasinghe"],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const externalUrl = project.url ?? (project.repository ? `https://github.com/${project.repository}` : undefined);
  if (externalUrl) {
    redirect(externalUrl);
  }

  // If no external URL is available, fallback to notFound
  notFound();
}
