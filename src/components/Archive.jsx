import React, { useState, useEffect } from "react";
import Message from "./Message";
import { connect } from "react-redux";
import db from "../firebase";

const Archive = (props) => {
  const [archive, setArchive] = useState([]);
  useEffect(() => {
    db.collection("archive")
      .where("userId", "==", props.user)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setArchive(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, [props.user]);

  const comp =
    archive.length === 0 ? (
      <Message text="You currently have no archived task. When you complete a task, click archive to see it it here" />
    ) : (
      archive.map((archive) => (
        <li key={archive.id}>
          {" "}
          <h4>{archive.task}</h4>{" "}
          <p>
            Completed on {archive.date} at {archive.time}
          </p>{" "}
        </li>
      ))
    );
  return <div className="archive">{comp}</div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Archive);
