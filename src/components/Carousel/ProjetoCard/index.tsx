import styles from './ProjetoCard.module.scss';
import { Link } from 'react-router-dom';


interface Props {
    titulo: string,
    imagem: string,
    styled: React.CSSProperties | undefined,
    link: string
}


const ProjetoCard = ({titulo, imagem, styled, link}: Props) => {

    return (
        <a className={styles.card} style={styled ? styled : {backgroundColor: '#fff'}} href={link ? link : '#'}>
            <figure>
                <img className={styles.card__imagem} src={imagem} alt={titulo} />
            </figure>
        </a>
    )
}   

export default ProjetoCard;