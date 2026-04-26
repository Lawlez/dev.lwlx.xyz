import { loadBlogPosts } from '../loader'
import { HomeContent } from './HomeContent'

export default function Home() {
  const posts = loadBlogPosts()

  return <HomeContent posts={posts} />
}
