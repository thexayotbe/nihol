import React from "react";
import { Wrapper } from "./style";
import { Avatar, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchProfileModal } from "../../../redux/modalSlice";
import { useTranslation } from "react-i18next";

const ModalSettings = () => {
  const { profileModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <Modal
      title={t("settings.title")}
      open={profileModalVisibility}
      cancelText={t("cancel")}
      okText={t("settings.save")}
      okButtonProps={{ disabled: true }}
      onCancel={() => dispatch(switchProfileModal())}>
      <Wrapper>
        <Avatar style={{ backgroundColor: "#f56a00" }} size={80}>
          A
        </Avatar>
        <Wrapper.Form>
          <Wrapper.Label>{t("settings.name")}</Wrapper.Label>
          <Wrapper.Input disabled />
          <Wrapper.Label>{t("settings.surname")}</Wrapper.Label>
          <Wrapper.Input disabled />
        </Wrapper.Form>
      </Wrapper>
    </Modal>
  );
};

export default ModalSettings;
