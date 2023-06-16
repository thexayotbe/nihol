import { Tag } from "antd";
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
  align-items: center;
  justify-content: center;
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
  margin-left: ${({ ml }) => ml && ml};
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

export const MainCardWrapper = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
MainCardWrapper.CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;
  margin-top: 40px;
`;

MainCardWrapper.RoomsWrapper = styled.div`
  width: 290px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

MainCardWrapper.RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(147, 149, 150);
  border-radius: 12px;
`;
MainCardWrapper.Title = styled.div`
  margin-top: 10px;
`;
MainCardWrapper.ClientsWrapper = styled.div`
  margin: 10px auto;
  width: 120px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;
MainCardWrapper.Room = styled(Tag)`
  position: relative;
  margin: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;
