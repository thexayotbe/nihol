import { Dropdown } from "antd";
import { useDropDownApi } from "../Generic/DropDownAPI";
import Wrapper from "./style";
import ModalSettings from "./Modal";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const ModalToggle = () => setActive(!active);
  const { navbarDropDownItems } = useDropDownApi();
  return (
    <Wrapper>
      <Wrapper.Title>NIHOL </Wrapper.Title>
      <Dropdown
        menu={{
          items: navbarDropDownItems,
        }}
        trigger={["click"]}>
        <Wrapper.Avatar>A</Wrapper.Avatar>
      </Dropdown>
      <ModalSettings active={active} />
    </Wrapper>
  );
};

export default Navbar;
