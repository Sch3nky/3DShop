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

    //options.forEach(item => optionPrice + item.price)

    function getPrice(){
        var optionPrice:number = 0
        options.forEach((item:any) => optionPrice = optionPrice + Number(item.price))
        return optionPrice
    }


    return (
        <div className={styles.product}>
            <div className={styles.image}>

            </div>
            <div className={styles.info}>
                <div className={styles.text}>
                    <h2>{gData.name}</h2>
                    <p className={styles.avalibility}>
                        {gData.avalible?"Dostupné":"Nedostupné"}
                    </p>
                </div>

                <div className={styles.amount}>
                    <button onClick={() => {plus({id: id,options: options})}}>
                        <ChevronUp />
                    </button>
                    <div className={styles.count}>{quantity}</div>
                    <button onClick={() => {minus({id: id,options: options})}}>
                        <ChevronUp />
                    </button>
                </div>
            </div>

            <div className={styles.actions}>
                <h3>{(Number(gData.price)+getPrice())*quantity}</h3>

                <button onClick={() => {del({id: id,options: options})}} >
                    <Trash3 />
                </button>
            </div>
        </div>
    );
}

export default CartItem;