import React from 'react'
import Box from '@mui/material/Box'

export const Tag: React.FC<{ tag: string }> = props => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        padding: '1px 10px 2px',
        borderRadius: 10,
        backgroundColor: '#1177ABff',
        color: '#fff',
        marginRight: 1,
        marginBottom: 1,
        fontSize: '10pt',
      }}
    >
      {props.tag}
    </Box>
  )
}
