import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import PostForm from './post-form';

describe('Post page', () => {
  it('should receive an author and title for the post', () => {
    const wrapper = shallow(<PostForm />);
    expect(wrapper.find('input')).to.have.length(2);
    expect(wrapper.find('label')).to.have.length(2);
  });
});
