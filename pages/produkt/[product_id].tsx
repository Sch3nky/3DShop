import { useRouter } from "next/router";
import Head_global from "../../lib/global-head";

import styles from "../../styles/Product/product.module.scss"

import { ChevronCompactRight, ChevronCompactLeft, Cart4 } from 'react-bootstrap-icons';

import { GetStaticProps } from 'next'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';

type product = {
    id: number,
    name: string,
    price: string,
    price_currency: string,
    description: string,
    properties: object[],
    options: object[],
    photos: string[],
    main_photo: string,
    avalible: boolean,
    input_photos: boolean,
    show: boolean
}
interface props{
    data:product
}

function Product({data}:props) {
    const router = useRouter()
    const dispatch = useDispatch();
    async function AddToCart(self:EventTarget){
        var cart_data:any = {
            "id": data.id,
            "options": []
        }
        dispatch(addToCart(cart_data))
    }

    return (  
        <>
            <Head_global name={data.name}/>
            <main className={styles.main}>
                <div className={styles.content_wrapper}>
                    <section className={styles.basic_info}>
                        <h1 className={styles.product_name}>
                            {data.name}
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
                                <img src={data.main_photo}/>
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
                                {data.name}
                            </h1>
                            <p>
                                {data.description}
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
                    <form className={styles.action_bar} onSubmit={(event) => {AddToCart(event.target); event.preventDefault()}}>
                        <div className={styles.options}>

                        </div>
                        <div className={styles.actions}>
                            <div className={styles.info}>
                                <h2 className={styles.avalibility}>
                                    Dostupné
                                </h2>

                                <h2 className={styles.price}>
                                    {data.price} {data.price_currency}
                                </h2>
                            </div>
                            <div className={styles.add_to_cart}>
                                <input type="submit" value="Koupit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Product;
export async function getStaticPaths() {
    const res = await fetch('http://127.0.0.1:5000/get/product')
    const posts = await res.json()

    var paths = []
    for (let i = 1; i<posts.id_last; i++){
        paths.push({
            params: { product_id: i.toString()},
        })
    }
    return {
      paths: paths,
      fallback: false, // can also be true or 'blocking'
    }
}

export const getStaticProps: GetStaticProps<{data:product}> = async (context) => {
    const params = context.params!  
    const res = await fetch("http://127.0.0.1:5000/get/product/"+params.product_id)
    const raw_data = await res.json()
    const data:product = raw_data.data
    return {
        props: {
          data,
        },
      }
}