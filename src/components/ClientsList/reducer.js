import * as types from './types';
import initialState from '../../constants/initialState';

export default function clientsReducer(state = initialState.clientsReducer, action) {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_NEW_CLIENT:
      const allClients = [...state.clients, {
        ...payload,
      }];

      return {
        ...state,
        clients: allClients,
      };

    default: {
      return state;
    }
  }
}
