import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_FULFILLED,
  GET_PHOTOS_REJECTED,
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_PHOTOS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_PHOTOS_REJECTED:
      return initialState;
    default:
      return state;
  }
}
