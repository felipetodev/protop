import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import { cn } from './lib/utils'
import './globals.css'

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
        <main className='flex flex-col flex-1 h-screen'>
          {children}
        </main>
      </body>
    </html>
  )
}
