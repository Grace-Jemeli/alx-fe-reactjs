import axios from "axios";

export const fetchUserData = async (query) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data.items; // returns an array
};
