import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='w-full py-5 absolute top-0 bg-c-purple'>
        <div className='w-7/12  flex justify-between mx-auto text-white'>
            <Image src="/uct_logo.png" width={130} height={130} alt='uct_logo' />
            <div className='flex justify-center items-center gap-32'>
                <div className='italic font-semibold'>
                    <span className='text-c-yellow'>Tu éxito</span> empieza aquí
                </div>
                <Image src="/sunedu.png" width={130} height={130} alt='uct_logo' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar