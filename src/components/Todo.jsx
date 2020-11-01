import React, { useState } from "react";
import firebase from "firebase";
import { FaEdit, FaCalendarTimes, FaTrashAlt, FaSave } from "react-icons/fa";
import db from "../firebase";
import DelModal from "./DelModal";
import { connect } from "react-redux";

const Todo = (props) => {
  const [expand, setExpand] = useState(false);
  const [value, setValue] = useState(props.todo.task);
  const [del, setDel] = useState(false);
  const [complete, setComplete] = useState(false);
  const disp = del ? "block" : "none";
  const handleDelBtn = () => {
    setDel(!del);
  };
  const handleEdit = (evt) => {
    evt.preventDefault();
    db.collection("todos").doc(props.todo.id).set(
      {
        task: value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    setExpand(false);
  };
  const handleArchive = () => {
    db.collection("todos").doc(props.todo.id).delete();
    db.collection("archive").add({
      task: props.todo.task,
      userId: props.user,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  const todoItem = expand ? (
    <form>
      <div className="form-top">
        <input
          type="text"
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
        <div className="schedule-btn">
          <FaSave /> Today
        </div>
      </div>
      <div className="form-bottom">
        <button className="add-btn" onClick={handleEdit}>
          Edit Task
        </button>
        <button className="cancel-btn" onClick={() => setExpand(false)}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <li>
      <div className="todo">
        <input type="checkbox" onClick={() => setComplete(true)} />{" "}
        {props.todo.task}
        <div className="icons">
          <div onClick={() => setExpand(true)}>
            <FaEdit />
          </div>

          <div onClick={handleDelBtn}>
            <FaTrashAlt />
          </div>
        </div>
      </div>
      <div className="date">
        <FaCalendarTimes /> {props.todo.day}
      </div>
    </li>
  );

  return (
    <>
      {complete ? (
        <div className="completed">
          <p className="header">Completed Task</p>
          <h4>{props.todo.task}</h4>
          <div className="btns">
            <p className="undo" onClick={() => setComplete(false)}>
              Undo
            </p>
            <p className="archive" onClick={handleArchive}>
              Archive
            </p>
            <p
              className="hide"
              onClick={() => db.collection("todos").doc(props.todo.id).delete()}
            >
              Hide
            </p>
          </div>
        </div>
      ) : (
        todoItem
      )}
      <DelModal
        style={disp}
        id={props.todo.id}
        text={props.todo.task}
        closeDel={handleDelBtn}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Todo);
