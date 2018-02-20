import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { loadTickets, loadingTickets } from '../actions/TicketsActions';
import { updatePageNumber } from '../actions/PageNumberActions';

class TicketsDashboard extends React.Component {

}

const mapStateToProps = (state) => ({
  tickets: state.tickets,
  pageNumber: state.pageNumber,
});

const mapDispatchToProps = (dispatch) => ({
  updatePageNumber: (page) => { dispatch(updatePageNumber(page)) },
  loadTickets: (page) => { dispatch(loadTickets(page)) },
  loadingTickets: (state) => { dispatch(loadingTickets(state)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsDashboard);
