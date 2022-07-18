import styles from './MinTitle.module.scss';


interface Props {
    children: React.ReactNode
}

const MinTitle = ({ children }: Props) => {
    return (
        <span className={styles.minTitle}>{children}</span>
    )
}

export default MinTitle;