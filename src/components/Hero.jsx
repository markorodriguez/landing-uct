"use client"

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"

const Hero = () => {

  const [ref, inView] = useInView();
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])


  return (
    <div className='h-full md:h-[100vh] w-11/12 xl:w-10/12 min-[1000px]:w-11/12  min-[1600px]:w-8/12 items-center mx-auto flex md:flex-row  flex-col justify-center md:justify-between'>
        <motion.div variants={{
          visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0 } },
          hidden: { opacity: 0, scale: 0.8 }
        }} ref={ref} animate={controls} initial="hidden" className="text-center md:text-left">
            <h1 className='text-[2.5rem] md:text-4xl xl:text-6xl text-c-purple uppercase font-extrabold mt-20 md:mb-6 '>¡Estudia </h1>
            <h1 className='text-[2.5rem] md:text-4xl xl:text-6xl text-c-purple uppercase font-extrabold mb-10'>tu posgrado!</h1>
            <h2 className='text-c-yellow md:text-3xl xl:text-4xl font-extrabold'>15 Maestrías</h2>
            <p className='text-xs md:text-sm mt-2 text-c-purple'>1 año de estudio </p>

            <p className='italic py-4 text-c-purple font-bold'>¡Aprovecha esta oportunidad única!</p>
            <a href="http://mst.pe/ContactoUCTlanding" target="_blank" rel="norreferer" className='bg-c-green rounded-md px-4 py-2 text-white text-sm shadow-md'>Chatea con un experto</a>
        </motion.div>
        <motion.div variants={{
          visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } },
          hidden: { opacity: 0, scale: 0.5 }
        }} ref={ref} animate={controls} initial="hidden" className='relative p-8'>
            <Image className={{height: 'auto'}} src="/hero.png" width={450} height={130} alt='hero_image' />
        </motion.div>
        </div>
  )
}

export default Hero