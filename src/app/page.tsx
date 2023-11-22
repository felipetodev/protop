import ServicesGrid from './components/services-grid'
import Hero from './components/hero'
import MainNav from './components/main-nav'
import Contact from './components/contact'
import MarqueeTestimonials from './components/marquee-testimonials'
import Testimonials from './components/testimonials'
import Footer from './components/footer'
import MarqueeMision from './components/marquee-mision'
import MisionCards from './components/mision-cards'
import Description from './components/description'
import TrajectoryGrid from './components/trajectory-grid'

export default function Home () {
  return (
    <>
      <div className='h-screen overflow-x-hidden'>
        <MainNav />
        <Hero />
        <TrajectoryGrid />
        <MarqueeMision />
        <MisionCards />
        <Description />
        <ServicesGrid />
        <Contact />
        <MarqueeTestimonials />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}
