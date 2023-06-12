import React from "react";
import { Wrapper } from "./style";
import { Avatar, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchProfileModal } from "../../../redux/modalSlice";

const ModalSettings = () => {
  const { profileModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <Modal
      title="Profile"
      open={profileModalVisibility}
      okText={"Save"}
      okButtonProps={{ disabled: true }}
      onCancel={() => dispatch(switchProfileModal())}>
      <Wrapper>
        <Avatar style={{ backgroundColor: "#f56a00" }} size={80}>
          A
        </Avatar>
        <Wrapper.Form>
          <Wrapper.Label>Name:</Wrapper.Label>
          <Wrapper.Input disabled />
          <Wrapper.Label>Surname:</Wrapper.Label>
          <Wrapper.Input disabled />
        </Wrapper.Form>
      </Wrapper>
    </Modal>
  );
};

export default ModalSettings;
