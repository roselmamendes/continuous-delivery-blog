import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './home.jsx';
import PostForm from './post-form.jsx';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

const style = {
  lista: {
    listStyleType: 'none',
    backgroundColor: 'hotpink',
    width: 200,
    borderRadius: 5,
    color: 'white'
  },
  menu: {
    marginRight: 10,
    float: 'left'
  },
  compA:{
    textDecoration: 'none',
    color: 'inherit'
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul style={style.lista}>
         <li style={style.menu}><Link style={style.compA} to="/">Home</Link></li>
         <li><Link style={style.compA} to="/postform">Add a post</Link></li>
       </ul>

       <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/postform" component={PostForm}/>
       </Switch>

    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
