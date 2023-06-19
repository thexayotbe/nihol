import { Modal, Segmented } from "antd";
import { FormWrapper } from "./style";
import { useState } from "react";
import { addModalData } from "../../../mock/addModal";
import { formToJSON } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { switchAddModalVisibility } from "../../../redux/modalSlice";
const AddModal = () => {
  const { addModalVisibility } = useSelector((state) => state.modal);
  const [type, setType] = useState("Ordinary");
  const dispatch = useDispatch();
  const close = () => dispatch(switchAddModalVisibility());
  const mapHandler = ({ id, name, label, element, isVoucher = false }) => {
    return (
      ((type === "Ordinary" && !isVoucher) || type === "Voucher") && (
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
      )
    );
  };

  return (
    <Modal title="Add new user" open={addModalVisibility} onCancel={close}>
      <Segmented
        options={["Ordinary", "Voucher"]}
        block={true}
        onChange={(e) => setType(e)}
      />
      <FormWrapper layout="vertical">
        {addModalData.map((value) => mapHandler(value))}
      </FormWrapper>
    </Modal>
  );
};

export default AddModal;
