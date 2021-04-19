import { UPDATE_SCREENSIZE } from "../reducers/screen";

export function updateScreensize(screensize) {
    return {
        payload: screensize,
        type: UPDATE_SCREENSIZE,
    };
}
