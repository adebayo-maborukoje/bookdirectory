import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as bookActions from '../../actions/bookAction';
import BookList from '../../components/bookList';
import { browserHistory } from 'react-router';

class BookPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddBookPage = this.redirectToAddBookPage.bind(this);
  }

  bookRow(book, index) {
    return <div key={index}> {book.title}</div>;
  }
  redirectToAddBookPage() {
    browserHistory.push('/book');
  }
  render () {
    const { books } = this.props;
    return (
      <div>
        <h1>Book</h1>
        <input 
          type="submit"
          value="Add Book"
          className="btn btn-primary"
          onClick={this.redirectToAddBookPage   }
          />
        <BookList books={books} />
        
      </div>
    );
  }
}

BookPage.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
} 
export default connect(mapStateToProps, mapDispatchToProps)(BookPage);