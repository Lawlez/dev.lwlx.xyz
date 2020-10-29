import React from 'react';
import { globals } from '../globals';

export const Footer: React.FC = () => (
  <div
    style={{
      top: 0,
      width: '100%',
      height: '56px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: globals.accentColor,
      color: globals.secondaryColor,
      padding: '32px',
      fontSize: '12pt',
    }}
  >
    <p>{`© ${globals.yourName} ${new Date().getFullYear()}`}</p>
    <a href="/rss.xml">
      <img src="/rss-white.svg" alt="RSS Feed" height="24" width="24" />
    </a>
  </div>
);
