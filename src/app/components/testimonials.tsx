import { showUp } from '../lib/animations'
import { cn } from '../lib/utils'
import { MotionDiv } from './ui/motion-div'

type Props = {
  entries: {
    cards: Array<{
      id: string
      cardTitle: string
      cardOwner: string
      cardDescription: string
      cardAvatar: {
        url: string
        title: string
      }
    }>
  }
}

function Testimonials ({ entries }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] auto-rows-[390px] md:auto-rows-[405px] lg:auto-rows-[540px] xl:auto-rows-[375px] text-protop-space bg-protop-lavander overflow-hidden">
      {entries.cards.map((card, i) => {
        const isEven = i % 2 === 0
        return (
          <MotionDiv
            key={card.id}
            variants={showUp}
            transition={{ bounce: 0, delay: i * 0.25 }}
            className={cn({
              'bg-protop-lavander': isEven,
              'bg-gray-grad-reverse md:bg-gray-gradient': !isEven,
              'p-5 md:p-10': true
            })}
          >
            <div className="flex space-x-2">
              {card?.cardAvatar
                ? (
                  <img
                    src={card.cardAvatar.url}
                    alt={card.cardAvatar.title}
                    className="w-8 h-8 rounded-full object-cover block"
                  />
                  )
                : (
                  <div className="w-8 h-8 rounded-full bg-protop-space" />
                  )}
              <div className={cn('flex flex-col', {
                'gap-y-1': card?.cardOwner && card?.cardTitle,
                'justify-center': !(card?.cardOwner && card?.cardTitle)
              })}>
                <h5 className="font-medium">{card.cardTitle}</h5>
                <span className="font-normal">{card.cardOwner}</span>
              </div>
            </div>
            <p className="mt-[30px]" dangerouslySetInnerHTML={{ __html: card.cardDescription }} />
          </MotionDiv>
        )
      })}
    </div>
  )
}

export default Testimonials
