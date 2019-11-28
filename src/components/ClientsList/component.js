import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ClientsList = props => (
  <div className="container">
    {props.clients.length > 0 ? (
      <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>

      </ul>
    ) : (

      <h5>
          There are no clients yet, try to add
        <Link to="/signup"> here</Link>
      </h5>

    )}
  </div>
);

ClientsList.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};


const mapStateToProps = state => ({
  clients: state.clients,
});

export default connect(mapStateToProps)(ClientsList);
