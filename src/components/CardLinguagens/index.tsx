import styles from './CardLinguagens.module.scss';


interface Props {
    children: React.ReactNode,
    childrenIcon: React.ReactNode
}

const CardLinguagens = ({ children, childrenIcon }: Props) => {
    return (
        <div className={styles.card}>
            <figure>{childrenIcon}</figure>
            <span className={styles.card__nomeLinguagem}>{children}</span>
        </div>
    )
}

export default CardLinguagens;