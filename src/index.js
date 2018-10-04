import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStorer(reducer)


ReactDOM.render(
  <Procider store={store}>
    <App />,
  </Procider>,
  document.getElementById('root')
);
registerServiceWorker();
