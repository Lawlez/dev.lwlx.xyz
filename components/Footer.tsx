import React from 'react'
import { globals } from '../globals'

const date = new Date().getFullYear()
export const Footer: React.FC = () => {
  const [loaded, setIsLoaded] = React.useState(false)
  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  const badge = () => {
    const html = loaded
      ? window.atob(
          'PGRpdiBzdHlsZT0id2lkdGg6IDIyMHB4OyBoZWlnaHQ6NTBweDsgYmFja2dyb3VuZC1jb2xvcjogIzM0M2M0MTsgYm9yZGVyLXJhZGl1czo0cHg7IHRleHQtYWxpZ246IGxlZnQ7IGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5oYWNrdGhlYm94LmNvbS9pbWFnZXMvaWNvbjIwLnBuZyk7IGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDVweCBib3R0b20gNXB4OyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyI+PHN0eWxlIHNjb3BlZD5AZm9udC1mYWNlIHtmb250LWZhbWlseTogIlJvYm90byI7Zm9udC1zdHlsZTogbm9ybWFsO2ZvbnQtd2VpZ2h0OiA0MDA7c3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3VidW50dW1vbm8vdjYvVmlaaGV0N0FrLUxSWFpNWHp1QWZrWTRQNUlDb3g4S3EzTExVTk15bEdPNC53b2ZmMikgZm9ybWF0KCJ3b2ZmMiIpO30uaHRiX2ZvbnQge2ZvbnQtZmFtaWx5OiAiUm9ib3RvIiwgbW9ub3NwYWNlO30uaHRiX25pY2tuYW1lIHtjb2xvcjogI2ZmZmZmZjtmb250LXNpemU6IDEycHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fS5odGJfcG9pbnRzIHtjb2xvcjogIzU2QzBFMDtmb250LXNpemU6IDEwcHg7fS5odGJfcmVzcGVjdCB7Y29sb3I6ICNmN2FmM2U7Zm9udC1zaXplOiAxMHB4O30uaHRiX3Jhbmtpbmcge2NvbG9yOiAjZmZmZmZmO2ZvbnQtc2l6ZTogMTBweDt9Lmh0Yl9saW5lIHtsaW5lLWhlaWdodDogMTJweDttYXJnaW46IDBweDtwYWRkaW5nOiAwcHg7fS5odGJfbGluayB7Y29sb3I6ICM5YWNjMTQ7Zm9udC1zaXplOjAuNmVtO3RleHQtZGVjb3JhdGlvbjogbm9uZTt9Lmh0Yl9saW5rOmhvdmVyIHtjb2xvcjogIzlhY2MxNDtmb250LXNpemU6MC42ZW07dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7fS5odGJfbGluazp2aXNpdGVkIHtjb2xvcjogIzlhY2MxNDt9Lmh0Yl9yYW5re2NvbG9yOiAjZmZmZmZmO2ZvbnQtc2l6ZTogMTFweDt9Lmh0Yl9yb3cxe2hlaWdodDoxM3B4O30uaHRiX3JvdzJ7aGVpZ2h0OjE3cHg7fS5odGJfcm93M3toZWlnaHQ6NXB4O308L3N0eWxlPjxkaXYgc3R5bGU9IndpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6NHB4OyBmbG9hdDpsZWZ0OyBtYXJnaW4tdG9wOjVweDsgbWFyZ2luLWxlZnQ6NXB4OyI+PGltZyBzdHlsZT0id2lkdGg6NDBweDsgaGVpZ2h0OiA0MHB4OyBib3JkZXItcmFkaXVzOjRweDsiIHNyYz0iaHR0cHM6Ly93d3cuaGFja3RoZWJveC5jb20vc3RvcmFnZS9hdmF0YXJzLzUyYmE2NWJhOWU5YTM0YzIzY2Q2MWIwMTViNTY0NTVkX3RodW1iLnBuZyI+PC9kaXY+PGRpdiBjbGFzcz0iaHRiX2ZvbnQiIHN0eWxlPSJmbG9hdDpsZWZ0OyBoZWlnaHQ6NDBweDsgcGFkZGluZy1sZWZ0OiA1cHg7IG1hcmdpbi10b3A6NXB4OyI+PHAgY2xhc3M9Imh0Yl9saW5lIj48c3BhbiBjbGFzcz0iaHRiX25pY2tuYW1lIj5sd2x4PC9zcGFuPiA8c3BhbiBjbGFzcz0iaHRiX3JhbmsiPkhhY2tlcjwvc3Bhbj48YnI+PC9wPjxwIGNsYXNzPSJodGJfbGluZSI+PHNwYW4gY2xhc3M9Imh0Yl9yYW5raW5nIj5SYW5rOiA1NDI8L3NwYW4+IDxpbWcgc3JjPSJodHRwczovL3d3dy5oYWNrdGhlYm94LmNvbS9pbWFnZXMvc2NyZWVuc2hvdC5wbmciIHN0eWxlPSJ3aWR0aDoxMHB4O2hlaWdodDoxMHB4OyI+IDxzcGFuIGNsYXNzPSJodGJfcG9pbnRzIj43NDwvc3Bhbj4gPGltZyBzcmM9Imh0dHBzOi8vd3d3LmhhY2t0aGVib3guY29tL2ltYWdlcy9zdGFyLnBuZyIgc3R5bGU9IndpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ij4gPHNwYW4gY2xhc3M9Imh0Yl9yZXNwZWN0Ij4wPC9zcGFuPjxicj48L3A+PHAgY2xhc3M9Imh0Yl9saW5lIj48YSBocmVmPSJodHRwczovL3d3dy5oYWNrdGhlYm94LmNvbSIgY2xhc3M9Imh0Yl9saW5rIj5oYWNrdGhlYm94LmNvbTwvYT48L3A+PC9kaXY+PC9kaXY+',
        )
      : ''
    return { __html: html }
  }
  return (
    <div
      style={{
        top: 0,
        width: '90%',
        borderRadius: '12px',
        marginBottom: 12,
        height: '56px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: globals.accentColor,
        color: globals.secondaryColor,
        padding: '24px',
        fontSize: '12pt',
        background: '#141414',
        boxShadow: '9px 9px 12px rgb(4,4,4,0.6), -9px -9px 12px  rgba(48,48,48, 0.5)',
      }}
    >
      <p>{`© lwlx. ${date}`}</p>
      <a href='https://twitter.com/0x0000005'>
        <svg height='24' viewBox='0 0 24 24'>
          <g>
            <path
              fill='#fff'
              d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'
            ></path>
          </g>
        </svg>
      </a>
      <div
        id='htbadge'
        dangerouslySetInnerHTML={badge()}
      ></div>
      <a href='https://github.com/Lawlez'>
        <svg height='24' viewBox='0 0 16 16' version='1.1' width='24' aria-hidden='true'>
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
          ></path>
        </svg>
      </a>
      <p>Version {globals.version}</p>
    </div>
  )
}
