const initialState = {
  clientsReducer: {
    clients: [{
      name: 'Ivan Ivanov',
      dateOfRegistration: new Date(1574950641124),
    },
    {
      name: 'Vasya Ivanov',
      dateOfRegistration: new Date(1574950642122),
    },
    {
      name: 'Fedya Ivanov',
      dateOfRegistration: new Date(1574950541122),
    }],
  },
  formReducer: {
    firstName: '',
    lastName: '',
    sex: '',
    loyaltyProgramm: '',
    date: 0,
  },
};

export default initialState;
