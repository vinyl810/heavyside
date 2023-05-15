import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'HeavyCase',
  description: 'How to write code in heavycase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className, roboto_mono.className}>{children}</body>
    </html>
  )
}
