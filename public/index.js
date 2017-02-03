import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import routes from './route';
import { loadCourses } from './actions/courseAction';
import {loadAuthors} from './actions/authorAction';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const store = configureStore();
store.dispatch(loadBooks());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('react-app')
)