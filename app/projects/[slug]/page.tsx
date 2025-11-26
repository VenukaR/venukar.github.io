import { notFound } from "next/navigation";
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

  let views = 0;
  try {
    if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
      const redis = Redis.fromEnv();
      views = (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;
    }
  } catch (error) {
    console.log('Redis not available, using default views');
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-invert prose-quoteless prose-cyan">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
