import React from "react";
import { Content, CardsSection } from "../../Generic/styles";
import Card from "../../Generic/Card";
import TitleHandler from "../../Generic/Title";
import { luxuryRoomsCardData } from "../../../mock/cardData";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";

const LuxuryRooms = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hasOutlet = useOutlet();
  const navigateHandler = (path) => navigate(`${pathname}${path}`);
  return !hasOutlet ? (
    <Content>
      <TitleHandler title={"Luxury Rooms"} />
      <CardsSection>
        {luxuryRoomsCardData.map(({ id, title, path, icon }) => {
          return (
            <Card
              key={id}
              title={title}
              onClick={() => navigateHandler(path)}
              icon={icon}
            />
          );
        })}
      </CardsSection>
    </Content>
  ) : (
    <Outlet />
  );
};

export default LuxuryRooms;
