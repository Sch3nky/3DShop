import Head_global from "../../../lib/global-head";

import styles from "../../../styles/Cart/Basket.module.scss"

import {Icon1Circle, Icon2Circle, ArrowRight} from "react-bootstrap-icons"
import Action_module from "../../../lib/Cart/Action";
import Order_Form from "../../../lib/Cart/Form";
import { useRouter } from "next/router";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/cart.slice';
interface data  {
    [name:string]:any
}
function Objednavka({data}:any) {
    const router = useRouter()
    const dispatch = useDispatch();
    const shipment_id = router.query["shipment_id"]
    const [payment_id, payment_change] = React.useState()
    const submitRef = React.useRef<HTMLElement>()

    function SubmitForm(){
        if (submitRef.current){
            submitRef.current.click()
        }
    }
    const cart = useSelector((state:any) => state.cart);

    async function Create_Order(data:data){
        data["shipmentID"] = shipment_id
        data["paymentID"] = payment_id
        data["items"] = cart
        const response = await fetch("http://127.0.0.1:5000/post/new-order", 
                      {
                      method: 'POST', 
                      headers:{
                        'content-type':"application/json",
                      },
                      body: JSON.stringify(data)
                      }
                      )
      .then(r => {return r.json()})
      .then(json => {if (json.status == 0){dispatch(removeFromCart(""));router.push("/kosik/info")};console.log(json)});  
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
            <Head_global name="Objednávka"/>
            
            <main className={styles.main}>
                <section className={styles.basket_navigation}>
                    <div className={[styles.step].join(' ')}>
                        <Icon1Circle />
                        Košík
                    </div>
                    <ArrowRight className={styles.arrow}/>
                    <div className={[styles.step, styles.active].join(' ')}>
                        <Icon2Circle />
                        Objednávka
                    </div>
                </section>

                <section>
                    <Order_Form submit={Create_Order} submitRef={submitRef}/>
                </section>

                <section className={styles.payment_wrapper}>
                    <Action_module progress={1} services={[{name:"Doprava", cost: getPrice("shipping", Number(shipment_id))}, {name:"Platba", cost:getPrice("payments", Number(payment_id))}]} Cart={cart} onSubmit={SubmitForm} ship_data={data.payments} changeShipping={payment_change}/>
                </section>
            </main>
        </>
    );
}

export default Objednavka;

export async function getStaticPaths() {
    return {
      paths: [{ params: { shipment_id: '1' } }, { params: { shipment_id: '2' } }],
      fallback: true, // can also be true or 'blocking'
    }
  }

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