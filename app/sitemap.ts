import { MetadataRoute } from 'next'
import { allProjects } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = allProjects
    .filter((project) => project.published)
    .map((project) => ({
      url: `https://venukar.github.io/projects/${project.slug}`,
      lastModified: project.date ? new Date(project.date) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  const routes = ['', '/projects', '/contact'].map((route) => ({
    url: `https://venukar.github.io${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }))

  return [...routes, ...projects]
}
