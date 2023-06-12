import React from "react";
import { CardsSection, Content } from "../Generic/styles";
import Card from "../Generic/Card";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import TitleHandler from "../Generic/Title";
import { emptyPlacesCardData } from "../../mock/cardData";

const EmptyPlaces = () => {
  const { pathname } = useLocation();
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  const navigateHandler = (path) => navigate(`  ${pathname}${path}`);
  return !hasOutlet ? (
    <Content>
      <TitleHandler title={"EmptyPlaces"} />
      <CardsSection>
        {emptyPlacesCardData.map(({ id, title, path }) => {
          return (
            <Card
              key={id}
              title={title}
              onClick={() => navigateHandler(path)}
            />
          );
        })}
      </CardsSection>
    </Content>
  ) : (
    <Outlet />
  );
};

export default EmptyPlaces;
