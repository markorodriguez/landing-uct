"use client"
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Connector from './Connector'
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"

const AnimatedInput = React.forwardRef(({ controls, type, placeholder, registerProps, delay }, ref) => {
  return (
    <motion.input
      ref={ref}
      initial="hidden"
      animate={controls}
      required
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 1, delay } },
        hidden: { opacity: 0, scale: 1 },
      }}
      type={type}
      className="h-10 px-4 rounded-lg"
      placeholder={placeholder}
      {...registerProps}
    />
  );
});

AnimatedInput.displayName = "AnimatedInput"

const AnimatedSelect = React.forwardRef(({ controls, children, delay }, ref) => {
  return (
    <motion.select
      className="h-10 px-4 rounded-lg w-full bg-white text-c-gray text-sm"
      ref={ref}
      initial="hidden"
      animate={controls}
      required
      defaultValue="0"
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 1, delay } },
        hidden: { opacity: 0, scale: 1 },
      }}
    >
      {children}
    </motion.select>
  );
});

AnimatedSelect.displayName = "AnimatedSelect"

const Form = () => {
  const [masters, setMasters] = useState(null)
  const { register, handleSubmit, reset } = useForm()

  const [ref, inView] = useInView();
  const controls = useAnimation()

  useEffect(() => {
    const getMasterList = async () => {
      const response = await fetch("/api/masters");
      const data = await response.json();
      return data.data;
    }

    const fetchData = async () => {
      try {
        const mastersData = await getMasterList();
        setMasters(mastersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const onSubmit = async (data) => {
    console.log(data)
    toast.promise(axios.post("/api/register", data), {
      loading: 'Registrando...',
      success: ({ data }) => {
        return `${data.message}`
      },
      error: 'Ha ocurrido algo inesperado'
    })
    reset()
  };

  return (
    <div className="w-full h-full relative bg-c-blue-sky">
      <Toaster position='top-right' />
      <Connector />

      <div className="flex h-[75vh] mt-10 items-center justify-center w-full mx-auto">
        <motion.div variants={{
          visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0 } },
          hidden: { opacity: 0, scale: 0.8 }
        }} ref={ref} animate={controls} initial="hidden" className="md:w-3/12 md:block hidden">
          <Image src="/form.png" width={500} height={130} alt='uct_logo' />
        </motion.div>
        <div className="md:w-4/12 w-11/12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.p variants={{
              visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } },
              hidden: { opacity: 0, scale:1 }
            }} ref={ref} animate={controls} initial="hidden" className="text-center font-semibold text-c-black">¡Completa el formulario y comienza tu transformación hoy!</motion.p>
            <div className="grid w-full grid-cols-2 my-10 gap-x-5 gap-y-10 auto-rows-auto text-c-gray text-sm">

              <AnimatedInput ref={ref} delay={0.2} controls={controls} type="text" placeholder="Nombres" {...register("name", { required: true })} />
              <AnimatedInput ref={ref} delay={0.3} controls={controls} type="text" pattern="^[0-9]+[0-9]*$" maxLength="8" placeholder="DNI" {...register("dni", { required: true, maxLength: 8 })} />
              <AnimatedInput ref={ref} delay={0.4} controls={controls} type="text" placeholder="Apellido Materno" {...register("surname", { required: true })} />
              <AnimatedInput ref={ref} delay={0.5} controls={controls} type="text" placeholder="Apellido Paterno" {...register("lastname", { required: true })} />
              <AnimatedInput ref={ref} delay={0.6} controls={controls} type="text" placeholder="Correo Electrónico" {...register("email", { required: true })} />
              <AnimatedInput ref={ref} delay={0.7} controls={controls} type="tel" pattern="^[0-9]+[0-9]*$" maxLength="9" placeholder="Celular" {...register("phone", { required: true })} />


            </div>
            <AnimatedSelect ref={ref} delay={0.8} controls={controls} {...register("masterDegree", { required: true })} placeholder="Celular">
              <option value="0" disabled>Seleccione un programa</option>
              {
                masters ? <>
                  {masters.map((el) => <option value={el.id} key={crypto.randomUUID()}>{el.name}</option>)}
                </> : null
              }
            </AnimatedSelect>
            <div className='text-center md:text-left'>
            <motion.button variants={{
              visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.9 } },
              hidden: { opacity: 0, scale: 1 }
            }} ref={ref} animate={controls} initial="hidden" type='submit' className='mt-8 px-14  bg-c-purple text-white py-1 rounded-lg shadow-md'>Enviar</motion.button>
          
            </div>
           </form>
        </div>
      </div>

    </div>
  )
}

export default Form