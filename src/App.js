import React, { useState } from 'react';
import './App.css';
import Appointments from './components/Appointments';
import Boxes from './components/Boxes';
import Heading from './components/Heading';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import ToDoList from './components/ToDoList';
import Updates from './components/Updates';




function App() {
  const [dark,setDark]=useState(false);
  const [sideBar, setSideBar] = useState(false);

  return (
    <div style={{background: `${!dark?"#FAF9F6":"black"}`, width: "1512px"}} className="d-flex">
      <div className="me-5">
        <Sidebar sideBar={sideBar} setSideBar={setSideBar} dark={dark} />
      </div>
      <div className= "pt-3"  style={{marginRight: `${sideBar?"20px":"150px"}`}}  >
        <h2 className="mt-3" style={{ color: `${dark ? "#FFFFFF":"black"}` }}>Home</h2>
        <Home />
        <Boxes dark={dark} />
        <ToDoList dark={dark} />
      </div>
      <div className="pt-3" >
        <Heading setDark={setDark} dark={dark}/>
        <Appointments dark={dark} />
        <Updates dark={dark}/>
      </div>
    </div>

  );
}

export default App;
