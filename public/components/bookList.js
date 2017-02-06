import React, { PropTypes } from 'react';
import BookListRow from './bookListRow';

const BookList = ({books}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Authors </th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => 
          <BookListRow key={book.id} book={book}/>
        )}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;