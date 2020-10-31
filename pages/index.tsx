import Head from 'next/head';
import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
import { globals } from '../globals';

const sectionStyle = {
  width: '100%',
  padding: '100px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as const;

const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Head>
        <title>Introducing dev.lwlx.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={sectionStyle}>
        <h2
          style={{
            margin: '4px 0px',
            fontSize: '34pt',
          }}
        >
          recent posts
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            gridRowGap: '8px',
            gridColumnGap: '8px',
            width: '100%',
            padding: '0px 7vw',
          }}
        >
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>

      <div style={{ ...sectionStyle }}>
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
        <br/>
        <a href="https://github.com/Lawlez/" style={{ cursor: 'pointer' }}>
          <button
            style={{
              padding: '10px 30px',
              backgroundColor: globals.primaryColor,
              color: 'white',
              fontSize: '14pt',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            @Lawlez on GitHub
          </button>
        </a>
<br />
        <a href="https://twitter.com/0x0000005" style={{ cursor: 'pointer' }}>
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
      </div>

      <div style={sectionStyle}>
        <h2
          style={{
            margin: '4px 0px',
            fontSize: '22pt',
            paddingBottom: '30px',
          }}
        >
          this is still a work  in  progress . . .
        </h2>
        <a href="https://github.com/Lawlez/dev.lwlx.xyz" style={{ cursor: 'pointer' }}>
          <button
            style={{
              padding: '10px 30px',
              backgroundColor: globals.primaryColor,
              color: 'white',
              fontSize: '14pt',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            check dev.lwlx.xyz on GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile('introduction.md');
  const features = await loadMarkdownFile('features.md');
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    introduction: introduction.contents,
    features: features.contents,
    readme: readme,
    posts,
  };

  return { props };
};
