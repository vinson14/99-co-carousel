export const UPDATE_SCREENSIZE = "UPDATE_SCREENSIZE";

export default function screen(
    state = { width: 575, screensize: "xs" },
    action
) {
    switch (action.type) {
        case UPDATE_SCREENSIZE:
            return {
                ...state,
                width: action.payload,
                screensize: calculateScreensize(action.payload),
            };
        default:
            return state;
    }
}

const screensizes = {
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
};

const calculateScreensize = (width) => {
    switch (true) {
        case width < screensizes.s:
            return "xs";
        case width >= screensizes.s && width < screensizes.m:
            return "s";
        case width >= screensizes.m && width < screensizes.l:
            return "m";
        case width >= screensizes.l && width < screensizes.xl:
            return "l";
        case width >= screensizes.xl:
            return "xl";
    }
};
