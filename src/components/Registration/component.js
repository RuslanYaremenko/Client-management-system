import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeFirstName,
  changeLastName,
  changeLoyaltyProgramm,
  changeSex,
  changeCardNumber,
} from './actions';

const Registration = props => (
  <form className="container">
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">First name</label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="First name"
        onChange={(e) => {
          props.changeFirstName(e.target.value);
        }}
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Last name</label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Last name"
        onChange={(e) => {
          props.changeLastName(e.target.value);
        }}
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Sex</label>
      <div className="col-sm-10">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios1"
            value="male"
            onChange={(e) => {
              props.changeSex(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="gridRadios1">
           Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios2"
            value="female"
            onChange={(e) => {
              props.changeSex(e.target.value);
            }}
          />
          <label className="form-check-label" htmlFor="gridRadios2">
            Female
          </label>
        </div>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">Loyalty program</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        onChange={(e) => {
          props.changeLoyaltyProgramm(e.target.value);
        }}
        value={props.loyaltyProgramm}
      >
        <option value="Unavailable">Unavailable</option>
        <option value="Plastic card">Plastic card</option>
        <option value="Mobile app">Mobile app</option>
      </select>
    </div>
    {props.loyaltyProgramm === 'Plastic card' && (
    <div className="form-group">
      <input className="form-control" onChange={e => props.changeCardNumber(e.target.value)} />
    </div>
    ) }


  </form>
);

Registration.propTypes = {
  loyaltyProgramm: PropTypes.string.isRequired,
  changeLoyaltyProgramm: PropTypes.func.isRequired,
  changeLastName: PropTypes.func.isRequired,
  changeSex: PropTypes.func.isRequired,
  changeFirstName: PropTypes.func.isRequired,
  changeCardNumber: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loyaltyProgramm: state.formReducer.loyaltyProgramm,
  cardNumber: state.formReducer.cardNumber,
});

const mapDispatchToProps = {
  changeFirstName,
  changeLastName,
  changeLoyaltyProgramm,
  changeSex,
  changeCardNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
