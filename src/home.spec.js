import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import {Home, Post} from './home';

describe('Home page', () => {
  it('should render the posts', () => {
    const posts = [{"id": "123"}];
    const wrapper = shallow(<Home posts={posts}/>);
    expect(wrapper.find(Post)).to.have.length(1);
  });
});
