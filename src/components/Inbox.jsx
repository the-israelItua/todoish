import React from "react";
import Todo from "./Todo";
import Form from "./Form";
import Message from "./Message";

const Inbox = (props) => {
  const todoList =
    props.todos.length === 0 ? (
      <Message text="You currently have no task in your Inbox" />
    ) : (
      props.todos.map((todo) => <Todo key={todo.id} todo={todo} />)
    );
  return (
    <div className="inbox-list">
      <h2 className="header"> Inbox</h2>
      <div className="todos">
        <ul>{todoList}</ul>
      </div>
      <Form />
    </div>
  );
};

export default Inbox;
