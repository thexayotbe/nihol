import TitleHandler from "../../Generic/Title";
import { useTranslation } from "react-i18next";
import Maping from "./Mapping";
import { Spin } from "antd";
import { Content } from "../../Generic/styles";
import useQueryHandler from "../../../hooks/useQuery";

const FourtBuilding = () => {
  const { t } = useTranslation();
  const { isLoading } = useQueryHandler({
    queryKey: "accomodation/4",
    url: "/accomodation/4/room",
  });
  return (
    <Content>
      <TitleHandler title={`4 ${t("building")}`} />
      {isLoading ? <Spin /> : <Maping />}
    </Content>
  );
};

export default FourtBuilding;
