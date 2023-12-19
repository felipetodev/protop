import ServicesGrid from './components/services-grid'
import Hero from './components/hero'
import Contact from './components/contact'
import MarqueeTestimonials from './components/marquee-testimonials'
import Testimonials from './components/testimonials'
import Footer from './components/footer'
import MarqueeMision from './components/marquee-mision'
import MisionCards from './components/mision-cards'
import Description from './components/description'
import TrajectoryGrid from './components/trajectory-grid'
import { getHomeEntries } from './contentful/service'

export const dynamic = 'force-dynamic'

export default async function Home () {
  const [
    hero,
    trajectory,
    mision,
    description,
    services,
    testimonials,
    footer
  ] = await getHomeEntries()

  return (
    <>
      <Hero entries={hero} />
      <TrajectoryGrid entries={trajectory} />
      <MarqueeMision title={mision.carouselCopy} />
      <MisionCards entries={mision} />
      <Description entries={description} />
      <ServicesGrid entries={services} />
      <Contact
        inbox={services.inbox}
        phone={services.phone}
      />
      <MarqueeTestimonials title={testimonials.carouselCopy} />
      <Testimonials entries={testimonials} />
      <Footer entries={footer} />
    </>
  )
}
