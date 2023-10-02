import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                    <span className={styles.footer__title}>Contato</span>
                    <a href='mailto:gabrielxcardoso20@gmail.com' className={`${styles.footer__text} ${styles['footer__text--link']}`}>e-mail: gabrielxcardoso20@gmail.com</a>
                </li>

                <li className={styles.footer__item}>
                    <span className={styles.footer__title}>Redes sociais</span>
                    <a href='https://www.linkedin.com/in/gabriel-xavier-cardoso-04080217b/' className={`${styles.footer__text} ${styles['footer__text--link']}`}>Linkedin</a>
                    <a href='https://github.com/manigoldTLC' className={`${styles.footer__text} ${styles['footer__text--link']}`}>Github</a>
                </li>
            </ul>

            <span className={styles.footer__span}>&copy; 2023 | Gabriel Xavier</span>
        </footer>
    )
}

export default Footer;
