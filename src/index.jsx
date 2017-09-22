import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './home.jsx';
import PostForm from './post-form.jsx';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

const style = {
  menu: {
    listStyleType: 'none',
    backgroundColor: 'hotpink',
    borderRadius: 5,
    color: 'white',
    marginTop: 0,
    marginBottom: 0
  },
  menuItem: {
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
      <ul style={style.menu}>
         <li style={style.menuItem}><Link style={style.compA} to="/">Home</Link></li>
       </ul>

       <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/postform" component={PostForm}/>
       </Switch>

    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
