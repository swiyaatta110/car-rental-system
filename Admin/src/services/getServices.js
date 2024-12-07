import axios from "axios";
import { ADMIN_API_END_POINT } from "../config/constant.js";

export const signupAdmin = async (data) => {
  try {
    let response = await axios.post(`${ADMIN_API_END_POINT}/register`,data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return {
      suc: false,
      msg: error.message,
    };
  }
};

export const loginAdmin = async (data) => {
  try {
    let response = await axios.post(`${ADMIN_API_END_POINT}/login`,data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return {
      suc: false,
      msg: error.message,
    };
  }
};

