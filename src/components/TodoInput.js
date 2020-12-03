import React from "react";

const TodoInput = ({ item, handleChange, handleSubmit, editItem }) => {
  return (
    <div className="card card-body my-3" style={{backgroundColor:"beige", borderRadius:"1rem"}}>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
               <i className="fa fa-book"></i> 
              {/* <i className="fas fa-book"></i> */}
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Add a Todo item"
            value={item}
            onChange={handleChange}
          ></input>
        </div>
        <button
          type="submit"
          className={
            editItem
              ? "btn btn-block btn-success mt-3"
              : "btn btn-block btn-primary mt-3"
          }
          style={{borderRadius:"0.5rem"}} 
        >
          {editItem ? "Edit item" : "Add item"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;