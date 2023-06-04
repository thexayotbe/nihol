import axios from "axios";
import React from "react";

const useAxios = () => {
  return async ({ url, method = "GET", body, headers }) => {
    return await axios({
      method,
      url: `${process.env.REACT_APP_MAIN_URL}${url}`,
      data: {
        ...body,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Allow-Control-Origin": true,
        ...headers,
      },
    });
  };
};

export default useAxios;
