import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class TicketRowColumn extends React.Component {

  getCssColumn(column, selectedColumn, dirrection){
    if ((column === selectedColumn) && (dirrection === 'asc')) { return 'highlightColumnAsc';}
    if ((column === selectedColumn) && (dirrection === 'desc')) { return 'highlightColumnDesc';}
    return '';
  }

  render() {
  	var columnCss = this.getCssColumn(this.props.column, this.props.selectedColumn, this.props.sortDirrection);
  	return (
      <td className={columnCss}>
	    {this.props.data}
	  </td>
  	)
  }	

}

TicketRowColumn.propTypes = {
  column: PropTypes.string,
  selectedColumn: PropTypes.string,
  sortDirrection: PropTypes.string,
  data: PropTypes.string
}
