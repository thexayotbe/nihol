import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  switchAddModalVisibility,
  switchEmptyModalVisibility,
} from "../../../../redux/modalSlice";

const ModalInfo = () => {
  const { emptyRoomModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const addModalHandler = () => {
    dispatch(switchAddModalVisibility());
    dispatch(switchEmptyModalVisibility());
  };
  const warning = () => {
    Modal.warning({
      onOk: () => addModalHandler(),
      okCancel: true,
      okText: "Add",
      cancelText: "Order",
      title: "Empty place",
      content:
        "This place is empty. Click the «Add» button to add a new user. Or click to the «Book» button to book this place.",
    });
  };

  return emptyRoomModalVisibility && warning();
};

export default ModalInfo;
