import React from 'react'
import { PostData } from '../loader'
import { globals } from '../globals'
import Image from './atoms/Image'

export const Author: React.FC<{ post: PostData }> = props => {
  const dateStr = props.post.datePublished
    ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(props.post.datePublished))
    : ''

  return (
    <div
      style={{
        fontFamily: 'Fira Code',
        margin: '0px',
        padding: '0px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {props.post.authorPhoto && (
          <Image
            src={props.post.authorPhoto}
            alt={props.post.author || 'Author'}
            width={64}
            height={64}
            style={{
              background: '#141414',
              boxShadow: '6px 6px 8px rgb(4,4,4,0.6), -6px -6px 8px  rgba(48,48,48, 0.5)',
              width: '64px',
              height: '64px',
              borderRadius: '34px',
              margin: '0px 8px 0px 0px',
            }}
          />
        )}
        <AuthorLines post={props.post} dateStr={dateStr} />
      </div>
    </div>
  )
}

export const AuthorLines: React.FC<{ post: PostData; dateStr: string }> = ({ post, dateStr }) => {
  const lineStyle: React.CSSProperties = {
    margin: '2px',
    padding: 0,
    lineHeight: 1.2,
    fontSize: '11pt',
  }
  return (
    <div>
      <p style={{ ...lineStyle }}>{post.author ? post.author : ''}</p>
      <p style={{ opacity: 0.6, ...lineStyle }}>
        {dateStr}
      </p>
      <p style={{ ...lineStyle }}>
        {post.authorTwitter && (
          <a
            style={{
              textDecoration: 'none',
              color: globals.primaryColor,
            }}
            href={`https://twitter.com/${post.authorTwitter}`}
          >{`@${post.authorTwitter}`}</a>
        )}
      </p>
    </div>
  )
}
