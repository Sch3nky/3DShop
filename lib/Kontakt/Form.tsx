import { CloudArrowUpFill } from "react-bootstrap-icons"
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
        submit(send)
    }
    return (
        <form className={styles.form} onSubmit={event => {onSubmit(event); return false}}>
            <div className={styles.nameContainer}>
                <div className={styles.input_container}>
                    <input type="text" placeholder="Jan" id="FirstName" autoComplete="given-name" required/>
                    <label htmlFor="FirstName">Jméno</label>
                </div>
                <div className={styles.input_container}>
                    <input type="text" placeholder="Novák" id="LastName" autoComplete="family-name" required/>
                    <label htmlFor="LastName">Přijmení</label>
                </div>
            </div>
            
            <div className={styles.input_container}>
                <input type="email" placeholder="email@exaple.com" id="email" autoComplete="email" required/>
                <label htmlFor="email">E-Mail</label>
            </div>

            <div className={styles.input_container}>
                <textarea placeholder="Vaše zpráva" id="message" required></textarea>
                <label htmlFor="message">Zpráva</label>
            </div>

            <div className={styles.submitContainer}>
                <div className={styles.fileInput}>
                    <input type="file" id="photo_input" accept="image/jpeg, image/png, image/gif" multiple hidden/>
                    <label htmlFor="photo_input">
                        <CloudArrowUpFill />
                        <span>Kliknutím vyberte přílohy</span>
                    </label>
                </div>
                <input type="submit" value="Odeslat" id="submit" onSubmit={() => {return false}} />
            </div>
        </form>
    );
}

export default Form;