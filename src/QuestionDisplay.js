import React, { Component } from 'react';
import $ from 'jquery';
import ReactStars from 'react-stars';

export default class QuestionDisplay extends React.Component{
	constructor(props){
		super(props);
		this.state={
			index : this.props.index,
			rating : this.props.rating
		}
	}
	handleClick(newRating){
		var index = this.state.index;
		this.setState({rating : newRating});
		this.props.handleClick(index,newRating);
		}
		
		
			
	
	render(){
		return <div>
					<div className="row-content">
					<div className="ques-text">Q {this.props.index + 1} </div>
					<div className="ques-text"> {this.props.text} </div>
					<div className= "display-rating">
					<ReactStars count={5} size={50} color2={'yellow'} half={false} onChange={this.handleClick.bind(this)} value={this.state.rating} />
					</div>
					</div>
			   </div>
	}
}