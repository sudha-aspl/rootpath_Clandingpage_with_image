import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  title: 'RootPath - Find Your Dream Job Faster with AI',
  description: 'AI-powered job matching connecting top talent with leading companies across New Zealand. Discover opportunities that match your skills and career goals.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
