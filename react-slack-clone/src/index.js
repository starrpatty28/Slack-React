import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Auth/Register';

//house my routes in a stateless functional component
const Root = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
)


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
