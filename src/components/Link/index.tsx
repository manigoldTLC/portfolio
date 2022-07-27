import React from 'react';
import styles from './Link.module.scss';


interface Props {
    children: React.ReactNode,
    to: string
}

const Link = ({ children, to }: Props) => {
    return (
        <a href={to} className={styles.link}>{children}</a>
    )
}

export default Link