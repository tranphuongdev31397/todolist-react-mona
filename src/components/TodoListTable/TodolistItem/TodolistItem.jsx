import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  FileAddOutlined,
  DeleteOutlined,
  CloseOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import {
  actAddAItem,
  actDeleteAItem,
  actRemoveAList,
  actRenameList,
} from "../../module/actions";
import { Checkbox } from "antd";
import "./TodolistItem.css";

export default function TodolistItem(props) {
  const [isHidden, setisHidden] = useState(false);
  const [isCheck, setisCheck] = useState(null);
  const [isShowInput, setisShowInput] = useState(true);
  const { task, openItems, id } = props.todoItem;
  const getIdx = props.getIdx;

  //onChange Antd
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setisCheck(e.target.checked);
  };
  
  const handleOnSave = (e) => {
    e.preventDefault();
    let taskName = document.querySelector(`.taskName-${id}`).value;
    dispatch(actRenameList(getIdx(id), taskName));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let value = document.querySelector(`.inputItem-${id}`).value;
    dispatch(actAddAItem(getIdx(id), value));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const listener = (event) => {
      //Press Enter to Submit Form Add openItem
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        if (!isShowInput) {
          console.log("submit");
          document.querySelector(`.btnSubmit-${id}`).click();
        }
        event.preventDefault();
      }
      //Press Esc to dismiss add openItem
      if (event.code === "Escape") {
        setisShowInput(true);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [isShowInput]);

  return (
    <div className="col-4 p-2">
      <div className="card">
        <div
          className={`card-header myCard__header bg-primary text-white ${
            isHidden && "d-none"
          } `}
        >
          <div
            className="myCard__title text-left"
            onClick={() => {
              setisHidden(true);
            }}
          >
            <h5>{task}</h5>
          </div>
          <div className="myCard__action">
            <FileAddOutlined
              className="myCard__icon"
              onClick={() => {
                setisShowInput(!isShowInput);
              }}
            />

            <DeleteOutlined
              className="myCard__icon"
              onClick={() => {
                dispatch(actRemoveAList(getIdx(id)));
              }}
            />
          </div>
        </div>
        <form
          className={`card-header myCard__header bg-primary text-white d-none ${
            isHidden && "d-flex"
          } `}
        >
          <div className="myCard__title text-left">
            <input
              type="text"
              className={`w-100 taskName-${id}`}
              name="taskName"
            />
          </div>
          <div className="myCard__action">
          
              <SaveOutlined className="myCard__icon"  onClick={(e) => {
                setisHidden(false);
                handleOnSave(e);
              }}
              type="submit"/>
         
          </div>
        </form>
        <div className="card-body myCard__body">
          <form className={`${isShowInput && "d-none"}`} id="formItem">
            <input
              id="inputItem"
              className={`w-100 inputItem-${id}`}
              type="text"
              name="item"
            />
            <button
              type="submit"
              className={`btn btn-primary d-none btnSubmit-${id}`}
              onClick={handleOnSubmit}
            >
              Submit
            </button>
          </form>
          {openItems.map((item, index) => {
            console.log(item);
            return (
              <div className="task__list" key={index}>
                <Checkbox onChange={onChange}></Checkbox>
                <p className={`text-left text__design w-70 ${isCheck && "text__decor"} `}>
                  {item}
                </p>
                <CloseOutlined
                  className="myCard__icon"
                  onClick={() => {
                    dispatch(actDeleteAItem(getIdx(id), index));
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
