import React, { PropTypes , Component} from 'react';
import connect from 'react-redux';
import CreateBook from './createBooksPage';

class Books extends Component {
  contructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h2>Books</h2>
        <CreateBook />
      </div>
    );
  }
};

function mapStateToProps () {
console.log('this will match the state to the props');
}
export default connect(mapStateToProps)(Books);