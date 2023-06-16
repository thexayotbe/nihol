import React from "react";
import { Content, CardsSection } from "../../Generic/styles";
import Card from "../../Generic/Card";
import TitleHandler from "../../Generic/Title";
import { luxuryRoomsCardData } from "../../../mock/cardData";
import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LuxuryRooms = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hasOutlet = useOutlet();
  const navigateHandler = (path) => navigate(`${pathname}${path}`);
  return !hasOutlet ? (
    <Content>
      <TitleHandler title={t("luxury_rooms")} />
      <CardsSection>
        {luxuryRoomsCardData.map(({ id, title, path, icon }) => {
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

export default LuxuryRooms;
