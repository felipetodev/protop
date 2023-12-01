'use client'

import { motion } from 'framer-motion'
import { NicolasVector, PinIcon } from './ui/icons'
import { Layout } from './ui/layout-wrapper'
import { opacity, showUp } from '../lib/animations'
import { Button as ButtonUI } from './ui/button'

const Button = motion(ButtonUI)
const Vector = motion(NicolasVector)

function Hero () {
  return (
    <Layout className="grid grid-cols-1 sm-2:grid-cols-2 gap-x-10 xl:pt-20 overflow-hidden">
      <div className="flex flex-col mt-10 md:mt-36 gap-10 items-center sm-2:items-start text-center sm-2:text-start">
        <motion.h1
          initial='closed'
          animate='open'
          variants={opacity}
          className="text-[35px] md:text-[55px] lg:text-[75px] font-semibold [text-wrap:balance] text-protop-lavander leading-tight">
          Calidad y transparencia en cada caso
        </motion.h1>
        <motion.p
          initial='closed'
          animate='open'
          variants={opacity}
          transition={{ delay: 0.25 }}
          className='text-[11px] sm:text-[13px]'>
          Profesional con experiencia y formación especializada en representar a personas en situaciones legales complejas. Con post títulos sólidos y una dedicación profunda, brindo asistencia a aquellos imputados por delitos o crímenes, así como a víctimas y sus familias. Soy tu aliado en cada paso del proceso legal.
        </motion.p>
        <motion.ul
          initial='closed'
          animate='open'
          variants={showUp}
          transition={{ delay: 0.5, bounce: 0 }}
          className="flex sm-2:hidden lg:flex gap-x-2 sm-2:gap-x-8 [&_li]:flex [&_li]:items-end text-[9px] sm:text-[11px] sm-2:text-[13px]"
        >
          <li className='min-w-max'>
            <PinIcon className="h-4 w-4 sm:h-auto sm:w-auto mr-2 text-protop-light-blue" />
            <span>Coquimbo</span>
          </li>
          <li className='min-w-max'>
            <PinIcon className="h-4 w-4 sm:h-auto sm:w-auto mr-2 text-protop-light-blue" />
            <span>La Serena</span>
          </li>
          <li className='min-w-max'>
            <PinIcon className="h-4 w-4 sm:h-auto sm:w-auto mr-2 text-protop-light-blue" />
            <span>Vicuña</span>
          </li>
          <li className='min-w-max'>
            <PinIcon className="h-4 w-4 sm:h-auto sm:w-auto mr-2 text-protop-light-blue" />
            <span>Santiago</span>
          </li>
        </motion.ul>
        <motion.ul
          initial='closed'
          animate='open'
          variants={showUp}
          transition={{ delay: 0.5, bounce: 0 }}
          className="gap-8 gap-y-3 hidden sm-2:grid sm-2:grid-cols-2 lg:hidden text-[11px] sm-2:text-[13px]"
        >
          <li>
            <PinIcon className="inline-block mr-2 text-protop-light-blue" />
            <span>Coquimbo</span>
          </li>
          <li>
            <PinIcon className="inline-block mr-2 text-protop-light-blue" />
            <span>La Serena</span>
          </li>
          <li>
            <PinIcon className="inline-block mr-2 text-protop-light-blue" />
            <span>Vicuña</span>
          </li>
          <li>
            <PinIcon className="inline-block mr-2 text-protop-light-blue" />
            <span>Santiago</span>
          </li>
        </motion.ul>
        <Button
          initial='closed'
          animate='open'
          variants={showUp}
          transition={{ delay: 0.5, bounce: 0 }}
          className='w-fit my-[30px]'
        >
          Agenda tu primera consulta gratis
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
