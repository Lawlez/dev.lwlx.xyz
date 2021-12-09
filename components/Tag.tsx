import React from 'react'
import Box from '@mui/material/Box'

export const Tag: React.FC<{ tag: string }> = props => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        padding: '1px 10px 2px',
        borderRadius: 10,
        color: '#1177ABff',
        marginRight: 1,
        marginBottom: 1,
        fontSize: '10pt',
        background: '#141414',
        boxShadow: "4px 4px 8px rgb(4,4,4,0.6), -4px -4px 8px  rgba(58,58,58, 0.5)",
        ":hover": {
        background: '#141414',
        boxShadow: "4px 4px 4px  rgb(12,12,12,0.6), -4px -4px 4px rgba(28,28,28, 0.5)",
        },
        transition: 'all 0.2s ease-in-out',
      }}
    >
      {props.tag}
    </Box>
  )
}
