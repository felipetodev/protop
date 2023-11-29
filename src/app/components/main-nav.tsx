import { Button } from './ui/button'

function MainNav () {
  return (
    <nav className="sticky z-20 top-0 h-[100px] flex px-5 md:px-10 bg-nav-gradient">
      <div className='flex justify-between items-center w-full'>
        <div>
          <img src="nav-logo.svg" alt="Logo" />
        </div>
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
        <Button variant='thrid'>
          Contáctame
        </Button>
      </div>
    </nav>
  )
}

export default MainNav
