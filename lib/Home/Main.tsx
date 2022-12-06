import styles from "../../styles/Home/main.module.css"

import Link from "next/link"
import News from "./News"
import Grid from "./Grid"

interface Data {
    data:any
}

export default function Main({data}:Data){
    return(
        <main className={styles.main}>

            <News data={data.news}/>

            <section className={styles.content}>
                <Grid data={data.links}/>

                <div className={styles.description}>
                    
                    <div className={styles.text}>
                        <h2>{data.description.headline}</h2>

                        <p>
                            {data.description.text}
                        </p>
                        <Link href={String(data.description.link)}>{data.description.link_text}</Link>
                    </div>

                    <div className={styles.image}>
                        <img src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480" />
                    </div>
                </div>

                <div className={styles.carousel}>
                    <div>
                        
                    </div>

                    <div>

                    </div>

                    <div>

                    </div>
                </div>
            </section>
        </main>
    )
}

  