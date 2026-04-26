import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { globals } from './globals'

export type PostData = {
  path: string
  title: string
  subtitle?: string
  content: string
  description?: string
  canonicalUrl?: string
  published: boolean
  datePublished: number
  author?: string
  authorPhoto?: string
  authorTwitter?: string
  tags?: string[]
  bannerPhoto?: string
  thumbnailPhoto?: string
}

type RawFile = { path: string; contents: string }

/**
 * Read a markdown file from the /md directory using fs (no webpack loader needed).
 */
export const loadMarkdownFile = (filePath: string): RawFile => {
  const fullPath = path.join(process.cwd(), 'md', filePath)
  const contents = fs.readFileSync(fullPath, 'utf8')
  return { path: filePath, contents }
}

/**
 * Parse frontmatter and extract post data from a raw markdown file.
 */
export const mdToPost = (file: RawFile): PostData => {
  const metadata = matter(file.contents)
  const postPath = file.path.replace('.md', '')
  const post = {
    path: postPath,
    title: metadata.data.title,
    subtitle: metadata.data.subtitle || null,
    published: metadata.data.published || false,
    datePublished: metadata.data.datePublished || null,
    tags: metadata.data.tags || null,
    description: metadata.data.description || null,
    canonicalUrl: metadata.data.canonicalUrl || `${globals.url}/${postPath}`,
    author: metadata.data.author || null,
    authorPhoto: metadata.data.authorPhoto || null,
    authorTwitter: metadata.data.authorTwitter || null,
    bannerPhoto: metadata.data.bannerPhoto || null,
    thumbnailPhoto: metadata.data.thumbnailPhoto || null,
    content: metadata.content,
  }

  if (!post.title) throw new Error(`Missing required field: title.`)

  if (!post.content) throw new Error(`Missing required field: content.`)

  if (!post.datePublished) throw new Error(`Missing required field: datePublished.`)

  return post as PostData
}

/**
 * Load all markdown files matching a glob pattern from the /md directory.
 */
export const loadMarkdownFiles = (pattern: string): RawFile[] => {
  const mdDir = path.join(process.cwd(), 'md')
  const globModule = require('glob')
  const blogPaths: string[] = globModule.sync(pattern, { cwd: mdDir })
  return blogPaths.map((filePath: string) => loadMarkdownFile(filePath))
}

/**
 * Load a single blog post by its relative path within /md.
 */
export const loadPost = (filePath: string): PostData => {
  const file = loadMarkdownFile(filePath)
  return mdToPost(file)
}

/**
 * Load all published blog posts, sorted by date (newest first).
 */
export const loadBlogPosts = (): PostData[] => {
  try {
    return loadMarkdownFiles('blog/*.md')
      .map(mdToPost)
      .filter(p => p.published)
      .sort((a, b) => (b.datePublished || 0) - (a.datePublished || 0))
  } catch (e) {
    console.error(e)
    return []
  }
}

/**
 * Get all blog post slugs for static generation.
 */
export const getBlogSlugs = (): string[] => {
  const mdDir = path.join(process.cwd(), 'md', 'blog')
  const files = fs.readdirSync(mdDir).filter(f => f.endsWith('.md'))
  return files.map(f => f.replace('.md', '').trim())
}
