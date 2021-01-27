import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const converted = {
  'pre[class*="language-"], code[class*="language-"]': {
    color: "#C9C0BE",
    fontSize: "0.95em",
    textShadow: "none",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: 1.5,
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: 4,
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]::selection, code[class*="language-"]::selection, pre[class*="language-"]::mozselection, code[class*="language-"]::mozselection': {
    textShadow: "none",
    background: "#b3d4fc",
  },
  "@media print": {
    'pre[class*="language-"],   code[class*="language-"]': {
      textShadow: "none",
    },
  },
  'pre[class*="language-"]': {
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    background: "#04060a",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: ".1em .3em",
    borderRadius: ".3em",
    color: "#C9C0BE",
    background: "#f07693",
  },
  namespace: { opacity: 0.8 },
  comment: { color: "#4e5c63" },
  prolog: { color: "#4e5c63" },
  doctype: { color: "#4e5c63" },
  cdata: { color: "#4e5c63" },
  punctuation: { color: "#999999" },
  property: {
    color: "#4499ee",
  },
  tag: {
    color: "#4499ee",
  },
  boolean: {
    color: "#4499ee",
  },
  number: {
    color: "#4499ee",
  },
  constant: {
    color: "#4499ee",
  },
  symbol: {
    color: "#4499ee",
  },
  deleted: {
    color: "#4499ee",
  },
  selector: {
    color: "#f07693",
  },
  "attr-name": {
    color: "#f07693",
  },
  char: {
    color: "#f07693",
  },
  builtin: {
    color: "#f07693",
  },
  inserted: {
    color: "#f07693",
  },
  operator: {
    color: "#c9c0be",
    background: "#000000",
  },
  entity: {
    color: "#c9c0be",
    background: "#000000",
    cursor: "help",
  },
  url: {
    color: "#c9c0be",
    background: "#000000",
    textDecoration: "underline",
  },
  "language-css": {
    color: "#c9c0be",
    background: "#000000",
  },
  string: {
    color: "#c9c0be",
    background: "#000000",
  },
  style: {
    color: "#c9c0be",
    background: "#000000",
  },
  atrule: { color: "#1177ab" },
  "attr-value": { color: "#1177ab" },
  keyword: { color: "#1177ab" },
  function: { color: "#c7526d" },
  regex: { color: "#ee9900" },
  important: { color: "#ee9900", fontWeight: "bold" },
  variable: { color: "#ee9900" },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  "pre[data-line]": { position: "relative" },
  'pre[class*="language-"] > code[class*="language-"]': {
    position: "relative",
    zIndex: 1,
  },
  ".line-highlight": {
    position: "absolute",
    left: "0",
    right: "0",
    padding: "inherit 0",
    marginTop: "1em",
    background: "#222222",
    boxShadow: "inset 5px 0 0 #f07693",
    zIndex: 0,
    pointerEvents: "none",
    lineHeight: "inherit",
    whiteSpace: "pre",
  },
  "code > span": {
    color: "#C9C0BE",
  },
};

export default class Code extends React.PureComponent<{
  language: string;
  value?: string;
}> {
  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter
        language={language ? language : "jsx"}
        style={converted}
        showLineNumbers
        wrapLines={true}
        codeTagProps={{
          style: {
            backgroundColor: "transparent",
            color: "#C9C0BE",
            width: "1024px",
          },
        }}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}
