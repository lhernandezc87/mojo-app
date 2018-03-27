import {combineReducers} from 'redux';

import tickets from './TicketsReducer';
import pageNumber from './PageNumberReducer';
import loadingTickets from './LoadingTicketsReducer';
import selectedColumn from './SelectedColumnReducer';
import sortDirrection from './SortDirrectionReducer';
import initDate from './InitDateReducer';
import endDate from './EndDateReducer';
import searchTickets from './SearchTicketsReducer';
import useSearchedTickets from './UseSearchedTicketsReducer';
import selectedDateColumn from './SelectedDateColumnReducer';
import selectedTicket from './SelectedTicketReducer';
import selectedTicketId from './SelectedTicketIdReducer';

export default combineReducers({
  tickets, pageNumber, loadingTickets, selectedColumn, sortDirrection, initDate, endDate, searchTickets,
  useSearchedTickets, selectedDateColumn, selectedTicket, selectedTicketId
});
