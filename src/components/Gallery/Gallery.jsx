'use client'

import React from 'react'
import styles from './Gallery.module.scss'
import Slider from "react-slick";
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/sanity'
import Image from 'next/image'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const Gallery = ({gallery}) => {
  const renderGallery = gallery.photos.map(item => {
    const imageProps = useNextSanityImage(client, item.image)

    return (
      <div className={styles.box} key={item._key}>
        <Image src={imageProps.src} fill={true} alt=''/>
        <span>{item.text}</span>
      </div>
    )
  })
 
  return (
    <section className={styles.gallery}>
      <Slider {...settings} className={styles.slick}>
        {renderGallery}
      </Slider>

    </section>
  )
}

export default Gallery