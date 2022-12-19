import { useRouter } from "next/router";

import Footer from "../../lib/footer";
import Head_global from "../../lib/global-head";
import Navigation from "../../lib/navigation";

import styles from "../../styles/Cart/Basket.module.scss"

import {Icon1Circle, Icon2Circle, ArrowRight} from "react-bootstrap-icons"

import {Trash3, ChevronUp, ChevronDown} from "react-bootstrap-icons"
import Action_module from "../../lib/Cart/Action";

function Kosik() {
    const router = useRouter()

    function Continue(){
        router.push(router.route + "/objednavka")
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
                        <div className={styles.product}>
                            <div className={styles.image}>

                            </div>
                            <div className={styles.info}>
                                <div className={styles.text}>
                                    <h2>Velikánský pipísek</h2>
                                    <p className={styles.avalibility}>
                                        Skladem
                                    </p>
                                </div>

                                <div className={styles.amount}>
                                    <ChevronUp />
                                    <div className={styles.count}>3</div>
                                    <ChevronDown />
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <h3>2000Kč</h3>
                                <Trash3 />
                            </div>
                        </div>
                        <div className={styles.product}>

                        </div>
                        <div className={styles.product}>

                        </div>
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