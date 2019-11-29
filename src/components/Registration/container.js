import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import { validate } from '../../utils/validation';
import RegistrationComponent from './component';
import {
  changeFirstName,
  changeLastName,
  changeLoyaltyProgramm,
  changeSex,
  changeCardNumber,
  receiveRandomDataThunk,
  validation,
} from './actions';
import { addNewClient } from '../ClientsList/actions';


class RegistrationContainer extends Component {
  componentDidMount() {
    this.props.receiveRandomDataThunk();
  }

  handleSubmit=() => {
    const formValues = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      sex: this.props.sex,
      loyaltyProgramm: this.props.loyaltyProgramm,
      cardNumber: this.props.cardNumber || '',
    };
    const validationErrors = validate(formValues);

    this.props.validation(validationErrors);

    if (isEmpty(validationErrors)) {
      this.props.addNewClient(formValues);

      this.props.history.push('/clients');
    }
  }

  render() {
    return (
      <RegistrationComponent {...this.props} handleSubmit={this.handleSubmit} />
    );
  }
}
RegistrationContainer.propTypes = {
  receiveRandomDataThunk: PropTypes.func.isRequired,
  addNewClient: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  cardNumber: PropTypes.string,
  loyaltyProgramm: PropTypes.string.isRequired,
  validation: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

RegistrationContainer.defaultProps = {
  cardNumber: '',
};

const mapStateToProps = state => ({
  loyaltyProgramm: state.formReducer.loyaltyProgramm,
  cardNumber: state.formReducer.cardNumber,
  randomData: state.formReducer.randomData,
  firstName: state.formReducer.firstName,
  lastName: state.formReducer.lastName,
  sex: state.formReducer.sex,
  errors: state.formReducer.errors,
});

const mapDispatchToProps = {
  changeFirstName,
  changeLastName,
  changeLoyaltyProgramm,
  changeSex,
  changeCardNumber,
  receiveRandomDataThunk,
  addNewClient,
  validation,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
