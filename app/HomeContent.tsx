'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { PostData } from '../loader'
import { globals } from '../globals'
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry'

const MaterialPostCard = dynamic(() => import('../components/MaterialPostCard'), { ssr: false })

export const HomeContent: React.FC<{ posts: PostData[] }> = ({ posts }) => {
  return (
    <Box width='100%'>
      <Box
        width='100%'
        padding='100px 3vw'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <h2
          style={{
            margin: '4px 0px',
            fontSize: '32pt',
          }}
        >
          newest posts
        </h2>
        <Box sx={{ width: '100%', left: 24, position: 'relative', marginTop: 8 }}>
          <Masonry columns={{xs:1, sm: 2, md:3, xl: 4}} spacing={6} style={{
            flexFlow: 'wrap',
          }}>
            {posts.map((post, key) => {
              if (post && post.tags) {
                if (key <= 20) {
                  return <MaterialPostCard key={key} post={post} />
                }
                return
              }
              return `the post ${post.title} has no tags defined`
            })}
          </Masonry>
        </Box>
      </Box>
      <Box
        width='100%'
        padding='32px 3vw'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
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
        <br />
        <a href='https://twitter.com/0x0000005' style={{ cursor: 'pointer' }}>
          <button
            style={{
              boxShadow:
                '9px 9px 12px rgb(4,4,4,0.6), -9px -9px 12px  rgba(68,68,68, 0.5)',
              padding: '10px 30px',
              backgroundColor: '#141414',
              color: globals.secondaryColor,
              fontSize: '14pt',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, rgb(12,12,12,0.6), rgba(28,28,28, 0.5))',
            }}
          >
            @0x0000005 on twitter
          </button>
        </a>
      </Box>
    </Box>
  )
}
