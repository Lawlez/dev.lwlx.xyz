export const sitemap = '';
import glob from 'glob';
import { getStaticPaths as getBlogPaths } from './pages/blog/[blog]';

export const generateSitemap = async () => {
  const pagesDir = './pages/**/*.*';
  const posts = await glob.sync(pagesDir);

  const pagePaths = posts
    .filter((path) => !path.includes('['))
    .filter((path) => !path.includes('/_'))
    .map((path) => path.slice(1));

  const blogPaths = await getBlogPaths().paths;

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
      <loc>https://dev.lwlx.xyz</loc>
      <lastmod>2020-06-01</lastmod>
  </url>
${[...pagePaths, ...blogPaths].map((path) => {
  const item = [`<url>`];
  item.push(`  <loc>https://dev.lwlx.xyz${path}</loc>`);
  item.push(`  <lastmod>2020-06-01</lastmod>`);
  return [`<url>`];
})}

    <url>
        <loc>https://dev.lwlx.xyz/essay/zod</loc>
        <lastmod>2020-03-28</lastmod>
    </url>
    <url>
        <loc>https://dev.lwlx.xyz/essay/devii</loc>
        <lastmod>2020-05-28</lastmod>
    </url>
    <url>
        <loc>https://dev.lwlx.xyz/essay/say-no-to-emotion-core</loc>
        <lastmod>2020-06-05</lastmod>
    </url>
    <url>
        <loc>https://dev.lwlx.xyz/essay/css-in-js-is-inevitable</loc>
        <lastmod>2020-06-07</lastmod>
    </url>
</urlset>`;

  return sitemap;
};
