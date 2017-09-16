import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import {Home, Post} from './home';

describe('Home page', () => {
  it('should render the posts', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Post)).to.have.length(2);
  });

  it('component Post should render the posts with title', () => {
    const post = {"id": "123", "title": "Some title"};
    const wrapper = shallow(<Post key="1" post={post}/>);

    expect(wrapper.text()).to.contain("Some title");
  });

});
