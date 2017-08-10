import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './src/App'
import Feedback from './src/Feedback'
import Home from './src/Home'
import AdminHome from './src/AdminHome'
import AddRemEd from './src/AddRemEd'
import AddQuestion from './src/AddQuestion'
import RemoveQuestion from './src/RemoveQuestion'
import EditQuestion from './src/EditQuestion'
 
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/home/feedback" component={Feedback}/>
    <Route path="admin" component={AdminHome}/>
    <Route path="admin/addremed" component={AddRemEd}/>
    <Route path="admin/addremed/add" component={AddQuestion}/>
    <Route path="admin/addremed/remove" component={RemoveQuestion}/>
    <Route path="admin/addremed/edit" component={EditQuestion}/>
    </Route>
  </Router>,
  document.getElementById('root')
);