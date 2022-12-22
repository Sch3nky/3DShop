import { Cart2 } from "react-bootstrap-icons";
import Footer from "../lib/footer";
import Head_global from "../lib/global-head";
import Navigation from "../lib/navigation";

import styles from "../styles/Products/Products.module.scss"

import { useRouter } from "next/router";

function Products({data}:any) {
    const router = useRouter()

    function AddToCart(){

    }
    return (
        <>
            <Head_global name="Naše Produkty" description="Stránka s našemi 3D producty"/>

            <main className={styles.main}>
                <header>
                    <div>
                        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
                    </div>
                </header>

                <section className={styles.products_wrapper}>
                    <ul className={styles.grid}>
                        {data.products.map((product:any, i:any) =>
                            <li className={styles.product}>
                                <a href={"/produkt/"+product.id} className={styles.link}>
                                    <div className={styles.image}>
                                        <img src={product.photos}/>
                                    </div>
                                    <div className={styles.name}>
                                        <h2>
                                            {product.name}
                                        </h2>
                                    </div>
                                    <div className={styles.info}>
                                        <h4 className={styles.unavalible}>Nedostupné</h4>
                                        <h3>{product.price} {product.price_currency}</h3>
                                    </div>
                                </a>

                                <div className={styles.actions}>
                                    <button className={styles.buy} onClick={()=>{router.push("/produkt/"+product.id)}}>
                                        <Cart2 color="red"/>
                                        <h3>Koupit</h3>
                                    </button>
                                </div>
                            </li>)
                        }
                    </ul>
                </section>
            </main>
        </>
    );
}

export default Products;

export async function getStaticProps(context:any) {
    const res = await fetch("http://127.0.0.1:5000/get/products")
    const data = await res.json()
    return {
      props: {
        data,
      },
    }
  }