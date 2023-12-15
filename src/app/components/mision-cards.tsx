import { CrossHairIcon, GifIcon, UserCheckIcon } from './ui/icons'
import { MotionDiv } from './ui/motion-div'
import { opacity } from '../lib/animations'

type Props = {
  entries: {
    misionCards: Array<{
      id: string
      cardTitle: string
      cardDescription: string
    }>
  }
}

function MisionCards ({ entries }: Props) {
  return (
    <div className="grid grid-cols-1 sm-2:grid-cols-3 bg-protop-light-blue auto-rows-[390px] md:auto-rows-[270px] lg:auto-rows-[360px] xl:auto-rows-[540px]">
      {entries.misionCards.map((card, i) => (
        <MotionDiv
          key={card.id}
          variants={opacity}
          transition={{ delay: 0.25 * i }}
          className="flex flex-col gap-y-5 items-center justify-center bg-protop-light-blue p-5 lg:py-10 lg:px-20 text-center"
        >
          {i === 0 && <CrossHairIcon className='text-protop-space' />}
          {i === 1 && <UserCheckIcon className='text-protop-space' />}
          {i === 2 && <GifIcon className='text-protop-space' />}
          <h4 className="text-[16px] font-medium">
            {card.cardTitle}
          </h4>
          <p className='[text-wrap:balance] leading-relaxed'>
            {card.cardDescription}
          </p>
        </MotionDiv>
      ))}
    </div>
  )
}

export default MisionCards
