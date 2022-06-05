import styles from './Header.module.scss';
import { MdMenu } from 'react-icons/md';


const Header = () => {
    return (
        <header className={styles.header}>
            <a href="#" className={styles['header__link']}>
                <b>Gabriel Xavier</b><br></br>Desenvolvedor de Software
            </a>

            <a href="#" className={styles['header__container-menu']}>
                <MdMenu />
            </a>
        </header>
    )
}

export default Header