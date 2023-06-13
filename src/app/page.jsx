import Hero from '@/components/Hero/Hero'
import Image from 'next/image'
import client from '@/sanity'
import About from '@/components/About/About'
import Gallery from '@/components/Gallery/Gallery'
import Benefits from '@/components/Benefits/Benefits'
import Testimonials from '@/components/Testimonials/Testimonials'
import { Metadata } from 'next'
import Footer from '@/components/Footer/Footer'
 
export const metadata = {
  title: 'Psicóloga Raíssa Vitória - Home',
}
 

export default async function Page() {
  const hero = await client.fetch(`*[_type == "hero"][0]`)
  const about = await client.fetch(`*[_type == "about"][0]`)
  const gallery = await client.fetch(`*[_type == "gallery"][0]`)
  const testimonials = await client.fetch(`*[_type == "testimonials"][0]`)
  const benefits = await client.fetch(`*[_type == "benefits"][0]`)
  const footer = await client.fetch(`*[_type == "footer"][0]`)

  return (
    <>
      <Hero hero={hero} />
      <About about={about} />
      <Gallery gallery={gallery} />
      <Testimonials testimonials={testimonials} />
      <Benefits benefits={benefits}/>
      <Footer footer={footer}/>
    </>
  )
}