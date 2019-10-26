import React from "react";
import '../sidebar.css';
import '../app.css';

const Sidebar = () => (
  <div className="sidebar">
    <h2 className="sidebar__title">to do list</h2>
    <ul>
      <li><a href="" className="active">Create New Task</a> </li>
      <li><a href="">All Tasks</a></li>
      <li><a href="">Pending Task</a></li>
      <li><a href="">Completed Task</a></li>
    </ul>
    <div className="sidebar__wave"></div>
    <div className="sidebar__wave2"></div>
  </div>
)

export default Sidebar
