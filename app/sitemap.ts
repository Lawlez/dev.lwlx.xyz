import { MetadataRoute } from 'next'
import { loadBlogPosts } from '../loader'
import { globals } from '../globals'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = loadBlogPosts()

  const blogEntries = posts.map(post => ({
    url: `${globals.url}/blog/${post.path.replace('blog/', '')}/`,
    lastModified: new Date(post.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: globals.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...blogEntries,
  ]
}
