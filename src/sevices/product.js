import axios from "./customize-axios";
const fetchAllProduct = () => {
  return axios.get("//dummyjson.com/products");
};
export { fetchAllProduct };
