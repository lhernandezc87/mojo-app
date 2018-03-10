import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Input,
         Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import LoadingGif from './LoadingGif';

const WAIT_INTERVAL = 2500;

export default class SearchForm extends React.Component {

  state = {
    dropDownColumnIsOpen: false,
    dropDownColumn: '',
    searchQueryInput: ''
  }

  componentWillMount() {
    this.timer = null;
  }

  toggle = () => { 
  	this.setState({ dropDownColumnIsOpen: !this.state.dropDownColumnIsOpen }); 
  }

  handleDropDownColumnClick = (e) => {
    this.setState({dropDownColumn: e.currentTarget.textContent});
  }

  handleOnChangeText = (e) => {
  	clearTimeout(this.timer);
  	this.setState({searchQueryInput: e.target.value});
  	this.timer = setTimeout(this.searchTickets, WAIT_INTERVAL);
  }

  handleClearButton = () => {
    clearTimeout(this.timer);
    this.setState({searchQueryInput: ''});
    this.setState({dropDownColumn: ''});
  }

  searchTickets = () => {
    alert("ha pasado 3 segundos sin digitar");
  }

  render(){

    const options = this.props.columns.map((column) => (
      <DropdownItem 
        key={column} 
        className="dropdownItem w3-container w3-center w3-animate-opacity" 
        onClick={this.handleDropDownColumnClick}>{column}
      </DropdownItem>	
    ));
    return (
      <div className={this.props.loadingTickets ? 'disabledDiv' : ''}>
        <Form>
          <FormGroup row>
          <div className="searchDropDownDiv">
            <div className="searchDropDownDivText">
  			     Search Column Field: 
            </div>       
  	        <Dropdown id='test' isOpen={this.state.dropDownColumnIsOpen} toggle={this.toggle}>
  	          <DropdownToggle caret>
  	            {this.state.dropDownColumn !== '' ? this.state.dropDownColumn : 'Choose Column'}
  	          </DropdownToggle>
  	          <DropdownMenu right>
  	            {options}
  	          </DropdownMenu>  
  	        </Dropdown>
          </div>      
            <Col sm={2}>
              <Input 
              	type="text" 
              	name="searchText" 
              	id="searchText" 
              	placeholder="search" 
                  onChange={this.handleOnChangeText}
                  value={this.state.searchQueryInput}
                  disabled={this.state.dropDownColumn === '' ? true : false}
              />
            </Col>
            <Col sm={1}>
              <div className="searchformButtons">
                <Button outline color="primary" size="md" disabled={this.state.dropDownColumn === '' ? true : false}>Search</Button>
                <div className="dividerButtons" />
  			        <Button outline color="secondary" size="md" onClick={this.handleClearButton}>clear</Button>
  			      </div>              
            </Col>
            <LoadingGif 
              loadingTickets={this.props.loadingTickets}
            />
          </FormGroup>            
        </Form>
      </div>
    )
  }
}

SearchForm.propTypes = {
  columns: PropTypes.array,
  loadingTickets: PropTypes.bool
};
