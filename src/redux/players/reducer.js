import {
  GET_PLAYERS_PENDING,
  GET_PLAYERS_FULFILLED,
  GET_PLAYERS_REJECTED,
} from './actions';

const initialState = {
  data: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_PLAYERS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_PLAYERS_REJECTED:
      return initialState;
    default:
      return state;
  }
}
