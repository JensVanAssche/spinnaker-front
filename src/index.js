import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from './utils/promiseMiddleware';
import rootReducer from './rootReducer';
import ScrollToTop from './utils/ScrollToTop';
import App from './app/App';
import * as serviceWorker from './utils/serviceWorker';
import './style.scss';

const reduxDevTools =
  window.navigator.userAgent.includes('Chrome') &&
  window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
    ? window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
    : compose;

const middleWare = [ReduxThunk, promiseMiddleware()];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWare),
    reduxDevTools,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
