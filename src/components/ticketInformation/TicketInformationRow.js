import React from 'react';
import PropTypes from 'prop-types';

export default class TicketInformationRow extends React.Component {

  render(){
    return(
      <div className='ticketInformationTableRow'>
	    <div className='ticketInformationTableHeader'>{this.props.header}:</div> 
	    <div className='ticketInformationTableDataColumn'>{this.props.data}</div>
	  </div> 
    )
  }
}

TicketInformationRow.propTypes = {
  header: PropTypes.string,
  data: PropTypes.string
}
