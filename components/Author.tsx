import React from "react";
import { format } from "fecha";
import { PostData } from "../loader";
import { globals } from "../globals";
import Image from "./Image";

export const FollowButton = () => {
  return (
    <a href="/newsletter">
      <div
        style={{
          display: "inline-block",
          border: `1px solid ${globals.accentColor}`,
          borderRadius: "4px",
          padding: "2px 10px",
          color: globals.accentColor,
          fontSize: "10pt",
          marginBottom: "2px",
          marginLeft: "4px",
        }}
      >
        Follow
      </div>
    </a>
  );
};

export const Author: React.FC<{ post: PostData }> = (props) => {
  return (
    <div
      style={{
        fontFamily: "Fira Code",
        margin: "0px",
        padding: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {props.post.authorPhoto && (
          <Image
            src={props.post.authorPhoto}
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "34px",
              margin: "0px 8px 0px 0px",
            }}
          />
        )}
        <AuthorLines post={props.post} />
      </div>
    </div>
  );
};

export const AuthorLines: React.FC<{ post: PostData }> = (props) => {
  const lineStyle = {
    margin: "2px",
    padding: 0,
    lineHeight: 1.2,
    fontSize: "11pt",
  };
  return (
    <div>
      <p style={{ ...lineStyle }}>
        {props.post.author ? props.post.author : ""}
      </p>
      <p style={{ opacity: 0.6, ...lineStyle }}>
        {props.post.datePublished
          ? format(new Date(props.post.datePublished), "DD. MMMM YYYY")
          : ""}
      </p>
      <p style={{ ...lineStyle }}>
        {props.post.authorTwitter && (
          <a
            style={{
              textDecoration: "none",
              color: globals.primaryColor,
            }}
            href={`https://twitter.com/${props.post.authorTwitter}`}
          >{`@${props.post.authorTwitter}`}</a>
        )}
      </p>
    </div>
  );
};
