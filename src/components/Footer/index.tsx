import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                    <span className={styles.footer__title}>Contato</span>
                    <a href='#' className={`${styles.footer__text} ${styles['footer__text--link']}`}>e-mail: example@example.com</a>
                </li>

                <li className={styles.footer__item}>
                    <span className={styles.footer__title}>Redes sociais</span>
                    <a href='#' className={`${styles.footer__text} ${styles['footer__text--link']}`}>Linkedin</a>
                    <a href='#' className={`${styles.footer__text} ${styles['footer__text--link']}`}>Github</a>
                </li>

                <li className={styles.footer__item}>
                    <span className={styles.footer__title}>Tecnologias de domínio</span>
                    <span className={styles.footer__text}>HTML/CSS</span>
                    <span className={styles.footer__text}>CSS/Sass</span>
                    <span className={styles.footer__text}>Bootstrap</span>
                    <span className={styles.footer__text}>JavaScript</span>
                    <span className={styles.footer__text}>TypeScript</span>
                    <span className={styles.footer__text}>React JS</span>
                    <span className={styles.footer__text}>React Native</span>
                </li>
            </ul>


            <span className={styles.footer__span}>&copy; 2022 | Gabriel Xavier Cardoso</span>
        </footer>
    )
}

export default Footer;