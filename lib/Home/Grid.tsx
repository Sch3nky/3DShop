import Link from "next/link";
import styles from "../../styles/Home/gridComponent.module.scss"

function Grid({data}: any) {
    return (
        <div className={styles.grid}>
            <Link href="/" className={styles.box1}>    
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" loading="lazy"/>
                <div className={styles.hover_label}>
                    <h1>
                        Kontakt
                    </h1>
                </div>
            </Link>
            <Link href="/" className={styles.box2}>
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" loading="lazy" />
                <div className={styles.hover_label}>
                    <h1>
                        Kontakt
                    </h1>
                </div>
            </Link>
            <Link href="/" className={styles.box3}>
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" loading="lazy" />
                <div className={styles.hover_label}>
                    <h1>
                        Kontakt
                    </h1>
                </div>
            </Link>
            <Link href="/kontakt" className={styles.box4}>
                <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" loading="lazy" />
                <div className={styles.hover_label}>
                    <h1>
                        Kontakt
                    </h1>
                </div>
            </Link>
        </div>
    );
}

export default Grid;