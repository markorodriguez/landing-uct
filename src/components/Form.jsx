import React from 'react'
import Connector from './Connector'
import Image from 'next/image'

const Form = () => {
  return (
    <div className="w-full h-full relative bg-c-blue-sky">
      <Connector />
      <div className="flex h-[75vh] mt-10 items-center w-7/12 mx-auto">
        <div>
          <Image src="/form.png" width={500} height={130} alt='uct_logo' />
        </div>
        <div>
          <p className="text-center">¡Completa el formulario y comienza tu transformación hoy!</p>
          <div className="grid grid-cols-2 my-10 gap-x-32 gap-y-10 auto-rows-auto">
            <input type="text" className="h-10 rounded-lg"/>
            <input type="text" className="h-10 rounded-lg"/>
            <input type="text" className="h-10 rounded-lg"/>
            <input type="text" className="h-10 rounded-lg"/>
            <input type="text" className="h-10 rounded-lg"/>
            <input type="text" className="h-10 rounded-lg"/>
          </div>
          <input type="text" className="h-10 rounded-lg w-full" />
        </div>
      </div>
    </div>
  )
}

export default Form