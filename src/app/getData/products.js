import axios from "axios";

const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:8000/data");
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;
