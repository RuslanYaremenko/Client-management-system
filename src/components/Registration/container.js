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
});

const mapDispatchToProps = {
  changeFirstName,
  changeLastName,
  changeLoyaltyProgramm,
  changeSex,
  changeCardNumber,
  receiveRandomDataThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
