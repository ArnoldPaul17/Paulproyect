import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './Componentes/Nav'
import Footer from './Componentes/Footer'
import Image from 'next/image'
import mountains from '../public/tesla.jpg'

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
            <div className='imagen-contenedor'>
            <Image
                alt="Mountains"
                src={mountains}
                placeholder="blur"
                quality={100}
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  }}
              />
              <div className='texto-contenedor'>
                {children}
              </div>
            </div>
          <Footer />
        </div>     
      </body>
    </html>
  )
}
