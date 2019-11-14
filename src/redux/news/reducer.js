import {
  GET_NEWS_PENDING,
  GET_NEWS_FULFILLED,
  GET_NEWS_REJECTED,
  GET_ARTICLE_PENDING,
  GET_ARTICLE_FULFILLED,
  GET_ARTICLE_REJECTED,
  UPDATE_ARTICLE_FULFILLED,
  ADD_ARTICLE_FULFILLED,
  DELETE_ARTICLE_FULFILLED
} from "./actions";

const initialState = {
  news: null,
  article: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_NEWS_FULFILLED:
      return {
        ...state,
        loading: false,
        news: action.payload
      };
    case GET_NEWS_REJECTED:
      return initialState;
    case GET_ARTICLE_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_ARTICLE_FULFILLED:
      return {
        ...state,
        loading: false,
        article: action.payload
      };
    case GET_ARTICLE_REJECTED:
      return initialState;
    case UPDATE_ARTICLE_FULFILLED:
      return {
        ...state,
        news: state.news
          .filter(player => player.id !== action.payload.id)
          .concat(action.payload)
      };
    case ADD_ARTICLE_FULFILLED:
      return {
        ...state,
        news: state.news.concat(action.payload)
      };
    case DELETE_ARTICLE_FULFILLED:
      return {
        ...state,
        news: state.news.filter(player => player.id !== action.payload.id)
      };
    default:
      return state;
  }
}
