import { CrossHairIcon, GifIcon, UserCheckIcon } from './ui/icons'
import { MotionDiv } from './ui/motion-div'
import { opacity } from '../lib/animations'

function MisionCards () {
  return (
    <div className="grid grid-cols-1 sm-2:grid-cols-3 bg-protop-light-blue auto-rows-[390px] md:auto-rows-[270px] lg:auto-rows-[360px] xl:auto-rows-[540px]">
      <MotionDiv variants={opacity} className="flex flex-col gap-y-5 items-center justify-center bg-protop-light-blue p-5 lg:py-10 lg:px-20 text-center">
        <CrossHairIcon className='text-protop-space' />
        <h4 className="text-[16px] font-medium">
          Atención directa
        </h4>
        <p className='[text-wrap:balance] leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </MotionDiv>
      <MotionDiv variants={opacity} transition={{ delay: 0.25 }} className="flex flex-col gap-y-5 items-center justify-center bg-blue-grad-reverse sm-2:bg-blue-gradient py-5 px-8 lg:py-10 lg:px-20 text-center">
        <UserCheckIcon className='text-protop-space' />
        <h4 className="text-[16px] font-medium">
          Representación personal
        </h4>
        <p className='[text-wrap:balance] leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </MotionDiv>
      <MotionDiv variants={opacity} transition={{ delay: 0.5 }} className="flex flex-col gap-y-5 items-center justify-center bg-protop-light-blue py-5 px-8 lg:py-10 lg:px-20 text-center">
        <GifIcon className='text-protop-space' />
        <h4 className="text-[16px] font-medium">
          Primera consulta gratis
        </h4>
        <p className='[text-wrap:balance] leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </MotionDiv>
    </div>
  )
}

export default MisionCards
