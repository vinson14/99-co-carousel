export default function thunk({ dispatch, getState }) {
  return function (n) {
    return function (a) {
      if (typeof a === 'function') {
        a(dispatch, getState);
      } else {
        console.log(a.type);
      }

      return n(a);
    };
  };
}
