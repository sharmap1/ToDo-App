import React from "react";

import TodoItem from "./TodoItem";
import { Card } from "react-bootstrap";

const TodoList = ({ items, clearList, handleDelete, handleEdit }) => {
  return (
    <ul className="list-group my-5" >
      {/* <h3 className="text-capitalize text-center">My list</h3> */}
      <Card.Header as="h5">My list</Card.Header>
      {items.map(item => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        );
      })}
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
        style={{borderRadius:"0.5rem"}} 
      >
        Clear list
      </button>
    </ul>
  );
};

export default TodoList;
