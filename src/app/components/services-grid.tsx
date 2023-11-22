import { ArrowDownRight, PlusCircleIcon } from './ui/icons'

function ServicesGrid () {
  return (
    <div className="grid grid-cols-1 sm-2:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[375px] overflow-hidden">
      <div className="col-start-1 col-end-2 lg:col-end-3 xl:col-end-4 row-start-1 row-end-2 lg:row-end-3">
        <img className="block h-full w-full object-cover" src="./lawyers.jpg" alt="lawyers" />
      </div>
      <div className='flex flex-col justify-between items-start h-full col-start-1 col-end-2 lg:col-end-3 row-start-1 p-5 sm-2:p-10'>
        <h2 className='text-protop-light-blue text-[50px] lg:text-[100px] xl:text-[120px] font-medium'>
          Servicios
        </h2>
        <ArrowDownRight className='h-[60px] w-[60px] sm-2:h-auto sm-2:w-auto text-protop-light-blue' />
      </div>
      <div className="flex flex-col gap-y-5 row-start-3 sm-2:row-start-1 sm-2:col-start-2 lg:col-start-3 xl:col-start-4 bg-protop-seasalt p-5 sm-2:p-10">
        <PlusCircleIcon className="text-protop-light-blue" />
        <h3 className='font-medium text-base text-protop-space'>
          Defensa penal para imputados por falta penal, delito simple o crimen.
        </h3>
        <p className='text-protop-space'>
          Defensa en todo ámbito desde que son sindicadas como imputados. Cubre la información, asesoramiento, solicitud de diligencias de investigación, solicitud de audiencia y solicitud de pericias, entre otros.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 row-start-2 sm-2:row-start-2 col-start-1 lg:col-start-2 xl:col-start-3 bg-protop-lavander p-5 sm-2:p-10">
        <PlusCircleIcon className="text-protop-light-blue" />
        <h3 className='font-medium text-base text-protop-space'>
          Representación penal a personas condenadas por alguna falta, delito simple o crimen.
        </h3>
        <p className='text-protop-space'>
          Beneficios intra-penitenciarios y eliminación de antecedentes.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 row-start-4 sm-2:row-start-2 sm-2:col-start-2 lg:col-start-3 xl:col-start-4 bg-protop-lavander p-5 sm-2:p-10">
        <PlusCircleIcon className="text-protop-light-blue" />
        <h3 className='font-medium text-base text-protop-space'>
          Representación a víctimas de delitos o crímenes.
        </h3>
        <p className='text-protop-space'>
          Como abogado querellante ayudo a pedir diligencias de investigación, declaración de testigos y presentación de acusación particular, entre otros.
        </p>
      </div>
    </div>
  )
}

export default ServicesGrid
