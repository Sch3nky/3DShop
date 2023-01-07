import Head_global from "../../lib/global-head";
import styles from "../../styles/Cart/Info.module.scss"
import { CheckCircleFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from '../../redux/cart.slice';
import Link from "next/link";

function Buy_Info() {
    const dispatch = useDispatch();
    dispatch(removeFromCart(""));
    return (
        <>
            <Head_global name="Úspěch"/>
            <main className={styles.main}>
                <CheckCircleFill color="green"/>
                <h1>Vaše zpráva byla úspěšně odeslána.</h1>
                <Link href="/">Zpět na hlavní stránku</Link>
            </main>
        </>
    );
}

export default Buy_Info;