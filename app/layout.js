import "lenis/dist/lenis.css";
import { Instrument_Sans, Inter, Work_Sans } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
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
    "Proctors gives every student a one-on-one AI assessment experience — grounded in your curriculum, aligned to NEP 2020, and generating HPC-ready insight reports your teachers can act on the same week.",
  icons: {
    apple: [{ url: "/apple-touch-icon.png" }],
    icon: [
      { url: "/favicon.ico" },
      { type: "image/svg+xml", url: "/favicon.svg" },
      { type: "image/png", url: "/favicon.png" },
    ],
  },
  keywords:
    "AI assessment platform for schools, NEP 2020 compliant assessment, CBSE assessment software, PARAKH Holistic Progress Card, conversational AI for schools, school assessment SaaS India, curriculum-aligned assessment tool, competency-based assessment CBSE",
  openGraph: {
    default: "Proctors",
    description:
      "From chapter to conversation in minutes. Proctors turns everyday curriculum assessment into an individual AI-powered dialogue — so schools finally see not just what a student answered, but how they understand it.",
    locale: "en_IN",
    siteName: "Proctors",
    title: "Proctors — Curriculum-Native AI Assessment for Indian Schools",
    type: "website",
    url: "https://proctors.in",
  },
  robots: { follow: true, index: true },
  title: "Proctors — AI-Powered Conversational Assessment Platform for Schools",
  twitter: {
    card: "summary_large_image",
    description:
      "Proctors gives every student a one-on-one AI assessment experience — grounded in your curriculum, aligned to NEP 2020, and generating HPC-ready insight reports your teachers can act on the same week.",
    title:
      "Proctors — AI-Powered Conversational Assessment Platform for Schools",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${instrumentSans.variable} ${inter.variable} ${workSans.variable}`}
      lang="en"
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
