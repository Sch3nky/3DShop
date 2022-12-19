import Image from "next/image"
import Link from "next/link"
import style from "../styles/Navigation.module.scss"

import { Cart4, Search } from 'react-bootstrap-icons';
import BurgerMenu from "./Navigation/BurgerMenu";
import { use, useState } from "react";

interface Props {

}

export default function Navigation({data}:any) {
    const [unfold, unFoldChange] = useState(false)
    console.log(data)
    return (
        <div className={style.main} onResize={() => {if (window.innerWidth >= 890){unFoldChange(false)}}}>
            <div className={style.logo_container}>
                <Link href="/" className={style.logo}>
                    <div>
                        
                    </div>
                </Link>
            </div>

            <nav className={style.navigation}>
                <div className={style.otherMobile}>
                    <Link href="/search" hidden><Search color="black"/></Link>
                    <Link href="/kosik">
                        <div>
                            <Cart4 color="black"/>
                            {data.itemCount !== 0&&
                                <div className={style.itemCount}>
                                    <p>{data.itemCount}</p>
                                </div>
                            }
                        </div>
                    </Link>
                </div>
                <input type="checkbox" className={style.unfold} onChange={(e) => {unFoldChange(e.target.checked)}} checked={unfold} name="unfold" id="unfold" hidden/>
                <div className={style.links}>
                    <Link href="/produkty"><h1>E-Shop</h1></Link>
                    <Link href="/namiru"><h1>Výroba na míru</h1></Link>
                    <Link href="/kontakt"><h1>Kontakt</h1></Link>
                </div>
                <BurgerMenu htmlFor="unfold" checked={unfold}/>
            </nav>
            <div className={style.other}>
                <button hidden><Search color="black"/></button>
                <Link href="/kosik">
                    <div>
                        <Cart4 color="black"/>
                        {data.itemCount !== 0&&
                            <div className={style.itemCount}>
                                <p>{data.itemCount}</p>
                            </div>
                        }
                    </div>
                </Link>
            </div>
        </div>
    )
}