import styles from "../styles/Footer.module.css"

export default function Footer(props:any){
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.linkContainer}>

                </div>
            </div>
            <div className={styles.copyright}>
                © 2022-2022 Jakub Schenk
            </div>
        </footer>
    )
}