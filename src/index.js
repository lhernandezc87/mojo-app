import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import history from './history';
import TicketsDashboard from './components/TicketsDashboard';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
  	localStorage.getItem("user") && localStorage.getItem("password") 
  	? <Component {...props} />
  	: <Redirect to='/' />
  )}/>
)

const Appi = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path='/tickets' component={TicketsDashboard}/>
      <Route exact path='/' component={TicketsDashboard} />
    </Switch>
  </Router>
)


ReactDOM.render(
  <Provider store={store}>
	  <Appi />
  </Provider>, document.getElementById('root')	
);
registerServiceWorker();
