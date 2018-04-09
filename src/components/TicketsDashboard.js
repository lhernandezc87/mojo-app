import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { loadTickets } from '../actions/TicketsActions';
import { updatePageNumber } from '../actions/PageNumberActions';
import { updateLoadingTickets } from '../actions/LoadingTicketsActions';
import { updateSelectedColumn } from '../actions/SelectedColumnActions';
import { updateSortDirrection } from '../actions/SortDirrectionActions';
import { updateInitDate } from '../actions/InitDateActions';
import { updateEndDate } from '../actions/EndDateActions';
import { loadSearchTickets } from '../actions/SearchTicketsActions';
import { updateUseSearchedTickets } from '../actions/UseSearchedTicketsActions';
import { updateSelectedDateColumn } from '../actions/SelectedDateColumnActions';
import { updateSelectedTicket } from '../actions/SelectedTicketActions';

import TicketsTable from './ticketsTable/TicketsTable';
import SearchForm from './searchForm/SearchForm';

class TicketsDashboard extends React.Component {

  componentDidMount(){
    this.props.loadTickets(this.props.pageNumber);
  }

  handleUpdateSelectedColumn = (column) => {
    this.props.updateSelectedColumn(column);
  }

  handleUpdateSelectedDateColumn = (column) => {
    this.props.updateSelectedDateColumn(column);
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

  handleSelectedTicket = (ticketId) => {
    return this.props.history.push(`/ticket/${ticketId}`);
  }

  render(){
    const tickets = this.handleTickets();
  	return (
  	  <div className="dashboard">
  	    <div className="searchform">
  	      <SearchForm
            columns={tableHeadersSearch}
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
            updateSelectedDateColumn={this.handleUpdateSelectedDateColumn.bind(this)}
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
            updateSelectedTicket={this.handleSelectedTicket}
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
  updateUseSearchedTickets: PropTypes.func,
  updateSelectedDateColumn: PropTypes.func,
  updateSelectedTicket: PropTypes.func
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
  useSearchedTickets: state.useSearchedTickets,
  selectedDateColumn: state.selectedDateColumn,
  selectedTicket: state.selectedTicket
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updatePageNumber,
  loadTickets,
  updateLoadingTickets,
  updateSelectedColumn,
  updateSortDirrection,
  updateInitDate,
  updateEndDate,
  loadSearchTickets,
  updateUseSearchedTickets,
  updateSelectedDateColumn,
  updateSelectedTicket
}, dispatch);

const tableHeadersSearch = ['assignee.id', 'assignee.name', 'assignee.email', 'comments.id', 'comments.body',
      'comments.time_spent', 'comments.user.id', 'comments.user.name', 'comments.user.email', 'company.id', 'company.name',
      'created_by.id', 'created_by.name', 'created_by.email', 'description', 'priority.id', 'priority.name', 
      'queue.id', 'queue.name', 'rating', 'status.id', 'status.name', 'type.id', 'type.name', 'title'];

const dropDownDateFields = ['comments.created_on', 'created_on', 'due_on', 'rated_on', 'scheduled_on', 'solved_on',
      'status_changed_on', 'updated_on'];      

export default connect(mapStateToProps, mapDispatchToProps)(TicketsDashboard);
