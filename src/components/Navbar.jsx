import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='absolute w-full py-5 h-[11%] min-[1000px]:h-[13%] bg-c-purple'>
        <div className='w-11/12 xl:w-10/12 min-[1000px]:w-11/12 min-[1600px]:w-8/12 h-full flex justify-between mx-auto text-white'>
            <Image style={{height: 'auto', width: 'auto'}} src="/uct_logo_2.png" width={230} height={230} alt='uct_logo' />
            <div className='flex justify-center items-center gap-32'>
                <div className='italic hidden md:inline font-semibold'>
                    <span className='text-c-yellow'>Tu éxito</span> empieza aquí
                </div>
                <Image style={{width: 'auto'}} src="/sunedu.png" width={130} height={130} alt='sunedu_licencia' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar