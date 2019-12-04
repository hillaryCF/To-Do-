import React, { Component } from 'react'
import TaskInfo from '../../components/taskInf/taskInf'

const tasklist = JSON.parse( localStorage.getItem('dataTask'));
console.log(tasklist)
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
				<TaskInfo infoTask={tasklist}/>
				
			</React.Fragment>
			)
		}
	}
}

export default Task;




