import type { Metadata } from 'next'
import { Playfair_Display, Josefin_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ARQZUUM | Arquitetura, Urbanismo & Design de Interiores',
  description:
    'Estúdio de arquitetura contemporânea em Itapoá, SC. Criamos espaços que inspiram com arquitetura, urbanismo e design de interiores.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${josefin.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
