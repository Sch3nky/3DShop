import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/cart.slice';

import Head_global from "../../lib/global-head";

import styles from "../../styles/Cart/Basket.module.scss"

import {Icon1Circle, Icon2Circle, ChevronRight} from "react-bootstrap-icons"
import Action_module from "../../lib/Cart/Action";
import CartItem from "../../lib/Cart/CartItem";

import Link from "next/link";

interface CartItem{
    id:any,
    options:any
}

function Kosik({data}:any) {
    const router = useRouter()

    // Extracting cart state from redux store 
    const cart = useSelector((state:any) => state.cart);

    // Reference to the dispatch function from redux store
    const dispatch = useDispatch();

    const [shipment_id, shipment_change] = useState()

    function Continue(){
        if (cart.length > 0 && shipment_id){
            router.push({
                pathname: router.route + "/objednavka/[shipment_id]",
                query: { shipment_id: shipment_id },
            })
        }
    }

    function Delete(item:CartItem){
        dispatch(removeFromCart(item))
    }

    function Add(item:CartItem){
        dispatch(incrementQuantity(item))
    }

    function Decrease(item:CartItem){
        dispatch(decrementQuantity(item))
    }

    function getPrice(name:string, id:number){
        var price = 0
        if (id){
            price = data[name][data[name].findIndex((item:any) => item.id == id)].price
        }
        return price
    }

    return (  
        <>
            <Head_global name="Košík"/>
            
            <main className={styles.main}>
                {cart.length > 0 &&
                    <section className={styles.basket_navigation}>
                        <div className={[styles.step, styles.active].join(' ')}>
                            <Icon1Circle />
                            Košík
                        </div>
                        <ChevronRight className={styles.arrow}/>
                        <div className={styles.step}>
                            <Icon2Circle />
                            Objednávka
                        </div>
                    </section>
                }           
                {cart.length > 0?
                    <section className={styles.products_wrapper}>
                        <div className={styles.products_container}>
                            {cart?.map((item:any, key:number) => (
                                <CartItem id={item.id} quantity={item.quantity} del={Delete} plus={Add} minus={Decrease} options={item.options} key={key}/>
                            ))}
                        </div>
                    </section>
                    :
                    <div className={styles.empty}>
                        <h1>Váš košík je zatím prázdný.</h1>
                        <Link href="/produkty">Začněte nakupovat</Link>
                    </div>
                }
                
                {cart.length > 0 &&
                    <section className={styles.payment_wrapper}>
                        <Action_module progress={0} services={[{name:"Doprava", cost: getPrice("shipping", Number(shipment_id))}]}  Cart={cart} onSubmit={Continue} ship_data={data.shipping} changeShipping={shipment_change}/>
                    </section>
                }
            </main>
            
        </>
    );
}

export default Kosik;

export async function getStaticProps(context:any) {
    const res = await fetch("http://127.0.0.1:5000/get/cart")
    const r_data = await res.json()
    const data = r_data.data
    return {
        props: {
        data,
        },
    }
}