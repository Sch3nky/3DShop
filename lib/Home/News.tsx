import Link from "next/link";
import styles_news from "../../styles/Home/newsSection.module.scss"

function News({data}:any) {
    return (
        <Link href={data.link} className={styles_news.link}>
            <div>
                <img src={data.img_link} loading="eager"/>
            </div>
        </Link>
    );
}

export default News;