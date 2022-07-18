import styles from './ProjetoCard.module.scss';


interface Props {
    titulo: string,
    imagem: string,
    styled: React.CSSProperties | undefined
}


const ProjetoCard = ({titulo, imagem, styled}: Props) => {

    return (
        <article className={styles.card} style={styled ? styled : {backgroundColor: '#fff'}}>
            <img className={styles.card__imagem} src={imagem} alt={titulo} />
            {/* <span className={styles.card__titulo}>Movies App</span> */}
        </article>
    )
}

export default ProjetoCard;