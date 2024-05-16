import type { Metadata } from 'next'
import { Roboto_Condensed} from 'next/font/google'
import './globals.css'
import 'tailwindcss/tailwind.css';



const roboto = Roboto_Condensed({ subsets: ['latin'] ,weight: ['400', '700']})

export const metadata: Metadata = {
  title: 'Algorithm Visualizer',
  description: 'See how algorithms works on a 2d grid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-black`}>{children}</body>
    </html>
  )
}
