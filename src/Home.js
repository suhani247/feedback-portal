import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Link , IndexLink} from 'react-router'

export default class Home extends React.Component{
	render(){
		return(
			<div className="home-container">
				<h2>Welcome to Digital & Engineering Services Feedback Portal</h2>
				<div className = "btn-wrapper">
				  <button className="btn btn-info btn-text"><Link to="/home/feedback" activeClassName="active">
				    <span className="glyphicon glyphicon-edit"> </span> Start Feedback </Link>
				  </button>
				</div>
			</div>
			);
	}
}