import Head from "next/head";
import { PostCard } from "../components/PostCard";
import { globals } from "../globals";

const sectionStyle = {
  width: "100%",
  padding: "100px 3vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const OSINT = ({ posts = [] }) => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Head>
        <title>Introducing dev.lwlx.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={sectionStyle}>
        <h2
          style={{
            margin: "4px 0px",
            fontSize: "34pt",
          }}
        >
          CyberSecurity and Information Security posts
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            gridRowGap: "8px",
            gridColumnGap: "8px",
            width: "100%",
            padding: "0px 7vw",
          }}
        >
          {posts.map((post, key) => {
            let isCyberSecPost = false;
            if (post && post.tags) {
              post.tags.forEach((tag) => {
                if (
                  tag === "security" ||
                  tag === "cybersecurity" ||
                  tag === "appsec"
                ) {
                  isCyberSecPost = true;
                }
              });
              if (isCyberSecPost) {
                return <PostCard key={key} post={post} />;
              }
              return;
            }
            return `the post ${post.title} has no tags defined`;
          })}
        </div>
      </div>

      <div style={sectionStyle}>
        <h2
          style={{
            margin: "4px 0px",
            fontSize: "34pt",
          }}
        >
          OSINT
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            gridRowGap: "8px",
            gridColumnGap: "8px",
            width: "100%",
            padding: "0px 7vw",
          }}
        >
          {posts.map((post, key) => {
            let isDevPost = false;
            if (post && post.tags) {
              post.tags.forEach((tag) => {
                if (tag === "osint" || tag === "socialengineering") {
                  isDevPost = true;
                }
              });
              if (isDevPost) {
                return <PostCard key={key} post={post} />;
              }
              return;
            }
            return `the post ${post.title} has no tags defined`;
          })}
        </div>
      </div>

      <div style={{ ...sectionStyle }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "34pt",
          }}
        >
          Open Source Security & Dev Blog
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "960px",
            margin: "auto",
            lineHeight: 1.7,
          }}
        >
          dev.lwlx.xyz is a blog focused on Cybersecurity and the occasional
          code project.
        </p>
        <br />
        <a href="https://github.com/Lawlez/" style={{ cursor: "pointer" }}>
          <button
            style={{
              padding: "10px 30px",
              backgroundColor: globals.primaryColor,
              color: "white",
              fontSize: "14pt",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            @Lawlez on GitHub
          </button>
        </a>
        <br />
        <a href="https://twitter.com/0x0000005" style={{ cursor: "pointer" }}>
          <button
            style={{
              padding: "10px 30px",
              backgroundColor: globals.secondaryColor,
              color: "white",
              fontSize: "14pt",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            @0x0000005 on twitter
          </button>
        </a>
      </div>
    </div>
  );
};

export default OSINT;
