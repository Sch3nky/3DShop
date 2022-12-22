import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';

import Head_global from "../../lib/global-head";

import styles from "../../styles/Cart/Basket.module.scss"

import {Icon1Circle, Icon2Circle, ArrowRight} from "react-bootstrap-icons"

import Action_module from "../../lib/Cart/Action";
import CartItem from "../../lib/Cart/CartItem";

function Kosik() {
    const router = useRouter()

    // Extracting cart state from redux store 
    const cart = useSelector((state:any) => state.cart);

    // Reference to the dispatch function from redux store
    const dispatch = useDispatch();

    function Continue(){
        console.log(cart)
        if (cart.length > 0){
            router.push({
                pathname: router.route + "/objednavka/[shipment_id]",
                query: { shipment_id: 2 },
            })
        }
    }

    return (  
        <>
            <Head_global name="Košík"/>
            
            <main className={styles.main}>
                <section className={styles.basket_navigation}>
                    <div className={[styles.step, styles.active].join(' ')}>
                        <Icon1Circle />
                        Košík
                    </div>
                    <ArrowRight className={styles.arrow}/>
                    <div className={styles.step}>
                        <Icon2Circle />
                        Objednávka
                    </div>
                </section>

                <section className={styles.products_wrapper}>
                    <div className={styles.products_container}>
                    {cart?.map((item:any, key:number) => (
                        <CartItem id={item.id} quantity={item.quantity} options={item.options} key={key}/>
                    ))}
                    </div>
                </section>

                <section className={styles.payment_wrapper}>
                    <Action_module progress={0} services={[{name:"lol", cost:"lol"}, {name:"lol", cost:"lol"}]} onSubmit={Continue}/>
                </section>
            </main>
            
        </>
    );
}

export default Kosik;