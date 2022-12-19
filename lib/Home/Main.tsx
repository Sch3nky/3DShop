import styles from "../../styles/Home/main.module.css"

import Link from "next/link"
import News from "./News"
import Grid from "./Grid"
import TextContent from "./TextContent"
import Products from "./Products"

interface Data {
    data:any
}

export default function Main({data}:Data){
    return(
        <main className={styles.main}>

            <News data={data.news}/>

            <section className={styles.content}>
                <Grid data={data.links}/>

                <TextContent data={data.text_content}/>
                <div className={styles.product_wrapper}>
                    <Products />
                </div>
            </section>
        </main>
    )
}

  