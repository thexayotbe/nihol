import React from "react";
import { Wrapper } from "./style";
import { EllipsisOutlined } from "@ant-design/icons";
import { useDropDownApi } from "../../../../../Generic/DropDownAPI";
import { Dropdown } from "antd";
const BookingUserCard = () => {
  const { bookingUserModalItems } = useDropDownApi();
  return (
    <Wrapper>
      <Wrapper.TitleSection>
        <Wrapper.Title>Mamajonov Xayotbek</Wrapper.Title>
        <Wrapper.Icon>
          <Dropdown
            menu={{
              items: bookingUserModalItems(),
            }}
            trigger={["click"]}>
            <EllipsisOutlined />
          </Dropdown>
        </Wrapper.Icon>
      </Wrapper.TitleSection>
      <Wrapper.Info>
        <Wrapper.InfoItem>
          <Wrapper.InfoTitle>Start date:</Wrapper.InfoTitle>
          <Wrapper.Date>6/8/2023</Wrapper.Date>
        </Wrapper.InfoItem>
        <Wrapper.InfoItem>
          <Wrapper.InfoTitle>End Date:</Wrapper.InfoTitle>
          <Wrapper.Date>6/22/2023</Wrapper.Date>
        </Wrapper.InfoItem>
      </Wrapper.Info>
    </Wrapper>
  );
};

export default BookingUserCard;
