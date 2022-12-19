import styles from "../../styles/Home/productsSection.module.scss"

import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

function Products() {
    
    return (
        <>
            <button className={[styles.controls, styles.left].join(" ")}>
                <ChevronLeft />
            </button>

            <div className={styles.carousel}>
                <div>
                    
                </div>

                <div>

                </div>

                <div>

                </div>
            </div>

            <button className={[styles.controls, styles.right].join(" ")}>
                <ChevronRight />
            </button>
        </>
    );
}

export default Products;