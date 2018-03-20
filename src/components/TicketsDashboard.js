import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadTickets } from '../actions/TicketsActions';
import { updatePageNumber } from '../actions/PageNumberActions';
import { loadingTickets } from '../actions/LoadingTicketsActions';
import { updateSelectedColumn } from '../actions/SelectedColumnActions';
import { updateSortDirrection } from '../actions/SortDirrectionActions';
import { updateInitDate } from '../actions/InitDateActions';
import { updateEndDate } from '../actions/EndDateActions';
import { loadSearchTickets } from '../actions/SearchTicketsActions';
import { updateUseSearchedTickets } from '../actions/UseSearchedTicketsActions';

import TicketsTable from './ticketsTable/TicketsTable';
import SearchForm from './searchForm/SearchForm';

class TicketsDashboard extends React.Component {

  componentDidMount(){
    this.props.loadTickets(this.props.pageNumber);
  }

  handleUpdateSelectedColumn = (column) => {
    this.props.updateSelectedColumn(column);
  }

  handleUpdateSortDirrection = (dirrection) => {
    this.props.updateSortDirrection(dirrection);
  }

  handleUpdatePageNumber = (page) => {
    this.props.updatePageNumber(page);
    if (this.props.useSearchedTickets){
      this.props.loadSearchTickets(
                                    page, 
                                    this.props.selectedColumn, 
                                    this.props.sortDirrection, 
                                    '', 
                                    this.props.initDate, 
                                    this.props.endDate
      );
    }else{
      this.props.loadTickets(page);
    }  
  }

  handleLoadTickets = (page, column, dirrection) => {
     this.props.loadTickets(page, column, dirrection);
  }

  handleUpdateInitDate = (date) => {
    this.props.updateInitDate(date);
  }

  handleUpdateEndDate = (date) => {
    this.props.updateEndDate(date);
  }

  handleClearButton = () => {
    this.props.updateInitDate('');
    this.props.updateEndDate('');
    this.props.updateUseSearchedTickets(false);
  }

  handleSearcClick = (searchText) => {
    this.props.loadSearchTickets(
      this.props.pageNumber, 
      this.props.selectedColumn, 
      this.props.sortDirrection, 
      searchText, 
      this.props.initDate, 
      this.props.endDate
    );
    this.props.updateUseSearchedTickets(true);
  }

  handleTickets = () => {
    if (this.props.useSearchedTickets){
      return this.props.searchTickets;
    }else{
      return this.props.tickets;
    }
  }

  render(){
    const tickets = this.handleTickets();
  	return (
  	  <div className="dashboard">
  	    <div className="searchform">
  	      <SearchForm
            columns={tableHeadersAll}
            datesColumns={dropDownDateFields}
            loadingTickets={this.props.loadingTickets}
            updateInitDate={this.handleUpdateInitDate}
            updateEndDate={this.handleUpdateEndDate}
            initDate={this.props.initDate}
            endDate={this.props.endDate}
            clearButtonClick={this.handleClearButton}
            searchButtonClick={this.handleSearcClick}
            updateSearchedTickets={this.handleUpdateUseSearchedTickets}
            updateSelectedColumn={this.handleUpdateSelectedColumn}
          />
  	    </div>
  	    <div className="ticketsContainer">
  	      <TicketsTable 
            tickets={tickets}
            loadTickets={this.handleLoadTickets}
            pageNumber={this.props.pageNumber}
            selectedColumn={this.props.selectedColumn}
            sortDirrection={this.props.sortDirrection}
            updateSortDirrection={this.handleUpdateSortDirrection}
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
  updateSortDirrection: PropTypes.func,
  updateInitDate: PropTypes.func,
  updateEndDate: PropTypes.func,
  loadSearchTickets: PropTypes.func,
  updateUseSearchedTickets: PropTypes.func
};

const mapStateToProps = (state) => ({
  tickets: state.tickets,
  pageNumber: state.pageNumber,
  loadingTickets: state.loadingTickets,
  selectedColumn: state.selectedColumn,
  sortDirrection: state.sortDirrection,
  initDate: state.initDate,
  endDate: state.endDate,
  searchTickets: state.searchTickets,
  useSearchedTickets: state.useSearchedTickets
});

const mapDispatchToProps = (dispatch) => ({
  updatePageNumber: (page) => { dispatch(updatePageNumber(page)) },
  loadTickets: (page, column, dirrection) => { dispatch(loadTickets(page, column, dirrection)) },
  updateLoadingTickets: (state) => { dispatch(loadingTickets(state)) },
  updateSortDirrection: (dirrection) => { dispatch(updateSortDirrection(dirrection)) },
  updateSelectedColumn: (column) => { dispatch(updateSelectedColumn(column)) },
  updateInitDate: (date) => { dispatch(updateInitDate(date)) },
  updateEndDate: (date) => { dispatch(updateEndDate(date)) },
  loadSearchTickets: (page, column, dirrection, searchWords, initDate, endDate) => { 
    dispatch(loadSearchTickets(page, column, dirrection, searchWords, initDate, endDate));
  },
  updateUseSearchedTickets: (state) => {dispatch(updateUseSearchedTickets(state)) }
});

const tableHeadersAll = ['Id', 'Title', 'updated_on', 'assigned_on', 'assigned_to_id', 'cc', 'company_id',
      'created_from', 'created_on', 'description', 'due_on', 'first_assigned_on', 'is_attention_required',
      'legacy_id', 'priority_id', 'rated_on', 'rating', 'scheduled_on', 'solved_on', 'status_changed_on',
      'status_id', 'ticket_form_id', 'ticket_queue_id', 'ticket_type_id', 'user_attention_id', 'user_id', 
      'custom_field_category_sr', 'custom_field_impact_sr', 'custom_field_request', 'custom_field_urgency_sr',
      'custom_field_workplace_sr'];

const dropDownDateFields = ['comments.created_on', 'created_on', 'due_on', 'rated_on', 'scheduled_on', 'solved_on',
      'status_changed_on', 'updated_on'];      

export default connect(mapStateToProps, mapDispatchToProps)(TicketsDashboard);
