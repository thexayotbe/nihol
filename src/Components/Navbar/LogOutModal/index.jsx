import { Modal } from "antd";
import { useSignOut } from "react-auth-kit";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const LogOutModal = () => {
  const { t } = useTranslation();
  const signOut = useSignOut();
  const navigate = useNavigate();
  const { logOutModalVisibility } = useSelector((state) => state.modal);
  const logOut = () => {
    signOut();
    navigate("/login");
  };
  const warning = () => {
    Modal.warning({
      onOk: logOut,
      okCancel: true,
      okText: t("logOut"),
      cancelText: t("cancel"),
      okButtonProps: { danger: true, type: "primary" },
      title: t("warning"),
      content: t("message"),
    });
  };
  return logOutModalVisibility && warning();
};

export default LogOutModal;
