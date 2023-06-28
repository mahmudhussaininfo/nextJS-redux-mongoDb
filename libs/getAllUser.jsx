import { axios } from "axios";

//get Users
const getAllUser = async () => {
  const response = await axios.get("http://localhost:3000/api/user");

  if (!response.data) throw new Error("not found");

  return response.data.users;
};

export default getAllUser;
