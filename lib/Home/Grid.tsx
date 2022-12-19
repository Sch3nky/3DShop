import Link from "next/link";
import styles from "../../styles/Home/gridComponent.module.scss"

function Grid({data}: any) {
    return (
        <div className={styles.grid}>
            <Link href="/kontakt" className={styles.box1}>    
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" loading="lazy"/>
            </Link>
            <Link href="/" className={styles.box2}>
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" loading="lazy" />
            </Link>
            <Link href="/" className={styles.box3}>
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" loading="lazy" />
            </Link>
            <Link href="/" className={styles.box4}>
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" loading="lazy" />
            </Link>
        </div>
    );
}

export default Grid;