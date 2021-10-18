import React from "react";
import Header from "./Header/Header";
import TodolistTable from "./TodoListTable/TodolistTable";
export default function TodoList(props) {
  return (
    <>
      <Header />
      <TodolistTable />
    </>
  );
}
