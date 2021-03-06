import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Input,
         Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import LoadingGif from './LoadingGif';
import DatePicker from './DatePicker';

const WAIT_INTERVAL = 2500;

export default class SearchForm extends React.Component {

  state = {
    dropDownColumnIsOpen: false,
    dropDownColumn: '',
    dropDownDateIsOpen: false,
    dropDownDate: '',
    searchQueryInput: ''
  }

  componentWillMount() {
    this.timer = null;
  }

  toggle = () => { 
  	this.setState({ dropDownColumnIsOpen: !this.state.dropDownColumnIsOpen }); 
  }

  toggleDate = () => { 
    this.setState({ dropDownDateIsOpen: !this.state.dropDownDateIsOpen }); 
  }

  handleDropDownColumnClick = (e) => {
    this.setState({dropDownColumn: e.currentTarget.textContent});
    this.props.updateSelectedColumn(e.currentTarget.textContent);
  }

  handleDropDownDateClick = (e) => {
    this.setState({dropDownDate: e.currentTarget.textContent});
    this.props.updateSelectedDateColumn(e.currentTarget.textContent);
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
    this.props.clearButtonClick();
  }

  handleSearchButton = () => {
    this.searchTickets();
  }

  searchTickets = () => {
   this.props.searchButtonClick(this.state.searchQueryInput);
  }

  render(){
    var disableSearchText = false;
    if (this.state.dropDownColumn === ''){disableSearchText = true;}
    const options = this.props.columns.map((column) => (
      <DropdownItem 
        key={column} 
        className="dropdownItem w3-container w3-center w3-animate-opacity" 
        onClick={this.handleDropDownColumnClick}>{column}
      </DropdownItem>	
    ));
    const optionsDate = this.props.datesColumns.map((column) => (
      <DropdownItem 
        key={column} 
        className="dropdownItem w3-container w3-center w3-animate-opacity" 
        onClick={this.handleDropDownDateClick}>{column}
      </DropdownItem> 
    ));
    return (
      <div className={this.props.loadingTickets ? 'disabledDiv' : ''}>
        <Form>
          <FormGroup row>
          <div className="datesContainer">
            <div className='datePickersDiv'>     
              <Col sm={6}>
                <DatePicker
                  labelText='Init Date'
                  date={this.props.initDate}
                  updateDate={this.props.updateInitDate}
                  disablePicker={false}
                />
              </Col>  
              <Col sm={6}>
                <DatePicker
                  labelText="End Date"
                  date={this.props.endDate}
                  updateDate={this.props.updateEndDate}
                  disablePicker={false}
                />
              </Col>
            </div>
            <div className="DateDropDown">
              <Dropdown id='dateDropDown' isOpen={this.state.dropDownDateIsOpen} toggle={this.toggleDate}>
                  <DropdownToggle caret>
                    {this.state.dropDownDate !== '' ? this.state.dropDownDate : 'Choose Column'}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {optionsDate}
                  </DropdownMenu>  
              </Dropdown> 
            </div>  
          </div>
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
            <Col sm={4}>
              <div className='searchTextDiv'>
                <Input 
                  type="text" 
                  name="searchText" 
                  id="searchText" 
                  placeholder="search words" 
                  onChange={this.handleOnChangeText}
                  value={this.state.searchQueryInput}
                  disabled={disableSearchText}
                />
              </div>  
            </Col>
          </div>   
            <Col sm={1}>
              <div className="searchformButtons">
                <Button 
                  outline 
                  color="primary" 
                  size="md" 
                  onClick={this.handleSearchButton}
                >
                  Search
                </Button>
                <div className="dividerButtons" />
                <Button 
                  outline color="secondary" 
                  size="md" 
                  onClick={this.handleClearButton}
                >
                  clear
                </Button>
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
  loadingTickets: PropTypes.bool,
  updateInitDate: PropTypes.func,
  initDate: PropTypes.string,
  updateEndDate: PropTypes.func,
  endDate: PropTypes.string,
  clearButtonClick: PropTypes.func,
  searchButtonClick: PropTypes.func,
  updateSelectedColumn: PropTypes.func,
  datesColumns: PropTypes.array,
  updateSelectedDateColumn: PropTypes.func
};
