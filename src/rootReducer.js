import { combineReducers } from 'redux';
import contentReducer from 'app/reducer';
import newsReducer from 'nieuws/reducer';

export default combineReducers({
  content: contentReducer,
  news: newsReducer,
});
