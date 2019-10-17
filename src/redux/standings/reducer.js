import {
  GET_STANDINGS_PENDING,
  GET_STANDINGS_FULFILLED,
  GET_STANDINGS_REJECTED,
  UPDATE_PDF_STANDING_FULFILLED,
  UPDATE_PDF_STANDING_REJECTED,
  ADD_PDF_STANDING_FULFILLED,
  ADD_PDF_STANDING_REJECTED,
  DELETE_PDF_STANDING_FULFILLED,
  DELETE_PDF_STANDING_REJECTED
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
    case UPDATE_PDF_STANDING_FULFILLED:
      return {
        ...state,
        data: state.data
        .filter(e => e.id !== action.payload.id)
        .concat(action.payload),
      };
    case UPDATE_PDF_STANDING_REJECTED:
      return initialState;
    case ADD_PDF_STANDING_FULFILLED:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    case ADD_PDF_STANDING_REJECTED:
      return initialState;
    case DELETE_PDF_STANDING_FULFILLED:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.payload.id)
      };
    case DELETE_PDF_STANDING_REJECTED:
      return initialState;
    default:
      return state;
  }
}
