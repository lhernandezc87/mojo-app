import {combineReducers} from 'redux';

import tickets from './TicketsReducer';
import pageNumber from './PageNumberReducer';
import loadingTickets from './LoadingTicketsReducer';
import selectedColumn from './SelectedColumnReducer';
import sortDirection from './SortDirectionReducer';

export default combineReducers({
  tickets, pageNumber, loadingTickets, selectedColumn, sortDirection
});
