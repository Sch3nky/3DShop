import { useRouter } from "next/router";
import Head_global from "../../lib/global-head";

import styles from "../../styles/Product/product.module.scss"

import { ChevronCompactRight, ChevronCompactLeft, Cart4 } from 'react-bootstrap-icons';

import { GetStaticProps } from 'next'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { useState } from "react";

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

    const [price, changePrice] = useState(data.price)

    function priceChange(){
        const options_el = document.querySelectorAll("."+styles.option)
        var p:number = Number(data.price)
        for (let i=0; i<options_el.length ;i++){
            try{
                const input = options_el[i].querySelector('input[type="radio"]:checked')
                if (input){

                    p = p+Number(input.parentElement?.querySelector("p")?.innerText.replace("+", "").replace("CZK", ""))
                }
            }
            catch{

            }

        }
        changePrice(p.toString())
    }

    async function AddToCart(self:any){
        const options_el = self.querySelectorAll("."+styles.option)
        var options:any[] = []
        self.querySelector("."+styles.message).innerText = ""
        if (data.avalible){
            try {
                for (let i=0; i<options_el.length ;i++){
                    let name = options_el[i].querySelector("h2")?.innerText
                    const input = (options_el[i].querySelector('input[name='+name+']:checked') as HTMLInputElement)
                    let value = input.value
                    let price = input.parentElement?.querySelector("p")?.innerText.replace("+", "").replace("CZK", "")
                    options.push({
                        name: name,
                        value: value,
                        price: price
                    })
                }

                var cart_data:any = {
                    "id": data.id,
                    "options": options
                }

                dispatch(addToCart(cart_data))
            }
            catch{
                self.querySelector("."+styles.message).innerText = "Některé možnosti nejsou vybrané"
            }
        }
        else{
            self.querySelector("."+styles.message).innerText = "Produkt je momentáně nedostupný"
        }
    }

    /*function readFile() {
        if (!this.files || !this.files[0]) return;
          
        const FR = new FileReader();
          
        FR.addEventListener("load", function(evt) {
          document.querySelector("#img").src         = evt.target.result;
          document.querySelector("#b64").textContent = evt.target.result;
        }); 
          
        FR.readAsDataURL(this.files[0]);
    }*/

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
                                <img src={"http://127.0.0.1:5000/"+data.main_photo}/>
                            </div>
                            <div className={styles.photo_galery}>
                                <div className={styles.photo}>
                                    <img src={"http://127.0.0.1:5000/"+data.main_photo}/>
                                </div>
                                {data.photos.map(
                                    (item:any, key:number) => 
                                    <div className={styles.photo} key={key}>
                                        <img src={"http://127.0.0.1:5000/"+item}/>
                                    </div>
                                )}
                            </div>
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
                            {data.properties.length > 0 && 
                                <ul>
                                    {data.properties.map(
                                        (item:any, key:number) => 
                                        <li key={key}>
                                            <div>{item.name}</div><div>{item.value}</div>
                                        </li>
                                    )}
                                </ul>
                            }
                        </div>
                    </section>
                </div>

                <div className={styles.action_bar_wrapper}>
                    <form className={styles.action_bar} onSubmit={(event) => {AddToCart(event.target); event.preventDefault()}}>
                        <div className={styles.options}>
                            {data.options.map(
                                (item:any, key:number) => 
                                <div key={key} className={styles.option}>
                                    <h2>{item.name}</h2>
                                    <div className={styles.options_container}>
                                        {item.options.map(
                                            (item2:any, key2:number) => 
                                            <div key={key2} className={styles.radio}>
                                                <input type="radio" name={item.name} onChange={priceChange} value={item2.name} id={item2.name} hidden/>
                                                <label htmlFor={item2.name}>
                                                    <h3>{item2.name}</h3>
                                                    <p>+{item2.price}{data.price_currency}</p>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.info}>
                                <h2 className={styles.avalibility}>
                                    Dostupné
                                </h2>

                                <h2 className={styles.price}>
                                    {price} {data.price_currency}
                                </h2>
                            </div>
                            <div className={styles.add_to_cart}>
                                <input type="submit" value="Koupit"/>
                            </div>
                            <p className={styles.message}></p>
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