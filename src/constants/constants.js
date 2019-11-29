export const initialState = {
  clientsReducer: {
    clients: [{
      firstName: 'Ivan',
      lastName: 'Ivanov',
      sex: 'male',
      loyaltyProgramm: 'unavailable',
      dateOfRegistration: new Date(1574950641124),
    },
    {
      firstName: 'Vasya',
      lastName: 'Ivanov',
      sex: 'male',
      loyaltyProgramm: 'plastic card',
      cardNumber: '1234 5678 9101 1121',
      dateOfRegistration: new Date(1574950642122),
    },
    {
      firstName: 'Fedya',
      lastName: 'Ivanov',
      sex: 'male',
      loyaltyProgramm: 'unavailable',
      dateOfRegistration: new Date(1574950541122),
    }],
  },
  formReducer: {
    firstName: '',
    lastName: '',
    sex: '',
    loyaltyProgramm: 'Unavailable',
    dateOfRegistration: 0,
  },
};

export const REQUIRED_FIELD = 'This field is required';
export const REQUIRED_RADIO = 'Sex must be chosen';
export const INVALID_CARD_NUMBER = 'Invalid card number';
