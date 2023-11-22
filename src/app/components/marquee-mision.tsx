import { NicoSymbolBlue } from './ui/icons'

function MarqueeMision () {
  return (
    <div className='h-[300px] bg-protop-light-blue pt-[120px] pb-[60px]'>
      <div className='flex items-center h-full'>
        <h3 className='text-[120px] font-medium [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#000] [text-stroke:rgb(0, 102, 255)] text-protop-light-blue'>
          ntizados
        </h3>
        <NicoSymbolBlue className='mx-[100px]' />
        <h3 className='inline-block text-[120px] font-medium [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#000] [text-stroke:rgb(0, 102, 255)] text-protop-light-blue'>
          3 Pilar
        </h3>
      </div>
    </div>
  )
}

export default MarqueeMision
