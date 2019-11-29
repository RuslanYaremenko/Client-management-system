import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './component.module.scss';

const Registration = (props) => {
  const firstNameClass = classNames('form-control', {
    [styles.invalidField]: props.errors.firstName,
  });
  const lastNameClass = classNames('form-control', {
    [styles.invalidField]: props.errors.lastName,
  });
  const sexClass = classNames('col-sm-10', {
    [styles.invalidField]: props.errors.sex,
  });
  const loyaltyProgrammClass = classNames('form-control', {
    [styles.invalidField]: props.errors.loyaltyProgramm,
  });
  const cardNumberClass = classNames('form-control', {
    [styles.invalidField]: props.errors.cardNumber,
  });

  return (
    <>
      <form className="container">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">First name</label>
          <input
            type="email"
            className={firstNameClass}
            id="exampleFormControlInput1"
            placeholder="First name"
            onChange={(e) => {
              props.changeFirstName(e.target.value);
            }}
          />
          { props.errors.firstName && (
          <div className={styles.invalidMessage}>
            {props.errors.firstName}
          </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Last name</label>
          <input
            type="email"
            className={lastNameClass}
            id="exampleFormControlInput1"
            placeholder="Last name"
            onChange={(e) => {
              props.changeLastName(e.target.value);
            }}
          />
          { props.errors.lastName && (
          <div className={styles.invalidMessage}>
            {props.errors.lastName}
          </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Sex</label>
          <div className={sexClass}>
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
            { props.errors.sex && (
            <div className={styles.invalidMessage}>
              {props.errors.sex}
            </div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Loyalty program</label>
          <select
            className={loyaltyProgrammClass}
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
          { props.errors.loyaltyProgramm && (
          <div className={styles.invalidMessage}>
            {props.errors.loyaltyProgramm}
          </div>
          )}
        </div>
        {props.loyaltyProgramm === 'Plastic card' && (
        <div className="form-group">
          <input
            className={cardNumberClass}
            onChange={e => props.changeCardNumber(e.target.value)}
            placeholder="1234 5678 9101 1121"
          />
          {props.errors.cardNumber && (
          <div className={styles.invalidMessage}>
            {props.errors.cardNumber}
          </div>
          )}
        </div>
        ) }
        <button
          type="button"
          className={`btn btn-outline-success ${styles.submit}`}
          onClick={props.handleSubmit}
        >
        Submit
        </button>
      </form>
      <div className={`container input-group ${styles.randomContainer}`}>
        <h3 className={styles.randomData}>Some facts about cats:</h3>
        <p className={styles.randomData}>{props.randomData}</p>
      </div>

    </>
  );
};

Registration.propTypes = {
  loyaltyProgramm: PropTypes.string.isRequired,
  changeLoyaltyProgramm: PropTypes.func.isRequired,
  changeLastName: PropTypes.func.isRequired,
  changeSex: PropTypes.func.isRequired,
  changeFirstName: PropTypes.func.isRequired,
  changeCardNumber: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  cardNumber: PropTypes.string,
  randomData: PropTypes.arrayOf(PropTypes.string),
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  errors: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
  handleSubmit: PropTypes.func.isRequired,
};

Registration.defaultProps = {
  randomData: [''],
  cardNumber: '',
  errors: '',
};

export default Registration;
