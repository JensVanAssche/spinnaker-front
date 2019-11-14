import {
  GET_PUBLICATIONS_PENDING,
  GET_PUBLICATIONS_FULFILLED,
  GET_PUBLICATIONS_REJECTED,
  UPDATE_PUBLICATION_FULFILLED,
  ADD_PUBLICATION_FULFILLED,
  DELETE_PUBLICATION_FULFILLED
} from "./actions";

const initialState = {
  data: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PUBLICATIONS_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_PUBLICATIONS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_PUBLICATIONS_REJECTED:
      return initialState;
    case UPDATE_PUBLICATION_FULFILLED:
      return {
        ...state,
        data: action.payload
      };
    case ADD_PUBLICATION_FULFILLED:
      return {
        ...state,
        data: action.payload
      };
    case DELETE_PUBLICATION_FULFILLED:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
