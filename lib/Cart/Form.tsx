import { useState } from "react";
import styles from "../../styles/Cart/Form.module.scss"

interface data  {
    [name:string]:any
}

function Order_Form({submit, submitRef}:any) {
    const [checkbox1, setCheckbox1] = useState(true)
    const handleChange = () => {
        setCheckbox1(!checkbox1);
    };

    const handleSubmit = (target:HTMLElement) => {
        const inputs = target.querySelectorAll("input")
        var send:data = {}

        for (let i=0; i<inputs.length;i++){
            send[inputs[i].id] = inputs[i].value
        }

        submit(send)
    }
    
    return (
        <form className={styles.form} onSubmit={(e:any)=>{e.preventDefault();handleSubmit(e.target)}}>
            <div className={styles.form_section}>
                <h3>Kontaktní informace</h3>
                <div className={styles.double}>
                    <div className={styles.input_container}>
                        <input type="email" placeholder="email@example.com" id="email" required/>
                        <label htmlFor="email">E-Mail</label>
                    </div>
                    <div className={styles.input_container}>
                        <input type="text" placeholder="+420 123 456 789" id="telefon" required/>
                        <label htmlFor="telefon">Telefon</label>
                    </div>
                </div>
            </div>

            <div className={styles.form_section}>
                <h3>
                    {!checkbox1?"Doručovací údaje":"Doručovací a fakturační údaje"}
                </h3>
                <div className={styles.double}>
                    <div className={styles.input_container}>
                        <input type="text" placeholder="Jan" id="first_name" required/>
                        <label htmlFor="first_name">Jméno</label>
                    </div>
                    <div className={styles.input_container}>
                        <input type="text" placeholder="Novák" id="second_name" required/>
                        <label htmlFor="second_name">Přijmení</label>
                    </div>
                </div>
                <div className={styles.input_container}>
                    <input type="text" placeholder="Pražská 12/14" id="adress" required/>
                    <label htmlFor="adress">Adresa - ulice a číslo</label>
                </div>

                <div className={styles.double}>
                    <div className={styles.input_container}>
                        <input type="text" placeholder="Praha" id="town" required/>
                        <label htmlFor="town">Město</label>
                    </div>
                    <div className={styles.input_container}>
                        <input type="text" placeholder="100 01" id="psc" required/>
                        <label htmlFor="psc">PSČ</label>
                    </div>
                </div>
                <div className={styles.input_container}>
                    <input type="text" placeholder="Česká Republika" id="country" value="Česká Republika" readOnly required/>
                    <label htmlFor="country">Země</label>
                </div>
            </div>

            <div className={styles.form_actions}>
                <div className={styles.action}>
                    <input type="checkbox" id="checkbox1" checked={checkbox1}
                        onChange={handleChange}
                        className={styles.checkbox1} 
                        name="scales" />
                    <label htmlFor="checkbox1">Fakturační údaje stejné jako doručovací</label>
                </div>
            </div>

            {
                !checkbox1 && 
                <div className={styles.form_section}>
                    <h3>
                        Fakturační údaje
                    </h3>

                    <div className={styles.input_container}>
                        <input type="text" placeholder="Jan Novák" id="invoice_name" required/>
                        <label htmlFor="invoice_name">Jméno a Příjmení (název firmy)</label>
                    </div>
                    <div className={styles.double}>
                        <div className={styles.input_container}>
                            <input type="text" placeholder="12345678" id="ico" />
                            <label htmlFor="ico">IČO</label>
                        </div>
                        <div className={styles.input_container}>
                            <input type="text" placeholder="CZ12345678" id="dic" />
                            <label htmlFor="dic">DIČ</label>
                        </div>
                    </div>

                    <div className={styles.input_container}>
                        <input type="text" placeholder="Pražská 12/14" id="adress-invoice" required/>
                        <label htmlFor="adress-invoice">Adresa - ulice a číslo</label>
                    </div>

                    <div className={styles.double}>
                        <div className={styles.input_container}>
                            <input type="text" placeholder="Praha" id="town-invoice" required/>
                            <label htmlFor="town-invoice">Město</label>
                        </div>
                        <div className={styles.input_container}>
                            <input type="text" placeholder="100 01" id="psc-invoice" required/>
                            <label htmlFor="psc-invoice">PSČ</label>
                        </div>
                    </div>
                    <div className={styles.input_container}>
                        <input type="text" placeholder="Česká Republika" id="country-invoice" required/>
                        <label htmlFor="country-invoice">Země</label>
                    </div>
                </div>
            }

            <button ref={submitRef} type="submit" hidden/>
        </form>
    );
}

export default Order_Form;