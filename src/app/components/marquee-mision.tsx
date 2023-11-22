import { NicoSymbolBlue } from './ui/icons'
import Marquee from './ui/marquee'

function MarqueeMision () {
  return (
    <div className='bg-protop-light-blue pt-[120px] pb-[60px]'>
      <Marquee>
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className='inline-flex items-center h-full'>
            <h3 className='w-max text-[120px] font-medium text-protop-seasalt'>
              3 pilares garantizados
            </h3>
            <NicoSymbolBlue className='ml-20' />
          </li>
        ))}
      </Marquee>
    </div>
  )
}

export default MarqueeMision
