import React, { useEffect } from "react";
import { useVisibility } from "../../hooks";
import styles from './timelineItem.module.css'
import clsx from "clsx";

const TimelineItem = ({
    dateText,
    children,
    dateStyle,
    dateInnerStyle,
    bodyContainerStyle
}) => {

    const ref = React.useRef(null)
    const { visible } = useVisibility(ref)
    const [domVisible, setDomVisible] = React.useState(false)

    useEffect(() => {
        visible && setDomVisible(visible)
    }, [visible])

    return (
        <div
            ref={ref}
            className={clsx(
                styles.entry,
                styles[children ? 'timeline-item' : 'timeline-item--no-children']
            )}
        >
            <div className={styles.title}>
                <div
                    style={dateStyle}
                    className={styles[domVisible ? 'bounce-in' : 'is-hidden']}
                >
                    <span
                        style={dateInnerStyle}
                        className={styles['timeline-item-date']}
                    >
                        <time
                            className={styles['timeline-item-dateinner']}
                            title={dateText}
                        >
                            {dateText}
                        </time>
                    </span>
                </div>
            </div>

            <div className={styles.body}>
                <div
                    style={bodyContainerStyle}
                    className={clsx(
                        styles['body-container'],
                        styles[domVisible ? 'bounce-in' : 'is-hidden']
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default TimelineItem;