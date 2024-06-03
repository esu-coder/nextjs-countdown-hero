import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import HeroImage from '../../../public/images/frosted-ovens-featured-item.png'
import LinkButton from '../common/LinkButton'
import { BUTTON_VARIANTS } from '@/constants/enum'

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.heading}>
                    Freashly baked delights
                </h1>

                <h2 className={styles.subHeading}>
                    Upto 50% Off!
                </h2>

                <p className={styles.heroText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
                </p>

                <div>
                    <LinkButton href={'/'}>
                        Buy now
                    </LinkButton>

                    <LinkButton
                        href={'/'}
                        variant={BUTTON_VARIANTS.Secondary}
                        className={styles.menuButton}
                    >
                        See Menu
                    </LinkButton>
                </div>

            </div>

            <div className={styles.imageContainer}>
                <Image
                    src={HeroImage}
                    alt={'Featured bakery item from Frosted Ovens'}
                    className={styles.heroImg}
                    style={{ objectFit: 'contain' }}
                    quality={100}
                    priority
                />
            </div>
        </div>
    )
}

export default Hero