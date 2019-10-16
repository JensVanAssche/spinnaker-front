import {
  GET_VIDEOS_PENDING,
  GET_VIDEOS_FULFILLED,
  GET_VIDEOS_REJECTED,
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_VIDEOS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_VIDEOS_REJECTED:
      return initialState;
    default:
      return state;
  }
}
