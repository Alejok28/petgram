import React from 'react'
import { Svg } from './styles'

export const Logo = props => (
  <Svg
    width={518.61}
    height={156.808}
    viewBox='-9.305 -3.404 518.61 156.808'
    style={{
      background: '0 0'
    }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient
        id='prefix__editing-glowing-gradient'
        x1={0.75}
        x2={0.25}
        y1={0.067}
        y2={0.933}
      >
        <stop offset={0} stopColor='#55d537' />
        <stop offset={1} stopColor='#75cbcb' />
      </linearGradient>
      <filter
        id='prefix__editing-glowing'
        x='-100%'
        y='-100%'
        width='300%'
        height='300%'
      >
        <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation={12} />
        <feMerge>
          <feMergeNode in='blur' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>
    <path
      d='M42.02-5.96q-3.65 3.7-8.66 5.7-5 2-9.96 2-4.96 0-6.7-.87l-2.69 14.79-17.66 1.74 12-61.77 14.18-1.48-1.13 6q3.66-6.17 11.23-6.17 8.52 0 13.05 5.48 4 4.96 4 12.53 0 7.56-2 12.96-2 5.39-5.66 9.09zm-19.66-24.4L17.75-4.87q1.83 1.56 4.09 1.56t3.56-.87q1.31-.87 2.27-2.61 2.61-4.69 4.69-18.96.61-4.18.61-8.27t-.91-5.39q-.91-1.31-2.65-1.31-5.31 0-7.05 10.36zM90.13-14.7q2.18 1.48 2.18 4.74 0 3.26-1.66 5.35Q89-2.52 86.3-1.13q-5.56 2.87-11.57 2.87-6 0-9.52-1.3-3.53-1.31-5.88-3.75-4.61-4.61-4.61-13.05 0-13.13 7.14-21.14 7.65-8.61 20.96-8.61 8.27 0 12.36 3.48 3.04 2.61 3.04 6.87 0 15.31-26.44 15.31-.35 2.27-.35 4.18 0 4 1.78 5.53 1.78 1.52 5.09 1.52 3.31 0 6.83-1.52 3.52-1.53 5-3.96zm-17.75-9.49q6.18 0 9.75-3.82 3.57-3.66 3.57-9.49 0-2-.74-3.09-.74-1.08-2.22-1.08-1.48 0-2.74.56-1.26.57-2.57 2.48-3.22 4.35-5.05 14.44zM102.57-8.7q0-2.35 1.22-8.26l4.61-23.5h-5.13l.35-2.61q10.44-3.13 20.53-10.78h4.18l-2.09 9.48h6.78l-.78 3.91h-6.7l-4.44 23.5q-1.13 5.39-1.13 7.22 0 4.17 3.66 5.04-.87 2.96-4 4.7-3.14 1.74-7.57 1.74-4.44 0-6.96-2.78-2.53-2.79-2.53-7.66zm35.85-27.67q2.96-4.17 7.44-6.96 4.48-2.78 9.96-2.78t8.09 1.74l17.05-1.74-5.92 33.41Q172 4.35 165.56 11.05q-6.18 6.35-18.18 6.35-9.14 0-14.36-2.87-5.22-2.87-5.22-7.66 0-3.56 2.7-5.61 2.7-2.04 6.87-2.04 3.66 0 6.44 1.65 1.65.87 2.44 2.09-2 1.74-2 4.61 0 3.74 3.48 3.74 5.83 0 9.13-13.75.96-3.74 1.74-7.48-3.91 4.79-12.79 4.79-6.18 0-9.74-2.96-3.57-2.96-3.57-9.92 0-4.35 1.48-9.26 1.48-4.92 4.44-9.1zm11.31 18.62q0 5.92 3.04 5.92 2.09 0 4.09-2.26 1.57-1.83 2.18-4.53l4.43-22.36q-.43-.08-.87-.26-.87-.35-2-.35-5.31 0-8.44 8.7-2.43 6.79-2.43 15.14zm61.85-6.7q3.14-5.57 3.14-11.22 0-3.74-2.7-3.74-2.09 0-4.26 3.57-2.27 3.56-2.96 8.17L200.27 0l-18.01 1.74 8.88-46.11 14.35-1.74-1.56 8.79q4.26-8.79 13.83-8.79 5.05 0 7.79 2.61t2.74 7.96q0 5.35-3.53 8.74-3.52 3.4-9.52 3.4-2.61 0-3.66-1.05zm21.88 21.84q-2.04-2.26-2.95-5.83-.92-3.57-.92-9.4 0-5.82 2-11.13 2-5.31 5.66-9.14 7.48-8 19.83-8 4.44 0 7.66 1.48l14.88-1.48-6.44 33.93q-.26 1.04-.26 2.96 0 1.91 1.17 3.13 1.18 1.22 2.92 1.39-.87 2.96-4.05 4.7-3.17 1.74-6.74 1.74-3.57 0-5.96-1.35t-3.09-3.61q-1.39 2.18-4.35 3.57-2.96 1.39-6.91 1.39-3.96 0-7.18-1.04-3.22-1.05-5.27-3.31zm18.36-35.32q-1 1.56-1.87 4.22-.87 2.65-2.3 9.74-1.44 7.09-1.44 12.14 0 5.04.78 6.52.79 1.48 2.18 1.48 2.78 0 4.83-2.65 2.04-2.66 2.82-7.35l4.62-25.49q-1.83-1.57-3.96-1.57-2.14 0-3.4.7-1.26.69-2.26 2.26zm95.14 39.67q-10.53 0-10.53-8.18 0-3.57 1.52-10.48 1.52-6.92 2.05-9.7 1.21-6.35 1.21-8.35 0-4.44-3.3-4.44-2.18 0-4.27 3-2.08 3-3.04 9L325.21 0l-16.97 1.74 4.7-23.66q.78-3.92 1.48-8.36.69-4.43.69-5.13 0-4-2.95-4-2.01 0-4.18 2.96-2.17 2.95-3.39 9.04L299.28 0l-17.14 1.74 9.14-46.11 14.18-1.74-1.48 8.79q2.26-4.7 6.44-6.75 4.17-2.04 10.7-2.04 3.74 0 6.17 1.83 2.44 1.82 3.22 4.78 1.48-3.04 5.27-4.83 3.78-1.78 8.44-1.78 4.65 0 6.96 1 2.3 1 3.69 2.65 2.35 3.05 2.35 8.62 0 5.48-2.35 16.88-1.22 5.56-1.22 7.61 0 2.04 1.18 3.26 1.17 1.22 2.91 1.39-.87 2.96-3.87 4.7-3 1.74-6.91 1.74z'
      fill='url(#prefix__editing-glowing-gradient)'
      transform='translate(71.127 110.89)'
      filter='url(#prefix__editing-glowing)'
    />
    <style />
  </Svg>
)
