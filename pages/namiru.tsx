
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

function sad() {
    const [width, width_change] = useState(window.innerWidth)
    window.onresize = () => {
        width_change(window.innerWidth)
    }
    return (
        <>
            <Head_global name='Výroba na míru'/>
            <main className={styles.main}>
                <header>
                    <h1>Objednávka na míru</h1>
                </header>

                <section className={styles.description}>
                    <div className={styles.text}>
                        <div>
                            <h2>{"The Lol"}</h2>
                            <p>
                                {"lol"}
                            </p>
                        </div>
                    </div>

                    <div className={styles.image}>
                    <img
                        src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                        alt="Elva dressed as a fairy" />
                    </div>
                </section>

                <section className={styles.timeline_container}>
                    {
                        width < 500?
                        <Timeline position={"right"} sx={{
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                                },
                            }} className={styles.timeline}>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className={[styles.item, styles.right].join(" ")}>
                                    <div>
                                        lkl
                                        jlj
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className={[styles.item, styles.right].join(" ")}>
                                    <div>
                                        lkl
                                        jlj
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className={[styles.item, styles.right].join(" ")}>
                                    <div>
                                        lkl
                                        jlj
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent className={[styles.item, styles.right].join(" ")}>
                                    <div>
                                        lkl
                                        jlj
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                        :
                        <Timeline position={"alternate"} className={styles.timeline}>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className={[styles.item, styles.right].join(" ")}>
                                    <div>
                                        lkl
                                        jlj
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className={[styles.item, styles.left].join(" ")}>
                                    <div>
                                        lkl
                                        jlj
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className={[styles.item, styles.right].join(" ")}>
                                    <div>
                                        lkl
                                        jlj
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent className={[styles.item, styles.left].join(" ")}>
                                    <div>
                                        lkl
                                        jlj
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    }
                    <div className={styles.link}>
                        <Link href="/kontakt">Kontaktujte nás</Link>
                    </div>
                </section>

                <TextContent data={{
                    "headline": "The Lol",
                    "text": "lol",
                    "link": "/produkty",
                    "link_text": "Button",
                    "img_link": "" }
                }/>

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

export default sad;