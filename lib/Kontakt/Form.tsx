import { CloudArrowUpFill } from "react-bootstrap-icons"
import styles from "../../styles/Kontakt/Form.module.scss"


interface sendJson {
    [name: string]: any
}

function Form({submit}:any) {
    const onSubmit = (e:any) => {
        const form:HTMLElement = e.target
        const inputs = form.querySelectorAll("input")
        const textarea = form.querySelector("textarea")
        const send:sendJson = {
        }

        var files = new FormData()
        for (let i=0; i<inputs.length; i++){
            if (inputs[i].id !== "submit" && inputs[i].id !== "file"){
                send[inputs[i].id] = inputs[i].value
            }
            else if (inputs[i].type === "file"){
                const input = inputs[i] as HTMLInputElement
                if (input.files?.length){
                    for (let i = 0; i < input.files.length; i++){
                        files.append('file['+i+']', (input.files as FileList)[i])
                    }
                }
            }
        }

        if(textarea !== null){
            send[textarea.id] = textarea.value
        }

        submit(send, files)
    }

    function maxFiles(fileInput: HTMLInputElement) {
        // Update the file count label
        const fileCountLabel = fileInput.parentElement?.querySelector('span') as HTMLSpanElement;
      
        if (fileInput.files?.length) {
        fileCountLabel.innerText = `Počet vybraných příloh: ${fileInput.files.length}`;
        } else {
        fileCountLabel.innerText = 'Kliknutím vyberte přílohy';
        }
        
      }
    return (
        <form className={styles.form} onSubmit={event => {onSubmit(event); event.preventDefault()}}>
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
                    <input type="file" id="file" onChange={(e) => {maxFiles(e.target)}} multiple hidden/>
                    <label htmlFor="file">
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