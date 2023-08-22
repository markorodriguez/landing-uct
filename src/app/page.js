import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <main className='w-full min-h-screen h-screen'>
      <div className='min-h-screen'>
        <Navbar />
        <Hero />
      </div>
      <div>
        <Form />
        <Footer />
      </div>
    </main>
  )
}
