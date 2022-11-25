import Image from "next/image"
import Link from "next/link"
import style from "../styles/Navigation.module.css"

import { Cart4, Search } from 'react-bootstrap-icons';

interface Props {

}

export default function Navigation(props:Props) {
    return (
        <div className={style.main}>
            <div className={style.logo}>
                
            </div>

            <nav className={style.navigation}>
                <div className={style.otherMobile}>
                    <Link href="/search"><Search color="black"/></Link>
                    <Link href="/cart"><Cart4 color="black"/></Link>
                </div>
                <input type="checkbox" name="unfold" id="unfold" hidden/>
                <div className={style.links}>
                    <Link href="https://google.com"><h1>Home</h1></Link>
                    <Link href="https://google.com"><h1>Home</h1></Link>
                    <Link href="https://google.com"><h1>Home</h1></Link>
                    <Link href="https://google.com"><h1>Home</h1></Link>

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
                <Link href="/search"><Search color="black"/></Link>
                <Link href="/cart"><Cart4 color="black"/></Link>
            </div>
        </div>
    )
}