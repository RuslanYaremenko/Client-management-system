// import * as types from './types';
import initialState from '../../constants/initialState';

export default function clientsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
}
