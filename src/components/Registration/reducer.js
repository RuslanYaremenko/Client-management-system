import * as types from './types';
import { initialState } from '../../constants/constants';

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

    case types.SET_RANDOM_DATA:
      return {
        ...state,
        randomData: payload.data,
      };


    case types.VALIDATION:
      return {
        ...state,
        errors: payload,
      };

    default: {
      return state;
    }
  }
}
