import { Instrument_Sans, Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const inter = Inter({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const viewport = {
  initialScale: 1,
  maximumScale: 5,
  width: "device-width",
};

export const metadata = {
  description:
    "Proctors turns everyday curriculum assessment into a conversation, so schools can see not just what a student answered, but how they understand it.",
  icons: {
    apple: [{ url: "/apple-touch-icon.png" }],
    icon: [
      { url: "/favicon.ico" },
      { type: "image/svg+xml", url: "/favicon.svg" },
      { type: "image/png", url: "/favicon.png" },
    ],
  },
  keywords:
    "Proctors, school assessment, AI assessment, CBSE, State Board, NEP 2020, PARAKH, Holistic Progress Card, curriculum assessment",
  openGraph: {
    default: "Proctors",
    description:
      "Proctors turns everyday curriculum assessment into a conversation, so schools can see not just what a student answered, but how they understand it.",
    locale: "en_IN",
    siteName: "Proctors",
    title: "Proctors — Curriculum-Aligned AI Assessment for Schools",
    type: "website",
    url: "https://proctors.in",
  },
  robots: { follow: true, index: true },
  title: "Proctors",
  twitter: {
    card: "summary_large_image",
    description:
      "Proctors turns everyday curriculum assessment into a conversation, so schools can see not just what a student answered, but how they understand it.",
    title: "Proctors — Curriculum-Aligned AI Assessment for Schools",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${instrumentSans.variable} ${inter.variable} ${workSans.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
