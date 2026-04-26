import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import type { BundledTheme } from 'shiki'

/**
 * Custom Shiki theme matching the original Prism color palette from Code.tsx.
 * Colors preserved: #f07693 (pink accent), #1177ab (blue keywords),
 * #4499ee (blue properties), #C9C0BE (base text), #4e5c63 (comments),
 * #ee9900 (regex/variables), #c7526d (functions).
 */
const lwlxTheme = {
  name: 'lwlx-dark',
  type: 'dark' as const,
  colors: {
    'editor.background': '#121212',
    'editor.foreground': '#C9C0BE',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: '#4e5c63' },
    },
    {
      scope: ['constant', 'entity.name.constant', 'variable.other.constant', 'variable.language'],
      settings: { foreground: '#4499ee' },
    },
    {
      scope: ['entity', 'entity.name'],
      settings: { foreground: '#c7526d' },
    },
    {
      scope: ['entity.name.function', 'meta.function-call', 'support.function'],
      settings: { foreground: '#c7526d' },
    },
    {
      scope: ['entity.name.tag', 'support.class.component'],
      settings: { foreground: '#4499ee' },
    },
    {
      scope: ['keyword', 'storage', 'storage.type'],
      settings: { foreground: '#1177ab' },
    },
    {
      scope: ['keyword.operator'],
      settings: { foreground: '#c9c0be' },
    },
    {
      scope: ['meta.property-name', 'support.type.property-name', 'variable.other.property'],
      settings: { foreground: '#4499ee' },
    },
    {
      scope: ['string', 'string.template', 'punctuation.definition.string'],
      settings: { foreground: '#c9c0be' },
    },
    {
      scope: ['variable', 'variable.parameter', 'variable.other'],
      settings: { foreground: '#ee9900' },
    },
    {
      scope: ['constant.numeric', 'constant.language.boolean'],
      settings: { foreground: '#4499ee' },
    },
    {
      scope: ['entity.name.type', 'support.type', 'support.class'],
      settings: { foreground: '#f07693' },
    },
    {
      scope: ['meta.selector', 'entity.other.attribute-name'],
      settings: { foreground: '#f07693' },
    },
    {
      scope: ['punctuation'],
      settings: { foreground: '#999999' },
    },
    {
      scope: ['constant.character.escape', 'string.regexp'],
      settings: { foreground: '#ee9900' },
    },
    {
      scope: ['markup.bold'],
      settings: { fontStyle: 'bold' },
    },
    {
      scope: ['markup.italic'],
      settings: { fontStyle: 'italic' },
    },
    {
      scope: ['markup.inserted', 'meta.diff.header.to-file'],
      settings: { foreground: '#f07693' },
    },
    {
      scope: ['markup.deleted', 'meta.diff.header.from-file'],
      settings: { foreground: '#4499ee' },
    },
  ],
}

/**
 * Process markdown content into HTML using the unified pipeline.
 * Uses Shiki for syntax highlighting with the custom lwlx theme.
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrettyCode, {
      theme: lwlxTheme as unknown as BundledTheme,
      defaultLang: 'jsx',
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(markdown)

  return String(result)
}
