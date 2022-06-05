import Header from '../../components/Header';
import Link from '../../components/Link';
import styles from './Home.module.scss';
import eu from '../../assets/minha_foto.png'


const Home = () => {
    return (
        <>
            <Header />

            <main className={styles.main}>

                <section className={styles.gabriel}>
                    <span className={styles['gabriel__name']}>Gabriel Xavier</span>
                    <h1 className={styles['gabriel__title']}>Desenvolvedor de Software & <br></br>Front-end de aplicações</h1>
                    <p className={styles['gabriel__paragraph']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>

                    <ul className={styles['gabriel__list']}>
                        <li className={styles['gabriel__item']}><Link>ver projetos</Link></li>|
                        <li className={styles['gabriel__item']}><Link>ler sobre mim</Link></li>
                    </ul>
                </section>

                <div className={styles['gabriel__imagem']}></div>
            </main>
        </>
    )
}

export default Home;