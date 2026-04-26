import { MetadataRoute } from 'next'
import { globals } from '../globals'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${globals.url}/sitemap.xml`,
  }
}
