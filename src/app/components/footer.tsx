import { cn } from '../lib/utils'
import { buttonVariants } from './ui/button'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './ui/icons'
import { Layout } from './ui/layout-wrapper'

type Props = {
  entries: {
    buttonInstagramLink: string
    buttonLinkedInLink: string
    buttonFacebookLink: string
    buttonContactCopy: string
    buttonContactLink: string
  }
}

function Footer ({ entries }: Props) {
  return (
    <>
      <Layout>
        <footer className='py-[60px] sm-2:py-[100px] lg:py-[150px]'>
          <div className='flex flex-col gap-y-[60px] lg:gap-y-0 lg:flex-row gap-x-[60px]'>
            <div className='flex items-center sm-2:items-start flex-col gap-y-[30px] sm-2:gap-y-0 sm-2:flex-row text-center sm-2:text-start gap-x-[60px]'>
              <div className='sm-2:w-[138px] lg:w-full'>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.1708 23.9703L40.6453 33.4448C40.7431 33.5426 40.7431 33.699 40.6453 33.787L34.5734 39.8589C34.4756 39.9566 34.3192 39.9566 34.2312 39.8589L12.2512 17.8789C12.0948 17.7225 11.8308 17.83 11.8308 18.0549V37.9718C11.8308 38.1087 11.7233 38.2162 11.5864 38.2162H1.3786C1.26127 38.2162 1.16349 38.138 1.14394 38.0304L1.00705 37.4536C0.987498 37.3656 1.00705 37.2776 1.08527 37.2189C1.4666 36.8767 2.76701 35.6252 2.76701 34.315V20.3428C2.76701 20.206 2.87457 20.0984 3.01145 20.0984H4.55631C7.88068 20.0984 9.68953 18.4069 10.6771 16.5394C10.7259 16.4416 10.7064 16.3243 10.6282 16.2558L1.13416 6.77159C1.03639 6.67382 1.03639 6.51737 1.13416 6.42938L7.20603 0.357511C7.3038 0.259736 7.46024 0.259736 7.54824 0.357511L29.538 22.3472C29.6944 22.5037 29.9584 22.3961 29.9584 22.1712V2.22503C29.9584 2.08814 30.066 1.98059 30.2029 1.98059H40.3813C40.4986 1.98059 40.5964 2.05881 40.616 2.16636L40.7528 2.77257C40.7724 2.86057 40.7528 2.94856 40.6746 3.00723C40.2835 3.34944 39.0027 4.57164 39.0027 5.91117V19.854C39.0027 19.9909 38.8951 20.0984 38.7582 20.0984H37.2525C33.9281 20.0984 32.1193 21.8193 31.1317 23.6868C31.0828 23.7845 31.1024 23.9019 31.1806 23.9703H31.1708Z" stroke="#0066FF" strokeWidth="0.5" strokeMiterlimit="10" />
                </svg>
              </div>
              <div className='flex flex-col gap-y-[30px] sm-2:gap-y-0 sm-2:flex-row gap-x-[60px]'>
                <div className='flex flex-col gap-y-[24px]'>
                  <a href='#' className='transition-colors hover:text-protop-light-blue'>
                    Inicio
                  </a>
                  <a href='#acerca-de' className='transition-colors hover:text-protop-light-blue min-w-max'>
                    Acerca de
                  </a>
                </div>
                <div className='flex flex-col gap-y-[24px]'>
                  <a href='#servicios' className='transition-colors hover:text-protop-light-blue'>
                    Servicios
                  </a>
                  <a href='#testimonios' className='transition-colors hover:text-protop-light-blue'>
                    Testimonios
                  </a>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center sm-2:items-start gap-y-[30px] sm-2:gap-y-0 sm-2:flex-row gap-x-[60px] text-center sm-2:text-start'>
              <ul className='flex gap-x-[30px]'>
                <li className='group'>
                  <a
                    href={entries.buttonInstagramLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <InstagramIcon className='transition-colors group-hover:text-protop-light-blue' />
                  </a>
                </li>
                <li className='group'>
                  <a
                    href={entries.buttonLinkedInLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon className='transition-colors group-hover:text-protop-light-blue' />
                  </a>
                </li>
                <li className='group'>
                  <a
                    href={entries.buttonFacebookLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FacebookIcon className='transition-colors group-hover:text-protop-light-blue' />
                  </a>
                </li>
              </ul>
              <p>
                <span className='text-protop-light-blue inline'>
                  Información importante:
                </span>{' '}
                los honorarios son de acuerdo a la causa. Se establecen en entrevista con cliente y se envía una cotización al a través de Whatsapp o correo electrónico. Se entrega boleta de honorarios.
              </p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={entries.buttonContactLink}
                className={cn(buttonVariants({}), 'w-full sm-2:w-fit')}
              >
                {entries.buttonContactCopy}
              </a>
            </div>
          </div>
        </footer>
      </Layout>
      <div className='flex gap-x-4 items-center sm-2:items-start flex-col sm-2:flex-row justify-between bg-[#1C1D3B] px-5 md:px-10 py-[30px] sm-2:py-[60px] text-[9px] sm-2:text-[13px]'>
        <p>
          © {new Date().getFullYear()} Nicolas Protopsaltis Abogado penalista.
        </p>
        <p>
          Diseño y programación{' '}
          <a href='https://www.sebastianhansonstudio.com/' aria-label="Diseño y Programación: Sebastian Hanson Studio" target='_blank' className='text-protop-light-blue hover:underline' rel="noreferrer">
            Sebastian Hanson Studio
          </a>
        </p>
      </div>
    </>
  )
}

export default Footer
