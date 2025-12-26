import { Metadata } from 'next'
import './globals.css'
import Head from '@/components/Head'
import FacebookPixel from '@/components/FacebookPixel'
import FacebookPixelTracking from '@/components/FacebookPixelTracking'

export const metadata: Metadata = {
  title: 'Apostila Técnica para Reparo de Módulos Volkswagen – Bosch, Marelli, Siemens',
  description: 'Material digital completo, ilustrado e direto ao ponto para técnicos e iniciantes que desejam entender e reparar ECUs da linha Volkswagen com segurança na bancada.',
  
  // Open Graph / Facebook
  openGraph: {
    title: 'Apostila Técnica para Reparo de Módulos Volkswagen – Bosch, Marelli, Siemens',
    description: 'Material digital completo, ilustrado e direto ao ponto para técnicos e iniciantes que desejam entender e reparar ECUs da linha Volkswagen com segurança na bancada.',
    url: 'https://pagina-vw.vercel.app/',
    siteName: 'Apostila Técnica VW',
    images: [
      {
        url: 'https://pagina-vw.vercel.app/og-image.jpg',
        width: 1440,
        height: 720,
        alt: 'Apostila Técnica para Reparo de Módulos Volkswagen',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Apostila Técnica para Reparo de Módulos Volkswagen',
    description: 'Material prático e ilustrado para reparo de ECUs na bancada.',
    images: ['https://pagina-vw.vercel.app/og-image.jpg'],
  },

  // Meta tags adicionais
  keywords: [
    'apostila vw',
    'reparo de módulos volkswagen',
    'ecu vw',
    'bosch me7.5',
    'marelli iaw',
    'siemens simos',
    'reparo de injeção eletrônica',
    'mecânica automotiva',
    'eletrônica automotiva',
    'apostila técnica'
  ],
  authors: [{ name: 'Apostila Técnica VW' }],
  creator: 'Apostila Técnica VW',
  publisher: 'Apostila Técnica VW',
  
  // Robots
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

  // Ícone e manifest
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '1024x1024', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  // Outras metatags
  other: {
    'theme-color': '#1e293b',
    'msapplication-TileColor': '#1e293b',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Head />
      </head>
      <body>
        <FacebookPixel />
        <FacebookPixelTracking />
        {children}
      </body>
    </html>
  )
}