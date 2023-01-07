import styles from "../../styles/Home/productsSection.module.scss"
import { useRouter } from "next/router";
import { Cart2 } from "react-bootstrap-icons";

import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

function Products() {
    const router = useRouter()
    
    return (
        <>
            <h2 className={styles.headline}>Oblíbené produkty</h2>
            <div className={styles.products_wrapper}>
                    <ul className={styles.grid}>
                    { [...Array(8)].map((x, i) =>
                        <li className={styles.product}>
                            <a href={"/produkt/"+"1"} className={styles.link}>
                                <div className={styles.image}>
                                    <img src={"http://127.0.0.1:5000/"+"get/img/product|id-1|main.jpeg"}/>
                                </div>
                                <div className={styles.name}>
                                    <h2>
                                        Lampa
                                    </h2>
                                </div>
                                <div className={styles.info}>
                                    {true?
                                    <h4 className={styles.avalible}>Dostupné</h4>
                                    :
                                    <h4 className={styles.unavalible}>Nedostupné</h4>
                                    }
                                    <h3>{300} {"CZK"}</h3>
                                </div>
                            </a>

                            <div className={styles.actions}>
                                <button className={styles.buy} onClick={()=>{router.push("/produkt/"+"1")}}>
                                    <Cart2 color="#ff8c00"/>
                                    <h3>Koupit</h3>
                                </button>
                            </div>
                        </li>
                    )}
                    </ul>
                </div>
        </>
    );
}

export default Products;