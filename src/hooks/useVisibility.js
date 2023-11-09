import React, { useEffect } from 'react'
import { getTargetElement, isArray } from '../utils'

/**
 * 监听元素在视口区域的可见状态
 * @param {Element | Element[] | import('react').MutableRefObject} target 目标元素
 * @param {Object} options 
 * @param {Function} options.callback
 * @param {Element} options.root
 * @param {string} options.rootMargin
 * @param {number | number[]} options.threshold
 * @returns 
 */
export const useVisibility = (target, options) => {
    const { callback, ...option } = options || {}
    const [ratio, setRatio] = React.useState(0)
    const [visible, setVisible] = React.useState(false)

    useEffect(() => {
        const els = isArray(target) ? target : [target]

        if (els.length === 0) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setRatio(entry.intersectionRatio)
                setVisible(entry.isIntersecting)
                callback?.(entry)
            });
        }, {
            ...option,
            root: getTargetElement(options?.root)
        });

        els.forEach(el => {
            if (el) {
                observer.observe(getTargetElement(el));
            }
        })

        return () => {
            observer.disconnect()
        }
    }, [target, callback, option])

    return {
        ratio,
        visible
    }
}