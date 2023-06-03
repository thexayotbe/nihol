import styled from "styled-components";

export const DropDownItem = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ danger }) => (danger ? "red" : "#000")};
`;
export const DropDownLabel = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;
export const Title = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: rgb(0, 0, 0);
  margin: 40px;
`;
export const CardsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 700px;
  margin: 20px auto;
  column-gap: 150px;
  row-gap: 60px;
`;
