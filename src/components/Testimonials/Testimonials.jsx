'use client'
import React from 'react'
import styles from './Testimonials.module.scss'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/sanity'
import { ImQuotesRight, ImQuotesLeft } from 'react-icons/im'

const Testimonials = ({ testimonials }) => {

  const renderTestimonials = testimonials.testimonials.map(item => {
    const imageProps = useNextSanityImage(client, item.photo)

    return (
      <div className={styles.testimonial} key={item._key}>
        <div className={styles.heading}>
          <Image src={imageProps.src} width={52} height={52} alt=''/>
          <div className={styles.apresentation}>
            <h4 className={styles.name}>{item.name}</h4>
            <span className={styles.treatment}>{item.treatment}</span>
          </div>
        </div>
        <div className={styles.text}>
          {item.testimonial}
          <ImQuotesLeft color='#7D8B6F' fontSize={58} className={`${styles.quotes} ${styles.quotesLeft}`}/>
          <ImQuotesRight color='#7D8B6F' fontSize={58} className={`${styles.quotes} ${styles.quotesRight}`}/>
        </div>
      </div>
    )
  })

  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.content}>
        <h1 className={`${styles.heading} titleSection`}>{testimonials.title}</h1>
        <div className={styles.testimonials}>
          {renderTestimonials}
        </div>
      </div>
    </section>
  )
}

export default Testimonials