import {combineReducers} from 'redux';

import tickets from './TicketsReducer';
import pageNumber from './PageNumberReducer';
import loadingTickets from './LoadingTicketsReducer';
import selectedColumn from './SelectedColumnReducer';
import sortDirection from './SortDirectionReducer';
import initDate from './InitDateReducer';
import endDate from './EndDateReducer';

export default combineReducers({
  tickets, pageNumber, loadingTickets, selectedColumn, sortDirection, initDate, endDate
});
