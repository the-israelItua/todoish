import React from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import Form from "./Form";
import Message from "./Message";

const Upcoming = (props) => {
  const upcomingList =
    props.upcoming.length !== 0 ? (
      props.upcoming.map((upcoming) => (
        <Todo key={upcoming.id} todo={upcoming} />
      ))
    ) : (
      <Message text="You have no upcoming task" />
    );
  const overdueList =
    props.overdue.length !== 0 ? (
      props.overdue.map((overdue) => <Todo key={overdue.id} todo={overdue} />)
    ) : (
      <Message text="You have no overdue task" />
    );

  return (
    <div className="todolist">
      <h2>Upcoming</h2>
      <div className="overdue">
        <div className="header">
          <h5> Overdue</h5>
          <Link to="!#">Reschedule</Link>
        </div>
        <ul className="overdue-todos">{overdueList}</ul>
      </div>
      <div className="upcoming">
        <div className="header">
          <h5>Upcoming Tasks</h5>
        </div>
        <ul>{upcomingList}</ul>
        <Form />
      </div>
    </div>
  );
};

export default Upcoming;
