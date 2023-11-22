import { CrossHairIcon, GifIcon, UserCheckIcon } from './ui/icons'

function MisionCards () {
  return (
    <div className="grid grid-cols-1 sm-2:grid-cols-3 auto-rows-[390px] md:auto-rows-[270px] lg:auto-rows-[360px] xl:auto-rows-[540px]">
      <div className="flex flex-col gap-y-5 items-center justify-center bg-protop-light-blue p-5 lg:p-10 text-center">
        <CrossHairIcon className='text-protop-space' />
        <h4 className="text-[16px] font-medium">
          Atención directa
        </h4>
        <p className='[text-wrap:balance]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 items-center justify-center bg-blue-gradient p-5 lg:p-10 text-center">
        <UserCheckIcon className='text-protop-space' />
        <h4 className="text-[16px] font-medium">
          Representación personal
        </h4>
        <p className='[text-wrap:balance]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 items-center justify-center bg-protop-light-blue p-5 lg:p-10 text-center">
        <GifIcon className='text-protop-space' />
        <h4 className="text-[16px] font-medium">
          Primera consulta gratis
        </h4>
        <p className='[text-wrap:balance]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  )
}

export default MisionCards
