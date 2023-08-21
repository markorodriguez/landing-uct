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
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

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
        reset()
        return `${data.message}`
      },
      error: 'Ha ocurrido algo inesperado'
    })
  };

  const requiredMessage = "Este campo es requerido"

  return (
    <div className="w-full h-full relative bg-c-blue-sky">
      <Toaster position='top-right' />
      <Connector />

      <div className="flex h-[90vh] w-11/12 xl:w-9/12 min-[1440px]:w-9/12 min-[1600px]:w-8/12 mt-10 items-center justify-center mx-auto">
        <motion.div variants={{
          visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0 } },
          hidden: { opacity: 0, scale: 0.8 }
        }} ref={ref} animate={controls} initial="hidden" className="md:w-5/12 md:block hidden">
          <Image src="/form.png" width={500} height={130} alt='uct_logo' />
        </motion.div>
        <div className="w-full lg:w-6/12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.p variants={{
              visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } },
              hidden: { opacity: 0, scale: 1 }
            }} ref={ref} animate={controls} initial="hidden" className="text-center font-semibold text-c-black">¡Completa el formulario y comienza tu transformación hoy!</motion.p>
            {/** Components were created below, but didn't manage to pass REF and get values  */}
            <div className="grid w-full grid-cols-2 my-10 gap-x-5 gap-y-10 auto-rows-auto text-c-gray text-sm">
              <div>
                <motion.input ref={ref} initial="hidden" animate={controls} variants={{
                  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } },
                  hidden: { opacity: 0, scale: 1 }
                }} type="text" className="h-10 px-4 w-full rounded-lg" placeholder="Nombres" {...register("name", { required: requiredMessage })} />
                {errors?.name && <p  role='alert' className='mx-4 my-1 text-c-purple'>{errors.name?.message}</p>}
              </div>

              <div>
                <motion.input ref={ref} initial="hidden" animate={controls} variants={{
                  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.4 } },
                  hidden: { opacity: 0, scale: 1 }
                }} type="text" pattern="^[0-9]+[0-9]*$" maxLength="8" className="h-10 px-4 rounded-lg w-full" placeholder="DNI" {...register("dni", {
                  required: requiredMessage
                })} />
                {errors?.dni && <p role='alert' className='mx-4 my-1 text-c-purple'>{errors.dni?.message}</p>}
              </div>

              <div>
                <motion.input ref={ref} initial="hidden" animate={controls} variants={{
                  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
                  hidden: { opacity: 0, scale: 1 }
                }} type="text" className="h-10 px-4 rounded-lg w-full" placeholder="Apellido Materno" {...register("surname", { required: requiredMessage })} />
                {errors?.surname && <p role='alert' className='mx-4 my-1 text-c-purple'>{errors.surname?.message}</p>}
              </div>

              <div>
                <motion.input ref={ref} initial="hidden" animate={controls} variants={{
                  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.6 } },
                  hidden: { opacity: 0, scale: 1 }
                }} type="text" className="h-10 px-4 rounded-lg w-full" placeholder="Apellido Paterno"  {...register("lastname", { required: requiredMessage })} />
                {errors?.lastname && <p role='alert' className='mx-4 my-1 text-c-purple'>{errors.lastname?.message}</p>}
              </div>

              <div>
                <motion.input ref={ref} initial="hidden" animate={controls} variants={{
                  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.7 } },
                  hidden: { opacity: 0, scale: 1 }
                }} type="email" className="h-10 px-4 rounded-lg w-full" placeholder="Correo Electrónico" {...register("email", { required: requiredMessage,  })} />
                {errors?.email && <p role='alert' className='mx-4 my-1 text-c-purple'>{errors.email?.message}</p>}
              </div>

              <div>
                <motion.input ref={ref} initial="hidden" animate={controls} variants={{
                  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.8 } },
                  hidden: { opacity: 0, scale: 1 }
                }} type="tel" pattern="^[0-9]+[0-9]*$" maxLength="9" className="h-10 px-4 bg-white rounded-lg w-full" placeholder="Celular" {...register("phone", { required: requiredMessage })} />
                {errors?.phone && <p role='alert' className='mx-4 my-1 text-c-purple'>{errors.phone?.message}</p>}
              </div>


            </div>
            <div className='text-sm text-c-gray'>
              <motion.select ref={ref} className="h-10 px-4 w-full rounded-lg text-c-gray bg-white  text-sm" initial="hidden" defaultValue={0} animate={controls} {...register("masterDegree", {
                required: requiredMessage, min: {
                  value: 1,
                  message: "Seleccione un programa"
                }
              })} variants={{
                visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.9 } },
                hidden: { opacity: 0, scale: 1 }
              }}>
                <option value={0} disabled>Seleccione un programa</option>
                {
                  masters ? <>
                    {masters.map((el) => <option value={el.id} key={crypto.randomUUID()}>{el.name}</option>)}
                  </> : null
                }
              </motion.select>
              {errors?.masterDegree && <p className='mx-4 my-1 text-c-purple'>{errors.masterDegree?.message}</p>}
            </div>

            <div className='text-center md:text-left'>
              <motion.button variants={{
                visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1 } },
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