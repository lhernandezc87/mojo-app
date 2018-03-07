import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import HeaderColumn from './HeaderColumn';
import TicketRow from './TicketRow';
import TablePagination from  './TablePagination';

export default class TicketsTable extends React.Component {


  handleOnSort = (column, dirrection) => {
    this.props.updateSortDirection(dirrection);
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
        sortDirection={this.props.sortDirection}
      />
    ));


    const rows = this.props.tickets.map((ticket) => (
      <TicketRow
        key={ticket.id}
        data={ticket}
        selectedColumn={this.props.selectedColumn}
        sortDirrection={this.props.sortDirection}
        tableHeadersOrder={tableHeaders}
      />
    ));
  	return(
      <div className="TableAll">
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
  sortDirection: PropTypes.string,
  updateSortDirection: PropTypes.func.isRequired,
  updateSelectedColumn: PropTypes.func.isRequired,
  updatePageNumber: PropTypes.func,
  loadingTickets: PropTypes.bool,
  loadTickets: PropTypes.func
}

const tableHeaders = ['Id', 'Title', 'Description', 'User Id', 'Assigned To Id', 'Status Id', 'Ticket Form Id', 
                      'Priority Id', 'Ticket Queue Id', 'Company Id', 'Rating', 'Rated On', 'Created On',
                      'Updated On', 'Status Changed On', 'Solved On', 'Assigned On', 'Ticket Type Id', 'Due On',
                      'Scheduled On'];


const tableHeaders2 = ['Id', 'Title', 'updated_on', 'assigned_on', 'assigned_to_id', 'cc', 'company_id',
      'created_from', 'created_on', 'description', 'due_on', 'first_assigned_on', 'is_attention_required',
      'legacy_id', 'priority_id', 'rated_on', 'rating', 'scheduled_on', 'solved_on', 'status_changed_on',
      'status_id', 'ticket_form_id', 'ticket_queue_id', 'ticket_type_id', 'user_attention_id', 'user_id', 
      'custom_field_category_sr', 'custom_field_impact_sr', 'custom_field_request', 'custom_field_urgency_sr',
      'custom_field_workplace_sr'];      


      