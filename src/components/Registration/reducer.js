import * as types from './types';
import initialState from '../../constants/initialState';

export default function formReducer(state = initialState.formReducer, action) {
  const { type, payload } = action;

  switch (type) {
    case types.CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: payload,
      };

    case types.CHANGE_LAST_NAME:
      return {
        ...state,
        lastName: payload,
      };

    case types.CHANGE_SEX:
      return {
        ...state,
        sex: payload,
      };

    case types.CHANGE_LOYALTY_PROGRAMM:
      return {
        ...state,
        loyaltyProgramm: payload,
      };

    case types.CHANGE_CARD_NUMBER:
      return {
        ...state,
        cardNumber: payload,
      };
    default: {
      return state;
    }
  }
}
