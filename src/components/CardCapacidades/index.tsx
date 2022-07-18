import styles from './CardCapacidades.module.scss';


const CardCapacidades = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__imagemTecnologia}></div>

            <span className={styles.card__titulo}>Loren Ipsum dolor</span>
            <p className={styles.card__descricao}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
    )
}

export default CardCapacidades;