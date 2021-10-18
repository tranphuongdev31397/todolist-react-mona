import { React, useState } from "react";
import { useDispatch } from "react-redux";
import './CreateTodo.css'
import { actAddAList } from "../../module/actions";

export default function CreateTodo() {
  const [todoList, setTodoList] = useState({
    task: "",
    openItems: [],
    id: 0,
  });
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setTodoList((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setTodoList({ ...todoList, id: ++todoList.id });
    dispatch(actAddAList(todoList));
  };
  return (
    <div>
      <form className="header__form">
        <input type="text" name="task" onChange={handleOnchange} className="p-1 mx-1"/>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleOnSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
}
