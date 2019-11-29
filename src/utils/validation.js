import * as constants from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const validate = (formData) => {
  const errors = {};
  const numbers = /^[0-9]+$/;

  if (!formData.firstName) {
    errors.firstName = constants.REQUIRED_FIELD;
  }

  if (!formData.lastName) {
    errors.lastName = constants.REQUIRED_FIELD;
  }

  if (!formData.sex) {
    errors.sex = constants.REQUIRED_RADIO;
  }

  if (!formData.loyaltyProgramm) {
    errors.loyaltyProgramm = constants.REQUIRED_FIELD;
  }

  if (formData.loyaltyProgramm === 'Plastic card' && !formData.cardNumber) {
    errors.cardNumber = constants.REQUIRED_FIELD;
  }

  if (formData.loyaltyProgramm === 'Plastic card'
        && formData.cardNumber
         && !formData.cardNumber.match(numbers)) {
    errors.cardNumber = constants.INVALID_CARD_NUMBER;
  }

  return errors;
};
