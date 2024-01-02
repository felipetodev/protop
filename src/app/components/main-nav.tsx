'use client'

import { useState } from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../lib/utils'

function MainNav () {
  const [isOpen, setIsOpen] = useState(false)
  const handleNavigation = (e: any) => {
    setIsOpen(false)
  }
  const handleKeyboardClose = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }
  return (
    <>
      <nav className="sticky z-50 top-0 h-[100px] flex px-5 md:px-10 bg-nav-gradient">
        <div className='flex justify-between items-center w-full'>
          <Link href='/'>
            <img src="nav-logo.svg" alt="Logo" />
          </Link>
          <ul className="hidden lg:flex items-center gap-x-10">
            <li className='group'>
              <a href="#" className='transition-colors group-hover:text-protop-light-blue'>
                Inicio
              </a>
            </li>
            <li className='group'>
              <a href="#acerca-de" className='transition-colors group-hover:text-protop-light-blue'>
                Acerca de
              </a>
            </li>
            <li className='group'>
              <a href="#servicios" className='transition-colors group-hover:text-protop-light-blue'>
                Servicios
              </a>
            </li>
            <li className='group'>
              <a href="#testimonios" className='transition-colors group-hover:text-protop-light-blue'>
                Testimonios
              </a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center ml-10'>
          <a
            href='https://wa.me/+56957790219'
            rel="noopener noreferrer"
            target="_blank"
            className={cn(buttonVariants({ variant: 'thrid' }), 'hidden md:flex')}
          >
            Contácteme
          </a>
          {!isOpen
            ? (
              <button onClick={() => setIsOpen(!isOpen)} className='ml-10 lg:hidden'>
                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="25" height="2" transform="translate(0 1)" fill="#F7F7F7" />
                  <rect width="25" height="2" transform="translate(0 7)" fill="#F7F7F7" />
                  <rect width="25" height="2" transform="translate(0 13)" fill="#F7F7F7" />
                </svg>
              </button>
              )
            : (
              <button onClick={() => setIsOpen(!isOpen)} onKeyDown={handleKeyboardClose} className='ml-10 lg:hidden'>
                <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="25" height="2" transform="translate(3 21) rotate(-45)" fill="#F7F7F7" />
                  <rect width="25" height="2" transform="translate(4 3) rotate(45)" fill="#F7F7F7" />
                </svg>
              </button>
              )}
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 min-h-[100svh] w-full bg-protop-space z-40 lg:hidden'
          >
            <div className='h-full'>
              <ul className='grid gap-y-14 sm:gap-y-16 place-content-center pt-[100px] h-full text-center [font-size:clamp(1.5rem,2vw+1rem,2.5rem)]'>
                <li className='group'>
                  <a onClick={handleNavigation} href="#" className='transition-colors group-hover:text-protop-light-blue'>Inicio</a>
                </li>
                <li className='group'>
                  <a onClick={handleNavigation} href="#acerca-de" className='transition-colors group-hover:text-protop-light-blue'>Acerca de</a>
                </li>
                <li className='group'>
                  <a onClick={handleNavigation} href="#servicios" className='transition-colors group-hover:text-protop-light-blue'>Servicios</a>
                </li>
                <li className='group'>
                  <a onClick={handleNavigation} href="#testimonios" className='transition-colors group-hover:text-protop-light-blue'>Testimonios</a>
                </li>
                <li>
                  <a
                    href='https://wa.me/+56957790219'
                    rel="noopener noreferrer"
                    target="_blank"
                    className={cn(buttonVariants({ variant: 'thrid' }), 'md:hidden')}
                  >
                    Contácteme
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MainNav
