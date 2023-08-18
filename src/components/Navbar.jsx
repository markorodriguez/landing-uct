import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='w-full py-5 h-[11%] md:h-[10%] bg-c-purple'>
        <div className='w-11/12 md:w-7/12 h-full flex justify-between mx-auto text-white'>
            <Image src="/uct_logo.png" width={130} height={130} alt='uct_logo' />
            <div className='flex justify-center items-center gap-32'>
                <div className='italic hidden md:inline font-semibold'>
                    <span className='text-c-yellow'>Tu éxito</span> empieza aquí
                </div>
                <Image src="/sunedu.png" width={130} height={130} alt='uct_logo' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar