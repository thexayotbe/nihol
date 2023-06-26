import { Modal, Segmented } from "antd";
import React, { useState } from "react";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import Observing from "./Observing";
import Booking from "./Booking";
import Editing from "./Editing";
import UserEmptyUI from "./EmptyUI/UserEmptyUI";
const UserModal = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [segmentedOption, setSegmentedOption] = useState("Observing");
  const { userModalVisibility } = useSelector((state) => state.modal);
  console.log(selectedUser);
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
        selectedUser?.clienteValue?.userID ? (
          <Observing />
        ) : (
          <UserEmptyUI />
        )
      ) : segmentedOption === "Booking" ? (
        <Booking />
      ) : selectedUser?.clienteValue?.userID ? (
        <Editing />
      ) : (
        <UserEmptyUI />
      )}
    </Modal>
  );
};

export default UserModal;
