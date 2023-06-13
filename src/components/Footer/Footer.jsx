'use client'
import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/sanity'

const Footer = ({ footer }) => {

    const renderSocialMedias = footer.social.map(item => {
        const imageProps = useNextSanityImage(client, item.icon)

        return (
            <a href={item.link} target="_blank" key={item._key} className={styles.iconApp}>
                    <Image src={imageProps.src}  fill={true} alt=''/>
            </a>
        )
    })

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.socialMediaContainer}>
                    <h3>
                        {footer.title}
                    </h3>
                    <div className={styles.socialMedias}>

                    {renderSocialMedias}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer