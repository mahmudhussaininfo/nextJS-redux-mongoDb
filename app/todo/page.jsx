"use client";

import { useDispatch, useSelector } from "react-redux";
import { todoSelect } from "./todoSlice";
import { useEffect, useState } from "react";
import { fetchCreateTodos, fetchTodos } from "./todoApi";

const Todopage = () => {
  const { todos } = useSelector(todoSelect);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    priority: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCreateTodos(input));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <h1>Todo Page</h1>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={input.name}
        />
        <input
          type="text"
          placeholder="priority"
          name="priority"
          onChange={handleChange}
          value={input.priority}
        />
        <button type="submit">submit</button>
      </form>
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              <h1>{item.name}</h1>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todopage;
