import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './component.module.scss';

const ClientsList = props => (
  <div className={`jumbotron ${styles.container}`}>
    {props.clients.length > 0 ? (
      <>
        <ul className="list-group">
          {props.clients.map(({ firstName, lastName, dateOfRegistration }) => (
            <li className="card" key={dateOfRegistration}>
              <div className="card-body">
                <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{dateOfRegistration.toLocaleDateString()}</h6>
              </div>
            </li>
          ))}
        </ul>
        <Link to="/signup" className={`btn btn-success ${styles.signUpLink}`}>Add new client</Link>
      </>
    ) : (
      <h5>
          There are no clients yet, try to add
        <Link to="/signup"> here</Link>
      </h5>

    )}
  </div>
);

ClientsList.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({})),
};

ClientsList.defaultProps = {
  clients: [],
};

const mapStateToProps = state => ({
  clients: state.clientsReducer.clients,
});

export default connect(mapStateToProps)(ClientsList);
