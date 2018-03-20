import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'reactstrap';
import _ from 'lodash';

export default class DatePicker extends React.Component {

  handleDateEvent = (e) => {
    this.props.updateDate(e.target.value);
  }	

  render(){
    return(
      <div className='datePickerDiv'>
        <div className='datePickerDivText'>
          <Label for={_.snakeCase(this.props.labelText)}>{this.props.labelText}</Label>
        </div>  
        <Input 
          type="date" 
          name="date" 
          id={_.snakeCase(this.props.labelText)} 
          placeholder={this.props.labelText}
          onChange={this.handleDateEvent}
          value={this.props.date}
          disabled={this.props.disablePicker} 
        />
      </div>	
    )
  }
}

DatePicker.propTypes = {
  labelText: PropTypes.string,	
  date: PropTypes.string,
  updateDate: PropTypes.func,
  disablePicker: PropTypes.bool
}
