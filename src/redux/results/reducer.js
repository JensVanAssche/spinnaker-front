import {
  GET_RESULTS_PENDING,
  GET_RESULTS_FULFILLED,
  GET_RESULTS_REJECTED,
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESULTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_RESULTS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_RESULTS_REJECTED:
      return initialState;
    default:
      return state;
  }
}
