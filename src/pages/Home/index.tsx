import Link from '../../components/Link';
import styles from './Home.module.scss';
import eu from '../../assets/minha_foto.png'
import MinTitle from '../../components/MinTitle';
import Title from '../../components/Title';
import CarouselComponent from '../../components/Carousel';
import TypicalComponent from '../../components/TypicalComponent';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import {FaReact, FaJsSquare, FaBootstrap, FaHtml5, FaCss3Alt, FaPython, FaSass, FaAngular} from 'react-icons/fa';
import {SiTypescript, SiPostgresql, SiCplusplus, SiCodio, SiJquery} from 'react-icons/si'
import CardLinguagens from '../../components/CardLinguagens';


const Home = () => {
    return (
        <main className={styles.main}>
            <section className={styles.gabriel}>
                <div className={styles.gabriel__wrapper}>
                    <MinTitle>Gabriel Xavier</MinTitle>
                    <Title><TypicalComponent texto="Desenvolvedor de Software & Front-end de aplicações" /></Title>
                    <p className={styles['gabriel__paragraph']}>
                        Desenvolvedor e graduando em Engenharia de Computação pela Universidade de Brasília.
                        Mais de 2 anos de experiência como desenvolvedor web, com maior ênfase em front-end.<br></br>
                    </p>

                    <ul className={styles.gabriel__list}>
                        <li className={styles.gabriel__item}><Link to='#projetos'>ver projetos</Link></li>
                        {/* <li className={styles.gabriel__item}><Link to='#sobremim'>ler sobre mim</Link></li> */}
                    </ul>
                </div>

                <img src={eu} className={styles.gabriel__imagem} alt="foto em preto e branco de Gabriel Xavier"/>
            </section>

            
            <section className={styles.projects} id="projetos">
                <MinTitle>Projetos recentes</MinTitle>
                <Title>Alguns de meus projetos</Title>

                <CarouselComponent />
            </section>

            <section className={styles.linguagens}>
                <MinTitle>Hard Skills</MinTitle>
                <Title>Linguagens e tecnologias de domínio</Title>

                <div className={styles.linguagens__container}>
                    <CardLinguagens children="ReactJS" childrenIcon={<FaReact color='white' size={40} />} />
                    <CardLinguagens children="JavaScript" childrenIcon={<FaJsSquare color='white' size={40} />} />
                    <CardLinguagens children="TypeScript" childrenIcon={<SiTypescript color='white' size={35} />} />
                    <CardLinguagens children="BootStrap 5" childrenIcon={<FaBootstrap color='white' size={40} />} />
                    <CardLinguagens children="Jquery" childrenIcon={<SiJquery color='white' size={35} />} />
                    <CardLinguagens children="React Native" childrenIcon={<FaReact color='white' size={40} />} />
                    <CardLinguagens children="Angular" childrenIcon={<FaAngular color='white' size={40} />} />
                    <CardLinguagens children="HTML 5" childrenIcon={<FaHtml5 color='white' size={40} />} />
                    <CardLinguagens children="CSS 3" childrenIcon={<FaCss3Alt color='white' size={40} />} />
                    <CardLinguagens children="SASS" childrenIcon={<FaSass color='white' size={40} />} />
                    <CardLinguagens children="Python" childrenIcon={<FaPython color='white' size={40} />} />
                    <CardLinguagens children="C" childrenIcon={<SiCodio color='white' size={35} />} />
                    <CardLinguagens children="C++" childrenIcon={<SiCplusplus color='white' size={35} />} />
                    <CardLinguagens children="PostgreSQL" childrenIcon={<SiPostgresql color='white' size={35} />} />
                </div>
            </section>

            {/* <section className={styles.capacidades} id="sobremim">
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
            </section> */}

            <BsFillArrowUpCircleFill
                className={styles.arrow}
                size={45}
                onClick={() => window.scrollTo(0, 0)}
            />
        </main>
    )
}

export default Home;