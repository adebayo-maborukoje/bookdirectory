import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../../actions/bookAction';
import BookForm from '../../components/bookForm';

export class ManageBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: Object.assign({}, props.book),
      error: {},
      saving: false
    };
    this.updateBookState = this.updateBookState.bind(this);
    this.saveBook = this.saveBook.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.book.id !== nextProps.book.id) {
      this.setState({book: Object.assign({}, nextProps.book)});
    };
  }
  updateBookState(e) {
    const field = e.target.name;
    let book = this.state.book;
    book[field] = e.target.value;
    return this.setState({book: book});
  }

  formisValid() {
    let isValid = true;
    let errors = {};

    if (this.state.book.title.length < 5 ) {
      errors.title = "Title must be at least 5 characters";
      isValid = false;
    };
    this.setState({errors: errors});
    return isValid;
  }

  saveBook(e) {
    e.preventDefault();
    if (!this.formisValid()) {
      return;
    }
      
    this.setState({saving:  true});
    this.props.actions.saveBook(this.state.book)
      .then(()=> {
        this.redirect();
      })
      .catch(error => {
        this.setState({saving: false});
  
      });
  }

  redirect() {
    this.setState({saving: false});
    return this.context.router.push('/');
  }

  render(){
    return (
      <BookForm 
        onChange={this.updateBookState}
        book={this.state.book}
        errors={this.state.error}
        onSave={this.saveBook}
        saving={this.state.saving}
      />
    );
  }
}

ManageBookPage.propTypes = {
  book: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageBookPage.contextTypes = {
  router: PropTypes.object
};

function getBookById(books, id) {
  const book = books.filter(book => book.id === id);
  if (book) return book[0];
  return null;
}
function mapStateToProps(state, ownProps) {
  const bookId = ownProps.params.id;
  let book;
  book = {id: '', title:'', category: '', author: ''};
  if (bookId && state.books.length > 0) {
    book = getBookById(state.books, bookId);
  }

  return {
    book: book
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookPage);