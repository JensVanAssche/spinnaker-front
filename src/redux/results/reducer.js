import {
  GET_RESULTS_PENDING,
  GET_RESULTS_FULFILLED,
  GET_RESULTS_REJECTED,
  UPDATE_PDF_RESULT_FULFILLED,
  UPDATE_PDF_RESULT_REJECTED,
  ADD_PDF_RESULT_FULFILLED,
  ADD_PDF_RESULT_REJECTED,
  DELETE_PDF_RESULT_FULFILLED,
  DELETE_PDF_RESULT_REJECTED,

  UPDATE_TOURNAMENT_RESULT_FULFILLED,
  UPDATE_TOURNAMENT_RESULT_REJECTED,
  ADD_TOURNAMENT_RESULT_FULFILLED,
  ADD_TOURNAMENT_RESULT_REJECTED,
  DELETE_TOURNAMENT_RESULT_FULFILLED,
  DELETE_TOURNAMENT_RESULT_REJECTED,

  UPDATE_SCORE_RESULT_FULFILLED,
  UPDATE_SCORE_RESULT_REJECTED,
  ADD_SCORE_RESULT_FULFILLED,
  ADD_SCORE_RESULT_REJECTED,
  DELETE_SCORE_RESULT_FULFILLED,
  DELETE_SCORE_RESULT_REJECTED,
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
    case UPDATE_PDF_RESULT_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_PDF_RESULT_REJECTED:
      return initialState;
    case ADD_PDF_RESULT_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_PDF_RESULT_REJECTED:
      return initialState;
    case DELETE_PDF_RESULT_FULFILLED:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.payload.id)
      };
    case DELETE_PDF_RESULT_REJECTED:
      return initialState;
    case UPDATE_TOURNAMENT_RESULT_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_TOURNAMENT_RESULT_REJECTED:
      return initialState;
    case ADD_TOURNAMENT_RESULT_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_TOURNAMENT_RESULT_REJECTED:
      return initialState;
    case DELETE_TOURNAMENT_RESULT_FULFILLED:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.payload.id)
      };
    case DELETE_TOURNAMENT_RESULT_REJECTED:
      return initialState;
    case UPDATE_SCORE_RESULT_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_SCORE_RESULT_REJECTED:
      return initialState;
    case ADD_SCORE_RESULT_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_SCORE_RESULT_REJECTED:
      return initialState;
    case DELETE_SCORE_RESULT_FULFILLED:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.payload.id)
      };
    case DELETE_SCORE_RESULT_REJECTED:
      return initialState;
    default:
      return state;
  }
}
