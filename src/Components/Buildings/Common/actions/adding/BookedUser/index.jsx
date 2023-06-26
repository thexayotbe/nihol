import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchBookedModalVisibility } from "../../../../../../redux/modalSlice";
import { FormWrapper } from "../AddUser/style";
import { bookUserData } from "../../../../../../mock/addModal";

const BookedUserAddModal = () => {
  const { bookedUserModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const mapHandler = ({ id, name, label, element, isVoucher = false }) => {
    return (
      <FormWrapper.Item
        key={id}
        name={name}
        label={label}
        rules={[
          {
            required: true,
          },
        ]}>
        {element}
      </FormWrapper.Item>
    );
  };
  return (
    <Modal
      open={bookedUserModalVisibility}
      title="Add Boking"
      onCancel={() => dispatch(switchBookedModalVisibility())}
      okText={"Add"}>
      <FormWrapper layout="vertical">
        {bookUserData.map((value) => mapHandler(value))}
      </FormWrapper>
    </Modal>
  );
};

export default BookedUserAddModal;
