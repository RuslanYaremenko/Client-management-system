import * as types from './types';
import initialState from '../../constants/initialState';


export default function filtersReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // case types.SET_SHOULD_RESET_DROPDOWN:
    //   return {
    //     ...state,
    //     shouldResetDropdown: action.payload,
    //   };

    // case types.SET_APPLIED_FILTER:
    //   return {
    //     ...state,
    //     appliedFilter: { ...state.filter },
    //     isVisibleApplyFilter: false,
    //   };

    // case types.SET_RESET_BUTTON_STATE:

    //   return {
    //     ...state,
    //     isReset: action.payload,
    //   };


    default: {
      return state;
    }
  }
}
