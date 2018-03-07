import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadTickets } from '../actions/TicketsActions';
import { updatePageNumber } from '../actions/PageNumberActions';
import { loadingTickets } from '../actions/LoadingTicketsActions';
import { updateSelectedColumn } from '../actions/SelectedColumnActions';
import { updateSortDirection } from '../actions/SortDirectionActions';

import TicketsTable from './ticketsTable/TicketsTable';

class TicketsDashboard extends React.Component {

  componentDidMount(){
    this.props.loadTickets(this.props.pageNumber);
  }

  handleUpdateSelectedColumn = (column) => {
    this.props.updateSelectedColumn(column);
  }

  handleUpdateSortDirection = (dirrection) => {
    this.props.updateSortDirection(dirrection);
  }

  handleUpdatePageNumber = (page) => {
    this.props.updatePageNumber(page);
    this.props.loadTickets(page);
  }

  handleLoadTickets = (page, column, dirrection) => {
     this.props.loadTickets(page, column, dirrection);
  }

  render(){
  	return (
  	  <div className="dashboard">
  	    <div className="searchform">
  	      <h1> buscador </h1>
  	    </div>
  	    <div className="ticketsContainer">
  	      <TicketsTable 
            tickets={this.props.tickets}
            loadTickets={this.handleLoadTickets}
            pageNumber={this.props.pageNumber}
            selectedColumn={this.props.selectedColumn}
            sortDirection={this.props.sortDirection}
            updateSortDirection={this.handleUpdateSortDirection}
            updateSelectedColumn={this.handleUpdateSelectedColumn}
            updatePageNumber={this.handleUpdatePageNumber}
            loadingTickets={this.props.loadingTickets}
  	      />
  	    </div>
  	  </div>  
  	)
  }
}

TicketsDashboard.propTypes = {
  updatePageNumber: PropTypes.func,
  loadTickets: PropTypes.func,
  loadingTickets: PropTypes.bool,
  updateSelectedColumn: PropTypes.func,
  updateSortDirection: PropTypes.func
};


const mapStateToProps = (state) => ({
  tickets: state.tickets,
  pageNumber: state.pageNumber,
  loadingTickets: state.loadingTickets,
  selectedColumn: state.selectedColumn,
  sortDirection: state.sortDirection
});

const mapDispatchToProps = (dispatch) => ({
  updatePageNumber: (page) => { dispatch(updatePageNumber(page)) },
  loadTickets: (page, column, dirrection) => { dispatch(loadTickets(page, column, dirrection)) },
  updateLoadingTickets: (state) => { dispatch(loadingTickets(state)) },
  updateSortDirection: (direction) => { dispatch(updateSortDirection(direction)) },
  updateSelectedColumn: (column) => { dispatch(updateSelectedColumn(column)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsDashboard);
