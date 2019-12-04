import React, { Component } from 'react'
import TaskInfo from '../../components/taskInf/taskInf'

const tasklist = JSON.parse( localStorage.getItem('dataTask'));

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}	
	}
	render() {
		if (tasklist == null) {
			return <p>you have not added any homework yet</p>;
		} else {
			return (
			<React.Fragment>
				{tasklist.map(e => (
					<TaskInfo  title={e.taskName} description={`Description: ${e.taskDescription}`} deadline= {`Deadline: ${e.deadline}`} time={`Time: ${e.time}`}/>
				))}
			</React.Fragment>
			)
		}
	}
}

export default Task;




