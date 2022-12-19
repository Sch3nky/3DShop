
import Footer from "../../lib/footer";
import Head_global from "../../lib/global-head";
import Navigation from "../../lib/navigation";

import styles from "../../styles/Cart/Basket.module.scss"

import {Icon1Circle, Icon2Circle, ArrowRight} from "react-bootstrap-icons"
import Action_module from "../../lib/Cart/Action";
import Order_Form from "../../lib/Cart/Form";
import { useRouter } from "next/router";
import React from "react";
interface data  {
    [name:string]:any
}
function Objednavka() {
    const router = useRouter()

    const submitRef = React.useRef<HTMLElement>()

    function SubmitForm(){
        if (submitRef.current){
            submitRef.current.click()
        }
    }

    async function Create_Order(data:data){
        const response = await fetch("http://127.0.0.1:5000/post/new-order", 
                      {
                      method: 'POST', 
                      headers:{
                        'content-type':"application/json"
                      },
                      body: JSON.stringify(data)
                      }
                      )
      .then(r => {return r.json()})
      .then(json => {if (json.status == 0){router.push("info")}});  
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
                    <Action_module progress={1} services={[{name:"lol", cost:"lol"}, {name:"lol", cost:"lol"}]} onSubmit={SubmitForm}/>
                </section>
            </main>
        </>
    );
}

export default Objednavka;