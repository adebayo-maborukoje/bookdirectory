import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import BookPage from './containers/books/bookPage';
import ManageBookPage from './containers/books/manageBookPage';

export default (
  <Route path="/" component={App}> 
    <IndexRoute component={BookPage}/>
    <Route path="/book" component={ManageBookPage}/>
    <Route path="/book/:id" component={ManageBookPage}/>
  </Route>
);