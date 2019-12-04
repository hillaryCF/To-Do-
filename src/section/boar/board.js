import React from 'react';
import './board.css';
// import Button from '../components/button';
import Modal from "../../components/modal/modal";

// class Form extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       taskName: '',
//       deadline: '',
//       time: '',
//       taskDescription: '',
//       show: false
//     }
//    this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // handleTaskNameChange = (event) => {
//   //   this.setState({
//   //     taskName: event.target.value
//   //   })
//   // }

//   // handleDeadlineChange = (event) => {
//   //   this.setState({
//   //     deadline: event.target.value
//   //   })
//   // }

//   // handleTimeChange = (event) => {
//   //   this.setState({
//   //     time: event.target.value
//   //   })
//   // }

//   // handleDescriptionChange = (event) => {
//   //   this.setState({
//   //     time: event.target.value
//   //   })
//   // }

//   // handleSubmit = event => {
//   //   event.preventDefault();
//   //   // console.log(this.state.taskName);
//   //   alert(this.state.taskName);
//   // }
//   handleChange(event) {
//     this.setState({taskName: event.target.taskName});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.taskName);
//     event.preventDefault();
//   }

//   showModal = () => {
//     this.setState({ show: true });
//   };

//   hideModal = () => {
//     this.setState({ show: false });
//   };

//   render() {
//     return (
//       <form  className="form">

//         <label className="form__label">task name *</label>
//         <input type="text" value={this.state.taskName} onChange={this.handleChange} className="form__input"></input>

//         <label className="form__label" for="deadline">deadline *</label>
//         <input type="date" name="deadline" className="form__time" onChange={this.handleDeadlineChange} value=""></input>

//         <label className="form__label">time *</label>
//         <input type="time" name="form__date" className="form__time" onChange={this.handleTimeChange}></input>

//         <label className="form__label">task description *</label>
//         <textarea className="form__input form__input--height" onChange={this.handleDescriptionChange} />

//         <Modal show={this.state.show} modalClose={this.hideModal} modalSubmit={this.handleSubmit}></Modal>
//         <button type="button" onClick={this.showModal} className="form__btn">
//           create to do
//         </button>

//       </form>
//     )
//   }
// }

// export default Form;



class Form extends React.Component {
  state = {
    taskName: '',
    deadline: '',
    time: '',
    taskDescription: '',
    dataTask:[],
  }

  handleName(e) { this.setState({ taskName: e.target.value }) }
  handledeadline(e) { this.setState({ deadline: e.target.value }) }
  handletime(e) { this.setState({ time: e.target.value }) }
  handledescription(e) { this.setState({ taskDescription: e.target.value }) }


  showModal = () => {
    this.setState({ show: true });
    const {dataTask} = this.state;
    const taskName = this.state.taskName
    const deadline = this.state.deadline
    const time =  this.state.time
    const taskDescription = this.state.taskDescription
    dataTask.push(taskName,deadline,time,taskDescription)
    localStorage.setItem('dataTask', JSON.stringify(dataTask))
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="form">
        <label className="form__label">
          {'task name *'}
          <input type="text" name="name" onChange={(e) => this.handleName(e)} className="form__input" />
        </label>
        <label className="form__label">
          {'deadline * '}
          <input type="date" name="name" onChange={(e) => this.handledeadline(e)} className="form__input" />
        </label>
        <label className="form__label">
          {'time * '}
          <input type="time" name="name" onChange={(e) => this.handletime(e)} className="form__input" />
        </label>
        <label className="form__label">
          {'task description * '}
          <textarea type="text" name="name" onChange={(e) => this.handledescription(e)} className="form__input" />
        </label>
        <Modal show={this.state.show} modalClose={this.hideModal} modalSubmit={this.handleSubmit}></Modal>
        <input type="submit" value="crear to do" className="form__btn" onClick={() => this.showModal()} />
      </div>
    )
  }
}

export default Form;