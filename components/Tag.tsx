import React from "react";

export const Tag: React.FC<{ tag: string }> = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "1px 10px 2px",
        borderRadius: 10,
        backgroundColor: "#1177ABff",
        color: "#fff",
        marginRight: 8,
        marginBottom: 4,
        fontSize: "10pt",
      }}
    >
      {props.tag}
    </div>
  );
};
