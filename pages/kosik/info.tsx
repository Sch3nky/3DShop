import Head_global from "../../lib/global-head";
import styles from "../../styles/Cart/Info.module.scss"
import { CheckCircleFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from '../../redux/cart.slice';
import { useEffect } from "react";
import Link from "next/link";

function Buy_Info() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(removeFromCart(""));
    }, []);
    return (
        <>
            <Head_global name="Hotovo"/>
            <main className={styles.main}>
                <CheckCircleFill color="green"/>
                <h1>Vaše objednávka byla úspěšně vytvořena</h1>
                <Link href="/produkty">Zpět na Eshop</Link>
            </main>
        </>
    );
}

export default Buy_Info;