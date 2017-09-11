import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import PostForm from './post-form';

describe('Post page', () => {
  it('should render author field for a post', () => {
    const wrapper = shallow(<PostForm />);
    expect(wrapper.find('#author')).to.have.length(1);
    expect(wrapper.find('#author-label')).to.have.length(1);
  });

  it('should render title field for a post', () => {
    const wrapper = shallow(<PostForm />);
    expect(wrapper.find('#title')).to.have.length(1);
    expect(wrapper.find('#title-label')).to.have.length(1);
  });

  it('should render post field for a post', () => {
    const wrapper = shallow(<PostForm />);
    expect(wrapper.find('#post')).to.have.length(1);
    expect(wrapper.find('#post-label')).to.have.length(1);
  });

  xit('should submit values added to the field', () => {
    const wrapper = shallow(<PostForm />);

    wrapper.find('#author').node.value = 'Roselma Mendes';


  });
});
