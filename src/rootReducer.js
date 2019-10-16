import { combineReducers } from 'redux';
import authReducer from 'admin/reducer';
import contentReducer from 'app/reducer';
import linksReducer from 'spinnaker/reducer';

export default combineReducers({
  auth: authReducer,
  content: contentReducer,
  links: linksReducer,
});
