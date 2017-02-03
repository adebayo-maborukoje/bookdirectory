import React, { PropTypes , Component} from 'react';

const CreateBook = () => {
  return (
    <form>
      <h2>Book Information </h2>
      <input 
        name="Title"
        type="text"
        placeholder="Enter Book Title"
      />
      <input 
        name="Authors"
        type="text"
        placeholder="Enter Book Authors"
      />
    </form>
  );
};

export default createBook;