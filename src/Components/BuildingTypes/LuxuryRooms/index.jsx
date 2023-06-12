import React from "react";
import { Content, CardsSection } from "../../Generic/styles";
import Card from "../../Generic/Card";
import TitleHandler from "../../Generic/Title";

const LuxuryRooms = () => {
  return (
    <Content>
      <TitleHandler title={"Luxury Rooms"} />
      <CardsSection>
        <Card title="3 Building" />
        <Card title="5 Building" />
      </CardsSection>
    </Content>
  );
};

export default LuxuryRooms;
