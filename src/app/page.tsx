import ServicesGrid from './components/services-grid'
import Hero from './components/hero'
import MainNav from './components/main-nav'
import Contact from './components/contact'
import Marquee from './components/marquee'
import Testimonials from './components/testimonials'
import Footer from './components/footer'

export default function Home () {
  return (
    <>
      <div className='h-screen overflow-x-hidden'>
        <MainNav />
        <Hero />
        <ServicesGrid />
        <Contact />
        <Marquee />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}
