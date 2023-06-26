import React from "react";
import BookedEmptyUI from "../EmptyUI/BookedEmptyUI";
import { Wrapper } from "../style";
import { Button } from "antd";
import { useSelector } from "react-redux";

const Booking = () => {
  const { selectedUser } = useSelector((state) => state.user);
  return (
    <>
      {!selectedUser?.cleienteValue?.isBooked && <BookedEmptyUI />}
      <Wrapper.Buttons>
        <Button>Cancel</Button>
        <Button type="primary">Add</Button>
      </Wrapper.Buttons>
    </>
  );
};

export default Booking;
