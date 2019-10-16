import {
  GET_NEWS_PENDING,
  GET_NEWS_FULFILLED,
  GET_NEWS_REJECTED,
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_NEWS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_NEWS_REJECTED:
      return initialState;
    default:
      return state;
  }
}
