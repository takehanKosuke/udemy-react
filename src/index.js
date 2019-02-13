import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import reducer from './reducers'
import ArticlesIndex from './components/articles_index';
import ArticlesNew from './components/articles_new';
import ArticlesShow from './components/articles_show';
import registerServiceWorker from './registerServiceWorker';

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path ="/articles/new" component={ArticlesNew} />
          <Route path ="/articles/:id" component={ArticlesShow} />
          <Route exact path="/" component={ArticlesIndex} />
          <Route exact path="/articles" component={ArticlesShow} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
