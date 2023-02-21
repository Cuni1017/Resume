import React, { useState, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import produce from "immer";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  // 不管回傳什麼一定會是新的state
  // => reducer一定要回傳值，否則state會是undefined
  // reducer裡不應該有async await, Promise, request或是其他在reducer外定義的數值=>隨時有可能被改
  // 不要直接去更新stateObject => state.count = state.count + 1; return state; => 錯誤的
  // 正確的

  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    // return {
    //   ...state,
    //   count: state.count + 1,
    // };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return state;
    // return {
    //   ...state,
    //   count: state.count + state.valueToAdd,
    //   valueToAdd: 0,
    // };

    default:
      throw new Error("unexpected action type: " + action.type);
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // 當使用dispatch function時，React會傳dispatch裡傳的參數到reducer
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">count:{state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addNumber">Add a lot!</label>
        <input
          type="number"
          id="addNumber"
          value={state.valueToAdd || ""} //是0的話就不顯示
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
