import React from 'react';
import PropTypes from 'prop-types';
import TicketRowColumn from './TicketRowColumn';
import _ from 'lodash';

export default class TicketRow extends React.Component {

  handleOnRowTableClick = (e) => {
    console.log(e);
  }

  render(){
  	var data = this.props.data;
  	const row = this.props.tableHeadersOrder.map((column) => (
  		<TicketRowColumn
  		  key={column}
  		  column={column}
  		  data={_.toString(data[_.snakeCase(column)])}
  		  selectedColumn={this.props.selectedColumn}
  		  sortDirrection={this.props.sortDirrection}
  		/>
  		));
    return(
      <tr className="rowTable" onClick={() => this.handleOnRowTableClick(this.props.data)} id={this.props.data.id}>
		{row}
      </tr>
    )
  }

}

TicketRow.propTypes = {
  data: PropTypes.object.isRequired,
  tableHeadersOrder: PropTypes.array,
  selectedColumn: PropTypes.string,
  sortDirrection: PropTypes.string
}
