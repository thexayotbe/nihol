import { Result } from "antd";
import React from "react";

const UserEmptyUI = () => {
  return (
    <Result
      status={404}
      extra="Room is empty. You can add new user by clicking - Add"
    />
  );
};

export default UserEmptyUI;
