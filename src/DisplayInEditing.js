import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Link , IndexLink} from 'react-router'

export default class DisplayInEditing extends React.Component{
	constructor(props){
		super(props);
		this.state = { editing : false , changedText : this.props.text , id: this.props.id};
	}

	handleDoubleClick(){
		this.setState({editing : true});
	}

	handleEditChange(event){
		this.setState({changedText : event.target.value});
	}

	handleEditDone(event){
		if(event.keyCode === 13){
			this.setState({editing : false , changedText : event.target.value});
			
		}
	}

	render(){
		var viewStyle = {}, editStyle = {color : 'black', width : '100%'} ;
		if(this.state.editing == false)
			editStyle.display = 'none';
		else
			viewStyle.display = 'none';
		return(
			<div>
			<div className="ques-text" style={viewStyle} onDoubleClick={this.handleDoubleClick.bind(this)}>
				{this.state.changedText}
			</div>
				<input className="ques-text" style={editStyle} value={this.state.changedText} onChange={this.handleEditChange.bind(this)} onKeyDown={this.handleEditDone.bind(this)}/>

			</div>
		);}

}