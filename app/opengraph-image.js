import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0e14 0%, #10151d 50%, #1a1f2e 100%)',
          color: '#e6e9ef',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>Muhammad Usman</div>
        <div style={{ fontSize: 32, color: '#22d3ee', marginTop: 20 }}>DevOps Engineer</div>
        <div style={{ fontSize: 24, color: '#9aa4b2', marginTop: 16 }}>AWS - Azure - Kubernetes - Docker - Terraform - CI/CD</div>
      </div>
    ),
    { ...size }
  );
}
