
import Head_global from '../lib/global-head'
import TextContent from '../lib/Home/TextContent';
import { useState } from 'react';

import styles from "../styles/Bespoke/index.module.scss"

import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

import Link from 'next/link';
import TimelineComponent from '../lib/Bespoke/timeline';

function Bespoke({data}:any) {
    const [width, width_change] = useState(window.innerWidth)
    window.onresize = () => {
        width_change(window.innerWidth)
    }
    return (
        <>
            <Head_global name='Výroba na míru'/>
            <main className={styles.main}>
                <header>
                    <h1>Výroba na míru</h1>
                </header>

                <TextContent data={data.text_content}/>

                <section className={styles.timeline_container}>
                    <TimelineComponent data={data.timeline} />
                    <div className={styles.link}>
                        <Link href="/kontakt">Kontaktujte nás</Link>
                    </div>
                </section>

                <TextContent data={data.text_content_2}/>

                <section className={styles.galery_container}>
                    <h2>Galerie naší práce</h2>
                    <ul className={styles.galery}>
                        <li className={styles.item}><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/></li>
                        <li className={styles.item}><img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'/></li>
                        <li className={styles.item}><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/></li>
                        <li className={styles.item}><img src='https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'/></li>
                        <li className={styles.item}><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/></li>
                        <li className={styles.item}><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/></li>
                        <li className={styles.item}><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/></li>
                        <li className={styles.item}><img src='https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'/></li>
                        <li className={styles.item}><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/></li>
                        <li className={styles.item}><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/></li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export async function getStaticProps(context:any) {
    const res = await fetch("http://127.0.0.1:5000/get/on_order")
    const data = await res.json()
  
    return {
      props: {
        data: data.data,
      },
    }
  }

export default Bespoke;