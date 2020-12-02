import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
// import uuid from "uuid";
import { v4 as uuid } from "uuid";
const App = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuid());
  const [item, setItem] = useState("");
  const [editItem, setEditItem] = useState(false);

  const handleChange = e => {
    setItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: id,
      title: item
    };
    setItems([...items, newItem]);
    setItem("");
    setId(uuid());
    setEditItem(false);
  };

  const clearList = () => {
    setItems([]);
  };

  const handleDelete = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  const handleEdit = id => {
    const filteredItems = items.filter(item => item.id !== id);
    const selectedItem = items.find(item => item.id === id);
    setItems(filteredItems);
    setItem(selectedItem.title);
    setEditItem(true);
    setId(id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo input</h3>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <TodoList
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
