import React from "react";
import BookedEmptyUI from "../EmptyUI/BookedEmptyUI";
import { Wrapper, BookingSection } from "../style";
import { Button } from "antd";
import { useSelector } from "react-redux";
import BookingUserCard from "./Card";

const Booking = () => {
  const { selectedUser } = useSelector((state) => state.user);
  return (
    <>
      <BookingSection>
        {/* {!selectedUser?.cleienteValue?.isBooked && <BookedEmptyUI />} */}
        <BookingUserCard />
      </BookingSection>
      <Wrapper.Buttons>
        <Button>Cancel</Button>
        <Button type="primary">Add</Button>
      </Wrapper.Buttons>
    </>
  );
};

export default Booking;
