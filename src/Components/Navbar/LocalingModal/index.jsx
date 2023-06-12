import { Modal, Segmented } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLocaleModal } from "../../../redux/modalSlice";
import useLocalingAPI from "../../Generic/LocalingAPI";
import { changelang } from "../../../redux/localeSlice";
import i18 from "i18next";
const LocalingModal = () => {
  const { localingOptions } = useLocalingAPI();
  const dispatch = useDispatch();
  const { localeModalVisibility } = useSelector((state) => state.modal);
  const { lang } = useSelector((state) => state.locale);
  const alterLanguage = () => {
    dispatch(switchLocaleModal());
    i18.changeLanguage(lang);
  };
  return (
    <Modal
      title="Change Language"
      okText="Edit"
      open={localeModalVisibility}
      onOk={alterLanguage}
      onCancel={() => dispatch(switchLocaleModal())}>
      <Segmented
        defaultValue={lang}
        block
        options={localingOptions()}
        onChange={(e) => dispatch(changelang(e))}
      />
    </Modal>
  );
};

export default LocalingModal;
