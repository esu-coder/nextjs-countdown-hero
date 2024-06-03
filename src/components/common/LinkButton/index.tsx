import { BUTTON_VARIANTS } from '@/constants/enum'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import styles from './LinkButton.module.scss'

type LinkButtonProps = LinkProps & React.HTMLProps<HTMLAnchorElement> & { variant?: BUTTON_VARIANTS }

function LinkButton({ children, href, className, variant = BUTTON_VARIANTS.Primary }: LinkButtonProps) {
    return (
        <Link
            href={href}
            className={`${styles[variant]} ${className}`}
        >
            {children}
        </Link>
    )
}

export default LinkButton