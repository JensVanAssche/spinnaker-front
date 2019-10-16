import {
  GET_PUBLICATIONS_PENDING,
  GET_PUBLICATIONS_FULFILLED,
  GET_PUBLICATIONS_REJECTED,
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PUBLICATIONS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_PUBLICATIONS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_PUBLICATIONS_REJECTED:
      return initialState;
    default:
      return state;
  }
}
