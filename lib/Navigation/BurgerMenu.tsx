
import style from "../../styles/Navigation/BurgerMenu.module.scss"

function BurgerMenu({htmlFor, checked}:any) {
    return (
        <label className={[style.hamburgerMenu, checked ? style.hamburgerMenuChecked:""].join(" ")} htmlFor={htmlFor}>
            <div className={style.hamburger}>
                <span className={style.bar1}></span>
                <span className={style.bar2}></span>
                <span className={style.bar3}></span>
                <span className={style.bar4}></span>
            </div>
        </label>
    );
}

export default BurgerMenu;