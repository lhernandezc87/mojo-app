import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class HeaderColumn extends React.Component {
  
  handleSortUpClick = () => {
  	this.props.onSortClick(this.props.column, 'asc');
  }

  handleSortDownClick = () => {
  	this.props.onSortClick(this.props.column, 'desc');
  }

  getColumnCss(column, selectedColumn, direction){
    var divClass = 'headerColumnTable';
    if (column.includes('Custom')) { divClass = divClass + 'Custom'; }
    if (column.includes('Title')) { divClass = divClass + 'Title'; }
    if (column.includes('Description')) { divClass = divClass + 'Description'; }
    if (column.includes('User Id')) { divClass = divClass + 'UserId'; }
    if (column.includes('Assigned To Id')) { divClass = divClass + 'AssignedToId'; }
    if (column.includes('Status Id')) { divClass = divClass + 'StatusId'; }
    if (column.includes('Ticket Form Id')) { divClass = divClass + 'TicketFormId'; }
    if (_.startsWith(column, 'Id')) { divClass = divClass + 'Id'; }

    return divClass;
  }

  isHighlightedColumn(column, selectedColumn, direction){
    if ((column === selectedColumn) && (direction === 'asc')) { return 'highlightColumnAsc';}
    if ((column === selectedColumn) && (direction === 'desc')) { return 'highlightColumnDesc';}
    return '';
  }

  render(){
  	var divClass = this.getColumnCss(this.props.column, this.props.selectedColumn, this.props.sortDirection);
    return(
      <th className={this.isHighlightedColumn(this.props.column, this.props.selectedColumn, this.props.sortDirection)}>
        <div className={divClass}>
          <div className="headerColumnTableText">
            { this.props.column }
          </div>
          <div className="sortColumntableIcons">
            <span
              className="upSortTableIcon"
              onClick={this.handleSortUpClick}
            >
              <img src={require('../../images/sort-up-icon.ico')} id="upSortTableIcon" alt='Sort Up' />
            </span>
            <span
              className="downSortTableIcon"
              onClick={this.handleSortDownClick}
            >
               <img src={require('../../images/sort-down-red.png')} id="downSortTableIcon" alt='Sort Down'/>
            </span> 
          </div>
        </div>
      </th>  
    )
  }
}

HeaderColumn.propTypes = {
  onSortClick: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  selectedColumn: PropTypes.string,
  sortDirection: PropTypes.string
}
