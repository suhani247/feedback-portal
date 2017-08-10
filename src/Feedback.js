import React, { Component } from 'react';
import $ from 'jquery';
import QuestionDisplay from './QuestionDisplay.js';

export default class Feedback extends React.Component{

		constructor(props){
			super(props);
			this.state={ questionList : [], title: ''}
		}

		componentDidMount(){
		
			$.ajax({
				url : 'http://localhost:8080/questions',
				dataType : 'json',
				success : function(data) {
					
					this.setState({title: data.title, questionList: data.questionList})
				}.bind(this)
			});
		}

		handleClick(index,newRating){
			
			var questions = this.state.questionList;
			questions[index].rating = newRating;
			this.setState({questionList : questions})
		}

		handleSubmit(e){
			e.preventDefault();
			for(var i = 0 ; i<this.state.questionList.length;i++){
				if(this.state.questionList[i].rating == 0){
					swal("Can't Submit","Please answer all questions","error");
					return;
					
				}
				else
					console.log("Index : " + (i+1) +  " rating : "  + this.state.questionList[i].rating);
			}

			swal({
				title : "Thank You!",
				text : "Your feedback has been recorded.",
				type : "success"},
				function(){
					window.location.href = "/home";
				});
		}
		
		render(){
			return(
					<div>
						<h2> {this.state.title} </h2>
						<form>
						<div>{this.state.questionList.map((obj,index) => {
							return (
									<div key={obj.id}>
									 <QuestionDisplay index={index}
													 text={obj.question}
													 rating={obj.rating} 
													 id= {obj.id}
													 handleClick ={this.handleClick.bind(this)}/>
									<hr/>
									</div>
						)})}</div>
						<div className="btn-wrapper"><button onClick = {this.handleSubmit.bind(this)} className="btn btn-success btn-lg" type="submit"> Submit </button></div>
						</form>
					</div>
				)
		}
}