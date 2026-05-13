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
  title: "Noval & Latifah Wedding Invitation",
  description: "Undangan pernikahan Noval & Latifah. Dengan penuh kebahagiaan kami mengundang Anda untuk hadir di hari istimewa kami.",
  icons: {
    icon: '/favicon.ico'
  },

  openGraph: {
    title: "Noval & Latifah Wedding Innovation",
    description: "Undangan pernikahan Noval & Latifah. Dengan penuh kebahagiaan kami mengundang Anda untuk hadir di hari istimewa kami.",
    images: [
      {
        url: "/hero.jpeg",
        width: 2773,
        heigh: 4160
      }
    ]
  }
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
