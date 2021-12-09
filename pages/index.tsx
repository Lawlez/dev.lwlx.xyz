import Head from 'next/head'
import dynamic from 'next/dynamic'
import { PostData, loadBlogPosts } from '../loader'
//import { generateRSS } from "../rssUtil";
import { globals } from '../globals'
import { Box } from '@mui/system'
import Masonry from '@mui/lab/Masonry'

const MaterialPostCard = dynamic(import('@components/MaterialPostCard'))

const Home = (props: { introduction: string; posts: PostData[] }) => {
  return (
    <Box width='100%'>
      <Head>
        <title>dev.lwlx.xyz | Cybersecurity & Developer blog</title>
        <meta
          name='description'
          content='dev.lwlx.xyz publishes articles and research about Cybersecurity, DevOps, Development or just general IT nonsense. '
        />
        <meta
          property='og:image'
          content={`https://dev.lwlx.xyz/lwlzcolors-lawlez-sm.jpg`}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box
        width='100%'
        padding='100px 3vw'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <h2
          style={{
            margin: '4px 0px',
            fontSize: '32pt',
          }}
        >
          newest posts
        </h2>
        <Box sx={{ width: '100%' }}>
          <Masonry columns={3} spacing={4} >
            {props.posts.map((post, key) => {
              if (post && post.tags) {
                if (key <= 10) {
                  return <MaterialPostCard key={key} post={post} />
                }
                return
              }
              return `the post ${post.title} has no tags defined`
            })}
          </Masonry>
        </Box>
      </Box>
      <Box
        width='100%'
        padding='100px 3vw'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <h2
          style={{
            margin: '4px 0px',
            fontSize: '32pt',
          }}
        >
          All Posts
        </h2>
        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            gridRowGap: '8px',
            gridColumnGap: '8px',
            width: '100%',
            padding: '0px 7vw',
          }}
        >
          {props.posts.map((post, key) => {
            return <MaterialPostCard key={key} post={post} />
          })}
        </Box>
      </Box>

      <Box
        width='100%'
        padding='100px 3vw'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '34pt',
          }}
        >
          Open Source Security & Dev Blog
        </h2>
        <p
          style={{
            textAlign: 'center',
            maxWidth: '960px',
            margin: 'auto',
            lineHeight: 1.7,
          }}
        >
          dev.lwlx.xyz is a blog focused on Cybersecurity and the occasional code project.
        </p>
        <br />
        <a href='https://twitter.com/0x0000005' style={{ cursor: 'pointer' }}>
          <button
            style={{
              padding: '10px 30px',
              backgroundColor: globals.secondaryColor,
              color: 'white',
              fontSize: '14pt',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            @0x0000005 on twitter
          </button>
        </a>
      </Box>
    </Box>
  )
}

export default Home

export const getStaticProps = async () => {
  //const introduction = await loadMarkdownFile('introduction.md');
  const posts = await loadBlogPosts()

  // comment out to turn off RSS generation during build step.
  //await generateRSS(posts);

  const props = {
    introduction: 'empty for now :)', //introduction.contents,
    posts,
  }

  return { props }
}
