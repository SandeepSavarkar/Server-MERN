import fetch from "node-fetch";

export const getUsersData = async () => {
  const response = await fetch("https://reqres.in/api/users");
  return response.json();
};
