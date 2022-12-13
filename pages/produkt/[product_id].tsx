import { useRouter } from "next/router";
import Footer from "../../lib/footer";
import Head_global from "../../lib/global-head";
import Navigation from "../../lib/navigation";

import styles from "../../styles/Product/product.module.scss"

import { ChevronCompactRight, ChevronCompactLeft, Cart4 } from 'react-bootstrap-icons';

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
                        <div className={styles.product_images}>
                            <div className={styles.selected_photo}>
                                <div className={styles.action}>
                                    <button>
                                        <ChevronCompactLeft />
                                    </button>
                                    <button>
                                        <ChevronCompactRight />
                                    </button>
                                </div>
                                <img src="https://t3.ftcdn.net/jpg/05/24/30/02/360_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg"/>
                            </div>
                            <div className={styles.photo_galery}>
                                <div className={styles.test}>

                                </div>
                                <div className={styles.test}>

                                </div>
                                <div className={styles.test}>

                                </div>
                                <div className={styles.test}>

                                </div>
                                <div className={styles.test}>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.mobile_actions}>
                        <div className={styles.options}>

                        </div>
                        <div className={styles.actions}>

                        </div>
                    </section>

                    <section className={styles.info}>
                        <div id="description" className={styles.description}>
                            <h1>
                                Název popisu
                            </h1>
                            <p>
                                Nějakej zkurvenej text, který nikoho nezajímá.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
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
                    <form className={styles.action_bar}>
                        <div className={styles.options}>

                        </div>
                        <div className={styles.actions}>
                            <div className={styles.info}>
                                <h2 className={styles.avalibility}>
                                    Dostupné
                                </h2>

                                <h2 className={styles.price}>
                                    3000 Kč
                                </h2>
                            </div>
                            <div className={styles.add_to_cart}>
                                <input type="submit" value="Koupit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Product;