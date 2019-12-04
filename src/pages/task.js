import React from 'react';
import Sidebar from '../section/sidebar/sidebar'
import AllTask from '../section/alltask/alltask'

function Task() {
  return (
    <React.Fragment>
      <Sidebar/>
      <AllTask/>
    </React.Fragment>
  );
}

export default Task;