import React from 'react';
import './ToDoList.css';
import check from '../images/Icon_Vector_Check.png';
import uncheck from '../images/Icon_Vector_Uncheck.png';

const ToDoList = () => {
    return (
        <div className="todo-main">
            <h5>To Do List</h5>
            <div className="d-flex">
                <div className="area"> </div>
                <button className="add-btn"> <img src={check} alt="" /> <span>Add</span></button>
            </div>
            <div className="todo-select-all">

                <img className="uncheck" src={uncheck} alt="" />
                <h5>Select All</h5>

                <button className="done-btn"> <img src={check} alt="" /> <span>Done</span></button>
            </div>
            <div className="d-flex mb-3">
                <img className="check" src={check} alt="" />
                <p className="select-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum?</p>
                <p className="select-date">Last Added: 10 sep 2022</p>
            </div>
            <div className="d-flex mb-3">
                <img className="check" src={uncheck} alt="" />
                <p className="select-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum?</p>
                <p className="select-date">Last Added: 10 sep 2022</p>
            </div>
            <div className="d-flex mb-3">
                <img className="check" src={uncheck} alt="" />
                <p className="select-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum?</p>
                <p className="select-date">Last Added: 10 sep 2022</p>
            </div>
            <div className="d-flex mb-3">
                <img className="check" src={uncheck} alt="" />
                <p className="select-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum?</p>
                <p className="select-date">Last Added: 10 sep 2022</p>
            </div>
        </div>
    );
};

export default ToDoList;