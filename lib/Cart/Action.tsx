import styles from "../../styles/Cart/Action.module.scss"
import {GeoAlt} from "react-bootstrap-icons"

import useSWR from 'swr'
const fetcher = (url:string) => fetch(url).then(r => r.json())

function Action_module({progress, services, Cart, onSubmit, ship_data, changeShipping}:any) {
    const { data, error } = useSWR('http://127.0.0.1:5000/get/products', fetcher)

    if (error) return <div>Item failed to load</div>
    if (!data) return <div>Loading...</div>

    const gData = data.products
    function getPrice(){
        var F_price = 0
        Cart.forEach((product:any) => {
            var price = 0
            const index=gData.findIndex((item:any) => Number(item.id) === Number(product.id))
            price = price + Number(gData[index]["price"])
            product.options.forEach((item:any) => price = price + Number(item.price))
            F_price = price * product.quantity
        });

        services.forEach((service:any) => {
            F_price = F_price + Number(service.cost)
        });

        return F_price.toLocaleString()
    }

    function changeOptions(self:any){
        const options:ParentNode = self.parentElement.parentElement
        changeShipping((options.querySelector("input[name='shipment']:checked") as HTMLInputElement).value)
    }

    return (
        <div className={styles.payment_container}>
            <div className={styles.selector}>
                <div className={styles.shipment}>
                    <div className={styles.title}>
                        {
                            progress==0
                            ?
                            <GeoAlt />
                            
                            :
                            <GeoAlt />
                        }
                        <h2>{progress==0?"Doprava":"Platba"}</h2>
                    </div>

                    <div className={styles.options}>
                        <h3>{progress==0?"Vyberte dopravce:":"Vyberte způsob platby:"}</h3>

                        {ship_data.map(
                            (item:any, key:number) => 
                            <label className={styles.shipment_option} key={key}>
                                <input type="radio" name="shipment" value={item.id} onChange={(e) => {changeOptions(e.target)}} hidden/> 
                                <div>
                                    <img src={"http://127.0.0.1:5000/"+item.icon} />
                                    <h3>
                                        {item.name}
                                    </h3>
                                    <p>
                                        {item.price} Kč
                                    </p>
                                </div>
                            </label>
                        )}

                    </div>
                </div>

                <div className={styles.total_info}>

                    <div className={styles.services}>
                        {services.map((service:any, i:any) => 
                        <div key={i}>
                            <h3>{service.name}</h3>
                            <h3>{service.cost.toLocaleString()} Kč</h3>
                        </div>)}
                    </div>

                    <div className={styles.total}>
                        <h2>Celkem</h2>
                        <h2>{getPrice()} Kč</h2>
                    </div>
                </div>
            </div>
                
            <button className={styles.continue} onClick={onSubmit}>
                {progress == 0 ?
                    "Pokračovat":"Dokončit"
                }
            </button>
        </div>
    );
}

export default Action_module;