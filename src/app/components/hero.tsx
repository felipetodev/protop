'use client'

import { motion } from 'framer-motion'
import { NicolasVector, PinIcon } from './ui/icons'
import { Layout } from './ui/layout-wrapper'
import { opacity, showUp } from '../lib/animations'
import { Button as ButtonUI } from './ui/button'

const Button = motion(ButtonUI)
const Vector = motion(NicolasVector)

type Props = {
  entries: {
    heroTitle: string
    heroDescription: string
    buttonCopy: string
    location: Array<{
      id: string
      cardTitle: string
    }>
  }
}

function Hero ({ entries }: Props) {
  return (
    <Layout className="grid grid-cols-1 sm-2:grid-cols-2 gap-x-10 xl:pt-20 overflow-hidden">
      <div className="flex flex-col mt-10 md:mt-36 gap-10 items-center sm-2:items-start text-center sm-2:text-start">
        <motion.h1
          initial='closed'
          animate='open'
          variants={opacity}
          className="text-[35px] md:text-[55px] lg:text-[75px] font-semibold [text-wrap:balance] text-protop-lavander leading-tight">
          {entries.heroTitle}
        </motion.h1>
        <motion.p
          initial='closed'
          animate='open'
          variants={opacity}
          transition={{ delay: 0.25 }}
          className='text-[11px] sm:text-[13px]'>
          {entries.heroDescription}
        </motion.p>
        <motion.ul
          initial='closed'
          animate='open'
          variants={showUp}
          transition={{ delay: 0.5, bounce: 0 }}
          className="flex sm-2:hidden lg:flex gap-x-2 sm-2:gap-x-8 [&_li]:flex [&_li]:items-end text-[9px] sm:text-[11px] sm-2:text-[13px]"
        >
          {entries.location.map((loc) => (
            <li key={loc.id} className='min-w-max'>
              <PinIcon className="h-4 w-4 sm:h-auto sm:w-auto mr-2 text-protop-light-blue" />
              <span>{loc.cardTitle}</span>
            </li>
          ))}
        </motion.ul>
        <motion.ul
          initial='closed'
          animate='open'
          variants={showUp}
          transition={{ delay: 0.5, bounce: 0 }}
          className="gap-8 gap-y-3 hidden sm-2:grid sm-2:grid-cols-2 lg:hidden text-[11px] sm-2:text-[13px]"
        >
          {entries.location.map((loc) => (
            <li key={loc.id} className='min-w-max'>
              <PinIcon className="h-4 w-4 sm:h-auto sm:w-auto mr-2 text-protop-light-blue" />
              <span>{loc.cardTitle}</span>
            </li>
          ))}
        </motion.ul>
        <Button
          initial='closed'
          animate='open'
          variants={showUp}
          transition={{ delay: 0.5, bounce: 0 }}
          className='w-fit my-[30px]'
        >
          {entries.buttonCopy}
        </Button>
      </div>
      <div className="relative flex justify-center sm-2:min-w-[500px]">
        <motion.img
          initial='closed'
          animate='open'
          variants={showUp}
          transition={{ delay: 0.5, bounce: 0 }}
          className='block object-contain object-bottom' src="hero-lawyer.png" alt="lawyer-person"
        />
        <Vector
          initial='closed'
          animate='open'
          variants={opacity}
          className='absolute h-full sm-2:h-auto -top-10 sm-2:top-0 xl:-top-8 inset-0 -z-10 w-full'
        />
      </div>
    </Layout>
  )
}

export default Hero
