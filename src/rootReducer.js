import { combineReducers } from 'redux';
import contentReducer from 'app/reducer';

export default combineReducers({
  content: contentReducer,
});
