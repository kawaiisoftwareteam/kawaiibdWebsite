import { Jost, Inter, Anek_Bangla, Noto_Sans_JP, Playfair_Display, Outfit } from 'next/font/google';

/**
 * Self-hosted via next/font (preloaded) — avoids remote @import FOUC/garbled text.
 */
export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const anekBangla = Anek_Bangla({
  subsets: ['bengali', 'latin'],
  variable: '--font-anek-bangla',
  display: 'swap',
  preload: false,
});

export const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  preload: false,
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const fontVariables = [
  jost.variable,
  inter.variable,
  anekBangla.variable,
  notoSansJP.variable,
  playfair.variable,
  outfit.variable,
].join(' ');
