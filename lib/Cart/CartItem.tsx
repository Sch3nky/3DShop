import styles from "../../styles/Cart/CartItem.module.scss"
import {Trash3, ChevronUp, ChevronDown} from "react-bootstrap-icons"

import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(r => r.json())

interface props {
    id: number,
    quantity: number
    options: any[]
}

function CartItem({id, quantity, options}:props) {
    const { data, error } = useSWR('http://127.0.0.1:5000/get/product/'+id, fetcher)

    if (error) return <div>Item failed to load</div>
    if (!data) return <div>Loading...</div>

    const gData = data.data
    const optionPrice = 0 
    options.forEach(item => optionPrice + item.price)
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
                    <ChevronUp />
                    <div className={styles.count}>{quantity}</div>
                    <ChevronDown />
                </div>
            </div>

            <div className={styles.actions}>
                <h3>{(Number(gData.price)+optionPrice)*quantity}</h3>
                <Trash3 />
            </div>
        </div>
    );
}

export default CartItem;