/* eslint-disable import/prefer-default-export */
import * as types from './types';

export const addNewClient = payload => ({
  type: types.ADD_NEW_CLIENT,
  payload: {
    ...payload,
    dateOfRegistration: new Date(Date.now()),
  },
});
