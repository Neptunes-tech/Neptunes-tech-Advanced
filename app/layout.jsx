import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'NEPTUNES TECH - Advanced Technology Solutions',
  description: 'Leading technology solutions provider for enterprise innovation and digital transformation.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased bg-background text-foreground`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
