import React from "react";
import { PostData } from "../loader";
import { Tag } from "./Tag";
import Box from '@mui/material/Box'

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  const dateStr = post.datePublished
    ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(post.datePublished))
    : '';

  return (
    <Box component="a"
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
      <Box
        sx={{
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
          <Box
            sx={{
              background: `url(${post.thumbnailPhoto}) no-repeat center center`,
              backgroundSize: "cover",
              width: "100%",
              flex: 1,
            }}
          />
        )}
        <Box
          sx={{
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
            <Box component="p"
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
            </Box>
          )}
          <Box
            sx={{
              width: "100%",
              height: 1,
              margin: "6px 0px",
              backgroundColor: "#000",
              opacity: 0.23,
            }}
          />
          <Box component="p" style={{ opacity: 0.42, textAlign: "center", margin: "0px" }}>
            published&nbsp;{dateStr}
          </Box>
          <Box sx={{ flex: 1 }}></Box>
          <Box sx={{ marginTop: "8px"}}>
            {post.tags &&
              (post.tags || []).map((tag, key) => <Tag key={key} tag={tag} />)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
