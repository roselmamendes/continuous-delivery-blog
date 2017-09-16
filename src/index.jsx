import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './home.jsx';

const posts = [
  {'title': 'some title', 'id': '1'},
  {'title': 'some title 2', 'id': '2'},
];

ReactDOM.render(
  <Home posts={posts} />,
  document.getElementById('root')
);
