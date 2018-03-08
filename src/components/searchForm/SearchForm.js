import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Label, Input,
         Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
    //alert("ha pasado 3 segundos sin digitar");
  }

  render(){

    const options = this.props.columns.map((column) => (
      <DropdownItem key={column} className="dropdownItem" onClick={this.handleDropDownColumnClick}>{column}</DropdownItem>	
    ));
    return (
      <Form>
        <FormGroup row>
			  <Label for="columnSelect" sm={2}>Search Column Field</Label>          
	            <Dropdown id='test' isOpen={this.state.dropDownColumnIsOpen} toggle={this.toggle}>
	              <DropdownToggle caret>
	                {this.state.dropDownColumn !== '' ? this.state.dropDownColumn : 'Choose Column'}
	              </DropdownToggle>
	              <DropdownMenu right>
	                {options}
	              </DropdownMenu>  
	            </Dropdown>
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
        </FormGroup>  
      </Form>
    )
  }
}

SearchForm.propTypes = {
  columns: PropTypes.array
};
