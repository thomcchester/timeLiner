var React=require('react')
import {Route, IndexRedirect, Link} from 'react-router';
import App from './App';
import Home from './components/Main/Home/Home';
import alt from './alt';
import request from 'superagent';
import SignIn from './components/Main/SignIn/SignIn'



export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/SignIn' component={SignIn} />
  </Route>
);
