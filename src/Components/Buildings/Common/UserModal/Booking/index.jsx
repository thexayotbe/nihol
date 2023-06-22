import React from "react";
import BookedEmptyUI from "../EmptyUI/BookedEmptyUI";
import { Wrapper } from "../style";
import { Button } from "antd";

const Booking = () => {
  return (
    <div>
      <BookedEmptyUI />
      <Wrapper.Buttons>
        <Button>Cancel</Button>
        <Button type="primary">Add</Button>
      </Wrapper.Buttons>
    </div>
  );
};

export default Booking;
