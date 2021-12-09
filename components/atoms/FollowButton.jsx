import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { globals } from 'globals'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    border: `1px solid ${globals.accentColor}`,
    borderRadius: '4px',
    padding: '2px 10px',
    color: globals.accentColor,
    fontSize: '10pt',
    marginBottom: '2px',
    marginLeft: '4px',
  },
})

const FollowButton = () => {
  const classes = useStyles()
  return (
    <a href='/newsletter'>
      <div className={classes.root}>Follow</div>
    </a>
  )
}

export default FollowButton
