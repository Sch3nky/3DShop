import Footer from '../lib/footer';
import Head_global from '../lib/global-head'
import TextContent from '../lib/Home/TextContent';
import Navigation from '../lib/navigation'

import styles from "../styles/Bespoke/index.module.scss"

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function sad() {
    return (
        <>
            <Head_global name='Výroba na míru'/>
            <main className={styles.main}>
                <section>

                </section>
                <TextContent data={{
                    "headline": "The Lol",
                    "text": "lol",
                    "link": "/produkty",
                    "link_text": "Button",
                    "img_link": "" }
                }/>
                <section className={styles.timeline_container}>
                    <Timeline position="alternate" className={styles.timeline}>
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
                </section>

                <section className={styles.galery_container}>
                    <div className={styles.galery}>
                        <div className={styles.row1}>

                        </div>

                        <div className={styles.row2}>

                        </div>

                        <div className={styles.row1}>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default sad;