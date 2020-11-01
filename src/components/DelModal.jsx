import React from "react";
import db from "../firebase";

const DelModal = (props) => {
  const handleDel = () => {
    db.collection("todos").doc(props.id).delete();
    props.closeDel();
  };
  return (
    <div className="modal-back" style={{ display: props.style }}>
      <div className="modal">
        <h5>Are you sure you want to delete task? </h5>
        <span>{props.text}</span>
        <div className="buttons">
          <button className="delete-btn" onClick={handleDel}>
            Delete
          </button>
          <button className="cancel-btn" onClick={props.closeDel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelModal;
