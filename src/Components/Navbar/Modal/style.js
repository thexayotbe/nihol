import { Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Wrapper.Form = styled.form`
  margin-top: 30px;
`;
Wrapper.Label = styled.label``;
Wrapper.Input = styled(Input)`
  color: rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.04);
  border-color: #d9d9d9;
  box-shadow: none;
  opacity: 1;
  width: 100%;
  margin-bottom: 35px;
`;
