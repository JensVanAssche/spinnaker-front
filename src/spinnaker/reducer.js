import {
  GET_LINKS_PENDING,
  GET_LINKS_FULFILLED,
  GET_LINKS_REJECTED,
  UPDATE_LINK_FULFILLED,
  UPDATE_LINK_REJECTED,
  ADD_LINK_FULFILLED,
  ADD_LINK_REJECTED,
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LINKS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_LINKS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_LINKS_REJECTED:
      return initialState;
    case UPDATE_LINK_FULFILLED:
      return {
        ...state,
        loading: false,
        data: state.data
          .filter(link => link.id !== action.payload.id)
          .concat(action.payload),
      };
    case UPDATE_LINK_REJECTED:
      return initialState;
    case ADD_LINK_FULFILLED:
      return {
        ...state,
        loading: false,
        data: state.data
          .concat(action.payload),
      };
    case ADD_LINK_REJECTED:
      return initialState;
    default:
      return state;
  }
}
