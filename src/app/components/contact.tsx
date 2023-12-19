import { InboxIcon, PhoneIcon } from './ui/icons'

type Props = {
  inbox: {
    title: string
    mail: string
  }
  phone: {
    title: string
    phone: string
  }
}

function Contact ({ inbox, phone }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 bg-protop-seasalt text-xs md:text-lg">
      <div className="flex flex-col md:flex-row gap-y-[5px] md:gap-y-0 gap-x-[30px] justify-center items-center px-[20px] py-[60px] md:py-[100px] aspect-square sm:aspect-auto">
        <span className="text-protop-light-blue">
          {inbox.title}
        </span>
        <InboxIcon className="w-5 h-5 sm:h-auto sm:w-auto text-protop-light-blue" />
        <a href={`mailto:${inbox.mail}`} className='hidden md:flex text-protop-space hover:underline'>
          {inbox.mail}
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-y-[5px] md:gap-y-0 gap-x-[30px] justify-center items-center bg-protop-light-blue px-[20px] py-[60px] md:py-[100px] aspect-square sm:aspect-auto">
        <span>
          {phone.title}
        </span>
        <PhoneIcon className="w-5 h-5 sm:h-auto sm:w-auto text-protop-seasalt" />
        <a href={`tel:${phone.phone}`} className='hidden md:flex text-protop-space hover:underline'>
          {phone.phone}
        </a>
      </div>
    </div>
  )
}

export default Contact
