import styles from "../../styles/Cart/Action.module.scss"
import {GeoAlt} from "react-bootstrap-icons"

function Action_module({progress, services, onSubmit}:any) {
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

                        <label className={styles.shipment_option}>
                            <input type="radio" name="shipment" value="SAD" hidden/> 
                            <div>
                                <img src="http://127.0.0.1:5000/get/img/shipping|logo_ceska_posta.png"/>
                                <h3>
                                    Česká pošta
                                </h3>
                                <p>
                                    300Kč
                                </p>
                            </div>
                        </label>

                        <label className={styles.shipment_option}>
                            <input type="radio" name="shipment" value="SAD2" hidden/> 
                            <div>
                                <img src="http://127.0.0.1:5000/get/img/shipping|logo_ceska_posta.png"/>
                                <h3>
                                    Česká pošta
                                </h3>
                                <p>
                                    300Kč
                                </p>
                            </div>
                        </label>
                        <label className={styles.shipment_option}>
                            <input type="radio" name="shipment" value="SAD2" hidden/> 
                            <div>
                                <img src="http://127.0.0.1:5000/get/img/shipping|logo_ceska_posta.png"/>
                                <h3>
                                    Česká pošta
                                </h3>
                                <p>
                                    300Kč
                                </p>
                            </div>
                        </label>

                    </div>
                </div>

                <div className={styles.total_info}>
                    <div className={styles.services}>
                        {services.map((service:any, i:any) => <div key={i}>
                            <h3>{service.name}</h3>
                            <h3>{service.cost}</h3>
                        </div>)}
                    </div>
                    <div className={styles.total}>
                        <h2>Celkem</h2>
                        <h2>5 598 Kč</h2>
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