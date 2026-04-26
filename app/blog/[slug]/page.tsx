import { Metadata } from 'next'
import { BlogPost } from '../../../components/BlogPost'
import { loadPost, getBlogSlugs } from '../../../loader'
import { markdownToHtml } from '../../../lib/markdown'
import { globals } from '../../../globals'

/** Check if an image path is actually valid (not empty, not just '/') */
const validImagePath = (p?: string | null): p is string =>
  !!p && p.trim() !== '/'

type Props = {
  params: Promise<{ slug: string }>
}

/**
 * Generate static params for all blog posts at build time.
 * Replaces the old getStaticPaths from the Pages Router.
 */
export function generateStaticParams() {
  const slugs = getBlogSlugs()
  return slugs.map(slug => ({ slug }))
}

/**
 * Generate dynamic SEO metadata for each blog post.
 * Replaces the old Meta/PostMeta component + next/head approach.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = loadPost(`blog/${slug}.md`)

  return {
    title: post.subtitle ? `${post.title} — ${post.subtitle}` : post.title,
    description: post.description || undefined,
    openGraph: {
      title: post.title,
      description: post.description || undefined,
      url: `${globals.url}/blog/${slug}`,
      siteName: globals.siteName,
      images: validImagePath(post.bannerPhoto)
        ? [`${globals.url}${post.bannerPhoto}.webp`]
        : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || undefined,
      site: globals.twitterHandle,
      creator: globals.twitterHandle,
      images: validImagePath(post.bannerPhoto)
        ? [`${globals.url}${post.bannerPhoto}.webp`]
        : undefined,
    },
    alternates: {
      canonical: post.canonicalUrl || `${globals.url}/blog/${slug}`,
    },
  }
}

/**
 * Blog post page — Server Component.
 * Loads the markdown file, processes it through the unified pipeline,
 * and renders the BlogPost component with pre-built HTML.
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = loadPost(`blog/${slug}.md`)
  const contentHtml = await markdownToHtml(post.content)

  return <BlogPost post={post} contentHtml={contentHtml} />
}
