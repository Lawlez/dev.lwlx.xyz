import React from 'react'
import { globals } from '../globals'

/**
 * Legacy Meta component kept for backward compatibility.
 * Primary SEO metadata is now handled via Next.js App Router's
 * generateMetadata in route files.
 */
export const Meta: React.FC<{
  meta: {
    title: string
    link?: string
    desc?: string
    image?: string
  }
}> = () => {
  // SEO metadata is now handled by generateMetadata in app/ routes.
  // This component is kept as a no-op to avoid breaking existing imports.
  return null
}
