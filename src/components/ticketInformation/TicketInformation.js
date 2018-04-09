import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';

import { updateSelectedTicket } from '../../actions/SelectedTicketActions';
import { updateSelectedTicketId } from '../../actions/SelectedTicketIdActions';
import TicketInformationRow from './TicketInformationRow';

class TicketInformation extends React.Component {

  componentDidMount(){
  	this.props.updateSelectedTicketId(this.props.match.params.id);
    this.props.updateSelectedTicket(this.props.match.params.id);
  }

  handleOnBackClick = (e) => {
    return this.props.history.push('/');
  }

  render(){
    return(
      <div className="ticketInformationDiv">
        <div className='ticketInformationTitle'>
          Ticket {this.props.selectedTicketId} Information
        </div>
        <div className='informationTicketBackButtonDiv'>
          <Button 
            color="secondary" 
            size="lg"
            onClick={this.handleOnBackClick}
          >
            Back
          </Button>
        </div>  
        <div className='ticketInformationTable'>
          <TicketInformationRow value={this.props.selectedTicket} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TicketInformation);
