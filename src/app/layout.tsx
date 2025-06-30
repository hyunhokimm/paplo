import './globals.css'
import { Metadata } from 'next';
import ClientLayout from './components/ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://paplo.netlify.app'),
  title: 'Paplo - 덜어낸 종이, 더해진 가치',
  description: '접착제 없이 사용 가능한 혁신적인 친환경 포장 솔루션. 무게와 부피를 1/3로 줄이고, 환경을 생각하는 새로운 패러다임을 제시합니다.',
  keywords: ['친환경', '포장', '종이', '캐리어', '지속가능', '환경보호', '혁신', '컵홀더', 'eco-friendly', 'packaging'],
  manifest: '/manifest.json',
  openGraph: {
    title: 'Paplo - 덜어낸 종이, 더해진 가치',
    description: '접착제 없이 사용 가능한 혁신적인 친환경 포장 솔루션',
    url: '/',
    siteName: 'Paplo',
    images: [
      {
        url: '/paplo.png',
        width: 192,
        height: 192,
        alt: 'Paplo 친환경 포장 솔루션',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paplo - 덜어낸 종이, 더해진 가치',
    description: '접착제 없이 사용 가능한 혁신적인 친환경 포장 솔루션',
    images: ['/paplo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://paplo.netlify.app" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body className="bg-white" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
