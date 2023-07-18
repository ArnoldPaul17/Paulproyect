import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './Componentes/Nav'
import Footer from './Componentes/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paul',
  description: 'Creando mi proyecto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className='contenedor'>
          <Nav />
            {children}
          <Footer />
        </div>     
      </body>
    </html>
  )
}
