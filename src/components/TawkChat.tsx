'use client';

import Script from 'next/script';

const TAWK_EMBED_URL = 'https://embed.tawk.to/692a48b8fb463c197eeb18ae/1jb6io4n1';

export function TawkChat() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      id="tawk-to"
      src={TAWK_EMBED_URL}
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  );
}
