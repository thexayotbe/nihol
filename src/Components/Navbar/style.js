import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 10%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
`;
Wrapper.Title = styled.h3``;
Wrapper.Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgb(245, 106, 0);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export default Wrapper;
