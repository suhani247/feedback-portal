import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {Link , IndexLink} from 'react-router'
import DisplayInEditing from './DisplayInEditing.js'

export default class EditQuestion extends React.Component{
	constructor(props){
			super(props);
			this.state={ questionList : [], title: '', editing : null}
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

	render(){
		return(
				<div>
					<h2> Edit Questions </h2>
					<p style={{fontSize : '15px' , color : 'grey', textAlign : 'right'}}> *Double click on a question to edit it & press enter to save 
					</p>
					<ul>
					{this.state.questionList.map((obj,index) => {
							return (
									<li key={obj.id}> 
										<DisplayInEditing text={obj.question}
														   id={obj.id}
														   index={index}/>
									</li> 
						)})}
					
				</ul>
				</div>	
		);}

}