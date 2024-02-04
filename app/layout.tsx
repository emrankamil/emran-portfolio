import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import {Providers} from "./Providers";
//import BootstrapClient from '@/components/BootstrapClient.js';
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })
const background = " bg-[url('../public/img/full_background.jpg')] bg-cover bg-left"

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
      <body className={nunito.className + background}>
        <Providers>
          {children}
        </Providers>
        
        {/* <BootstrapClient /> */}
        </body>
    </html>
  )
}
