'use client'

import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Collapse,
  CardActions,
  IconButton,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { PostData } from '../loader'
import { Tag } from './Tag'

const MaterialPostCard: React.FC<{ post: PostData }> = ({ post }) => {
  const [expanded, setExpanded] = React.useState(false)
  const [liked, setLiked] = React.useState(false)

  // Defer localStorage read to client-side only, after mount
  React.useEffect(() => {
    const stored = localStorage.getItem(`liked-${post.path}`)
    if (stored === 'true') setLiked(true)
  }, [post.path])

  const handleExpandClick = () => setExpanded(!expanded)

  const sharePost = (post: PostData) => {
    if (typeof window !== 'undefined') {
      console.log('not yet implemented ' + post.path)
    }
  }

  const likePost = (postId: string) => {
    setLiked(true)
    localStorage.setItem(`liked-${postId}`, 'true')
  }

  const dateStr = post.datePublished
    ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(post.datePublished))
    : ''

  // Always render the card — don't return null while waiting for useEffect
  return (
    <Card
      sx={{
        borderRadius: '16px',
        marginBottom: 1,
        height: 'auto',
        background: '#141414',
        boxShadow: '9px 9px 16px rgb(4,4,4,0.6), -9px -9px 16px  rgba(48,48,48, 0.5)',
      }}
    >
      <CardActionArea component='a' href={`/${post.path}/`}>
        {post.thumbnailPhoto && (
          <CardMedia
            sx={{ minHeight: 160, maxHeight: 260 }}
            image={post.thumbnailPhoto}
            title={post.title}
          />
        )}
        <CardContent>
          {post.title && <Typography variant='h6'>{post.title}</Typography>}
          {post.subtitle && <Typography variant='subtitle1'>{post.subtitle}</Typography>}
          <Divider />
          <p style={{ opacity: 0.42, textAlign: 'center', margin: '0px' }}>
            published&nbsp;{dateStr}
          </p>
          <div style={{ marginTop: '8px' }}>
            {post.tags &&
              (post.tags || []).map((tag, key) => <Tag key={key} tag={tag} />)}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <IconButton
          aria-label='add to favorites'
          size='small'
          onClick={() => likePost(post.path)}
        >
          <FavoriteIcon color={liked ? 'error' : 'inherit'} />
        </IconButton>
        <IconButton aria-label='share' size='small' onClick={() => sharePost(post)}>
          <ShareIcon />
        </IconButton>
        {post.description && (
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <IconButton
              sx={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                marginLeft: 'auto',
                transition: 'transform 0.15s ease-in-out',
              }}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
              size='small'
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        )}
      </CardActions>
      {post.description && (
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography variant='subtitle2' sx={{ mb: 2 }} color='textSecondary'>
                {post.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Box>
      )}
    </Card>
  )
}

export default MaterialPostCard
