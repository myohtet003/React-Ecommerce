import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

// eslint-disable-next-line no-unused-vars
export const getData = async(url) => {
    const {data} = await axios.get(`${BASE_URL}${url}`);
    return data;
}