<p align="center">
  <h1 align="center">dev.lwlx.xyz v2.0.0</h1>
</p>
<p align="center">
  A high-performance developer blog modernized for 2026.<br/>
  <b>Next.js 16 (App Router)</b> • <b>React 19</b> • <b>MUI v9</b><br/>
  <b>unified/remark/rehype</b> • <b>Shiki Highlighting</b> • <b>TypeScript</b>
</p>
<p align="center">
Visual Continuity • Speed Focused
</p>
<br/>



- **Next.js 16 App Router**: Leverages React Server Components for zero-bundle markdown rendering.
- **Unified Pipeline**: Modern markdown processing with `unified`, `remark`, and `rehype`.
- **Shiki Highlighting**: Beautiful, accurate syntax highlighting with a custom dark theme.
- **MUI v9**: Sleek, modern components using the latest Material UI standards.
- **Node.js Primary**: Optimized for running as a Node.js server with full SSR support.
- **Static Export**: Optional `output: 'export'` support for static hosting.
- **SEO & Performance**: Optimized metadata, auto-generated sitemap, and robots.txt.
- **RSS Generation**: Automatic RSS feed generation via the unified pipeline.


## Powered by Next.js

The core of this repo is [Next.js](https://https://nextjs.org). We chose Next.js because it's the simplest, most elegant way to generate a static version of a React-based website. The documentation is excellent; read it first: [Next.js Documentation](https://nextjs.org/docs).

## Project structure

Here's is an abbreviated version of the project structure. Certain config files (`next.config.js`, `next-end.d.ts`, `.gitignore`) have been removed for simplicity.

```
.
├── README.md
├── public // static assets (images, fonts, etc.)
├── app // App Router directory
|   ├── layout.tsx // Root layout (Metadata, Google Analytics)
|   ├── Providers.tsx // Client-side providers (MUI Theme, Emotion Cache)
|   ├── page.tsx // Homepage (Server Component)
|   ├── HomeContent.tsx // Interactive homepage UI (Client Component)
|   ├── blog
|       ├── [slug]
|           ├── page.tsx // Blog post route (Static Params + Metadata)
|   ├── sitemap.ts // Auto-generated sitemap.xml
|   ├── robots.ts // robots.txt
├── md
|   ├── blog
|       ├── post.md // MD files are read by fs on the server
├── components
|   ├── BlogPost.tsx
|   ├── Footer.tsx
|   ├── Header.tsx
|   ├── Markdown.tsx // Renders processed HTML
|   ├── MaterialPostCard.tsx // Modernized with MUI sx prop
├── lib
|   ├── markdown.ts // Unified/Remark/Rehype/Shiki pipeline
├── loader.ts // Server-side markdown loading (fs-based)
├── tsconfig.json
├── package.json
```

Next.js generates a new webpage for each file in the `pages` directory. If you want to add an About page to your blog, just add `about.tsx` inside `pages` and start writing the page.

By default the repo only contains two pages: a home page (`/pages/index.tsx`) and a blog page (`/pages/[blog].md`).

The file `[blog].ts` follows the Next.js convention of using square brackets to indicate a [dynamic route](https://nextjs.org/docs/routing/dynamic-routes).

## Styling

dev.lwlx.xyz v2.0 uses **MUI v9** for its design system. All legacy `makeStyles` (JSS) styling has been removed in favor of the modern `sx` prop and `styled()` API. This ensures full compatibility with the App Router and React Server Components.

The markdown rendering in `/components/Markdown.tsx` uses standard CSS classes to style the output of the unified pipeline, maintaining the signature dark neumorphic look.

## Performance & SEO

By using the App Router, most of the blog is rendered as **React Server Components**. This means:
- The markdown parser (`unified`) runs only on the server.
- The syntax highlighter (`Shiki`) runs only on the server.
- The client receives pure HTML for the blog content, significantly reducing the JavaScript bundle size.
- SEO is handled via the new `generateMetadata` API, providing dynamic tags for every post.

## Frontmatter support

Every Markdown file can include a "frontmatter block" containing various metadata. dev.lwlx.xyz provides a `loadPost` utility that loads a Markdown file, parses it's frontmatter metadata, and returns a structured `PostData` object:

```ts
type PostData = {
  path: string;
  title?: string;
  subtitle?: string;
  description?: string; // used for SEO
  canonicalUrl?: string; // used for SEO
  datePublished?: number; // Unix timestamp
  author?: string;
  authorPhoto?: string;
  authorHandle?: string; // twitter handle
  tags?: string[];
  bannerPhoto?: string;
  thumbnailPhoto?: string;
};
```

For example, here is the frontmatter blog from the sample blog post (`md/blog/the-ultimate-tech-stack.md`):

```
---
title: Introducing dev.lwlx.xyz
subtitle: Bringing the power of React, TypeScript, and static generation to dev blogs everywhere
datePublished: 1589064522569
author: Ben Benson
tags:
  - dev.lwlx.xyz
  - Blogs
authorPhoto: /profile
bannerPhoto: /book
thumbnailPhoto: /book.jpg
---
```

View `/loader.ts` to see how this works.

## Google Analytics

Just add your Google Analytics ID (e.g. 'G-999999999-1') to `globals.ts` and dev.lwlx.xyz will automatically inject the script using the `next/script` component. Check `app/layout.tsx` to see how this is implemented.


## Syntax Highlighting

We use **Shiki** via `rehype-pretty-code` for syntax highlighting. This provides VS Code-caliber highlighting accuracy. A custom Shiki theme `lwlx-dark` in `lib/markdown.ts` ensures the code blocks match the site's aesthetic.

Highlighting features:
- **Title tags**: add `title="filename.js"` to your code blocks.
- **Line numbers**: enabled by default for all blocks.
- **Themed output**: uses the exact color palette as the rest of the site.

View `lib/markdown.ts` to customize the pipeline or theme colors.

## Markdown loading

_You don't need to understand all of this to use dev.lwlx.xyz. Consider this an "advanced guide" you can use if you want to customize the structure of the site._

Markdown posts are loaded during Next.js static build step. Check out the [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching) documentation to learn more about this.

Here's the short version: if export a function called `getStaticProps` from one of your page components, Next.js will execute that function, take the result, and pass the `props` property (which should be another object) into your page as props.

You can dynamically load and parse a Markdown file using `loadMarkdownFile`, a utility function implemented in `loader.ts`. It is an async function that returns a `PostData` TypeScript object containing all the metadata keys listed above:

For an example of this, check out the `getStaticProps` implementation from the homepage. The function calls `loadBlogPosts` - a utilty function that loads _every_ blog posts in the `/md/blog/` directory, parses them, and returns `PostData[]`.

```ts
export const getStaticProps = async () => {
  const posts = await loadBlogPosts();
  return { props: { posts } };
};
```

There are a few utility functions in `loader.ts` that dev.lwlx.xyz uses. All functions are _async_! All functions accept a _relative_ path which is expected to be \_relative to the `md/` directory. For instance `loadPost('blog/test.md'`) would load `/md/blog/test.md`.

- `loadPost` loads/parses a Markdown file and returns a `PostData`
- `loadBlogPosts`: loads/parses all the files in `/md/blog/`. Returns `PostData[]`. Used in `index.tsx` to load/render a list of all published blog posts
- `loadMarkdownFile`: loads a Markdown file but doesn't parse it. Returns the string content. Useful if you want to implement some parts of a page in Markdown and other parts in React
- `loadMarkdownFiles`: accepts a [glob](https://docs.python.org/3/library/glob.html) pattern and loads all the files inside `/md/` whose names match the pattern. Used internally by `loadBlogPosts`

## Static Generation

To generate a fully static version of the site, update `next.config.ts` to include `output: 'export'`. Then run `yarn build`. The static assets will be written to the `/out` directory.

By default, the app is configured to run as a Node.js server, which is recommended for the best performance and future feature compatibility.

## Global configs

There is a `globals.ts` file in the project root containing some settings/configuration metadata about your site:

- `yourName`: Your name, used for the copyright tags in the footer and the RSS feed, e.g. Alyssa P. Hacker
- `siteName`: The title of your blog, e.g. `Alyssa's Cool Blog`;
- `siteDescription`: A short description, used in the `meta` description tag, e.g. 'I write about code \'n stuff';
- `siteCreationDate`: Used in the generated RSS feed. Use this format: 'March 3, 2020 04:00:00 GMT';
- `twitterHandle`: The twitter handle for you or your blog/company, used in the Twitter meta tags. Include the @ symbol, e.g. '@lawlez_';
- `email`: Your email, used as the "webMaster" and "managingEditor" field of the generated RSS feed, e.g. `alyssa@example.com`;
- `url`: The base URL of your website, used to "compute" default canonical links from relative paths, e.g. 'https://lwlx.xyz';

## RSS Feed Generation

An RSS feed is auto-generated in the `public/` directory during the build process. It uses the `rss` module and the same `unified` markdown pipeline used for the blog posts, ensuring the feed content precisely matches the site content.

Check out `rssUtil.ts` to customize the feed generation logic.

## SEO

Every blog post page automatically populated meta tags based on the post metadata. This includes a `title` tag, `meta` tags, `og:` tags, Twitter metadata, and a `link` tag containing the canonical URL.

The default value of the canonical URL is computed by concatenating the value of your `url` config (see Global Configs above) and the relative path of your post. Verify that the canonical URL is exactly equivalent to the URL in the browser when visiting your live site, otherwise your site's SEO may suffer.

## Insanely customizable

There's nothing "under the hood" here. You can view and modify all the files that provide the functionality listed above. dev.lwlx.xyz just provides a project scaffold, some Markdown-loading loading utilities (in `loader.ts`), and some sensible styling defaults (especially in `Markdown.tsx`).

To get started customizing, check out the source code of `index.tsx` (the home page), `BlogPost.tsx` (the blog post template), and `Markdown.tsx` (the Markdown renderer).

Head to the GitHub repo to get started: [https://github.com/Lawlez/dev.lwlx.xyz](https://github.com/Lawlez/dev.lwlx.xyz). If you like this project, leave a ⭐️star⭐️ to help more people find dev.lwlx.xyz 😎

# CLI

### `yarn dev`

Starts the development server on `http://localhost:3000`.

### `yarn build`

Creates an optimized production build of your site.

### `yarn start`

Starts the production Node.js server.

