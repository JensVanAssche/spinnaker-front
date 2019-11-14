import {
  GET_LINKS_PENDING,
  GET_LINKS_FULFILLED,
  GET_LINKS_REJECTED,
  GET_FOOTER_PENDING,
  GET_FOOTER_FULFILLED,
  GET_FOOTER_REJECTED,
  UPDATE_LINK_FULFILLED,
  ADD_LINK_FULFILLED,
  DELETE_LINK_FULFILLED
} from "./actions";

const initialState = {
  data: null,
  footer: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LINKS_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_LINKS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_LINKS_REJECTED:
      return initialState;
    case GET_FOOTER_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_FOOTER_FULFILLED:
      return {
        ...state,
        loading: false,
        footer: action.payload
      };
    case GET_FOOTER_REJECTED:
      return initialState;
    case UPDATE_LINK_FULFILLED:
      return {
        ...state,
        data: state.data
          .filter(link => link.id !== action.payload.id)
          .concat(action.payload)
      };
    case ADD_LINK_FULFILLED:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case DELETE_LINK_FULFILLED:
      return {
        ...state,
        data: state.data.filter(link => link.id !== action.payload.id)
      };
    default:
      return state;
  }
}
