import React from "react";
import { CardsSection, Content } from "../Generic/styles";
import Card from "../Generic/Card";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import TitleHandler from "../Generic/Title";
import { emptyPlacesCardData } from "../../mock/cardData";
import { useTranslation } from "react-i18next";

const EmptyPlaces = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  const navigateHandler = (path) => navigate(`${pathname}${path}`);
  return !hasOutlet ? (
    <Content>
      <TitleHandler title={t("buildingTitle")} />
      <CardsSection>
        {emptyPlacesCardData.map(({ id, title, path, icon }) => {
          return (
            <Card
              key={id}
              title={t(title)}
              icon={icon}
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
