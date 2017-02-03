import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {ManageBook} from '../public/containers/books/manageBookPage';

describe('Manage Book Page', () => {
  // it('sets error message when trying to save empty title', () => {
  //   const props = {
  //     authors: [],
  //     actions: { saveBook: () => {return Promise.resolve(); }},
  //     book: {id: '', title: '', author: '', category: ''}
  //   };
  //   const wrapper = mount(<ManageBook {...props}/>);
  //   const saveButton = wrapper.find('input').last();
  //   expect(saveButton.prop('type')).toBe('submit');
  //   saveButton.simulate('click');
  //   expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
  //});
});