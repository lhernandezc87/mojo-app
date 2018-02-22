import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadTickets } from '../actions/TicketsActions';
import { updatePageNumber } from '../actions/PageNumberActions';
import { loadingTickets } from '../actions/LoadingTicketsActions';

import TicketsTable from './ticketsTable/TicketsTable';

class TicketsDashboard extends React.Component {


  render(){
  	return (
  	  <div className="dashboard">
  	    <div className="searchform">
  	      <h1> buscador </h1>
  	    </div>
  	    <div className="ticketsContainer">
  	      <TicketsTable 
            tickets={this.props.tickets}
  	      />
  	    </div>
  	  </div>  
  	)
  }
}

TicketsDashboard.propTypes = {
  updatePageNumber: PropTypes.func,
  loadTickets: PropTypes.func,
  loadingTickets: PropTypes.func
};


const mapStateToProps = (state) => ({
  tickets: state.tickets,
  pageNumber: state.pageNumber,
  loadingTickets: state.loadingTickets
});

const mapDispatchToProps = (dispatch) => ({
  updatePageNumber: (page) => { dispatch(updatePageNumber(page)) },
  loadTickets: (page) => { dispatch(loadTickets(page)) },
  loadingTickets: (state) => { dispatch(loadingTickets(state)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsDashboard);
