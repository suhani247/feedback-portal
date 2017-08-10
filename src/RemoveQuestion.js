import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Link , IndexLink} from 'react-router'

export default class RemoveQuestion extends React.Component{
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

	handleClick(id,index){
		swal({
			title: "Are you sure you want to delete this question?",
			text : "This question cannot be recovered at a later point.",
			type : "warning",
			showCancelButton : true,
			confirmButtonColor: "#DD6B55",
  			confirmButtonText: "Yes, delete it!",
 			closeOnConfirm: false
		},
		function(){
			swal({
				title : "Deleted",
				text : "Your question has been deleted.",
				type : "success"
			}, function(){
				window.location.reload();
			});
		});
	}

	render(){
		return(
				<div>
					<h2> Remove Questions from database </h2>
					<table className="table">
					<thead>
					<tr>
					<th> S.No  </th>
					<th> Question </th>
					<th> Remove </th>
					</tr>
					</thead>
					<tbody>
					    {this.state.questionList.map((obj,index) => {
							return (
									<tr key={obj.id}>
									 <td> {index+1} </td>
									 <td> {obj.question} </td>
									 <td> <button className="btn btn-danger" onClick={this.handleClick.bind(this,obj.id,index)}> <span className="glyphicon glyphicon-trash"> </span></button> </td>
									</tr>
						)})}
					</tbody>
					</table>
				</div>	
			);}
}