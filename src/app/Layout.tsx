import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prosperity Heritage Advisory',
  description: 'Helping companies turn revenue into predictable cash.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
