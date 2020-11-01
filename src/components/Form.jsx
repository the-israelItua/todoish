import React, { useState } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { expandForm } from "../store/actions";
import { FaSave, FaPlus } from "react-icons/fa";
import db from "../firebase";

const Form = (props) => {
  const [input, setInput] = useState("");
  const dat = new Date();
  const dd = dat.getUTCDate();
  const mm =
    dat.getUTCMonth() + 1 < 10
      ? `0${dat.getUTCMonth() + 1}`
      : dat.getUTCMonth() + 1;
  const yyyy = dat.getUTCFullYear();
  const [date, setDate] = useState(`${yyyy}-${mm}-${dd}`);
  const [disp, setDisp] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    db.collection("todos").add({
      task: input,
      userId: props.user,
      day: date,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    props.expandForm();
  };

  const handleDate = (evt) => {
    setDate(evt.target.value);
    setDisp(!disp);
  };
  const comp = props.expand ? (
    <form>
      <div className="form-top">
        <input
          type="text"
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          placeholder="e.g Go to the market at 11:00"
        />
        <div className="schedule-btn">
          <div className="btn" onClick={() => setDisp(!disp)}>
            <FaSave /> &nbsp; &nbsp;
            {date}
          </div>

          <div
            className="date-modal"
            style={{ display: disp ? "block" : "none" }}
          >
            <input type="date" value={date} onChange={handleDate} />
          </div>
        </div>
      </div>
      <div className="form-bottom">
        <button
          type="submit"
          className="add-btn"
          disabled={!input}
          onClick={handleSubmit}
        >
          Add Task
        </button>
        <button className="cancel-btn" onClick={props.expandForm}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div className="add" onClick={props.expandForm}>
      <FaPlus /> Add Task
    </div>
  );
  return comp;
};

const mapStateToProps = (state) => {
  return {
    expand: state.formExpand,
    user: state.user,
  };
};
export default connect(mapStateToProps, { expandForm })(Form);
