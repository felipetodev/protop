import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import { cn } from './lib/utils'
import './globals.css'
import MainNav from './components/main-nav'

const unbonded = Unbounded({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nicolás Protopsaltis',
  description: 'Abogado penalista'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={cn(
        'min-h-screen bg-protop-space font-light text-[13px] text-protop-seasalt antialiased',
        unbonded.className
      )}>
        <MainNav />
        <main className='flex flex-col flex-1 overflow-x-hidden'>
          {children}
        </main>
      </body>
    </html>
  )
}
