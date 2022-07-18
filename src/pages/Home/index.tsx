import Header from '../../components/Header';
import Link from '../../components/Link';
import styles from './Home.module.scss';
import eu from '../../assets/minha_foto.png'
import MinTitle from '../../components/MinTitle';
import Title from '../../components/Title';
import CarouselComponent from '../../components/Carousel';
import CardCapacidades from '../../components/CardCapacidades';
import Footer from '../../components/Footer';


const Home = () => {
    return (
        <main className={styles.main}>
            <section className={styles.gabriel}>
                <div className={styles.gabriel__wrapper}>
                    <MinTitle>Gabriel Xavier</MinTitle>
                    <Title>Desenvolvedor de Software & <br></br>Front-end de aplicações</Title>
                    <p className={styles['gabriel__paragraph']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>

                    <ul className={styles.gabriel__list}>
                        <li className={styles.gabriel__item}><Link>ver projetos</Link></li>|
                        <li className={styles.gabriel__item}><Link>ler sobre mim</Link></li>
                    </ul>
                </div>

                <img src={eu} className={styles.gabriel__imagem} alt="foto em preto e branco de Gabriel Xavier"/>
            </section>

            
            <section className={styles.projects}>
                <MinTitle>Projetos recentes</MinTitle>
                <Title>Alguns de meus projetos</Title>

                <CarouselComponent />
            </section>

            <section className={styles.capacidades}>
                <MinTitle>Sobre mim</MinTitle>
                <Title>Eu, Gabriel Xavier</Title>

                <article className={styles.capacidades__wrapper}>
                    <img src={eu} className={styles.capacidades__imagemsobre} alt="foto em preto e branco de Gabriel Xavier"/>

                    <p className={styles.capacidades__sobre}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </article>
            </section>
        </main>
    )
}

export default Home;