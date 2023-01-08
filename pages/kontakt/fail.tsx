import Head_global from "../../lib/global-head";
import styles from "../../styles/Cart/Info.module.scss"
import { XCircleFill } from "react-bootstrap-icons";
import Link from "next/link";

function Buy_Info() {
    return (
        <>
            <Head_global name="Chyba"/>
            <main className={styles.main}>
                <XCircleFill color="red"/>
                <h1>Něco se pokazilo zkuste to znovu.</h1>
                <Link href="/kontakt">Zkusit to znovu</Link>
            </main>
        </>
    );
}

export default Buy_Info;