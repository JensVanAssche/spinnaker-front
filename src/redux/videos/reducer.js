import {
  GET_VIDEOS_PENDING,
  GET_VIDEOS_FULFILLED,
  GET_VIDEOS_REJECTED,
  UPDATE_VIDEO_FULFILLED,
  UPDATE_VIDEO_REJECTED,
  ADD_VIDEO_FULFILLED,
  ADD_VIDEO_REJECTED,
  DELETE_VIDEO_FULFILLED,
  DELETE_VIDEO_REJECTED
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_VIDEOS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_VIDEOS_REJECTED:
      return initialState;
    case UPDATE_VIDEO_FULFILLED:
      return {
        ...state,
        loading: false,
        data: state.data
          .filter(e => e.id !== action.payload.id)
          .concat(action.payload),
      };
    case UPDATE_VIDEO_REJECTED:
      return initialState;
    case ADD_VIDEO_FULFILLED:
      return {
        ...state,
        loading: false,
        data: state.data
          .concat(action.payload),
      };
    case ADD_VIDEO_REJECTED:
      return initialState;
    case DELETE_VIDEO_FULFILLED:
      return {
        ...state,
        loading: false,
        data: state.data
          .filter(e => e.id !== action.payload.id)
      };
    case DELETE_VIDEO_REJECTED:
      return initialState;
    default:
      return state;
  }
}
