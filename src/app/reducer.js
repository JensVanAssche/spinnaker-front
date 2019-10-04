import {
  CONTENT_FULFILLED,
  CONTENT_PENDING,
  CONTENT_REJECTED,
} from './actions';

const initialState = {
  content: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONTENT_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CONTENT_FULFILLED:
      return {
        ...state,
        loading: false,
        content: action.payload,
      };
    case CONTENT_REJECTED:
      return initialState;
    default:
      return state;
  }
}
