import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import HeaderColumn from './HeaderColumn';
import TicketRow from './TicketRow';
import TablePagination from  './TablePagination';

export default class TicketsTable extends React.Component {


  handleOnSort = (column, dirrection) => {
    this.props.updateSortDirrection(dirrection);
    this.props.updateSelectedColumn(column);
    this.props.loadTickets(this.props.pageNumber, column, dirrection);
  }

  render(){
    const headers = tableHeaders.map((header) => (
      <HeaderColumn 
        key={header}
        column={header}
        onSortClick={this.handleOnSort}
        selectedColumn={this.props.selectedColumn}
        sortDirection={this.props.sortDirrection}
      />
    ));


    const rows = this.props.tickets.map((ticket) => (
      <TicketRow
        key={ticket.id}
        data={ticket}
        selectedColumn={this.props.selectedColumn}
        sortDirrection={this.props.sortDirrection}
        tableHeadersOrder={tableHeaders}
        updateSelectedTicket={this.props.updateSelectedTicket}
      />
    ));

    var cssClass = 'tableAll w3-container w3-center w3-animate-opacity';
    if (this.props.loadingTickets) {cssClass = cssClass + ' disabledDiv';}
  	return(
      <div className={cssClass}>
    		<Table dark hover>
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
          <tbody>  			
            {rows}
          </tbody> 
    		</Table>
        <TablePagination 
          currentPage={this.props.pageNumber}
          updatePageNumber={this.props.updatePageNumber}
          loadingTickets={this.props.loadingTickets}
        />
      </div>
  	)
  }

}

TicketsTable.propTypes = {
  pageNumber: PropTypes.number,
  tickets: PropTypes.array.isRequired,
  selectedColumn: PropTypes.string,
  sortDirrection: PropTypes.string,
  updateSortDirrection: PropTypes.func.isRequired,
  updateSelectedColumn: PropTypes.func.isRequired,
  updatePageNumber: PropTypes.func,
  loadingTickets: PropTypes.bool,
  loadTickets: PropTypes.func,
  updateSelectedTicket:  PropTypes.func
}

const tableHeaders = ['Id', 'Title', 'Description', 'User Id', 'Assigned To Id', 'Status Id', 'Ticket Form Id', 
                      'Priority Id', 'Ticket Queue Id', 'Company Id', 'Rating', 'Rated On', 'Created On',
                      'Updated On', 'Status Changed On', 'Solved On', 'Assigned On', 'Ticket Type Id', 'Due On',
                      'Scheduled On'];



      