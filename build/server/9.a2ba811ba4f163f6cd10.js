exports.ids = [9];
exports.modules = {

/***/ "TStj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: Choosing a tech stack for my personal dev blog in 2020\npublished: false\ndatePublished: 1590463136775\nauthor: Colin McDonnell\nauthorTwitter: vriad\nauthorPhoto: /profile.jpg\ntags:\n  - Static Site Generators\n  - React\n  - Next.js\nthumbnailPhoto: /pancakes_thumb.jpeg\nbannerPhoto: /pancakes.jpeg\ncanonicalUrl: https://dev.lwlx.xyz/essays/devii\n---\n\n> Originally published at [https://dev.lwlx.xyz/essays/devii](https://dev.lwlx.xyz/essays/devii). Check out the HN <del>roast</del> discussion <a href=\"https://news.ycombinator.com/item?id=23309002\">here</a>! 🤗\n\nI recently set out to build my personal website — the one you're reading now, as it happens!\n\nSurprisingly, it was much harder than expected to put together a \"tech stack\" that met my criteria. My criteria are pretty straightforward; I would expect most React devs to have a similar list. Yet it was surprisingly hard to put all these pieces together.\n\nGiven the lack of a decent out-of-the-box solution, I worry that many developers are settling for static-site generators that place limits on the interactivity and flexibility of your website. We can do better.\n\n> Clone the repo here to get started with this setup: https://github.com/Lawlez/dev.lwlx.xyz\n\nLet's quickly run through my list of design goals:\n\n### React (+ TypeScript)\n\nI want to build the site with React and TypeScript. I love them both wholeheartedly, I use them for my day job, and they're gonna be around for a long time. Plus writing untyped JS makes me feel dirty.\n\nI don't want limitations on what my personal website can be/become. Sure, at present my site consists of two simple, static blog posts. But down the road, I may want to build a page that contains an interactive visualization, a filterable table, or a demo of a React component I'm open-sourcing. Even something simple (like the email newsletter signup form at the bottom of this page) was much more pleasant to implement in React; how did we use to build forms again?\n\nPlus: I want access to the npm ecosystem and all my favorite UI, animation, and styling libraries. I sincerely hope I never write another line of raw CSS ever again; CSS-in-JS 4 lyfe baby. If you want to start a Twitter feud with me about this, by all means [at me](https://twitter.com/vriad).\n\n### Good authoring experience\n\nIf it's obnoxious to write new blog posts, I won't do it. That's a regrettable law of the universe. Even writing blog posts with plain HTML — just a bunch of `<p>` tags in a div — is just annoying enough to bug me. The answer: Markdown of course!\n\nStatic site generators (SSGs) like Hugo and Jekyll provide an undeniably wonderful authoring experience. All you have to do is `touch` a new .md file in the proper directory and get to writing. Unfortunately all Markdown-based SSGs I know of are too restrictive. Mixing React and Markdown on the same page is either impossible or tricky. If it's possible, it likely requires some plugin/module/extension, config file, blob of boilerplate, or egregious hack. Sorry Hugo, I'm not going to re-write my React code using `React.createElement` like it's 2015.\n\nWell, that doesn't work for me. I want my website to be React-first, with a sprinkling of Markdown when it makes my life easier.\n\n### Static generation\n\nAs much as I love the Jamstack, it doesn't cut it from an SEO perspective. Many blogs powered by a \"headless CMS\" require two round trips before rendering the blog content (one to fetch the static JS bundle and another to fetch the blog content from a CMS). This degrades page load speeds and user experience, which accordingly degrades your rankings on Google.\n\nInstead I want every page of my site to be pre-rendered to a set of fully static assets, so I can deploy them to a CDN and get fast page loads everywhere. You could get the same benefits with server-side rendering, but that requires an actual server and worldwide load balancing to achieve comparable page load speeds. I love overengineering things as much as the next guy, even I have a line. 😅\n\n## My solution\n\nI describe my final architecture design below, along with my rationale for each choice. I distilled this setup into a website starter/boilerplate available here: https://github.com/Lawlez/dev.lwlx.xyz. Below, I allude to certain files/functions I implemented; to see the source code of these, just clone the repo `git clone git@github.com:vriad/devii.git`\n\n### Next.js\n\nI chose to build my site with Next.js. This won't be a surprising decision to anyone who's played with statically-rendered or server-side rendered React in recent years. Next.js is quickly eating everyone else's lunch in this market, especially Gatsby's (sorry Gatsby fans).\n\nNext.js is by far the most elegant way (for now) to do any static generation or server-side rendering with React. They just released their next-generation (pun intended) static site generator in the [9.3 release](https://nextjs.org/blog/next-9-3) back in March. So in the spirit of using technologies [in the spring of their life](https://www.youtube.com/watch?v=eBAX8MbRYFA), Next.js is a no-brainer.\n\nHere's a quick breakdown of the project structure. No need to understand every piece of it; but it may be useful to refer to throughout the rest of this post.\n\n```\n.\n├── README.md\n├── public // all static files (images, etc) go here\n├── pages // every .tsx component in this dir becomes a page of the final site\n|   ├── index.tsx // the home page (which has access to the list of all blog posts)\n|   ├── blog\n|       ├── [blog].md // a template component that renders the blog posts under `/md/blog`\n├── md\n|   ├── blog\n|       ├── devii.md // this page!\n        ├── whatever.md // every MD file in this directory becomes a blog post\n├── components\n|   ├── Code.tsx\n|   ├── Markdown.tsx\n|   ├── <various others>\n├── loader.ts // contains utility functions for loading/parsing Markdown\n├── node_modules\n├── tsconfig.json\n├── package.json\n├── next.config.js\n├── next-env.d.ts\n├── .gitignore\n```\n\n<!-- Check out the Next.js documentation [here](https://nextjs.org/docs) to make sure it's the right choice for your project. -->\n\n### TypeScript + React\n\nBoth React and TypeScript are baked into the DNA of Next.js, so you get these for free when you set up a Next.js project.\n\nGatsby, on the other hand, has a special plugin for TypeScript support, but it's not officially supported and seems to be [low on their priority list](https://github.com/gatsbyjs/gatsby/issues/18983). Also, after messing with it for an hour I couldn't get it to play nice with hot reload.\n\n### Markdown authoring\n\nUsing Next's special `getStaticProps` hook and glorious [dynamic imports](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr), it's trivial to a Markdown file and pass its contents into your React components as a prop. This achieves the holy grail I was searching for: the ability to easily mix React and Markdown.\n\n#### Frontmatter support\n\nEvery Markdown file can include a \"frontmatter block\" containing metadata. I implemented a simple utility function (`loadPost`) that loads a Markdown file, parses its contents, and returns a TypeScript object with the following signature:\n\n```ts\ntype PostData = {\n  path: string; // the relative URL to this page, can be used as an href\n  content: string; // the body of the MD file\n  title?: string;\n  subtitle?: string;\n  date?: number;\n  author?: string;\n  authorPhoto?: string;\n  authorTwitter?: string;\n  tags?: string[];\n  bannerPhoto?: string;\n  thumbnailPhoto?: string;\n};\n```\n\nI implemented a separate function `loadPosts` that loads _all_ the Markdown files under `/md/blog` and returns them as an array (`PostData[]`). I use `loadPosts` on this site's home page to render a list of all posts I've written.\n\n### Medium-inspired design\n\nI used the wonderful [`react-markdown`](https://github.com/rexxars/react-markdown) package to render Markdown as a React component. My Markdown rendered component (`/components/Markdown.tsx`) provides some default styles inspired by Medium's design. Just modify the `style` pros in `Markdown.tsx` to customize the design to your liking.\n\n### GitHub-style code blocks\n\nYou can easily drop code blocks into your blog posts using triple-backtick syntax. Specify the programming language with a \"language tag\", [just like GitHub](https://help.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks)!\n\nTo achieve this I implemented a custom `code` renderer (`/components/Code.tsx`) for `react-markdown` that uses [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter#readme) to handle the highlighting. So this:\n\n<!-- I landed on this solution after wasting hours playing with other options. CodeMirror has bad React support (the only React wrapper for it is inauspiciously named `react-codemirror2`) and [bizarre selection issues](https://github.com/codemirror/CodeMirror/issues/1099) for `readonly` code blocks. The popular `highlight.js` project requires you to [initialize the library](https://github.com/highlightjs/highlight.js/issues/925) in `componentDidMount` like its 2015 :/  -->\n\n<pre>\n```ts\n// pretty neat huh?\nconst test = (arg: string) => {\n  return arg.length > 5;\n};\n```</pre>\n\nturns into this:\n\n```ts\n// pretty neat huh?\nconst test = (arg: string) => {\n  return arg.length > 5;\n};\n```\n\n### RSS feed generation\n\nAn RSS feed is auto-generated from your blog post feed. This feed is generated using the `rss` module (for converting JSON to RSS format) and `showdown` for converting the markdown files to RSS-compatible HTML. The feed is generated during the build step and written as a static file to `/rss.xml` in your static assets folder. It's dead simple. That's the joy of being able to easily write custom build scripts on top of Next.js's `getStaticProps` hooks!\n\n### SEO\n\nEvery blog post page automatically populated meta tags based on the post metadata. This includes a `title` tag, `meta` tags, `og:` tags, Twitter metadata, and a `link` tag containing the canonical URL. You can modify/augment this in the `PostMeta.ts` component.\n\n### Static generation\n\nYou can generate a fully static version of your site using `yarn build && yarn export`. This step is entirely powered by Next.js. The static site is exported to the `out` directory.\n\nAfter its generated, use your static file hosting service of choice (Firebase Hosting, Vercel, Netlify) to deploy your site.\n\n### Insanely customizable\n\nThere's nothing \"under the hood\" here. You can view and modify all the files that provide the functionality described above. dev.lwlx.xyz just provides a project scaffold, some Markdown-loading loading utilities (in `loader.ts`), and some sensible styling defaults (especially in `Markdown.tsx`).\n\nTo start customizing, modify `index.tsx` (the home page), `Essay.tsx` (the blog post template), and `Markdown.tsx` (the Markdown renderer).\n\n## Get started\n\nHead to the GitHub repo to get started: [https://github.com/Lawlez/dev.lwlx.xyz](https://github.com/Lawlez/dev.lwlx.xyz). If you like this project, leave a ⭐️star⭐️ to help more people find dev.lwlx.xyz! 😎\n\nTo jump straight into the code, clone the repo and start the development server like so:\n\n```sh\ngit clone git@github.com:vriad/devii.git mysite\ncd mysite\nyarn\nyarn dev\n```\n");

/***/ })

};;