import React from 'react'

export const Tag: React.FC<{ tag: string }> = (props) => {
  return (
    <div
      style={{
        display: 'inline-block',
        padding: '3px 12px',
        borderRadius: 20,
        backgroundColor: '#1177ABff',
        color: '#fff',
        marginRight: 8,
        marginBottom: 8,
      }}
    >
      {props.tag}
    </div>
  )
}
