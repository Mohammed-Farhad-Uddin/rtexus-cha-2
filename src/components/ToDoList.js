import React from 'react';
import './ToDoList.css';
import check from '../images/Icon_Vector_Check.png';
import uncheck from '../images/Icon_Vector_Uncheck.png';
import uncheckDark from '../images-dark/Icon_Vector_Uncheck.png';

const ToDoList = ({ dark }) => {
    return (
        <div className="todo-main" style={{ background: `${!dark ? "#FFFFFF" : "rgba(255, 255, 255, 0.1)"}`,borderColor:`${dark? "rgba(255, 255, 255, 0)" :"#EDEBEB"}` }}>
            <h5 style={{ color: `${!dark ? "#2E1619" : "#D1D5DB"}` }}>To Do List</h5>
            <div className="d-flex">
                <div className="area" style={{ background: `${!dark ? "#FFFFFF" : "rgba(255, 255, 255, 0.5)"}` }}> </div>
                <button className="add-btn"> <img src={check} alt="" /> <span>Add</span></button>
            </div>
            <div className="todo-select-all">

                {dark ? <img className="uncheck" src={uncheckDark} alt="" /> : <img className="uncheck" src={uncheck} alt="" />}
                <h5 style={{ color: `${!dark ? "#2E1619" : "#D1D5DB"}` }}>Select All</h5>

                <button className="done-btn"> <img src={check} alt="" /> <span>Done</span></button>
            </div>
            <div className="d-flex mb-3">
                <img className="check" src={check} alt="" />
                <p className="select-title" style={{ color: `${!dark ? "#2E1619" : "#D1D5DB"}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum?</p>
                <p className="select-date">Last Added: 10 sep 2022</p>
            </div>
            <div className="d-flex mb-3">
                {dark ? <img className="check" src={uncheckDark} alt="" /> : <img className="check" src={uncheck} alt="" />}
                <p className="select-title" style={{ color: `${!dark ? "#2E1619" : "#D1D5DB"}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum?</p>
                <p className="select-date">Last Added: 10 sep 2022</p>
            </div>
            <div className="d-flex mb-3">
                {dark ? <img className="check" src={uncheckDark} alt="" /> : <img className="check" src={uncheck} alt="" />}
                <p className="select-title" style={{ color: `${!dark ? "#2E1619" : "#D1D5DB"}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum?</p>
                <p className="select-date">Last Added: 10 sep 2022</p>
            </div>
            <div className="d-flex mb-3">
                {dark ? <img className="check" src={uncheckDark} alt="" /> : <img className="check" src={uncheck} alt="" />}
                <p className="select-title" style={{ color: `${!dark ? "#2E1619" : "#D1D5DB"}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum?</p>
                <p className="select-date">Last Added: 10 sep 2022</p>
            </div>
        </div>
    );
};

export default ToDoList;