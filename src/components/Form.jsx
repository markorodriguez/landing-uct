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
          <p>!Completa el formulario y comienza tu transformación hoy!</p>
          
        </div>
      </div>
    </div>
  )
}

export default Form