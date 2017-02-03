import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '.container/App';
//import BooksPage from './container/books/bookPage'


export default(
  <Route path="/" component={App}>
    <IndexRoute />
  </Route>
)