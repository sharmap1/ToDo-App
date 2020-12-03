import React from "react";

const TodoItem = ({ title, handleDelete, handleEdit }) => {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2"
    style={{backgroundColor:"beige", color:"black", borderRadius:"2rem"}}
    >
      <h6>{title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <i className="fas fa-pen" onClick={handleEdit}></i>
        </span>
        <span className="mx-2 text-danger">
          <i className="fas fa-trash" onClick={handleDelete}></i>
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
