import React from "react";
import { CardsSection, Content } from "../Generic/styles";
import Card from "../Generic/Card";
import report from "../../assets/images/report.png";
import { useNavigate } from "react-router-dom";
import TitleHandler from "../Generic/Title";
import { homeCardData } from "../../mock/cardData";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateHandler = (path) => navigate(path);
  return (
    <Content>
      <TitleHandler title={t("home_title")} showBackIcon={false} />
      <CardsSection>
        {homeCardData.map(({ id, title, path, icon }) => {
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
      <TitleHandler title={t("home_report_title")} showBackIcon={false} />
      <CardsSection>
        <Card
          title={t("home_report")}
          icon={report}
          onClick={() => navigate("/report")}
        />
      </CardsSection>
    </Content>
  );
};

export default Home;
