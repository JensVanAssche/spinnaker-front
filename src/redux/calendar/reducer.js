import {
  GET_CALENDAR_PENDING,
  GET_CALENDAR_FULFILLED,
  GET_CALENDAR_REJECTED,
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
    default:
      return state;
  }
}
