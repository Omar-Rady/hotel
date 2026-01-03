import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // Optimize font loading
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Gathern | جاذر إن - حجز شقق وفلل مفروشة في السعودية",
    template: "%s | Gathern"
  },
  description: "اكتشف أفضل الشقق والفلل المفروشة للإيجار في السعودية. عروض حصرية وخصومات يومية على وحدات سكنية فاخرة في الرياض، جدة، مكة والمزيد. احجز الآن مع جاذر إن!",
  keywords: ["حجز شقق", "فلل مفروشة", "إيجار يومي", "شاليهات", "استراحات", "السعودية", "الرياض", "جدة", "مكة", "Gathern"],
  authors: [{ name: "Gathern" }],
  creator: "Gathern",
  publisher: "Gathern",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gathern.co'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://gathern.co',
    title: 'Gathern | جاذر إن - حجز شقق وفلل مفروشة في السعودية',
    description: 'اكتشف أفضل الشقق والفلل المفروشة للإيجار في السعودية. عروض حصرية وخصومات يومية على وحدات سكنية فاخرة.',
    siteName: 'Gathern',
    images: [
      {
        url: 'https://gathern.co/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gathern - حجز شقق وفلل مفروشة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gathern | جاذر إن - حجز شقق وفلل مفروشة',
    description: 'اكتشف أفضل الشقق والفلل المفروشة للإيجار في السعودية',
    images: ['https://gathern.co/og-image.jpg'],
    creator: '@gathern',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Gathern",
              "alternateName": "جاذر إن",
              "url": "https://gathern.co",
              "logo": "https://gathern.co/logo.png",
              "sameAs": [
                "https://twitter.com/gathern",
                "https://instagram.com/gathern",
                "https://facebook.com/gathern"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-XX-XXX-XXXX",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": ["ar", "en"]
              }
            })
          }}
        />

        {/* Structured Data - Website */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Gathern",
              "alternateName": "جاذر إن",
              "url": "https://gathern.co",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://gathern.co/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}