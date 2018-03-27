import React from 'react';
import PropTypes from 'prop-types';
import TicketRowColumn from './TicketRowColumn';
import _ from 'lodash';

export default class TicketRow extends React.Component {

  handleOnRowTableClick = (ticket) => {
    this.props.updateSelectedTicket(ticket);
  }

  render(){
  	const {data, tableHeadersOrder, selectedColumn, sortDirrection} = this.props;
  	const row = tableHeadersOrder.map((column) => (
  		<TicketRowColumn
  		  key={column}
  		  column={column}
  		  data={_.toString(data[_.snakeCase(column)])}
  		  selectedColumn={selectedColumn}
  		  sortDirrection={sortDirrection}
  		/>
  		));
    return(
      <tr className="rowTable" onClick={() => this.handleOnRowTableClick(data.id)} id={data.id}>
		{row}
      </tr>
    )
  }

}

TicketRow.propTypes = {
  data: PropTypes.object.isRequired,
  tableHeadersOrder: PropTypes.array,
  selectedColumn: PropTypes.string,
  sortDirrection: PropTypes.string,
  updateSelectedTicket: PropTypes.func
}
