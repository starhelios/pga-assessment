export const mergeStyles = (styles: any[]) => {
    let merged = {};
    styles.map((style: {}) => {
        if (Array.isArray(style)) {
            if (style[1]) {
                merged = { ...merged, ...style[0] };
            }
        } else {
            merged = { ...merged, ...style };
        }
    });
    return merged;
};
