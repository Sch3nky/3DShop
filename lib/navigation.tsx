import Image from "next/image"
import Link from "next/link"
import style from "../styles/Navigation.module.css"

import { Cart4, Search } from 'react-bootstrap-icons';

interface Props {

}

export default function Navigation(props:Props) {

    return (
        <div className={style.main}>
            <a href="/" className={style.logo}>
                
            </a>

            <nav className={style.navigation}>
                <div className={style.otherMobile}>
                    <Link href="/search"><Search color="black"/></Link>
                    <Link href="/cart"><Cart4 color="black"/></Link>
                </div>
                <input type="checkbox" className={style.unfold} name="unfold" id="unfold" hidden/>
                <div className={style.links}>
                    <Link href="/produkty"><h1>Produkty</h1></Link>
                    <Link href="/sochy"><h1>Sochy</h1></Link>
                    <Link href="/kontakt"><h1>Kontakt</h1></Link>

                </div>
                <label className={style.hamburgerMenu} htmlFor="unfold">
                    <span>

                    </span>
                    <span>
                        
                    </span>
                    <span>
                        
                    </span>
                </label>
            </nav>
            <div className={style.other}>
                <button><Search color="black"/></button>
                <Link href="/cart"><Cart4 color="black"/></Link>
            </div>
        </div>
    )
}