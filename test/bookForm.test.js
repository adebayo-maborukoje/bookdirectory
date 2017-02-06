import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import BookForm from '../public/components/bookForm';

function setup(saving) {
  const props = {
    book : {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  return shallow(<BookForm {...props}/>);
}

describe('bookForm Test', () => {
  it('should render from and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Book');
  });
  it('should set save button to Save when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });
  it('should set save button to Save when not saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
})