
import axios from 'axios';
import * as types from './types';

export const changeFirstName = payload => ({
  type: types.CHANGE_FIRST_NAME,
  payload,
});

export const changeLastName = payload => ({
  type: types.CHANGE_LAST_NAME,
  payload,
});

export const changeSex = payload => ({
  type: types.CHANGE_SEX,
  payload,
});

export const changeLoyaltyProgramm = payload => ({
  type: types.CHANGE_LOYALTY_PROGRAMM,
  payload,
});

export const changeCardNumber = payload => ({
  type: types.CHANGE_CARD_NUMBER,
  payload,
});

export const setRandomData = payload => ({
  type: types.SET_RANDOM_DATA,
  payload,
});

export const receiveRandomDataThunk = () => dispatch => axios('https://meowfacts.herokuapp.com/')
  .then(response => dispatch(setRandomData(response.data)));
