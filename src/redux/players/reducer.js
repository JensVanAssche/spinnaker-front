import {
  GET_PLAYERS_PENDING,
  GET_PLAYERS_FULFILLED,
  GET_PLAYERS_REJECTED,
  UPDATE_PLAYER_FULFILLED,
  UPDATE_PLAYER_REJECTED,
  ADD_PLAYER_FULFILLED,
  ADD_PLAYER_REJECTED,
  DELETE_PLAYER_FULFILLED,
  DELETE_PLAYER_REJECTED
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
    case UPDATE_PLAYER_FULFILLED:
      return {
        ...state,
        data: state.data
          .filter(player => player.id !== action.payload.id)
          .concat(action.payload),
      };
    case UPDATE_PLAYER_REJECTED:
      return initialState;
    case ADD_PLAYER_FULFILLED:
      return {
        ...state,
        data: state.data
          .concat(action.payload),
      };
    case ADD_PLAYER_REJECTED:
      return initialState;
    case DELETE_PLAYER_FULFILLED:      
      return {
        ...state,
        data: state.data
          .filter(player => player.id !== action.payload.id)
      };
    case DELETE_PLAYER_REJECTED:
      return initialState;
    default:
      return state;
  }
}
