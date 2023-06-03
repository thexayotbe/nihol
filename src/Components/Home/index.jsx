import React from "react";
import { CardsSection, Content, Title } from "../Generic/styles";
import Card from "../Generic/Card";
import half from "../../assets/images/half.png";
import clock from "../../assets/images/clock.png";
import users from "../../assets/images/users.png";
import building from "../../assets/images/building.png";
import report from "../../assets/images/report.png";
const Home = () => {
  return (
    <Content>
      <Title>Sections:</Title>
      <CardsSection>
        <Card title={"All users"} icon={users} />
        <Card title={"Half time"} icon={half} />
        <Card title={"Time up"} icon={clock} />
        <Card title={"Empty places"} icon={building} />
      </CardsSection>
      <Title>Reports:</Title>
      <CardsSection>
        <Card title={"Report"} icon={report} />
      </CardsSection>
    </Content>
  );
};

export default Home;
