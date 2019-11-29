import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegistrationComponent from './component';
import {
  changeFirstName,
  changeLastName,
  changeLoyaltyProgramm,
  changeSex,
  changeCardNumber,
  receiveRandomDataThunk,
} from './actions';

import { addNewClient } from '../ClientsList/actions';


class RegistrationContainer extends Component {
  componentDidMount() {
    this.props.receiveRandomDataThunk();
  }

  render() {
    return (
      <RegistrationComponent {...this.props} />
    );
  }
}
RegistrationContainer.propTypes = {
  receiveRandomDataThunk: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loyaltyProgramm: state.formReducer.loyaltyProgramm,
  cardNumber: state.formReducer.cardNumber,
  randomData: state.formReducer.randomData,
  firstName: state.formReducer.firstName,
  lastName: state.formReducer.lastName,
  sex: state.formReducer.sex,
});

const mapDispatchToProps = {
  changeFirstName,
  changeLastName,
  changeLoyaltyProgramm,
  changeSex,
  changeCardNumber,
  receiveRandomDataThunk,
  addNewClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
