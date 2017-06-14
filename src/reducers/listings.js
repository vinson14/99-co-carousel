import { UPDATE_LISTINGS } from '../actions/listings';

export default function listings(state = [], action) {
  switch (action.type) {
    case UPDATE_LISTINGS:
      return [].concat(action.listings);
    default:
      return state;
  }
}
