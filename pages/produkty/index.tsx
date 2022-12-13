import { Cart2 } from "react-bootstrap-icons";
import Footer from "../../lib/footer";
import Head_global from "../../lib/global-head";
import Navigation from "../../lib/navigation";

import styles from "../../styles/Products/Products.module.scss"

function Products() {
    return (
        <div className={styles.container}>
            <Head_global name="Naše Produkty" description="Stránka s našemi 3D producty"/>
            <Navigation />

            <main className={styles.main}>
                <header>
                    <h1>
                        3D vytisklé produkty
                    </h1>
                    <p>
                        PLA is one of the easiest materials to print. It is inexpensive and suitable (not only) for beginners. It’s usually used for printing detailed models, figures, and quick prototypes that don’t require high mechanical, chemical, or temperature resistance. Read more about PLA in our article or compare it with other materials in the Filament Guide.
                    </p>
                </header>

                <section className={styles.products_wrapper}>
                    <ul className={styles.grid}>
                        <li className={styles.product}>
                            <a className={styles.link}>
                                <div className={styles.image}>
                                    <img src="https://cdn.prusa3d.com/content/images/product/list/2599.jpg"/>
                                </div>
                                <div className={styles.name}>
                                    <h2>
                                        Big pipi
                                    </h2>
                                </div>
                                <div className={styles.info}>
                                    <h4 className={styles.unavalible}>Nedostupné</h4>
                                    <h3>CZK 579</h3>
                                </div>

                            </a>
                            <div className={styles.actions}>
                                <button className={styles.buy}>
                                    <Cart2 color="red"/>
                                    <h3>Koupit</h3>
                                </button>
                            </div>
                        </li>

                        <li className={styles.product}>
                            <a className={styles.link}>
                                <div className={styles.image}>
                                    <img src="https://cdn.prusa3d.com/content/images/product/list/2599.jpg"/>
                                </div>
                                <div className={styles.name}>
                                    <h2>
                                        Small pipi
                                    </h2>
                                </div>
                                <div className={styles.info}>
                                    <h4 className={styles.avalible}>Dostupné</h4>
                                    <h3>CZK 579</h3>
                                </div>

                            </a>
                            <div className={styles.actions}>
                                <button className={styles.buy}>
                                    <Cart2 color="red"/>
                                    <h3>Koupit</h3>
                                </button>
                            </div>
                        </li>


                    </ul>
                </section>
            </main>

            <Footer />
      </div>
    );
}

export default Products;