import { Geist, Geist_Mono, Inter, Birthstone } from "next/font/google";
import localFont from 'next/font/local'

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
});

export const birthstone = Birthstone({
  weight: ['400'],
  variable: "--font-birthstone",
  subsets: ['latin'],
});

export const calSans = localFont({
  variable: "--font-cal-sans",
  src: '../../../public/fonts/CalSans-Regular/CalSans-Regular.ttf',
})
