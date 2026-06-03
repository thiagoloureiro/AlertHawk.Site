import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { structuredDataGraph } from '@/seo/structuredData';
import {
  defaultDescription,
  defaultKeywords,
  defaultTitle,
  siteUrl,
} from '@/lib/site';
import './globals.css';
import { TawkChat } from '@/components/TawkChat';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: 'AlertHawk' }],
  robots: { index: true, follow: true },
  verification: {
    google: 'mIrU3XJjPWmr-Zgp4vl2w8MSWeEctjwHyjFtK2cAgTU',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: defaultTitle,
    description:
      'Enterprise-grade Kubernetes monitoring with real-time CPU/RAM metrics, uptime monitoring, intelligent alerting, and instant notifications for DevOps teams.',
    siteName: 'AlertHawk',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AlertHawk dashboard — Kubernetes and infrastructure monitoring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description:
      'Enterprise-grade Kubernetes monitoring with real-time CPU/RAM metrics, uptime monitoring, intelligent alerting, and instant notifications for DevOps teams.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'AlertHawk',
  },
  other: {
    'msapplication-TileColor': '#000000',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataGraph),
          }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V7T7BBR9ZE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V7T7BBR9ZE');
          `}
        </Script>
        <TawkChat />
      </body>
    </html>
  );
}
