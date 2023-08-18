import React from 'react'
import Connector from './Connector'
import Image from 'next/image'

const Form = () => {
  return (
    <div className="w-full h-full relative bg-c-blue-sky">
      <Connector />
      <div className="flex h-[75vh] mt-10 items-center justify-center w-full mx-auto">
        <div className="w-3/12">
          <Image src="/form.png" width={500} height={130} alt='uct_logo' />
        </div>
        <div className="w-4/12">
          <p className="text-center font-semibold text-c-black">¡Completa el formulario y comienza tu transformación hoy!</p>
          <div className="grid w-full grid-cols-2 my-10 gap-x-5 gap-y-10 auto-rows-auto text-c-gray text-sm">
            <input type="text" className="h-10 px-4 rounded-lg" placeholder="Nombres"/>
            <input type="text" className="h-10 px-4 rounded-lg" placeholder="DNI"/>
            <input type="text" className="h-10 px-4 rounded-lg" placeholder="Apellido Materno"/>
            <input type="text" className="h-10 px-4 rounded-lg" placeholder="Apellido Paterno"/>
            <input type="text" className="h-10 px-4 rounded-lg" placeholder="Correo Electrónico"/>
            <input type="text" className="h-10 px-4 rounded-lg" placeholder="Celular"/>
          </div>
          <select type="text" className="h-10 px-4 rounded-lg w-full bg-white text-c-gray text-sm" placeholder="Celular">
            <option value="" className="font-normal">Seleccione un programa</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Form