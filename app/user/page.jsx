"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCreateUser, fetchUser } from "./userApi";

const UserPage = async () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    gender: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(fetchCreateUser(input));
  // };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <>
      <h1>User Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="gender"
          name="gender"
          value={input.gender}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UserPage;
