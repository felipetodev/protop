import { BookOpenIcon } from './ui/icons'
import { MotionDiv } from './ui/motion-div'
import { opacity } from '../lib/animations'

function TrajectoryGrid () {
  return (
    <div className="grid grid-cols-2 sm-2:grid-cols-3 md:grid-cols-4 overflow-hidden">
      <div className="col-start-1 col-end-2 md:col-end-3 row-start-1 row-end-2 md:row-end-3 aspect-auto sm:aspect-square sm-2:aspect-auto">
        <img className="block h-full w-full object-cover" src="./court.jpg" alt="court" />
      </div>
      <div className="col-start-1 sm-2:col-start-2 md:col-start-3 bg-protop-lavander p-5 sm-2:p-6 md:p-8 lg:p-10 aspect-auto sm:aspect-square min-h-full">
        <BookOpenIcon className="text-protop-light-blue" />
        <p className='text-protop-space mt-5'>Diplomado en derecho penal en la{' '}
          <span className='font-medium'>
            Universidad Central.
          </span>
        </p>
      </div>
      <div className="row-start-2 sm-2:row-start-1 col-start-2 sm-2:col-start-3 md:col-start-4 bg-[#C3CCE0] p-5 sm-2:p-6 md:p-8 lg:p-10 aspect-auto sm:aspect-square min-h-full">
        <BookOpenIcon className="text-protop-light-blue" />
        <p className='text-protop-space mt-5'>Diplomado en control de convencionalidad, en{' '}
          <span className='font-medium'>
            Instituto de Estudios Judiciales
          </span>
        </p>
      </div>
      <MotionDiv variants={opacity} transition={{ delay: 0.25 }} className="row-start-1 sm-2:row-start-2 col-start-2 sm-2:col-start-1 bg-protop-space">
        <div className='flex flex-col justify-between h-full p-5 sm-2:p-6 md:p-8 lg:p-10'>
          <MotionDiv variants={opacity} transition={{ delay: 0.5 }}>
            <h2 className="text-base mb-4 sm-2:mb-auto sm-2:text-lg md:text-xl lg:text-[25px]">
              Amplia trayectoria y en constante evolución.
            </h2>
          </MotionDiv>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_77_5249)">
              <path d="M1 21L21 1" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 1H21V21" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_77_5249">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </MotionDiv>
      <div className="row-start-3 sm-2:row-start-2 col-start-1 sm-2:col-start-2 md:col-start-3 bg-[#C3CCE0] p-5 sm-2:p-6 md:p-8 lg:p-10 aspect-auto sm:aspect-square min-h-full">
        <BookOpenIcon className="text-protop-light-blue" />
        <p className='text-protop-space mt-5'>Magíster en derecho penal y constitucional en la{' '}
          <span className='font-medium'>
            Universidad de Jaén, España.
          </span>
        </p>
      </div>
      <div className="row-start-3 sm-2:row-start-2 col-start-2 sm-2:col-start-3 md:col-start-4 bg-protop-lavander p-5 sm-2:p-6 md:p-8 lg:p-10 aspect-auto sm:aspect-square min-h-full">
        <BookOpenIcon className="text-protop-light-blue" />
        <p className='text-protop-space mt-5'>
          <span className='font-medium'>
            Más de 50 capacitaciones
          </span>{' '}
          en distintas áreas del derecho penal en la{' '}
          <span className='font-medium'>
            Defensoría Penal Pública.
          </span>
        </p>
      </div>
    </div>
  )
}

export default TrajectoryGrid
