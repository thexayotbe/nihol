import { Content } from "../../Generic/styles";
import TitleHandler from "../../Generic/Title";
import { useTranslation } from "react-i18next";
import Maping from "./Maping";
import useAxios from "../../../hooks/useAxios";
import { Spin } from "antd";
import { useQuery } from "react-query";

const SecondBuilding = () => {
  const { t } = useTranslation();
  const axios = useAxios();

  const { isLoading } = useQuery(
    "accomodation/2",
    () => {
      return axios({
        url: "/accomodation/2/room",
      });
    },
    {
      refetchOnWindowFocusChange: false,
    }
  );

  return (
    <Content>
      <TitleHandler title={`2 ${t("building")}`} />
      {isLoading ? <Spin /> : <Maping />}
    </Content>
  );
};
export default SecondBuilding;
