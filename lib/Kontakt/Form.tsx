import { strict } from "assert"
import styles from "../../styles/Kontakt/Form.module.scss"

interface sendJson {
    [name: string]: any
}

function Form({submit}:any) {
    const onSubmit = (e:any) => {
        const form:HTMLElement = e.target
        const imputs = form.querySelectorAll("input")
        const textarea = form.querySelector("textarea")
        const send:sendJson = {
        }

        for (let i=0; i<imputs.length; i++){
            if (imputs[i].id != "submit"){
                send[imputs[i].id] = imputs[i].value
            }
        }

        if(textarea !== null){
            send[textarea.id] = textarea.value
        }


        console.log(send)
        submit(send)
    }
    return (
        <form className={styles.form} onSubmit={event => {onSubmit(event); return false}}>
            <div className={styles.nameContainer}>
                <div className={styles.input_container}>
                    <label htmlFor="FirstName">Křestní Jméno</label>
                    <input type="text" placeholder="Jan" id="FirstName" required/>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="LastName">Přijmení</label>
                    <input type="text" placeholder="Novák" id="LastName" required/>
                </div>
            </div>
            
            <div className={styles.input_container}>
                <label htmlFor="email">E-Mail</label>
                <input type="email" placeholder="email@exaple.com" id="email" required/>
            </div>

            <div className={styles.input_container}>
                <label htmlFor="message">Zpráva</label>
                <textarea placeholder="Vaše zpráva" id="message" required></textarea>
            </div>

            <div className={styles.submitContainer}>
                <input type="submit" value="Odeslat" id="submit" onSubmit={() => {return false}} />
            </div>
        </form>
    );
}

export default Form;