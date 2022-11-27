import styles_news from "../../styles/Home/newsSection.module.css"
import styles from "../../styles/Home/main.module.css"

export default function Main(){
    return(
        <main className={styles.main}>
            <section className={styles_news.main}>

            </section>
            <section className={styles.content}>
                <div className={styles.grid}>
                    <div className={styles.box1}>

                    </div>
                    <div className={styles.box2}>

                    </div>
                    <div className={styles.box3}>

                    </div>
                    <div className={styles.box4}>

                    </div>
                </div>

                <div className={styles.description}>
                    
                    <div className={styles.text}>
                        <h2>Headline</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <button >
                            Button
                        </button>
                    </div>

                    <div className={styles.image}>
                        <img>
                        
                        </img>
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
