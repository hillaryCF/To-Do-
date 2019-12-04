import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Task from './pages/task'
import './app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Home} exact/>
          <Route path={"/task"} component={Task}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
