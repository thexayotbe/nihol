import React from "react";
import { notification } from "antd";
const notifier = (status) => {
  switch (status) {
    case 400:
      return notification.error({
        message: "Password lenghth must be 8 ~ 10!",
      });
    case 409:
      return notification.error({
        message: "User not found!",
      });
    case "empty":
      return notification.error({
        message: "Please fill all fields!",
      });
    default:
      return;
  }
};

const useNotificationAPI = () => {
  return notifier;
};

export default useNotificationAPI;
