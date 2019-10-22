import {
  GET_NEWS_PENDING,
  GET_NEWS_FULFILLED,
  GET_NEWS_REJECTED,
  UPDATE_ARTICLE_FULFILLED,
  UPDATE_ARTICLE_REJECTED,
  ADD_ARTICLE_FULFILLED,
  ADD_ARTICLE_REJECTED,
  DELETE_ARTICLE_FULFILLED,
  DELETE_ARTICLE_REJECTED
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
    case UPDATE_ARTICLE_FULFILLED:
      return {
        ...state,
        data: state.data
          .filter(player => player.id !== action.payload.id)
          .concat(action.payload),
      };
    case UPDATE_ARTICLE_REJECTED:
      return initialState;
    case ADD_ARTICLE_FULFILLED:
      return {
        ...state,
        data: state.data
          .concat(action.payload),
      };
    case ADD_ARTICLE_REJECTED:
      return initialState;
    case DELETE_ARTICLE_FULFILLED:      
      return {
        ...state,
        data: state.data
          .filter(player => player.id !== action.payload.id)
      };
    case DELETE_ARTICLE_REJECTED:
      return initialState;
    default:
      return state;
  }
}
