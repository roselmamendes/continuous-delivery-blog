import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './home.jsx';
import PostForm from './post-form.jsx';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/postform">Add a post</Link></li>
       </ul>

       <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/postform" component={PostForm}/>
       </Switch>

    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
