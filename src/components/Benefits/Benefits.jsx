'use client'
import React from 'react'
import styles from './Benefits.module.scss'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/sanity'

const Benefits = ({ benefits }) => {
    console.log(benefits);

    const renderBenefits = benefits.benefits.map(item => {
        const imageProps = useNextSanityImage(client, item.icon)

        return (
            <div className={styles.benefit} key={item._key}>
                <Image src={imageProps.src} loader={imageProps.loader} width={32} height={32} alt=''/>
                <span>{item.label}</span>
            </div>
        )
    })

    const imageBackground = useNextSanityImage(client, benefits.image)

    return (
        <section className={styles.benefits}>
            <div className={styles.content}>
                <div className={styles.boxText}>
                    <h3 className={styles.heading}>{benefits.title}</h3>
                    {benefits.text.map(item => (
                        <p className={styles.text} key={item._key}>{item.name}</p>
                    ))}
                    <div className={styles.benefits}>
                        {renderBenefits}
                    </div>
                    <div className={styles.containerBtn}>
                        <a className='btn btn-secondary'
                            href={benefits.linkBtn}
                            target='_blank'>
                            {benefits.btnText}
                        </a>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image src={imageBackground.src} loader={imageBackground.loader} fill={true} alt=''/>
                </div>
            </div>
        </section>
    )
}

export default Benefits