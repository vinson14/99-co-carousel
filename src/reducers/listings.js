import { UPDATE_LISTINGS } from "../actions/listings";

export default function listings(
    state = { listings: [], firstRender: true, pageNum: 1 },
    action
) {
    switch (action.type) {
        case UPDATE_LISTINGS:
            const oldListings =
                typeof state.listings === "undefined" ? [] : state.listings;
            return {
                ...state,
                listings: oldListings.concat(action.payload.listings),
                pageNum: action.payload.pageNum,
                firstRender: false,
            };
        default:
            return state;
    }
}
