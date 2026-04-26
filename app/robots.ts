import { MetadataRoute } from 'next'
import { globals } from '../globals'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${globals.url}/sitemap.xml`,
  }
}
