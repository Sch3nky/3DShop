import Link from "next/link"
import style from "../styles/Navigation.module.scss"

import { Cart4, Search } from 'react-bootstrap-icons';
import BurgerMenu from "./Navigation/BurgerMenu";
import { useState } from "react";

import { useSelector } from 'react-redux';
import { useRouter } from "next/router";

export default function Navigation() {
    const [unfold, unFoldChange] = useState(false)
    const router = useRouter()
    const cart = useSelector((state:any) => state.cart);

    function countCart(){
        var quantity:number = 0
        for (let i=0;i<cart.length;i++){
            quantity = quantity+Number(cart[i].quantity)
        }
        return quantity
    }

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
                            <Cart4 color="#404040"/>
                            {countCart() !== 0&&
                                <div className={style.itemCount}>
                                    <div>{countCart()}</div>
                                </div>
                            }
                        </div>
                    </Link>
                </div>
                <input type="checkbox" className={style.unfold} onChange={(e) => {unFoldChange(e.target.checked)}} checked={unfold} name="unfold" id="unfold" hidden/>
                <div className={style.links}>
                    <Link href="/produkty" onClick={() => unFoldChange(false)}><h1>E-Shop</h1></Link>
                    <Link href="/namiru" onClick={() => unFoldChange(false)}><h1>Výroba na míru</h1></Link>
                    <Link href="/kontakt" onClick={() => unFoldChange(false)}><h1>Kontakt</h1></Link>
                </div>
                <BurgerMenu htmlFor="unfold" checked={unfold}/>
            </nav>

            <div className={style.other}>
                <button hidden><Search color="black"/></button>
                <Link href="/kosik">
                    <div>
                        <Cart4 color="white"/>
                        {(countCart() !== 0 && !router.pathname.includes("/kosik"))&&
                            <div className={style.itemCount}>
                                <div>{countCart()}</div>
                            </div>
                        }
                    </div>
                </Link>
            </div>
        </div>
    )
}