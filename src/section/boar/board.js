import React from 'react';
import './board.css';
import Modal from "../../components/modal/modal";

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
    dataTask.push({taskName,deadline,time,taskDescription})
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