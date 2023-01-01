import styles from "../styles/404.module.scss"
import Link from "next/link"

export default function Error() {
    return (
        <main className={styles.main}>
            <h1>404</h1>
            <p>Je nám líto, ale tato stránka zatím neexistuje.</p>
            <Link href={"/produkty"}>Zpět na E-Shop</Link>
        </main>
    )
}