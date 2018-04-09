import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { Router, Switch, Route } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import history from './history';
import TicketsDashboard from './components/TicketsDashboard';
import TicketInformation from './components/ticketInformation/TicketInformation';

const Appi = () => (
  <Router history={history}>
    <Switch>
      <Route 
        exact path='/' 
        component={TicketsDashboard} 
      />
      <Route
         exact path='/ticket/:id' 
         component={TicketInformation}
      />      
    </Switch>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
	  <Appi />
  </Provider>, document.getElementById('root')	
);
registerServiceWorker();
