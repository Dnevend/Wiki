import React from "react";
import TimelineItem from "./timelineItem"
import clsx from "clsx";
import styles from './timeline.module.css'

const Timeline = ({ className, animate, children }) => {

    return (
        <div className={styles.timeline__wrapper}>
            <div className={clsx(
                className,
                styles.timeline,
                {
                    'timeline__animate': animate
                }
            )}>
                {children}
            </div>
        </div>
    )
}

Timeline.Item = TimelineItem;

export default Timeline;