import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Link , IndexLink} from 'react-router'

export default class AddRemEd extends React.Component{
	render(){
		return(
			<div>
				<h2>Add/Remove/Edit Questions</h2>
				<div className = "btn-wrapper">
				  <button className="btn btn-success btn-text"><Link to="admin/addremed/add" activeClassName="active">
				    <span className="glyphicon glyphicon-plus"> </span> Add Question </Link>
				  </button>
				  <button className="btn btn-danger btn-text"><Link to="admin/addremed/remove" activeClassName="active">
				    <span className="glyphicon glyphicon-trash"> </span> Remove Question </Link>
				  </button>
				  <button className="btn btn-info btn-text"><Link to="admin/addremed/edit" activeClassName="active">
				    <span className="glyphicon glyphicon-pencil"> </span> Edit Questions </Link>
				  </button>
				</div>
			</div>
			);
	}
}