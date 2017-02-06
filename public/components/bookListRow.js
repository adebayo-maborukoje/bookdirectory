import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const BookListRow = ({book}) => {

let author;
if (typeof book.author === 'object') {
  author = book.author.toString().replace(",",", ")
} else {
  author = book.author;
}

 return(
    <tr>
        <td><Link to={'/book/'+ book.id}>{book.title}</Link></td>
        <td>{author}</td>
        <td>{book.category}</td>
      </tr>
 );
};
BookListRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookListRow;