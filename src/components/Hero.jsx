import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='min-h-screen h-full w-7/12 items-center mx-auto flex justify-between'>
        <div>
            <h1 className='text-6xl text-c-purple uppercase font-extrabold mt-10 mb-6 '>¡Estudia </h1>
            <h1 className='text-6xl text-c-purple uppercase font-extrabold mb-10 '>tu posgrado!</h1>
            <h2 className='text-c-yellow text-4xl font-extrabold'>15 Maestrías</h2>
            <p className='italic py-4 text-c-purple font-bold'>¡Aprovecha esta oportunidad única!</p>
            <button className='bg-c-green rounded-md px-4 py-2 text-white text-sm shadow-md'>Chatea con un experto</button>
        </div>
        <div>
            <Image src="/hero.png"  width={500} height={130} alt='uct_logo' />
        </div>
    </div>
  )
}

export default Hero