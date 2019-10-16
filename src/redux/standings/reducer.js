import {
  GET_STANDINGS_PENDING,
  GET_STANDINGS_FULFILLED,
  GET_STANDINGS_REJECTED,
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STANDINGS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_STANDINGS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_STANDINGS_REJECTED:
      return initialState;
    default:
      return state;
  }
}
