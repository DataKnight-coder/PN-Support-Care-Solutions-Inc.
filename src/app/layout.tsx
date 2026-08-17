import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import './globals.css';
import './animations.css';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pnsupportcaresolutions.ca'),
  title: 'PN Support Care Solutions | Premium Home Care in the GTA',
  description: 'Dependable, compassionate home care for seniors and individuals across the Greater Toronto Area. We provide personal support, dementia care, and live-in care.',
  openGraph: {
    title: 'PN Support Care Solutions',
    description: 'Elevating the standard of home care in the GTA.',
    url: 'https://pnsupportcaresolutions.ca',
    siteName: 'PN Support Care Solutions',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  }
};

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileCTABar } from '@/components/layout/MobileCTABar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <body>
        <div className="layout-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileCTABar />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PN Support Care Solutions Inc.",
              "url": "https://pnsupportcaresolutions.ca",
              "logo": "https://pnsupportcaresolutions.ca/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "647-470-3892",
                "contactType": "customer service",
                "areaServed": "Greater Toronto Area"
              }
            })
          }}
        />
      </body>
    </html>
  );
}

