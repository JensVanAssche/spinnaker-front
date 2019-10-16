import { combineReducers } from 'redux';
import authReducer from 'redux/auth/reducer';
import calendarReducer from 'redux/calendar/reducer';
import contentReducer from 'redux/content/reducer';
import linksReducer from 'redux/links/reducer';
import newsReducer from 'redux/news/reducer';
import photosReducer from 'redux/photos/reducer';
import playersReducer from 'redux/players/reducer';
import publicationsReducer from 'redux/publications/reducer';
import resultsReducer from 'redux/results/reducer';
import standingsReducer from 'redux/standings/reducer';
import videosReducer from 'redux/videos/reducer';

export default combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  content: contentReducer,
  links: linksReducer,
  news: newsReducer,
  photos: photosReducer,
  players: playersReducer,
  publications: publicationsReducer,
  results: resultsReducer,
  standings: standingsReducer,
  videos: videosReducer
});
