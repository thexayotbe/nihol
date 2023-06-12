import React from "react";
import { CardsSection, Content } from "../../Generic/styles";
import Card from "../../Generic/Card";
import TitleHandler from "../../Generic/Title";
import { Outlet, useOutlet } from "react-router-dom";

const OrdinaryRooms = () => {
  const hasOutlet = useOutlet();
  return !hasOutlet ? (
    <Content>
      <TitleHandler title={"Ordinary rooms"} />
      <CardsSection>
        <Card
          title="2 Building"
          // onClick={() => navigate("/building-control/ordinary-rooms/2")}
        />
        <Card
          title="4 Building"
          // onClick={() => navigate("/building-control/ordinary-rooms/4")}
        />
        <Card
          title="6 Building"
          // onClick={() => navigate("/building-control/ordinary-rooms/6")}
        />
      </CardsSection>
    </Content>
  ) : (
    <Outlet />
  );
};

export default OrdinaryRooms;
