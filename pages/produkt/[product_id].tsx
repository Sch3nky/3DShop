import { useRouter } from "next/router";
import Footer from "../../lib/footer";
import Head_global from "../../lib/global-head";
import Navigation from "../../lib/navigation";

import styles from "../../styles/Product/product.module.scss"

function Product() {
    const router = useRouter()
    const { product_id }: any = router.query

    console.log(product_id)

    return (  
        <div>
            <Head_global name={product_id}/>
            <Navigation/>
            <main className={styles.main}>
                <div className={styles.content_wrapper}>
                    <section className={styles.basic_info}>
                        <h1 className={styles.product_name}>
                            Very big pipi
                        </h1>
                        <div className={styles.product_image}>
                            <img src="https://t3.ftcdn.net/jpg/05/24/30/02/360_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg"/>
                        </div>
                    </section>

                    <div className={styles.navigation}>
                        <a href="#description">
                            Popis
                        </a>
                        <a href="#photos">
                            Fotky
                        </a>
                        <a href="#properties">

                        </a>
                    </div>

                    <section className={styles.info}>
                        <div id="description" className={styles.description}>
                            <h1>
                                Název popisu
                            </h1>
                            <p>
                                Nějakej zkurvenej text, který nikoho nezajímá.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div id="photos" className={styles.photos}>
                            <div className={styles.main_photo}>
                                <img src=""/>
                            </div>
                            <div className={styles.photo_galery}>

                            </div>
                        </div>
                        <div id="properties" className={styles.properties}>
                            <ul>
                                <li>
                                    Velikost
                                </li>
                                <li>
                                    Záruční doba
                                </li>
                                <li>
                                    dostupné barvy
                                </li>
                                <li>
                                    Materiál
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className={styles.action_bar_wrapper}>
                    <section className={styles.action_bar}>

                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Product;