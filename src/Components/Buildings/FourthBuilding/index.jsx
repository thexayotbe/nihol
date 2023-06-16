import { Content } from "antd/es/layout/layout";
import TitleHandler from "../../Generic/Title";
import { useTranslation } from "react-i18next";
import useAxios from "../../../hooks/useAxios";
import Maping from "../SecondBuilding/Maping";
import { useQuery } from "react-query";

const FourtBuilding = () => {
  const { t } = useTranslation();
  const axios = useAxios();

  const { isLoading } = useQuery("accomodation/4", () => {
    return axios({
      url: "/accomodation/4/room",
    });
  });

  return (
    <Content>
      <TitleHandler title={`4 ${t("building")}`} />
    </Content>
  );
};

export default FourtBuilding;
