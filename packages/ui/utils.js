// ID generator for handling WAI-ARIA related attributes
export function uid(prefix) {
    return (
        prefix +
        String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
        Math.random().toString(16).slice(2) +
        Date.now().toString(16).split('.')[0]
    );
}

// Returns a number representing the duration of a specified CSS custom property in ms
export function getCSSDuration(property) {
    const duration = window.getComputedStyle(document.documentElement).getPropertyValue(property);

    return parseFloat(duration) * (/\ds$/.test(duration) ? 1000 : 1) || 0;
}

