import { Dropdown } from "antd";
import { useDropDownApi } from "../Generic/DropDownAPI";
import Wrapper from "./style";
import ModalSettings from "./Modal";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { switchLocaleModal, switchProfileModal } from "../../redux/modalSlice";
import LocalingModal from "./LocalingModal";
const Navbar = () => {
  const dispatch = useDispatch();
  const { navbarDropDownItems } = useDropDownApi();
  const settingClickHandler = () => {
    dispatch(switchProfileModal());
  };
  const localeClickHandler = () => {
    dispatch(switchLocaleModal());
  };
  return (
    <>
      <ModalSettings />
      <LocalingModal />
      <Wrapper>
        <Wrapper.Title>NIHOL </Wrapper.Title>
        <Dropdown
          menu={{
            items: navbarDropDownItems({
              settingClickHandler,
              localeClickHandler,
            }),
          }}
          trigger={["click"]}>
          <Wrapper.Avatar>A</Wrapper.Avatar>
        </Dropdown>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
