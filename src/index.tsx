import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import { store } from './store';

ReactDOM.render((
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>), document.getElementById('root'));