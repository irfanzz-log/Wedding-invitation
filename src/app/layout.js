import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { title } from "framer-motion/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jawaFont = localFont({
  variable: '--font-jawa-font',
  src: '../../public/fonts/jawa-palsu.ttf'
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://wedding.solusidigitalkreatif.my.id"),

  title: "Noval & Latifah Wedding Invitation",

  description:
    "Undangan pernikahan Noval & Latifah. Dengan penuh kebahagiaan kami mengundang Anda untuk hadir di hari istimewa kami.",

  openGraph: {
    title: "Noval & Latifah Wedding Invitation",

    description:
      "Undangan pernikahan Noval & Latifah. Dengan penuh kebahagiaan kami mengundang Anda untuk hadir di hari istimewa kami.",

    url: "https://wedding.solusidigitalkreatif.my.id",

    siteName: "Wedding Invitation",

    images: [
      {
        url: "https://wedding.solusidigitalkreatif.my.id/thumbnail.jpeg",
        width: 1200,
        height: 630,
        alt: "Noval & Latifah Wedding",
      },
    ],

    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Noval & Latifah Wedding Invitation",
    description:
      "Undangan pernikahan Noval & Latifah.",
    images: [
      "https://wedding.solusidigitalkreatif.my.id/thumbnail.jpeg",
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jawaFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
