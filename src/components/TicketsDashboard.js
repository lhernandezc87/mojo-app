import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadTickets } from '../actions/TicketsActions';
import { updatePageNumber } from '../actions/PageNumberActions';
import { loadingTickets } from '../actions/LoadingTicketsActions';
import { updateSelectedColumn } from '../actions/SelectedColumnActions';
import { updateSortDirection } from '../actions/SortDirectionActions';

import TicketsTable from './ticketsTable/TicketsTable';
import SearchForm from './searchForm/SearchForm';

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
  	      <SearchForm
            columns={tableHeadersAll}
          />
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

const tableHeadersAll = ['Id', 'Title', 'updated_on', 'assigned_on', 'assigned_to_id', 'cc', 'company_id',
      'created_from', 'created_on', 'description', 'due_on', 'first_assigned_on', 'is_attention_required',
      'legacy_id', 'priority_id', 'rated_on', 'rating', 'scheduled_on', 'solved_on', 'status_changed_on',
      'status_id', 'ticket_form_id', 'ticket_queue_id', 'ticket_type_id', 'user_attention_id', 'user_id', 
      'custom_field_category_sr', 'custom_field_impact_sr', 'custom_field_request', 'custom_field_urgency_sr',
      'custom_field_workplace_sr']; 

export default connect(mapStateToProps, mapDispatchToProps)(TicketsDashboard);
