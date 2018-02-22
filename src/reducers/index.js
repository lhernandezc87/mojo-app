import {combineReducers} from 'redux';

import tickets from './TicketsReducer';
import pageNumber from './PageNumberReducer';
import loadingTickets from './LoadingTicketsReducer';

export default combineReducers({
  tickets, pageNumber, loadingTickets
});
