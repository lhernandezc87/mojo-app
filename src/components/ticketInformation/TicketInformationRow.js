import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Row, Col } from 'reactstrap';

export default class TicketInformationRow extends React.Component {

  render(){
    const {header, value: info} = this.props;
    const data = _.isObject(info) ?
      _.map(info, (value, key) => <TicketInformationRow header={key} value={value} key={key} />)
      : info;

    return _.isString(header) ? (
      <Row className='ticketInformationTableRow'>
	      <Col className='ticketInformationTableHeader'>{header}:</Col>
	      <Col lg="10" className='ticketInformationTableDataColumn'>{data}</Col>
	    </Row>
    ) : data;
  }
}

TicketInformationRow.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  value: PropTypes.any
}
