import styles from "../../styles/Home/textComponent.module.scss"
import Link from "next/link";

function TextContent({data}:any) {
    return (
        <div className={styles.description}>
            <div className={styles.text}>
                <h2>{data.headline}</h2>

                <p>
                    {data.text}
                </p>
                <Link href={String(data.link)}>
                    {data.link_text}
                </Link>
            </div>

            <div className={styles.image}>
                <img src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480" />
            </div>
        </div>
    );
}

export default TextContent;