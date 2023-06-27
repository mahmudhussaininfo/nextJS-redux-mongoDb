"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dec, Inc, selectCount } from "./counterSlice";

export default function Counter() {
  const { count } = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter Page</h2>
      <hr />
      <hr />
      <h1>{count}</h1>
      <hr />
      <button onClick={() => dispatch(Inc())}>+++</button>
      <button onClick={() => dispatch(Dec())}>---</button>
    </>
  );
}
