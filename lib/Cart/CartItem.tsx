import styles from "../../styles/Cart/CartItem.module.scss"
import {Trash3, ChevronUp, ChevronDown} from "react-bootstrap-icons"

import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(r => r.json())

interface props {
    id: number,
    quantity: number,
    del: any,
    plus: any,
    minus: any,
    options: any[]
}

function CartItem({id, quantity, del,plus,minus,options}:props) {
    const { data, error } = useSWR('http://127.0.0.1:5000/get/product/'+id, fetcher)

    if (error) return <div>Item failed to load</div>
    if (!data) return <div>Loading...</div>

    const gData = data.data

    function getPrice(){
        var optionPrice:number = 0
        options.forEach((item:any) => optionPrice = optionPrice + Number(item.price))
        return optionPrice
    }

    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={"http://127.0.0.1:5000/"+gData.main_photo}/>
            </div>

            <div className={styles.info}>
                <div className={styles.text}>
                    <div>
                        <h2>{gData.name}</h2>
                        <p>
                            {options.map(
                                (option: any) =>{
                                    if (JSON.stringify(option) !== JSON.stringify(options[options.length-1])){
                                        return option.name + ": " + option.value + ", "
                                    }
                                    else{
                                        return option.name + ": " + option.value
                                    }
                                }
                            )}
                        </p>
                    </div>

                    {gData.avalible?
                    <p className={styles.avalible}>
                        Dostupné
                    </p>
                    :
                    <p className={styles.unavalible}>
                        "Nedostupné"
                    </p>}
                </div>
            </div>

            <div className={styles.actions}>
                <div className={styles.amount}>
                    <div className={styles.count}><p>{quantity}</p></div>

                    <div className={styles.buttons}>
                        <button onClick={() => {plus({id: id,options: options})}}>
                            <ChevronUp />
                        </button>
                        <button onClick={() => {minus({id: id,options: options})}}>
                            <ChevronDown />
                        </button>
                    </div>
                </div>

                <h3>{(Number(gData.price)+getPrice())*quantity} {gData.price_currency}</h3>

                <button className={styles.delete} onClick={() => {del({id: id,options: options})}} >
                    <Trash3 />
                </button>
            </div>
        </div>
    );
}

export default CartItem;