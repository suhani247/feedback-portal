import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Link , IndexLink} from 'react-router'

export default class AddQuestion extends React.Component{
	
	handleClick(e){
		e.preventDefault();
		
		var newQues = document.getElementById('ques').value;
		if(newQues=='')
			swal("Sorry","Please add a question first","error");
		else{
			this.setState({question : newQues});
			$.ajax({
				url : 'http://localhost:8080/addQuestion?quesText='+newQues,
				method : "POST",
				success : function(data) {
					
						swal({
						title : "Added",
						text : "Your question "+ newQues + " has been added succesfully!",
						type : "success"},
						function(){
							window.location.reload();
						});
				
				}.bind(this),

				error : function (jqXHR, exception){
					swal({
						title : jqXHR.status,
						text : exception,
						type : "error"},
						function(){
							window.location.reload();
						});
				}.bind(this)
			});
		}
	}

	render(){
		return(
			<div>
				<h2>Add Question</h2>
				<form className="form-horizontal">
					<label htmlFor="ques" className="col-sm-2"> Question : </label>
					<textarea  id="ques" placeholder="New Question" className="col-sm-8" style={{color : 'black'}}/>
					<div className="btn-wrapper">
					<button className="btn btn-success btn-text" type="submit" style={{marginTop : '20px'}} onClick={this.handleClick.bind(this)}>
						<span className="glyphicon glyphicon-plus"> </span> Add Question 
				  </button>
				  <button className="btn btn-info btn-text" type="reset" style={{marginTop : '20px'}}> <span className="glyphicon glyphicon-refresh"> </span> Reset </button>
				  </div>
				</form>
				
			</div>
			);
	}
}