import axios from "axios";
import users from "../reducers/users";

export const fetchUsers = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  return users;
};

export const createUser = (newUser) => {
  let existingUsers = JSON.parse(localStorage.getItem("users"));
  let users = localStorage.setItem(
    "users",
    JSON.stringify(existingUsers ? [...existingUsers, newUser] : [newUser])
  );
  return users;
};
