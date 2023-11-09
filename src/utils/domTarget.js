import { isFunction } from "./is";

export function getTargetElement(target, defaultElement) {

    if (!target) {
        return defaultElement;
    }

    let targetElement;

    if (isFunction(target)) {
        targetElement = target();
    } else if ('current' in target) {
        targetElement = target.current;
    } else {
        targetElement = target;
    }

    return targetElement;
}
