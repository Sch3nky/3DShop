import styles from "../../styles/Kontakt/Form.module.scss"

function Form() {
    const onSubmit = () => {
        
    }
    return (
        <form className={styles.form}>
            <div className={styles.nameContainer}>
                <div className={styles.input_container}>
                    <label htmlFor="FirstName">Křestní Jméno</label>
                    <input type="text" placeholder="Jan" id="FirstName"/>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="LastName">Přijmení</label>
                    <input type="text" placeholder="Novák" id="LastName"/>
                </div>
            </div>
            
            <div className={styles.input_container}>
                <label htmlFor="email">E-Mail</label>
                <input type="text" placeholder="email@exaple.com" id="email"/>
            </div>

            <div className={styles.input_container}>
                <label htmlFor="message">Zpráva</label>
                <textarea placeholder="Vaše zpráva" id="message"></textarea>
            </div>

            <div className={styles.submitContainer}>
                <input type="submit" value="Odeslat" />
            </div>
        </form>
    );
}

export default Form;