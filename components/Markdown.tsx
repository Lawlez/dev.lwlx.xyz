import React from 'react'
import { globals } from '../globals'

/**
 * Renders pre-processed HTML content from the unified markdown pipeline.
 * Preserves all original .lwlx-markdown CSS styling.
 */
export const Markdown: React.FC<{ html: string }> = ({ html }) => {
  return (
    <>
      <div
        className='lwlx-markdown'
        style={{ width: '100%' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <style>{`
        .lwlx-markdown p,
        .lwlx-markdown li {
          line-height: 32px;
          font-size: 16px;
          color: #ccc;
          overflow-wrap: break-word;
        }

        .lwlx-markdown h1,
        .lwlx-markdown h2,
        .lwlx-markdown h3,
        .lwlx-markdown h4,
        .lwlx-markdown h5,
        .lwlx-markdown h6 {
          margin: 0px;
          padding: 0px;
        }

        .lwlx-markdown h1 > a,
        .lwlx-markdown h2 > a,
        .lwlx-markdown h3 > a,
        .lwlx-markdown h4 > a,
        .lwlx-markdown h5 > a,
        .lwlx-markdown h6 > a {
          text-decoration: underline;
          color: #f07693;
        }

        .lwlx-markdown hr {
          margin: 20px 0px;
          opacity: 0.35;
        }

        .lwlx-markdown h1 {
          font-size: 1.5em;
          line-height: 56px;
          padding-top: 30px;
          padding-bottom: 10px;
          margin-top: 30px;
          margin-bottom: 30px;
        }

        .lwlx-markdown h2 {
          font-size: 1.3em;
          padding-top: 25px;
          padding-bottom: 10px;
          margin-top: 25px;
          margin-bottom: 25px;
        }

        .lwlx-markdown h3 {
          font-size: 1.2em;
          padding-top: 20px;
          padding-bottom: 10px;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .lwlx-markdown h4 {
          font-size: 1em;
          padding-top: 15px;
          padding-bottom: 10px;
          margin-top: 15px;
          margin-bottom: 15px;
        }

        .lwlx-markdown h5 {
          padding-top: 10px;
          padding-bottom: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .lwlx-markdown h6 {
          padding-top: 5px;
          padding-bottom: 10px;
          margin-top: 5px;
          margin-bottom: 5px;
        }

        .lwlx-markdown p {
          padding: 10px 0px;
          margin: 10px 0px;
        }

        .lwlx-markdown li {
          padding: 10px 0px;
        }

        .lwlx-markdown img {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0px 4px 30px #00000040;
        }

        .lwlx-markdown code {
          font-family: 'Fira Code', monospace;
          background-color: #f07693f0;
          color: #222;
          padding: 2px 2px;
          border-radius: 2px;
          font-size: 13px;
        }

        .lwlx-markdown pre {
          margin: 12px 0px !important;
          padding: 1em;
          overflow: auto;
          border-radius: 12px;
          background: #121212;
          box-shadow: 9px 9px 13px rgba(48,48,48, 0.5), -9px -9px 12px rgb(4,4,4,0.6);
        }

        .lwlx-markdown pre code {
          background-color: transparent;
          color: #C9C0BE;
          padding: 0;
          border-radius: 0;
          font-size: 0.95em;
          line-height: 1.5;
        }

        .lwlx-markdown ol pre,
        .lwlx-markdown ol p {
          margin: 0px 0px !important;
        }

        .lwlx-markdown blockquote {
          margin: 0px;
          padding-left: 1em;
          border-left: 4px solid ${globals.secondaryColor};
        }

        .lwlx-markdown table {
          padding: 4px;
          background: rgba(0, 0, 0, 0.02);
        }
        .lwlx-markdown table code {
          background-color: #f07693f0;
          color: #222;
          padding: 2px 2px;
          border-radius: 4px;
          font-size: 1em;
          line-height: 1.8em;
        }
        .lwlx-markdown tbody td {
          padding: 12px;
          border-top: solid 1px #00000020;
        }

        .lwlx-markdown thead td,
        .lwlx-markdown thead th {
          padding: 8px;
          background: #f07693;
          font-size: 16px;
        }

        a {
          text-decoration: underline;
          color: #f07693;
        }

        /* rehype-pretty-code: line numbers */
        .lwlx-markdown pre [data-line] {
          padding: 0 1em;
        }
        .lwlx-markdown pre [data-line-numbers] [data-line]::before {
          counter-increment: line;
          content: counter(line);
          display: inline-block;
          width: 1rem;
          margin-right: 1.5rem;
          text-align: right;
          color: #4e5c63;
        }
        .lwlx-markdown pre [data-line-numbers] {
          counter-reset: line;
        }

        /* rehype-pretty-code: code block titles */
        .lwlx-markdown figcaption[data-rehype-pretty-code-title] {
          padding: 0.5em 1em;
          background: #0a0a0a;
          border-radius: 12px 12px 0 0;
          color: #f07693;
          font-size: 0.85em;
          font-family: 'Fira Code', monospace;
        }
        .lwlx-markdown figcaption[data-rehype-pretty-code-title] + pre {
          border-radius: 0 0 12px 12px;
          margin-top: 0 !important;
        }

        @media only screen and (min-width: 768px) {
          .lwlx-markdown code {
            background-color: #f07693f0;
            color: #222;
            padding: 3px 3px;
            border-radius: 2px;
            font-size: 16px;
          }

          .lwlx-markdown pre code {
            background-color: transparent;
            color: #C9C0BE;
            padding: 0;
            border-radius: 0;
            font-size: 16px;
          }

          .lwlx-markdown h1 {
            font-size: 46px;
            line-height: 56px;
            padding-top: 30px;
            padding-bottom: 10px;
            margin-top: 30px;
            margin-bottom: 30px;
          }

          .lwlx-markdown h2 {
            padding-top: 25px;
            padding-bottom: 10px;
            margin-top: 25px;
            margin-bottom: 25px;
          }

          .lwlx-markdown h3 {
            padding-top: 20px;
            padding-bottom: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .lwlx-markdown h4 {
            padding-top: 15px;
            padding-bottom: 10px;
            margin-top: 15px;
            margin-bottom: 15px;
          }

          .lwlx-markdown h5 {
            padding-top: 10px;
            padding-bottom: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
          }

          .lwlx-markdown h6 {
            padding-top: 5px;
            padding-bottom: 10px;
            margin-top: 5px;
            margin-bottom: 5px;
          }

          .lwlx-markdown p {
            padding: 10px 0px;
            margin: 10px 0px;
          }
        }
      `}</style>
    </>
  )
}
