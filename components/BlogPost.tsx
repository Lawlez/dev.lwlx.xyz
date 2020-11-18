import React from "react";
import { Markdown } from "./Markdown";
import { PostData } from "../loader";
import { PostMeta } from "./PostMeta";
import { Author } from "./Author";
import { globals } from "../globals";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        padding: "0px 0px 100px 0px",
      }}
    >
      <style jsx global>{`
        .blog-post {
          width: 100%;
          max-width: 1080px;
        }
      `}</style>
      <PostMeta post={post} />
      <div className="blog-post">
        {post.bannerPhoto && (
          <img
            style={{
              width: "100%",
              maxWidth: "100%",
              margin: "0px",
            }}
            src={post.bannerPhoto}
          />
        )}
        <div style={{ padding: "50px 3vw 50px 3vw" }}>
          {title && (
            <h1
              style={{
                margin: "10px 0px 10px 0px",
                padding: 0,
                border: "none",
                fontSize: 46,
              }}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <h2
              style={{
                margin: "10px 0px",
                padding: 0,
                border: "none",
                fontWeight: 400,
                opacity: "0.6",
              }}
            >
              {subtitle}
            </h2>
          )}
          <hr
            style={{
              height: "2px",
              background: globals.primaryColor,
              margin: "25px 0px",
              border: "none",
              borderRadius: 1,
            }}
          />
          <Author post={post} />
        </div>

        <div style={{ width: "100%", padding: "0px 3vw" }}>
          <Markdown source={post.content} />
        </div>
      </div>
    </div>
  );
};
