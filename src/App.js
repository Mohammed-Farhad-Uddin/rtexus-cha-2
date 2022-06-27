import React from 'react';
import './App.css';
import Appointments from './components/Appointments';
import Boxes from './components/Boxes';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import ToDoList from './components/ToDoList';
import Updates from './components/Updates';




function App() {
  return (

    <div className="d-flex">
      <div className="col-1">
        <Sidebar />
      </div>
      <div className="col-6 me-5"  >
        <h2 className="mb-5">Home</h2>
        <Home />
        <Boxes />
        <ToDoList />
      </div>
      <div className="col-3 ms-5" >
        <Appointments />
        <Updates />
      </div>
    </div>

  );
}

export default App;
