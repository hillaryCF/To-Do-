import React, { Component } from 'react';
import '../board.css';
// import Button from '../components/button';
import Modal from "../components/modal";

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      taskName: '',
      deadline: '',
      time: '',
      taskDescription: '',
      show: false
    }
  }

  handleTaskNameChange = (event) => {
    this.setState({
      taskName: event.target.value
    })
  }

  handleDeadlineChange = (event) => {
    this.setState({
      deadline: event.target.value
    })
  }

  handleTimeChange = (event) => {
    this.setState({
      time: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      time: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.taskName);
    alert(this.state.taskName);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <form  className="form">

        <label className="form__label">task name *</label>
        <textarea value={this.state.taskName} onChange={this.handleTaskNameChange} className="form__input" />

        <label className="form__label" for="deadline">deadline *</label>
        <input type="date" name="deadline" className="form__time" onChange={this.handleDeadlineChange}></input>

        <label className="form__label">time *</label>
        <input type="time" name="form__date" className="form__time" onChange={this.handleTimeChange}></input>

        <label className="form__label">task description *</label>
        <textarea className="form__input form__input--height" onChange={this.handleDescriptionChange} />

        <Modal show={this.state.show} modalClose={this.hideModal} modalSubmit={this.handleSubmit}></Modal>
        <button type="button" onClick={this.showModal} className="form__btn">
          create to do
        </button>

      </form>
    )
  }
}

export default Form;