import { Button } from './ui/button'
import { NicolasVector, PinIcon } from './ui/icons'
import { Layout } from './ui/layout-wrapper'

function Hero () {
  return (
    <Layout className="grid grid-cols-1 sm-2:grid-cols-2 gap-x-10 xl:pt-40 overflow-hidden">
      <div className="flex flex-col mt-10 md:mt-36 gap-10 items-center sm-2:items-start text-center sm-2:text-start">
        <h1 className="text-[35px] md:text-[55px] lg:text-[75px] font-semibold [text-wrap:balance] text-protop-lavander">
          Calidad y transparencia en cada caso
        </h1>
        <p className='text-[11px] sm:text-[13px]'>
          Profesional con experiencia y formación especializada en representar a personas en situaciones legales complejas. Con post títulos sólidos y una dedicación profunda, brindo asistencia a aquellos imputados por delitos o crímenes, así como a víctimas y sus familias. Soy tu aliado en cada paso del proceso legal.
        </p>
        <ul className="flex sm-2:hidden md:flex gap-x-2 sm-2:gap-x-8 [&_li]:flex [&_li]:items-end text-[11px] sm-2:text-[13px]">
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
        </ul>
        <ul className="gap-8 gap-y-3 hidden sm-2:grid sm-2:grid-cols-2 md:hidden text-[11px] sm-2:text-[13px]">
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
        </ul>
        <Button className='w-fit my-[30px]'>
          Agenda tu primera consulta gratis
        </Button>
      </div>
      <div className="relative flex justify-center sm-2:min-w-[500px]">
        <img className='block object-contain object-bottom' src="hero-lawyer.png" alt="lawyer-person" />
        <NicolasVector className='absolute h-full sm-2:h-auto -top-10 sm-2:top-0 xl:-top-8 inset-0 -z-10 w-full' />
      </div>
    </Layout>
  )
}

export default Hero
