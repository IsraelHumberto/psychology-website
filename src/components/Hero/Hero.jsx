'use client'

import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/sanity'

const Hero = ({ hero }) => {
    const imageLogo = useNextSanityImage(client, hero.iconLogo)
    const imageDesktop = useNextSanityImage(client, hero.imageDesktop)
    const imageMobile = useNextSanityImage(client, hero.imageMobile)

    return (
        <section className={styles.hero}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image src={imageLogo.src} loader={imageLogo.loader} width={31} height={31} alt=''/>
                    <h4>
                        {hero.nameLogo}
                    </h4>
                </div>
            </header>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 className={styles.title}>
                        <div className={styles.lightFont}>{hero.title}</div>
                        <strong>{hero.titleBold}</strong>
                    </h1>
                    <p className={styles.subtitle}>
                    {hero.subtitle}
                    </p>
                    <a className='btn btn-primary' href={hero.linkBtn} target='_blank'>
                    {hero.btnText}
                    </a>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src={imageDesktop.src} loader={imageDesktop.loader} fill={true} className={styles.desktop} alt=''/>
                <Image src={imageMobile.src} loader={imageMobile.loader} fill={true} className={styles.mobile} alt=''/>
            </div>
        </section>
    )
}

export default Hero