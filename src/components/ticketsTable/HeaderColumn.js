import React from 'react';
import PropTypes from 'prop-types';

export default class HeaderColumn extends React.Component {
  
  handleSortUpClick = () => {
  	this.props.onSortClick(this.props.column, 'asc');
  }

  handleSortDownClick = () => {
  	this.props.onSortClick(this.props.column, 'desc');
  }

  render(){
  	var divClass = 'headerColumnTable'
  	if (this.props.column.includes('custom')) {divClass = divClass + 'Custom'; }
    if (this.props.column.includes('title')) {divClass = divClass + 'Title highlightColumnAsc'; }
    if (this.props.column.includes('description')) {divClass = divClass + 'Description'; }
    return(
      <th>
        <div className={divClass}>
          <div className="headerColumnTableText">
            { this.props.column }
          </div>
          <div className="sortColumntableIcons">
            <span
              className="upSortTableIcon"
              onClick={this.handleSortUpClick}
            >
              <img src={require('../../images/sort-up-icon.ico')} id="upSortTableIcon" />
            </span>
            <span
              className="downSortTableIcon"
              onClick={this.handleSortDownClick}
            >
               <img src={require('../../images/sort-down-red.png')} id="downSortTableIcon" />
            </span> 
          </div>
        </div>
      </th>  
    )
  }
}

HeaderColumn.propTypes = {
  onSortClick: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired
}
