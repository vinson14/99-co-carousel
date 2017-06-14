import { UPDATE_LISTINGS } from '../actions/listings';

export default function listings(state = [], action) {
  switch (action.type) {
    case UPDATE_LISTINGS:
      const oldListings = typeof state.listings === 'undefined' ? [] : state.listings;
      return {
        ...state,
        listings: oldListings.concat(action.listings),
        firstRender: false,
      };
    default:
      return state;
  }
}
