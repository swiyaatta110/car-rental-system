import axios from "axios";
import {
  CAR_API_END_POINT,
  PAYMENT_API_END_POINT,
  RENTAL_API_END_POINT,
  USER_API_END_POINT,
} from "../config/constant.js";


export const signup = async (data) => {
  try {
    let response = await axios.post(`${USER_API_END_POINT}/register`,data, {
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

export const login = async (data) => {
  try {
    let response = await axios.post(`${USER_API_END_POINT}/login`, data, {
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

export const logout = async () => {
  try {
    await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
  } catch (error) {
    return {
      suc: false,
      msg: error.message,
    };
  }
};

export const getCarsData = async () => {
  try {
    let response = await axios.get(`${CAR_API_END_POINT}/allcars`, {
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

export const specificCarData = async (id) => {
  try {
    let response = await axios.get(`${CAR_API_END_POINT}/${id}`, {
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

export const rentCar = async (carid, days) => {
  try {
    let response = await axios.post(
      `${RENTAL_API_END_POINT}/newrental`,
      { carid, days },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return {
      suc: false,
      msg: error.message,
    };
  }
};

export const allRentals = async () => {
  try {
    let response = await axios.get(`${RENTAL_API_END_POINT}/allrentals`, {
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

export const cancelRental = async (id) => {
  try {
    let response = await axios.delete(`${RENTAL_API_END_POINT}/${id}`, {
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

export const getPaymentHistory = async () => {
  try {
    let response = await axios.get(`${PAYMENT_API_END_POINT}/all/pay`, {
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

export const makePayment = async (id) => {
  try {
    let response = await axios.post(
      `${PAYMENT_API_END_POINT}/makepayment`,
      { rentalId: id },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return {
      suc: false,
      msg: error.message,
    };
  }
};
