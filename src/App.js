import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { incrementAsync, decrementAsync } from "./actions";
import "./App.css";

function TodoList() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const _add = () => {
    dispatch(incrementAsync());
    console.log(useSelector);
  };

  const _substract = () => {
    dispatch(decrementAsync());
  };

  const state = useSelector((state) => state);

  return (
    <div className="App App-header">
      <div>Counter: {counter}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button className="button button1" onClick={_substract}>
          Substract
        </button>
        <button className="button button2" onClick={_add}>
          Add
        </button>
      </div>
      <div>
        <h4>{state.counter}</h4>
      </div>
    </div>
  );
}

export default TodoList;
