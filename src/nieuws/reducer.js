import {
  NEWS_FULFILLED,
  NEWS_PENDING,
  NEWS_REJECTED,
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case NEWS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case NEWS_REJECTED:
      return initialState;
    default:
      return state;
  }
}
