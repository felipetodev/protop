import { NicoSymbol } from './ui/icons'

function Marquee () {
  return (
    <div className='h-[300px] bg-protop-lavander pt-[120px] pb-[60px]'>
      <div className='flex items-center h-full'>
        <h3 className='text-[120px] font-medium [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:white] text-protop-lavander'>
          Testimonios
        </h3>
        <NicoSymbol className='mx-[100px]' />
      </div>
    </div>
  )
}

export default Marquee
