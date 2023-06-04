import React from 'react';
/* eslint-disable */
import { IBM_Plex_Sans_KR, Noto_Sans_KR } from 'next/font/google';
/* eslint-enable */
import './globals.css';
import Header from './components/Header';

const notoSansKr = Noto_Sans_KR({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Heavyside',
  description: 'How to write code in heavycase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <main className="flex min-h-screen flex-col items-center">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
