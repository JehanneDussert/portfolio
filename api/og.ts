import { ImageResponse } from '@vercel/og'
// @ts-ignore
import React from 'react'

export const config = { runtime: 'edge' }

export default function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = (searchParams.get('title') ?? 'Jehanne Dussert').slice(0, 100)
    const description = (searchParams.get('description') ?? 'AI Governance by Design').slice(0, 180)
    const fontSize = title.length > 65 ? 36 : title.length > 45 ? 42 : 50

    return new ImageResponse(
      React.createElement(
        'div',
        {
          style: {
            background: '#12141a',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 80px',
            justifyContent: 'center',
            gap: 24,
            position: 'relative',
          },
        },
        React.createElement('div', {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: '#00d4b8',
          },
        }),
        React.createElement('div', {
          style: {
            fontFamily: 'sans-serif',
            fontSize: 12,
            fontWeight: 600,
            color: '#00d4b8',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          },
        }, 'JEHANNE DUSSERT — AI Governance'),
        React.createElement('div', {
          style: {
            fontFamily: 'sans-serif',
            fontSize,
            fontWeight: 700,
            color: '#e8e9eb',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          },
        }, title),
        React.createElement('div', {
          style: {
            fontFamily: 'sans-serif',
            fontSize: 18,
            color: '#6b7280',
            lineHeight: 1.6,
            maxWidth: '80%',
          },
        }, description),
        React.createElement('div', {
          style: {
            position: 'absolute',
            bottom: 48,
            right: 80,
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#2a2e3d',
            letterSpacing: '0.06em',
          },
        }, 'jehannedussert.com'),
      ),
      { width: 1200, height: 630 },
    )
  } catch {
    return new Response('Failed to generate image', { status: 500 })
  }
}
