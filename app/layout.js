import './globals.css';

export const metadata = {
  title: 'Proctors',
  description:
    'Proctors turns everyday curriculum assessment into a conversation, so schools can see not just what a student answered, but how they understand it.',
  keywords: 'Proctors, school assessment, AI assessment, CBSE, State Board, NEP 2020, PARAKH, Holistic Progress Card, curriculum assessment',
  openGraph: {
    title: 'Proctors — Curriculum-Aligned AI Assessment for Schools',
    description:
      'Proctors turns everyday curriculum assessment into a conversation, so schools can see not just what a student answered, but how they understand it.',
    url: 'https://proctors.in',
    siteName: 'Proctors',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proctors — Curriculum-Aligned AI Assessment for Schools',
    description:
      'Proctors turns everyday curriculum assessment into a conversation, so schools can see not just what a student answered, but how they understand it.',
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
