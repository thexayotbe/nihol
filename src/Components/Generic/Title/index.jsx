import React from "react";
import { Title } from "../styles";
import { LeftOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const TitleWrapper = styled.div`
  width: fit-content;
  display: flex;
  grid-gap: 10px;
  margin: auto;
  font-size: 34px;
`;
const TitleHandler = ({ title, showBackIcon = true }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <TitleWrapper>
      {showBackIcon && (
        <LeftOutlined onClick={goBack} style={{ cursor: "pointer" }} />
      )}
      <Title ml="10px">{title}</Title>
    </TitleWrapper>
  );
};

export default TitleHandler;
