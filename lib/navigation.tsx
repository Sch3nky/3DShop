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
                <input type="checkbox" name="unfold" id="unfold" hidden/>
                <div className={style.links}>
                    <Link href="https://google.com">Home</Link>
                    <Link href="https://google.com">Home</Link>
                    <Link href="https://google.com">Home</Link>
                    <Link href="https://google.com">Home</Link>
                    <Link href="https://google.com">Home</Link>
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
                <Search color="black"/>
                <Cart4 color="black"/>
            </div>
        </div>
    )
}