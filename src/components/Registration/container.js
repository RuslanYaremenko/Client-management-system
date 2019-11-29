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

  handleChangeLoyalty=event => this.props.changeLoyaltyProgramm(event.target.value);

  handleChangeSex= event => this.props.changeSex(event.target.value)

  handleChangeLastName= event => this.props.changeLastName(event.target.value)

  handleChangeFirstName= event => this.props.changeFirstName(event.target.value)

  handleChangeCardNumber= event => this.props.changeCardNumber(event.target.value)

  render() {
    return (
      <RegistrationComponent
        {...this.props}
        handleSubmit={this.handleSubmit}
        handleChangeLoyalty={this.handleChangeLoyalty}
        handleChangeSex={this.handleChangeSex}
        handleChangeFirstName={this.handleChangeFirstName}
        handleChangeLastName={this.handleChangeLastName}
        handleChangeCardNumber={this.handleChangeCardNumber}
      />
    );
  }
}
RegistrationContainer.propTypes = {
  receiveRandomDataThunk: PropTypes.func.isRequired,
  changeFirstName: PropTypes.func.isRequired,
  changeLastName: PropTypes.func.isRequired,
  changeCardNumber: PropTypes.func.isRequired,
  changeSex: PropTypes.func.isRequired,
  changeLoyaltyProgramm: PropTypes.func.isRequired,
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
