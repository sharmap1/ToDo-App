import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Card } from "react-bootstrap";

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
    <main className="App">
        <Container>
          <Row>
            <Col md={{ span: 12, offset: 0 }}>
            </Col>

            <Col md={{ span: 6, offset: 0 }}>
              <Card.Body className="sub-card">
                <Card.Header as="h5">My TODO</Card.Header>
                <Card.Body></Card.Body>
    {/* <main className="App"> */}
    {/* <div className="container"  */}
    {/* style={{backgroundColor:"grey" , color:"white"}} */}
    {/* > */}
      {/* <div className="row"> */}
        {/* <div className="col-10 mx-auto col-md-8 mt-4"> */}
          {/* <h3 className="text-capitalize text-center">My Todo .. </h3> */}
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
              </Card.Body>
            </Col>
            </Row>
        </Container>
   </main>
  );
};

export default App;
