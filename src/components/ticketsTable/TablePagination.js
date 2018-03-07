import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from 'prop-types';

    let prev  = 0;
    let next  = 0;
    let last  = 0;
    let first = 0;

export default class TablePagination extends React.Component {

  constructor() {
    super();
    this.state = {
      totals: 120,
      currentPage: 1,
      PerPage: 12,
    };
  }

  componentDidMount(){
    this.setState({currentPage: this.props.currentPage});
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setCurrentPage(Number(event.target.id));
    this.setState({
    currentPage: Number(event.target.id)
    });
  }

  handleLastClick = (event) => {
    event.preventDefault();
    this.setCurrentPage(last);
    this.setState({
      currentPage:last
    });
    
   }
  
  handleFirstClick = (event) => {
    event.preventDefault();
    this.setCurrentPage(1);
    this.setState({
      currentPage:1
    });    
  }

   setCurrentPage = (page) => {
   	 this.props.updatePageNumber(page);
   }

   render() {
     let { totals, currentPage, PerPage } = this.state;

     // Logic for displaying current todos
     let indexOfLast = currentPage * PerPage;
     let indexOfFirst = indexOfLast - PerPage;
      prev  = currentPage > 0 ? (currentPage -1) :0;
      last = Math.ceil(totals/PerPage);
      next  = (last === currentPage) ?currentPage: currentPage +1;

     // Logic for displaying page numbers
     let pageNumbers = [];
     for (let i = 1; i <=last; i++) {
       pageNumbers.push(i);
     }



      return (
       <div className={this.props.loadingTickets ? 'disabledDiv' : ''}>
        <ul id="page-numbers">
         <nav>
          <Pagination>
          <PaginationItem>
          { prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
              <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
          }
          </PaginationItem>
          <PaginationItem>
          { prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
              <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
          }
          </PaginationItem>
             {
              pageNumbers.map((number,i) =>
              <Pagination key= {i}>
              <PaginationItem active = {pageNumbers[currentPage-1] === (number) ? true : false} >
               <PaginationLink onClick={this.handleClick} href={number} key={number} id={number} >
               {number}
               </PaginationLink>
               </PaginationItem>
              </Pagination>
            )}

         <PaginationItem>
         {
           currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
           <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
         }
         </PaginationItem>

         <PaginationItem>
         {
           currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
           <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
         }
         </PaginationItem>
         </Pagination>
          </nav>
         </ul>
       </div>
     );
   }

}

TablePagination.propTypes = {
  pageNumber: PropTypes.number,
  updatePageNumber: PropTypes.func,
  loadingTickets: PropTypes.bool
}