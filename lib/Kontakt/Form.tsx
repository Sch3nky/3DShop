import styles from "../../styles/Kontakt/Form.module.scss"

function Form() {
    const onSubmit = () => {
        
    }
    return (
        <form className={styles.form}>
            <div className={styles.nameContainer}>
                <div className={styles.input_container}>
                    <label htmlFor="">Křestní Jméno</label>
                    <input type="text" placeholder="Jan"/>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="">Přijmení</label>
                    <input type="text" placeholder="Novák"/>
                </div>
            </div>
            
            <div className={styles.input_container}>
                <label htmlFor="">E-Mail</label>
                <input type="text" placeholder="name@exaple.com"/>
            </div>

            <div className={styles.input_container}>
                <label htmlFor="">Zpráva</label>
                <textarea placeholder="Vaše zpráva"></textarea>
            </div>

            <div className={styles.submitContainer}>
                <input type="submit" value="Odeslat" />
            </div>
        </form>
    );
}

export default Form;