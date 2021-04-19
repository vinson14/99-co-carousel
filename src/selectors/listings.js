export default function selectAllListing(state) {
    return {
        listings: state.listings.listings,
        firstRender: state.listings.firstRender,
        pageNum: state.listings.pageNum,
    };
}
