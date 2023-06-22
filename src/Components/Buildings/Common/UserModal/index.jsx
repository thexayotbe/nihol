import { Modal, Segmented } from "antd";
import React, { useState } from "react";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import Observing from "./Observing";
import Booking from "./Booking";
import Editing from "./Editing";
const UserModal = () => {
  const [segmentedOption, setSegmentedOption] = useState("Observing");
  const dispatch = useDispatch();
  const { userModalVisibility } = useSelector((state) => state.modal);
  return (
    <Modal
      open={userModalVisibility}
      title="Information about user"
      onCancel={() => dispatch(switchUserModalVisibility())}
      footer={false}>
      <Segmented
        block
        options={["Observing", "Booking", "Edit"]}
        onChange={(e) => setSegmentedOption(e)}
      />
      {segmentedOption === "Observing" ? (
        <Observing />
      ) : segmentedOption === "Booking" ? (
        <Booking />
      ) : (
        <Editing />
      )}
    </Modal>
  );
};

export default UserModal;
