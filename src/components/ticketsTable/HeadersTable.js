import React from 'react';
import PropTypes from 'prop-types';

import HeaderColumn from './HeaderColumn'

export default class HeadersTable extends React.Component {

  render(){
  	var headerColumns = [];
  	for (var header in this.props.headers){headerColumns.push(header);}
    const headers = headerColumns.map((header) => (
      <HeaderColumn 
        key={header}
        column={header}
        onSortClick={this.props.onSortClick}
      />
    ));
    return (
      <div className="tableHeaders">
        {headers}
      </div>
    )
  }
}


HeadersTable.propTypes = {
  onSortClick: PropTypes.func.isRequired
}
