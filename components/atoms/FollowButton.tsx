import React from 'react'
import Box from '@mui/material/Box'
import { globals } from '../../globals'

const FollowButton: React.FC = () => {
  return (
    <a href='/newsletter'>
      <Box
        sx={{
          display: 'inline-block',
          border: `1px solid ${globals.accentColor}`,
          borderRadius: '4px',
          padding: '2px 10px',
          color: globals.accentColor,
          fontSize: '10pt',
          marginBottom: '2px',
          marginLeft: '4px',
        }}
      >
        Follow
      </Box>
    </a>
  )
}

export default FollowButton
