import React from "react";
import { CardsSection, Content } from "../../Generic/styles";
import Card from "../../Generic/Card";
import TitleHandler from "../../Generic/Title";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { ordinaryRoomsCardData } from "../../../mock/cardData";
import { useTranslation } from "react-i18next";
const OrdinaryRooms = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hasOutlet = useOutlet();
  const navigateHandler = (path) => navigate(`${pathname}${path}`);
  return !hasOutlet ? (
    <Content>
      <TitleHandler title={t("ordinary_rooms")} />
      <CardsSection>
        {ordinaryRoomsCardData.map(({ id, title, path, icon }) => {
          return (
            <Card
              key={id}
              title={`${title} ${t("building")}`}
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

export default OrdinaryRooms;
