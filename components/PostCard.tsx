import React from "react";
import { format } from "fecha";
import { PostData } from "../loader";
import { Tag } from "./Tag";

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <a
      href={`/${post.path}`}
      style={{
        textDecoration: "inherit",
        color: "inherit",
        margin: "8px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "320px",
      }}
    >
      <div
        style={{
          opacity: 1,
          boxShadow: "0px 2px 8px #00000040",
          width: "100%",
          maxWidth: "680px",
          minWidth: 256,
          overflow: "hidden",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "#fff",
        }}
      >
        {post.thumbnailPhoto && (
          <div
            style={{
              background: `url(${post.thumbnailPhoto}) no-repeat center center`,
              backgroundSize: "cover",
              width: "100%",
              flex: 1,
            }}
          />
        )}
        <div
          style={{
            padding: "14px 8px",
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid #00000020",
          }}
        >
          {post.title && (
            <h2
              style={{
                margin: "0px 0px 8px 0px",
                fontSize: "14pt",
                fontWeight: 600,
                padding: "2px 4px",
                textAlign: "center",
              }}
            >
              {post.title}
            </h2>
          )}
          {true && post.subtitle && (
            <p
              style={{
                margin: "0px 8px",
                padding: "0px",
                fontSize: "13pt",
                fontWeight: 400,
                color: "#333333",
                textAlign: "center",
              }}
            >
              {post.subtitle}
            </p>
          )}
          <div
            style={{
              width: "100%",
              height: 1,
              margin: "6px 0px",
              backgroundColor: "#000",
              opacity: 0.23,
            }}
          />
          <p style={{ opacity: 0.42, textAlign: "center", margin: "0px" }}>
            published&nbsp;
            {props.post.datePublished
              ? format(new Date(props.post.datePublished), "MMMM Do, YYYY")
              : ""}
          </p>
          <div style={{ flex: 1 }}></div>
          <div style={{ marginTop: "8px" }}>
            {post.tags &&
              (post.tags || []).map((tag, key) => <Tag key={key} tag={tag} />)}
          </div>
        </div>
      </div>
    </a>
  );
};
