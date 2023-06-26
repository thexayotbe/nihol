import { useDispatch } from "react-redux";
import { MainCardWrapper } from "../../../Generic/styles";
import { Modal } from "antd";
import {
  switchAddModalVisibility,
  switchBookedModalVisibility,
} from "../../../../redux/modalSlice";
const EmptyRoom = () => {
  const { confirm } = Modal;
  const dispatch = useDispatch();
  const clickHandler = () => {
    return confirm({
      title: "Empty place",
      content:
        "This place is empty. Click the «Add» button to add a new user. Or click to the «Book» button to book this place.",
      okText: "Add",
      cancelText: "Book",
      closable: true,
      onOk: () => {
        dispatch(switchAddModalVisibility());
        Modal.destroyAll();
      },
      onCancel: () => {
        dispatch(switchBookedModalVisibility());
        Modal.destroyAll();
      },
    });
  };
  return <MainCardWrapper.Room color="green" onClick={clickHandler} />;
};

export default EmptyRoom;
