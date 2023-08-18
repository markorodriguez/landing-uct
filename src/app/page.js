import Form from '@/components/Form'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      <div className='h-screen'>
        <Navbar />
        <Hero />
      </div>
      <div className='h-screen'>
        <Form/>
      </div>
      
    </main>
  )
}