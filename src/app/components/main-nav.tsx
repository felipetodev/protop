import { Button } from './ui/button'
import { Layout } from './ui/layout-wrapper'

function MainNav () {
  return (
    <Layout>
      <nav className="h-[100px] flex justify-between items-center">
        <div>
          <img src="nav-logo.svg" alt="Logo" />
        </div>
        <ul className="hidden md:flex items-center gap-x-10">
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Servicios</li>
          <li>Testimonios</li>
          <Button>
            Contáctame
          </Button>
        </ul>
      </nav>
    </Layout>
  )
}

export default MainNav
