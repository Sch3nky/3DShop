import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

import { useState } from 'react';

import styles from "../../styles/Bespoke/timeline.module.scss"

export default function TimelineComponent({data}:any) {
    const [width, width_change] = useState(window.innerWidth)
    window.onresize = () => {
        width_change(window.innerWidth)
    }
    return (
        <>
            {
                width < 500?
                <Timeline position={"right"} sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                        },
                    }} className={styles.timeline}>
                    
                    {data.map((Item:any, key:number) =>
                        <TimelineItem key={key}>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className={[styles.item, styles.right].join(" ")}>
                                <h3>
                                    {Item.headline}
                                </h3>
                                <div>
                                    {Item.text}
                                </div>
                            </TimelineContent>:
                        </TimelineItem>
                    )}


                </Timeline>
                :
                <Timeline position={"alternate"} className={styles.timeline}>
                    {data.map((Item:any, key:number) =>
                        <TimelineItem key={key}>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            {
                                ((key+1)%2) === 1?
                                <TimelineContent className={[styles.item, styles.right].join(" ")}>
                                    <h3>
                                        {Item.headline}
                                    </h3>
                                    <div>
                                        {Item.text}
                                    </div>
                                </TimelineContent>:
                                <TimelineContent className={[styles.item, styles.left].join(" ")}>
                                    <h3>
                                        {Item.headline}
                                    </h3>
                                    <div>
                                        {Item.text}
                                    </div>
                                </TimelineContent>
                            }
                        </TimelineItem>
                    )}
                </Timeline>
            }
        </>
    );
}