import { Result } from "antd";
import React from "react";

const BookedEmptyUI = () => {
  return <Result status={404} extra="There is no any booked places"></Result>;
};

export default BookedEmptyUI;
