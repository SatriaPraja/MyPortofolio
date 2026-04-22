import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
// Ukuran favicon standar
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ color: '#2563eb' }}>S</span>
        <span style={{ color: '#000000' }}>.</span>
      </div>
    ),
    {
      ...size,
    }
  )
}