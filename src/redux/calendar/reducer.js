import {
  GET_CALENDAR_PENDING,
  GET_CALENDAR_FULFILLED,
  GET_CALENDAR_REJECTED,
  UPDATE_CALENDAR_FULFILLED,
  UPDATE_CALENDAR_REJECTED,
  ADD_CALENDAR_FULFILLED,
  ADD_CALENDAR_REJECTED,
  DELETE_CALENDAR_FULFILLED,
  DELETE_CALENDAR_REJECTED
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CALENDAR_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_CALENDAR_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_CALENDAR_REJECTED:
      return initialState;
    case UPDATE_CALENDAR_FULFILLED:
      return {
        ...state,
        data: state.data
          .filter(e => e.id !== action.payload.id)
          .concat(action.payload),
      };
    case UPDATE_CALENDAR_REJECTED:
      return initialState;
    case ADD_CALENDAR_FULFILLED:
      return {
        ...state,
        data: state.data
          .concat(action.payload),
      };
    case ADD_CALENDAR_REJECTED:
      return initialState;
    case DELETE_CALENDAR_FULFILLED:      
      return {
        ...state,
        data: state.data
          .filter(e => e.id !== action.payload.id)
      };
    case DELETE_CALENDAR_REJECTED:
      return initialState;
    default:
      return state;
  }
}
