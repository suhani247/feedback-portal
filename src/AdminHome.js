import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Link , IndexLink} from 'react-router'

export default class AdminHome extends React.Component{
	render(){
		return(
			<div className="home-container">
				<h2>Hello Admin</h2>
				<div className = "btn-wrapper">
				  <button className="btn btn-info btn-text"><Link to="admin/addremed" activeClassName="active">
				    <span className="glyphicon glyphicon-edit"> </span> Add/Remove/Edit Questions </Link>
				  </button>
				  <button className="btn btn-info btn-text"><Link to="/home/feedback" activeClassName="active">
				    <span className="glyphicon glyphicon-list-alt"> </span> View Feedback Analysis </Link>
				  </button>
				</div>
			</div>
			);
	}
}