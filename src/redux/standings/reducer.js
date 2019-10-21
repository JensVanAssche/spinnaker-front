import {
  GET_STANDINGS_PENDING,
  GET_STANDINGS_FULFILLED,
  GET_STANDINGS_REJECTED,
  UPDATE_PDF_STANDING_FULFILLED,
  UPDATE_PDF_STANDING_REJECTED,
  ADD_PDF_STANDING_FULFILLED,
  ADD_PDF_STANDING_REJECTED,
  DELETE_PDF_STANDING_FULFILLED,
  DELETE_PDF_STANDING_REJECTED,
  
  UPDATE_TOURNAMENT_STANDING_FULFILLED,
  UPDATE_TOURNAMENT_STANDING_REJECTED,
  ADD_TOURNAMENT_STANDING_FULFILLED,
  ADD_TOURNAMENT_STANDING_REJECTED,
  DELETE_TOURNAMENT_STANDING_FULFILLED,
  DELETE_TOURNAMENT_STANDING_REJECTED,

  UPDATE_SCORE_STANDING_FULFILLED,
  UPDATE_SCORE_STANDING_REJECTED,
  ADD_SCORE_STANDING_FULFILLED,
  ADD_SCORE_STANDING_REJECTED,
  DELETE_SCORE_STANDING_FULFILLED,
  DELETE_SCORE_STANDING_REJECTED,
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
        data: action.payload,
      };
    case UPDATE_PDF_STANDING_REJECTED:
      return initialState;
    case ADD_PDF_STANDING_FULFILLED:
      return {
        ...state,
        data: action.payload,
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
    case UPDATE_TOURNAMENT_STANDING_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_TOURNAMENT_STANDING_REJECTED:
      return initialState;
    case ADD_TOURNAMENT_STANDING_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_TOURNAMENT_STANDING_REJECTED:
      return initialState;
    case DELETE_TOURNAMENT_STANDING_FULFILLED:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.payload.id)
      };
    case DELETE_TOURNAMENT_STANDING_REJECTED:
      return initialState;
    case UPDATE_SCORE_STANDING_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_SCORE_STANDING_REJECTED:
      return initialState;
    case ADD_SCORE_STANDING_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_SCORE_STANDING_REJECTED:
      return initialState;
    case DELETE_SCORE_STANDING_FULFILLED:
      return {
        ...state,
        data: state.data.map(t => {
          return {
            ...t,
            scores: t.scores.filter(s => s.id !== action.payload.id)
          }
        })
      };
    case DELETE_SCORE_STANDING_REJECTED:
      return initialState;
    default:
      return state;
  }
}
