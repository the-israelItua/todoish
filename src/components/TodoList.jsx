import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { expandForm } from "../store/actions";
import db from "../firebase";
import Inbox from "./Inbox";
import Today from "./Today";
import Upcoming from "./Upcoming";
import Archive from "./Archive";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    db.collection("todos")
      .where("userId", "==", props.user)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, [props.user]);

  const isPastDate = (value) => {
    return new Date() > new Date(value);
  };

  const isFutureDate = (value) => {
    return new Date() < new Date(value);
  };

  const current =
    todos.length === 0
      ? []
      : todos.filter(
          (todo) =>
            todo.day ===
            `${new Date().getFullYear()}-${
              new Date().getUTCMonth() + 1 < 10
                ? `0${new Date().getUTCMonth() + 1}`
                : new Date().getUTCMonth() + 1
            }-${new Date().getUTCDate()}`
        );

  const overdues =
    todos.length === 0 ? [] : todos.filter((todo) => isPastDate(todo.day));

  const upcoming =
    todos.length === 0 ? [] : todos.filter((todo) => isFutureDate(todo.day));

  switch (props.comp) {
    case "today":
      return <Today current={current} overdue={overdues} />;
    case "upcoming":
      return <Upcoming upcoming={upcoming} overdue={overdues} />;
    case "archives":
      return <Archive />;
    default:
      return <Inbox todos={todos} />;
  }
};
const mapStateToProps = (state) => {
  return {
    comp: state.comp,
    expand: state.formExpand,
    user: state.user,
  };
};

export default connect(mapStateToProps, { expandForm })(TodoList);
