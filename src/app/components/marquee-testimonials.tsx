import { NicoSymbol } from './ui/icons'
import Marquee from './ui/marquee'

function MarqueeTestimonials ({ title }: { title?: string }) {
  return (
    <div id='testimonios' className='bg-protop-lavander pt-[120px] pb-[60px]'>
      <Marquee>
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className='flex items-center h-full'>
            <h3 className='w-max text-[120px] font-medium text-protop-space'>
              {title}
            </h3>
            <NicoSymbol className='ml-20' />
          </li>
        ))}
      </Marquee>
    </div>
  )
}

export default MarqueeTestimonials
