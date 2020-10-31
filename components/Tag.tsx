import React from 'react';

export const Tag: React.FC<{ tag: string }> = (props) => {
  return (
    <div
      style={{
        display: 'inline-block',
        padding: '3px 12px',
        borderRadius: 20,
        backgroundColor: '#dddddd',
        color: '#333333',
        marginRight: 8,
        marginBottom: 8,
        boxShadow: '0px 1px 1px #00000030',
      }}
    >
      {props.tag}
    </div>
  );
};
