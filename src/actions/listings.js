import superagent from "superagent";

export const UPDATE_LISTINGS = "UPDATE_LISTINGS";
export const FETCH_LISTINGS_ERROR = "FETCH_LISTINGS_ERROR";

export function updateListings(listings) {
    return {
        listings,
        type: UPDATE_LISTINGS,
    };
}

export function fetchListingsError() {
    return {
        type: FETCH_LISTINGS_ERROR,
    };
}

export function fetchData(dispatch) {
    superagent
        .get(
            "https://www.99.co/api/v1/web/search/listings?query_limit=radius&query_type=city&page_size=20&zoom=11&listing_type=sale&query_coords=1.3039947,103.8298507&page_num=1&radius_max=1000&map_bounds=1.5827095153768858,103.49449749970108,1.1090706240313446,104.12483807587296"
        )
        .then(
            (res) => {
                const data = res.body.data;
                const listings = data.sections[0].listings;
                dispatch(updateListings(listings));
            },
            (e) => {
                dispatch(fetchListingsError());
            }
        );
}
