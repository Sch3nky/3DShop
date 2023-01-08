import { Cart2 } from "react-bootstrap-icons";
import Head_global from "../lib/global-head";

import styles from "../styles/Products/Products.module.scss"

import { useRouter } from "next/router";
import { useState } from "react";

function Products({data}:any) {
    const router = useRouter()
    const [products, products_change] = useState(data.products)
    const [width, width_change] = useState(window.innerWidth)
    window.onresize = () => {
        width_change(window.innerWidth)
    }
    function filter(self:any){
        var f_data = []
        
    }
    return (
        <>
            <Head_global name="Naše Produkty" description="Stránka s našemi 3D producty"/>

            <main className={styles.main}>
                <header>
                    {width < 600?
                    <h1>
                        E-shop
                    </h1>
                    :
                    <div>
                        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
                    </div>
                    }
                </header>

                <section className={styles.products_wrapper}>
                    <div className={styles.filter_wrapper}>
                        <select name="filter" id="filter" className={styles.filter}>
                            <option value="recomend">Doporučené</option>
                            <option value="h-price">Nejnižší cena</option>
                            <option value="l-price">Nejvyžší cena</option>
                            <option value="avalible">Dostupnost</option>
                        </select>
                    </div>

                    <ul className={styles.grid}>
                        {products.map((product:any, key:number) =>
                            <li className={styles.product} key={key}>
                                <a href={"/produkt/"+product.id} className={styles.link}>
                                    <div className={styles.image}>
                                        <img src={"http://127.0.0.1:5000/"+product.main_photo}/>
                                    </div>
                                    <div className={styles.name}>
                                        <h2>
                                            {product.name}
                                        </h2>
                                    </div>
                                    <div className={styles.info}>
                                        {product.avalible?
                                        <h4 className={styles.avalible}>Dostupné</h4>
                                        :
                                        <h4 className={styles.unavalible}>Nedostupné</h4>
                                        }
                                        <h3>{product.price} {product.price_currency}</h3>
                                    </div>
                                </a>

                                <div className={styles.actions}>
                                    <button className={styles.buy} onClick={()=>{router.push("/produkt/"+product.id)}}>
                                        <Cart2 color="#ff8c00"/>
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
    try{
        const res = await fetch("http://127.0.0.1:5000/get/products")
        const data = await res.json()
        return {
        props: {
            data,
        },
        }
    }
    catch {
        return { notFound: true };
    }
}