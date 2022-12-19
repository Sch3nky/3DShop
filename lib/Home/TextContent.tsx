import styles from "../../styles/Home/textComponent.module.scss"
import Link from "next/link";

function TextContent({data}:any) {
    return (
        <div className={styles.description}>
            <div className={styles.text}>
                <div>
                    <h2>{data.headline}</h2>
                    <p>
                        {data.text}
                    </p>
                </div>
                <Link href={String(data.link)}>
                    {data.link_text}
                </Link>
            </div>

            <div className={styles.image}>
            <img
                src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                alt="Elva dressed as a fairy" />
            </div>
        </div>
    );
}

export default TextContent;