import { InboxIcon, PhoneIcon } from './ui/icons'

function Contact () {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 bg-protop-seasalt text-xs md:text-lg">
      <div className="flex flex-col md:flex-row gap-y-[5px] md:gap-y-0 gap-x-[30px] justify-center items-center px-[20px] py-[60px] md:py-[100px]">
        <span className="text-protop-light-blue">
          Escríbeme
        </span>
        <InboxIcon className="text-protop-light-blue" />
        <span className='hidden md:flex text-protop-space'>
          consulta@nicolasprotopsaltis.cl
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-y-[5px] md:gap-y-0 gap-x-[30px] justify-center items-center bg-protop-light-blue px-[20px] py-[60px] md:py-[100px]">
        <span>
          Llámame
        </span>
        <PhoneIcon className="text-protop-seasalt" />
        <span className='hidden md:flex text-protop-space'>
          +569 9 999 99 99
        </span>
      </div>
    </div>
  )
}

export default Contact
