import { Content } from "../../Generic/styles";
import TitleHandler from "../../Generic/Title";
import { useTranslation } from "react-i18next";
import Maping from "./Mapping";
import { Spin } from "antd";
import useQueryHandler from "../../../hooks/useQuery";

const SecondBuilding = () => {
  const { t } = useTranslation();
  const { isLoading } = useQueryHandler({
    queryKey: "accomodation/2",
    url: "/accomodation/2/room",
  });

  return (
    <Content>
      <TitleHandler title={`2 ${t("building")}`} />
      {isLoading ? <Spin /> : <Maping />}
    </Content>
  );
};
export default SecondBuilding;