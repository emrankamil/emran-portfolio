import type { Metadata } from 'next'
// import { Nunito } from 'next/font/google'
import './globals.css'

import local from 'next/font/local';

const montserat = local({
  src: [
    {
      path: '../public/font/Montserrat/Montserrat-Italic-VariableFont_wght.ttf',
      weight: '800',
    },
  ],
  variable: '--font-montserat',
});  

// const nunito = Nunito({ subsets: ['latin'] })

const background = " bg-gray-900"

export const metadata: Metadata = {
  title: 'Emran Kamil- Full-Stack developer Online Portfolio',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserat.variable} ${background}`}>
        <div className="bg-[url('../public/img/full_background.jpg')] bg-cover bg-left">
          {children}
        </div> 
        </body>
    </html>
  )
}