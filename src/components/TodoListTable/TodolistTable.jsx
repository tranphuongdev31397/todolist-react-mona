import React from "react";
import TodolistItem from "./TodolistItem/TodolistItem";
import { useSelector } from "react-redux";

export default function TodolistTable() {
  const todoList = useSelector((state) => state.todoListReducer.todoList);
  const getIdx = (id) => {
    let idx = todoList.findIndex((list) => {
      return list.id === id;
    });
    return idx;
  };
  return (
    <div className="container">
      <div className="row">
        {todoList.map((todoItem,idx) => {
          return (
            <TodolistItem
              todoItem={todoItem}
              key={todoItem.id}
              getIdx={getIdx}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
}
