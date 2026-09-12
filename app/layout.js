import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: 'Proctors — AI-Powered Conversational Assessment Platform for Schools',
  description:
    'Proctors gives every student a one-on-one AI assessment experience — grounded in your curriculum, aligned to NEP 2020, and generating HPC-ready insight reports your teachers can act on the same week.',
  keywords:
    'AI assessment platform for schools, NEP 2020 compliant assessment, CBSE assessment software, PARAKH Holistic Progress Card, conversational AI for schools, school assessment SaaS India, curriculum-aligned assessment tool, competency-based assessment CBSE',
  openGraph: {
    title: 'Proctors — Curriculum-Native AI Assessment for Indian Schools',
    description:
      'From chapter to conversation in minutes. Proctors turns everyday curriculum assessment into an individual AI-powered dialogue — so schools finally see not just what a student answered, but how they understand it.',
    url: 'https://proctors.in',
    siteName: 'Proctors',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proctors — Curriculum-Native AI Assessment for Indian Schools',
    description:
      'From chapter to conversation in minutes. Proctors turns everyday curriculum assessment into an individual AI-powered dialogue — so schools finally see not just what a student answered, but how they understand it.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
