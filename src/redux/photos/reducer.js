import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_FULFILLED,
  GET_PHOTOS_REJECTED,
  UPDATE_ALBUM_FULFILLED,
  UPDATE_ALBUM_REJECTED,
  ADD_ALBUM_FULFILLED,
  ADD_ALBUM_REJECTED,
  ADD_PHOTO_FULFILLED,
  ADD_PHOTO_REJECTED,
  DELETE_ALBUM_FULFILLED,
  DELETE_ALBUM_REJECTED,
  DELETE_PHOTO_FULFILLED,
  DELETE_PHOTO_REJECTED
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_PHOTOS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_PHOTOS_REJECTED:
      return initialState;
    case UPDATE_ALBUM_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_ALBUM_REJECTED:
      return initialState;
    case ADD_ALBUM_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_ALBUM_REJECTED:
      return initialState;
    case ADD_PHOTO_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_PHOTO_REJECTED:
      return initialState;
    case DELETE_ALBUM_FULFILLED:      
    return {
      ...state,
      data: action.payload,
    };
    case DELETE_ALBUM_REJECTED:
      return initialState;
    case DELETE_PHOTO_FULFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_PHOTO_REJECTED:
      return initialState;
    default:
      return state;
  }
}
