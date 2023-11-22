import { ArrowDownRight, PlusCircleIcon } from './ui/icons'

function ServicesGrid () {
  return (
    <div className='bg-protop-lavander'>
      <div className='grid auto-rows-[370px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <div className='col-span-full row-span-4 md:row-span-2 bg-transparent'>
          <div className='relative col-span-2 h-full'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[370px] z-10 absolute inset-0">
              <div className="md:col-span-1 lg:col-span-2 flex flex-col justify-between p-5 md:p-10">
                <h2 className="text-[50px] lg:text-[100px] xl:text-[120px] text-protop-light-blue font-medium">
                  Servicios
                </h2>
                <ArrowDownRight className='text-protop-light-blue' />
              </div>
              <div className="row-start-3 md:row-start-auto lg:col-start-3 lg:col-end-4 xl:col-start-4 xl:col-end-5 bg-protop-seasalt p-5 md:p-10">
                <div className='flex flex-col gap-y-5 text-protop-space'>
                  <PlusCircleIcon className='text-protop-light-blue' />
                  <h4 className='font-medium text-base'>
                    Defensa penal para imputados por falta penal, delito simple o crimen.
                  </h4>
                  <span>
                    Defensa en todo ámbito desde que son sindicadas como imputados. Cubre la información, asesoramiento, solicitud de diligencias de investigación, solicitud de audiencia y solicitud de pericias, entre otros.
                  </span>
                </div>
              </div>
              <div className="lg:col-start-2 lg:col-end-3 xl:col-start-3 xl:col-end-4 bg-protop-lavander p-5 md:p-10">
                <div className='flex flex-col gap-y-5 text-protop-space'>
                  <PlusCircleIcon className='text-protop-light-blue' />
                  <h4 className='font-medium text-base'>
                    Representación penal a personas condenadas por alguna falta, delito simple o crimen.
                  </h4>
                  <span>
                    Beneficios intra-penitenciarios y eliminación de antecedentes.
                  </span>
                </div>
              </div>
              <div className="lg:col-start-3 lg:col-end-4 xl:col-start-4 xl:col-end-5 bg-protop-lavander p-5 md:p-10">
                <div className='flex flex-col gap-y-5 text-protop-space'>
                  <PlusCircleIcon className='text-protop-light-blue' />
                  <h4 className='font-medium text-base'>
                    Representación a víctimas de delitos o crímenes.
                  </h4>
                  <span>
                    Como abogado querellante ayudo a pedir diligencias de investigación, declaración de testigos y presentación de acusación particular, entre otros.
                  </span>
                </div>
              </div>
            </div>
            <img className='block h-full w-full object-cover' src='https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='eg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesGrid
