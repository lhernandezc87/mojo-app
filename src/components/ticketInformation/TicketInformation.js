import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { updateSelectedTicket } from '../../actions/SelectedTicketActions';
import { updateSelectedTicketId } from '../../actions/SelectedTicketIdActions';

class TicketInformation extends React.Component {
  
  componentDidMount(){
  	this.props.updateSelectedTicketId(this.props.match.params.id);
    this.props.updateSelectedTicket(this.props.match.params.id);
  }

  render(){
    return(
      <div className="ticketInformationDiv">
        <div className='ticketInformationTitle'>
          Ticket {this.props.selectedTicketId} Information
        </div>
        <div className='ticketInformationTable'>
          
          <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>assigned_on:</div> 
	        <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.assigned_on}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>assigned_to_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.assigned_to_id}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>cc:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.cc}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>company_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.company_id}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>created_from:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.created_from}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>created_on:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.created_on}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>description:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.description}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>due_on:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.due_on}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>first_assigned_on:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.first_assigned_on}</div>
	      </div>
	       <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>is_attention_required:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.is_attention_required}</div>
	      </div>
	       <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>legacy_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.legacy_id}</div>
	      </div>
	       <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>priority_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.priority_id}</div>
	      </div>
	       <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>rated_on:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.rated_on}</div>
	      </div>
	       <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>rating:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.rating}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>scheduled_on:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.scheduled_on}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>solved_on:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.solved_on}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>status_changed_on:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.status_changed_on}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>status_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.status_id}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>ticket_form_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.ticket_form_id}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>ticket_queue_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.ticket_queue_id}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>ticket_type_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.ticket_type_id}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>title:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.title}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>updated_on:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.updated_on}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>user_attention_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.user_attention_id}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>user_id:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.user_id}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>custom_field_category_sr:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.custom_field_category_sr}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>custom_field_impact_sr:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.custom_field_impact_sr}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>custom_field_request:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.custom_field_request}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>custom_field_urgency_sr:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.custom_field_urgency_sr}</div>
	      </div>
	      <div className='ticketInformationTableRow'>
	        <div className='ticketInformationTableHeader'>custom_field_workplace_sr:</div>
            <div className='ticketInformationTableDataColumn'>{this.props.selectedTicket.custom_field_workplace_sr}</div>
	      </div>

        </div>
      </div>
    )
  }	

}

TicketInformation.propTypes = {
  selectedTicket: PropTypes.object,
  selectedticketId: PropTypes.number
}

const mapStateToProps = (state) => ({
  selectedTicket: state.selectedTicket,
  selectedTicketId: state.selectedTicketId
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateSelectedTicket,
  updateSelectedTicketId
}, dispatch);

const tableHeadersAll = ['assignee.id', 'assignee.name', 'assignee.email', 'comments.id', 'comments.body',
      'comments.time_spent', 'comments.user.id', 'comments.user.name', 'comments.user.email', 'company.id', 'company.name',
      'created_by.id', 'created_by.name', 'created_by.email', 'description', 'priority.id', 'priority.name', 
      'queue.id', 'queue.name', 'rating', 'status.id', 'status.name', 'type.id', 'type.name', 'title'];

export default connect(mapStateToProps, mapDispatchToProps)(TicketInformation);
