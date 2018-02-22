import React from 'react';
import PropTypes from 'prop-types';

import TicketRow from './TicketRow'

export default class RowsTable extends React.Component {

  render(){
    const rows = this.props.tickets.map((ticket) => (
    	<TicketRow
    	  data={ticket}
    	/>
    ));

    return (
      <div className="rowsTable">	
        {rows}
      </div>  
    )
  }


}

RowsTable.propTypes = {
  tickets: PropTypes.array.isRequired
}
