import React from "react";
import { NavLink } from 'react-router-dom'
import './sidebar.css';
import '../../app.css';

const Sidebar = () => (
  <div className="sidebar">
    <h2 className="sidebar__title">to do list</h2>
    <ul>
      <li><NavLink to="/" className="active">Create New Task</NavLink> </li>
      <li><NavLink to="/task">All Tasks</NavLink></li>
      <li><NavLink to="/pending-task">Pending Task</NavLink></li>
      <li><NavLink to="/completed-task">Completed Task</NavLink></li>
    </ul>
    <div className="sidebar__wave"></div>
    <div className="sidebar__wave2"></div>
  </div>
)

export default Sidebar
