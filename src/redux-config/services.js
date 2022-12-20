import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    'Content-Type': 'application/json'
},
});

export const photosAPI = async () => {
  const { data } = await instance.get("/photos");
  return data;
};
