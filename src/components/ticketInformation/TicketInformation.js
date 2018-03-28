import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { updateSelectedTicket } from '../../actions/SelectedTicketActions';
import { updateSelectedTicketId } from '../../actions/SelectedTicketIdActions';
import TicketInformationRow from './TicketInformationRow';

class TicketInformation extends React.Component {
  
  componentDidMount(){
  	this.props.updateSelectedTicketId(this.props.match.params.id);
    this.props.updateSelectedTicket(this.props.match.params.id);
  }

  render(){

    const dataRows = Object.entries(this.props.selectedTicket).forEach(([key, value]) => (
      <TicketInformationRow
        header={key}
        data={String(value)}
      />  
    ));

    return(
      <div className="ticketInformationDiv">
        <div className='ticketInformationTitle'>
          Ticket {this.props.selectedTicketId} Information
        </div>
        <div className='ticketInformationTable'>
          {dataRows}
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
