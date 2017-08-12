/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
	  <App />
        </BrowserRouter>, 
	document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
