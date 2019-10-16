import { combineReducers } from 'redux';
import authReducer from 'redux/auth/reducer';
import contentReducer from 'redux/content/reducer';
import linksReducer from 'redux/links/reducer';

export default combineReducers({
  auth: authReducer,
  content: contentReducer,
  links: linksReducer,
});
