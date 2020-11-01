import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

const TodoPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <TodoList />
    </>
  );
};

export default TodoPage;
