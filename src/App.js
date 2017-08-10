import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Link , IndexLink} from 'react-router'

export default class App extends React.Component{
	render(){
	 return(
	 	<div >
	 		<div>
		 	<h1 className="header"> Feedback Portal</h1>
		 	</div>
		 	<ul className= "outer-list"> 
			 	<li className="list"><IndexLink to="/" activeClassName="active"> Home </IndexLink></li>
			 	<li className="list"><Link to="admin" activeClassName="active"> Admin Portal </Link></li>
		 	</ul>
		 	<div>
          		{this.props.children}
        	</div>
	 	</div>
	 );
	}
}