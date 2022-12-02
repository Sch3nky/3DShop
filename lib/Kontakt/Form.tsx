import styles from "../../styles/Kontakt/Form.module.scss"

function Form() {
    const onSubmit = () => {
        
    }
    return (
        <form className={styles.form}>
            <div className={styles.nameContainer}>
              <input type="text" placeholder="Křestní jméno"/>
              <input type="text" placeholder="Přijmení"/>
            </div>
            <input type="email" placeholder="E-Mail"/>
            <textarea placeholder="Zpráva"></textarea>
            <div className={styles.submitContainer}>
                <input type="submit" value="Odeslat" />
            </div>
            
        </form>
    );
}

export default Form;