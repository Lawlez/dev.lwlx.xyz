<p align="center">
  <h1 align="center">dev.lwlx.xyz</h1>
</p>
<p align="center">
  A developer blog with <br/>Next.js<br/>React<br/>TypeScript<br/>Markdown<br/>syntax highlighting<br/>SEO<br/>RSS generation
</p>
<p align="center">
if you're happy and you know it, star this repo
</p>
<br/>
<br/>
<br/>


- Works as a Markdown-based static-site generator out of the box: just add new blog posts to `/md/blog`
- Supports exporting to fully static assets (powered by Next.js)
- Hot reload (powered by Next.js)
- Makes it easy to write custom pages/code in React + TypeScript
- Provides a `Markdown.tsx` component with support for GitHub-style syntax highlighting
- Automatic RSS feed generation
- SEO best practices (title tag, meta tags, canonical URLs)

# Get started

To get started:

1. Fork this repo
2. ```
   git clone git@github.com:yourusername/devii.git my-blog
   cd my-blog
   yarn install
   ```
3. Start the development server with `yarn dev`. This should start a server on `http://localhost:3000`.

## Powered by Next.js

The core of this repo is [Next.js](https://https://nextjs.org). We chose Next.js because it's the simplest, most elegant way to generate a static version of a React-based website. The documentation is excellent; read it first: [Next.js Documentation](https://nextjs.org/docs).

## Project structure

Here's is an abbreviated version of the project structure. Certain config files (`next.config.js`, `next-end.d.ts`, `.gitignore`) have been removed for simplicity.

```
.
├── README.md
├── public // all static assets (images, css, etc) go here
├── pages // every .tsx component in this dir becomes a page of the final site
|   ├── index.tsx // the home page (which has access to the list of all blog posts)
|   ├── blog
|       ├── [blog].md // a template component that renders the blog posts under `/md/blog`
├── md
|   ├── blog
|       ├── devii.md // this page!
        ├── whatever.md // every MD file in this directory becomes a blog post
├── components
|   ├── BlogPost.tsx
|   ├── Code.tsx
|   ├── Footer.tsx
|   ├── Header.tsx
|   ├── Markdown.tsx
|   ├── Meta.tsx
|   ├── <various>
├── loader.ts // contains utility functions for loading/parsing Markdown
├── node_modules
├── tsconfig.json
├── package.json
```

Next.js generates a new webpage for each file in the `pages` directory. If you want to add an About page to your blog, just add `about.tsx` inside `pages` and start writing the page.

By default the repo only contains two pages: a home page (`/pages/index.tsx`) and a blog page (`/pages/[blog].md`).

The file `[blog].ts` follows the Next.js convention of using square brackets to indicate a [dynamic route](https://nextjs.org/docs/routing/dynamic-routes).

## Styling

dev.lwlx.xyz is unopinionated about styling. Because your dev.lwlx.xyz site is a standard React app under the hood, you can use your favorite library from `npm` to do styling.

dev.lwlx.xyz provides certain styles by default, notably in the Markdown renderer (`/components/Markdown.tsx`). Those styles are implemented using Next's built-in styling solution `styled-jsx`. Unfortunately it was necessary to make those styles global, since `styled-jsx` [doesn't play nice](https://github.com/vercel/styled-jsx/issues/573) with third-party components (in this case `react-markdown`).

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

Just add your Google Analytics ID (e.g. 'G-999999999-1') to `globals.ts` and dev.lwlx.xyz will automatically add the appropriate Google Analytics snippet to your site. Go to `/pages/_app.ts` to see how this works or customize this behavior.


## GitHub-style code blocks

You can easily drop code blocks into your blog posts using triple-backtick syntax ([just like GitHub](https://help.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks)). No more embedding CodePen iframes! 🚀

Works out-of-the-box for all programming languages. Specify your language with a "language tag". So this:

  <pre>
  ```ts
  // pretty neat huh?
  const test = (arg: string) => {
    return arg.length > 5;
  };
  ```</pre>

turns into

```ts
// pretty neat huh?
const test = (arg: string) => {
  return arg.length > 5;
};
```

View `/components/Code.tsx` to see how this works or customize this behavior.

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

## Static generation

You can generate a fully static version of your site using `yarn build && yarn export`. This step is entirely powered by Next.js. The static site is exported to the `out` directory.

## Global configs

There is a `globals.ts` file in the project root containing some settings/configuration metadata about your site:

- `yourName`: Your name, used for the copyright tags in the footer and the RSS feed, e.g. Alyssa P. Hacker
- `siteName`: The title of your blog, e.g. `Alyssa's Cool Blog`;
- `siteDescription`: A short description, used in the `meta` description tag, e.g. 'I write about code \'n stuff';
- `siteCreationDate`: Used in the generated RSS feed. Use this format: 'March 3, 2020 04:00:00 GMT';
- `twitterHandle`: The twitter handle for you or your blog/company, used in the Twitter meta tags. Include the @ symbol, e.g. '@lawlez_';
- `email`: Your email, used as the "webMaster" and "managingEditor" field of the generated RSS feed, e.g. `alyssa@example.com`;
- `url`: The base URL of your website, used to "compute" default canonical links from relative paths, e.g. 'https://lwlx.xyz';

## RSS feed generation

An RSS feed is auto-generated from your blog post feed. This feed is generated using the `rss` module (for converting JSON to RSS format) and `showdown` for converting the markdown files to RSS-compatible HTML.

For RSS generation to work, all your posts must contain a `datePublished` timestamp in their frontmatter metadata. To examine or customize the RSS generation, check out the `rssUtil.ts` file in the root directory.

## SEO

Every blog post page automatically populated meta tags based on the post metadata. This includes a `title` tag, `meta` tags, `og:` tags, Twitter metadata, and a `link` tag containing the canonical URL.

The default value of the canonical URL is computed by concatenating the value of your `url` config (see Global Configs above) and the relative path of your post. Verify that the canonical URL is exactly equivalent to the URL in the browser when visiting your live site, otherwise your site's SEO may suffer.

## Insanely customizable

There's nothing "under the hood" here. You can view and modify all the files that provide the functionality listed above. dev.lwlx.xyz just provides a project scaffold, some Markdown-loading loading utilities (in `loader.ts`), and some sensible styling defaults (especially in `Markdown.tsx`).

To get started customizing, check out the source code of `index.tsx` (the home page), `BlogPost.tsx` (the blog post template), and `Markdown.tsx` (the Markdown renderer).

Head to the GitHub repo to get started: [https://github.com/Lawlez/dev.lwlx.xyz](https://github.com/Lawlez/dev.lwlx.xyz). If you like this project, leave a ⭐️star⭐️ to help more people find dev.lwlx.xyz 😎

# CLI

### `yarn dev`

Starts the development server. Equivalent to `next dev`.

### `yarn build`

Creates an optimized build of your site. Equivalent to `next build`.

### `yarn export`

Exports your site to static files. All files are written to `/out`. Use your static file hosting service of choice (Firebase Hosting, Amazon S3, Vercel) to deploy your site. Equivalent to `next export`.
