import React from "react";
import { Wrapper } from "./style";

const Card = ({ icon, title, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Icon src={icon} />
    </Wrapper>
  );
};

export default Card;
