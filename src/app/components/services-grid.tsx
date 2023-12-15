import { ArrowDownRight, PlusCircleIcon } from './ui/icons'

type Props = {
  entries: {
    mainTitle: string
    cards: Array<{
      id: string
      cardTitle: string
      cardDescription: string
    }>
  }
}

function ServicesGrid ({ entries }: Props) {
  return (
    <div id='servicios' className="grid grid-cols-1 sm-2:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden">
      <div className="col-start-1 col-end-2 lg:col-end-3 xl:col-end-4 row-start-1 row-end-2 lg:row-end-3">
        <img className="block h-full w-full object-cover" src="./lawyers.jpg" alt="lawyers" />
      </div>
      <div className='flex flex-col justify-between items-start h-full col-start-1 col-end-2 lg:col-end-3 row-start-1 p-5 sm-2:p-6 md:p-8 lg:p-10'>
        <h2 className='text-protop-light-blue text-[45px] lg:text-[100px] xl:text-[120px] font-medium'>
          {entries.mainTitle}
        </h2>
        <ArrowDownRight className='h-[60px] w-[60px] sm-2:h-auto sm-2:w-auto text-protop-light-blue' />
      </div>
      <div className="flex flex-col gap-y-5 row-start-3 sm-2:row-start-1 sm-2:col-start-2 lg:col-start-3 xl:col-start-4 bg-protop-seasalt p-5 sm-2:p-6 md:p-8 lg:p-10 aspect-square md:min-h-full">
        <PlusCircleIcon className="text-protop-light-blue" />
        <h3 className='font-medium text-base text-protop-space'>
          {entries.cards[0].cardTitle}
        </h3>
        <p className='text-protop-space'>
          {entries.cards[0].cardDescription}
        </p>
      </div>
      <div className="flex flex-col gap-y-5 row-start-2 sm-2:row-start-2 col-start-1 lg:col-start-2 xl:col-start-3 bg-protop-lavander p-5 sm-2:p-6 md:p-8 lg:p-10 aspect-square md:min-h-full">
        <PlusCircleIcon className="text-protop-light-blue" />
        <h3 className='font-medium text-base text-protop-space'>
          {entries.cards[1].cardTitle}
        </h3>
        <p className='text-protop-space'>
          {entries.cards[1].cardDescription}
        </p>
      </div>
      <div className="flex flex-col gap-y-5 row-start-4 sm-2:row-start-2 sm-2:col-start-2 lg:col-start-3 xl:col-start-4 bg-[#C3CCE0] p-5 sm-2:p-6 md:p-8 lg:p-10 aspect-square md:min-h-full">
        <PlusCircleIcon className="text-protop-light-blue" />
        <h3 className='font-medium text-base text-protop-space'>
          {entries.cards[2].cardTitle}
        </h3>
        <p className='text-protop-space'>
          {entries.cards[2].cardDescription}
        </p>
      </div>
    </div>
  )
}

export default ServicesGrid
