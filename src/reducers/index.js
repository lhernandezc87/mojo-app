import {combineReducers} from 'redux';

import tickets from './TicketsReducer';
import pageNumber from './PageNumberReducer';

export default combineReducers({
  tickets, pageNumber
});
