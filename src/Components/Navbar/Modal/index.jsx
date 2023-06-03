import React from "react";
import { Wrapper } from "./style";
import { Avatar, Modal } from "antd";

const ModalSettings = () => {
  return (
    <Modal
      title="Profile"
      open={true}
      okText={"Save"}
      okButtonProps={{ disabled: true }}>
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
