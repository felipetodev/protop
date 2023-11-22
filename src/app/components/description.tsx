import { Button } from './ui/button'
import { ArrowDownIcon, FacebookIcon, LinkedInIcon } from './ui/icons'

function Description () {
  return (
    <div className="px-5 md:px-10 lg:px-[100px] xl:px-[200px] py-[100px] md:py-[200px]">
      <div className="flex flex-col gap-y-[40px] sm-2:gap-y-[60px]">
        <div className="flex flex-col gap-y-5 sm-2:gap-y-10 text-base sm-2:text-[25px]">
          <p>
            En mi rol como representante penal, me enorgullezco de encarnar los valores de honestidad, transparencia, dedicación, estudio, metodología y aplicación.
            {' '}
            <span className="text-protop-light-blue">
              Estas cualidades son fundamentales para entregar el mejor servicio a mis clientes, ya sean imputados o víctimas.
            </span>
          </p>
          <p>
            Mi compromiso es brindar excelencia en cada paso del proceso legal, manteniendo
            {' '}
            <span className="text-protop-light-blue">
              altos estándares de calidad a un precio accesible.
            </span>
          </p>
          <p>
            Un trato digno hacia la persona y sus seres queridos es esencial. Siempre estaré disponible para ofrecer información oportuna y apoyo constante en cada camino legal.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-[10px] text-[25px]'>
          <ArrowDownIcon className="text-protop-light-blue" />
          <p className='text-protop-light-blue text-center text-[13px] [text-wrap:balance]'>
            Agenda tu primera consulta gratis y hablemos de tu caso
          </p>
        </div>
      </div>

      <div className='mt-[60px] sm-2:mt-[100px] flex flex-col xl:flex-row gap-y-[50px] xl:gap-y-0'>
        <div className='flex flex-col sm-2:flex-row items-center justify-center'>
          <p className='mb-5 sm-2:mb-0 text-center sm-2:text-end max-w-[262px]'>
            Obtén tips e información semanal acerca del derecho penal
          </p>
          <ArrowDownIcon className="hidden sm-2:flex text-protop-light-blue -rotate-90 mx-[30px]" />
          <Button variant='secondary' size='secondary' className='gap-x-5'>
            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5172 6.90918H20.5297M7.39221 1.28418H19.8922C23.344 1.28418 26.1422 4.0824 26.1422 7.53418V20.0342C26.1422 23.486 23.344 26.2842 19.8922 26.2842H7.39221C3.94043 26.2842 1.14221 23.486 1.14221 20.0342V7.53418C1.14221 4.0824 3.94043 1.28418 7.39221 1.28418ZM18.6422 12.9967C18.7965 14.037 18.6188 15.0994 18.1344 16.0329C17.65 16.9664 16.8836 17.7234 15.9442 18.1963C15.0048 18.6691 13.9403 18.8337 12.9019 18.6666C11.8636 18.4995 10.9044 18.0093 10.1608 17.2656C9.4171 16.522 8.92687 15.5628 8.75979 14.5244C8.59271 13.4861 8.75729 12.4215 9.23012 11.4821C9.70294 10.5427 10.4599 9.77636 11.3934 9.29198C12.3269 8.80761 13.3894 8.62992 14.4297 8.78418C15.4909 8.94154 16.4733 9.43601 17.2318 10.1946C17.9904 10.9531 18.4849 11.9355 18.6422 12.9967Z" stroke="#C9D2E4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {' '}
            Sígueme en Instagram
          </Button>
        </div>

        <div className='flex justify-center xl:ml-auto gap-x-[30px]'>
          <div className='flex justify-center items-center gap-x-2.5'>
            <LinkedInIcon className='sm-2:w-10 sm-2:h-10 text-protop-light-blue' />
            <span className='text-[9px] sm-2:text-[13px]'>
              Mira mi perfil en LinkedIn
            </span>
          </div>
          <div className='flex justify-center items-center gap-x-2.5'>
            <FacebookIcon className='sm-2:w-10 sm-2:h-10 text-protop-light-blue' />
            <span className='text-[9px] sm-2:text-[13px]'>
              Facebook
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
