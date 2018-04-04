import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class TicketInformationRow extends React.Component {

  render(){

    var data = '';
    if (_.isObject(this.props.value)){
      data = _.map(this.props.value, (value, key) => (
	    <TicketInformationRow
	      header={_.keys(value)[key]}
	      value={_.values(value)[key]}
	      key={key}
	    />  
	  ));
    }
    else{
        data = this.props.value;
    }

    return(
      <div className='ticketInformationTableRow'>
	    <div className='ticketInformationTableHeader'>{this.props.header}:</div> 
	    <div className='ticketInformationTableDataColumn'>{data}</div>
	  </div> 
    )
  }
}

TicketInformationRow.propTypes = {
  header: PropTypes.string,
  value: PropTypes.any
}
