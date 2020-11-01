import React from "react";
import Todo from "./Todo";
import Form from "./Form";
import Message from "./Message";

const Today = (props) => {
  const currentList =
    props.current.length === 0 ? (
      <Message text="No Task For today" />
    ) : (
      props.current.map((curr) => <Todo key={curr.id} todo={curr} />)
    );

  return (
    <div className="todolist">
      <div className="current">
        <div className="header">
          <h5>Today - MON jul 13</h5>
        </div>
        <ul>{currentList}</ul>
        <Form />
      </div>
    </div>
  );
};

export default Today;
