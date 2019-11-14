import {
  CONTENT_FULFILLED,
  CONTENT_PENDING,
  CONTENT_REJECTED,
  UPDATE_CONTENT_FULFILLED,
  UPDATE_PDF_FULFILLED
} from "./actions";

const initialState = {
  data: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONTENT_PENDING:
      return {
        ...state,
        loading: true
      };
    case CONTENT_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case CONTENT_REJECTED:
      return initialState;
    case UPDATE_CONTENT_FULFILLED:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.value
        }
      };
    case UPDATE_PDF_FULFILLED:
      if (action.payload.length === 1) {
        return {
          ...state,
          data: {
            ...state.data,
            [action.payload[0].key]: action.payload[0].value
          }
        };
      } else {
        return {
          ...state,
          data: {
            ...state.data,
            [action.payload[0].key]: action.payload[0].value,
            [action.payload[1].key]: action.payload[1].value
          }
        };
      }
    default:
      return state;
  }
}
