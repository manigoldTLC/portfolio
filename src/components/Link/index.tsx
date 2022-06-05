import React from 'react';
import styles from './Link.module.scss';


interface Props {
    children: React.ReactNode
}

const Link = ({ children }: Props) => {
    return (
        <a href='#' className={styles.link}>{children}</a>
    )
}

export default Link